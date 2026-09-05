const Booking = require('../models/Booking');
const emailQueue = require('../services/emailQueue');
const { escapeRegex, isValidObjectId } = require('../utils/securityUtils');
const { logAction } = require('../services/auditService');

// @desc    Create a new booking (Customer)
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res, next) => {
  try {
    const {
      customerName,
      name,
      phone,
      mobile,
      email,
      emergencyContact,
      address,
      packageId,
      packageName,
      travelDate,
      date,
      returnDate,
      guests,
      travelers,
      pickupLocation,
      pickup,
      selectedSpots,
      addOns,
      roomPreference,
      pricing,
      totalPrice,
      total,
      payment,
      specialRequests,
    } = req.body;

    const finalName = (customerName || name || '').trim();
    const finalPhone = (phone || mobile || '').trim();
    const finalDate = (travelDate || date || '').trim();
    const finalGrandTotal = Number(pricing?.grandTotal || totalPrice || total || 0);

    if (!finalName || !finalPhone || !finalDate) {
      return res.status(400).json({
        success: false,
        message: 'Missing required booking fields (Name, Phone, Travel Date)',
      });
    }

    // Normalized Pricing Object
    const finalPricing = {
      basePrice: Number(pricing?.basePrice || 0),
      addOnsTotal: Number(pricing?.addOnsTotal || 0),
      discount: Number(pricing?.discount || 0),
      grandTotal: finalGrandTotal > 0 ? finalGrandTotal : 1499,
    };

    // Normalized Guests
    const guestCount = Number(guests?.total || travelers || 1);
    const finalGuests = {
      adults: Number(guests?.adults || guestCount || 1),
      children: Number(guests?.children || 0),
      total: guestCount,
    };

    // Generate unique human readable Booking ID
    let uniqueId = Booking.generateBookingId();
    // Ensure uniqueness
    let exists = await Booking.findOne({ bookingId: uniqueId });
    while (exists) {
      uniqueId = Booking.generateBookingId();
      exists = await Booking.findOne({ bookingId: uniqueId });
    }

    const newBooking = await Booking.create({
      bookingId: uniqueId,
      customerName: finalName,
      phone: finalPhone,
      email: email || '',
      emergencyContact: emergencyContact || '',
      address: address || '',
      packageId: packageId || 'custom',
      packageName: packageName || 'Custom Sitakunda Tour',
      travelDate: finalDate,
      returnDate: returnDate || '',
      guests: finalGuests,
      pickupLocation: pickupLocation || pickup || 'Sitakunda Bus Station',
      selectedSpots: selectedSpots || [],
      addOns: addOns || [],
      roomPreference: roomPreference || {
        roomType: 'Standard Eco Cottage',
        bedType: '1 Queen Double Bed',
        roomCount: 1,
        upgradeFee: 0,
      },
      pricing: finalPricing,
      payment: payment || {
        method: 'bkash',
        paymentStatus: 'Pending Verification',
        paidAmount: 0,
      },
      status: 'Pending',
      specialRequests: specialRequests || '',
    });

    // 📬 Background Asynchronous Email / Notification Queue Dispatch
    try {
      if (process.env.VERCEL) {
        await Promise.allSettled([
          emailQueue.sendBookingConfirmation(newBooking),
          emailQueue.sendAdminNewBookingAlert(newBooking),
        ]);
      } else {
        emailQueue.sendBookingConfirmation(newBooking);
        emailQueue.sendAdminNewBookingAlert(newBooking);
      }
    } catch (e) {
      console.warn('[Queue Warning] Email dispatch failed silently:', e.message);
    }

    res.status(201).json({
      success: true,
      message: 'Booking submitted successfully! Our tour coordinator will contact you shortly.',
      data: newBooking,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Track booking by Booking ID or Phone (Customer)
// @route   GET /api/bookings/track/:identifier
// @access  Public
const trackBooking = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const queryParam = req.query.code || req.query.phone || req.query.id || req.query.identifier;
    const cleanId = (identifier || queryParam || '').trim();
    if (!cleanId || cleanId.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Invalid search identifier. Please provide a Booking ID or Phone Number.',
      });
    }

    const safeCleanId = escapeRegex(cleanId);
    const phoneDigits = cleanId.replace(/[^0-9]/g, '');
    const last8Digits = phoneDigits.length >= 8 ? phoneDigits.slice(-8) : phoneDigits;

    const queryOr = [
      { bookingId: { $regex: new RegExp(`^${safeCleanId}$`, 'i') } },
      { phone: { $regex: new RegExp(safeCleanId, 'i') } },
    ];

    if (last8Digits && last8Digits.length >= 6) {
      queryOr.push({ phone: { $regex: new RegExp(escapeRegex(last8Digits), 'i') } });
    }

    // Search by exact Booking ID or Phone Number
    const bookings = await Booking.find({ $or: queryOr }).sort({ createdAt: -1 });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No booking found matching "${cleanId}". Please verify your Booking ID or Phone number.`,
      });
    }

    res.json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all bookings (Admin)
// @route   GET /api/bookings
// @access  Private (Admin)
const getBookings = async (req, res, next) => {
  try {
    const { status, paymentStatus, search, page = 1, limit = 50 } = req.query;

    const query = {};

    if (status && status !== 'all' && typeof status === 'string') {
      query.status = status;
    }

    if (paymentStatus && paymentStatus !== 'all' && typeof paymentStatus === 'string') {
      query['payment.paymentStatus'] = paymentStatus;
    }

    if (search && typeof search === 'string') {
      const safeSearch = escapeRegex(search.trim().slice(0, 100));
      query.$or = [
        { bookingId: { $regex: safeSearch, $options: 'i' } },
        { customerName: { $regex: safeSearch, $options: 'i' } },
        { phone: { $regex: safeSearch, $options: 'i' } },
        { packageName: { $regex: safeSearch, $options: 'i' } },
      ];
    }

    const safeLimit = Math.min(Math.max(Number(limit) || 50, 1), 200);
    const safePage = Math.max(Number(page) || 1, 1);
    const skip = (safePage - 1) * safeLimit;

    const [bookings, total] = await Promise.all([
      Booking.find(query).sort({ createdAt: -1 }).skip(skip).limit(safeLimit),
      Booking.countDocuments(query),
    ]);

    res.json({
      success: true,
      total,
      page: safePage,
      pages: Math.ceil(total / safeLimit),
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

// Helper to find booking by MongoDB _id or business bookingId (e.g. STK-2026-9779)
const findBookingFlexible = async (identifier) => {
  if (!identifier || typeof identifier !== 'string') return null;
  if (isValidObjectId(identifier)) {
    const byId = await Booking.findById(identifier);
    if (byId) return byId;
  }
  return await Booking.findOne({ bookingId: identifier.trim() });
};

// @desc    Get single booking by internal ID or booking code (Admin)
// @route   GET /api/bookings/:id
// @access  Private (Admin)
const getBookingById = async (req, res, next) => {
  try {
    const booking = await findBookingFlexible(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

// @desc    Update booking status & payment & assigned guide (Admin)
// @route   PATCH /api/bookings/:id/status
// @access  Private (Admin)
const updateBookingStatus = async (req, res, next) => {
  try {
    const { status, paymentStatus, paidAmount, trxId, adminNotes, notes, assignedGuide, assignedVehicle } = req.body;

    const booking = await findBookingFlexible(req.params.id);

    if (!booking) {
      return res.status(404).json({ success: false, message: `Booking "${req.params.id}" not found` });
    }

    if (!booking.payment) {
      booking.payment = {
        method: 'bkash',
        paymentStatus: 'Pending Verification',
        paidAmount: 0,
      };
    }

    const previousSnapshot = {
      status: booking.status,
      paymentStatus: booking.payment?.paymentStatus,
      paidAmount: booking.payment?.paidAmount,
      trxId: booking.payment?.trxId,
      assignedGuide: booking.assignedGuide,
      assignedVehicle: booking.assignedVehicle,
    };

    if (status) {
      const statusMap = {
        'pending': 'Pending',
        'confirmed': 'Confirmed',
        'in-progress': 'In-Progress',
        'completed': 'Completed',
        'cancelled': 'Cancelled',
        'canceled': 'Cancelled',
      };
      booking.status = statusMap[String(status).toLowerCase()] || status;
    }
    if (paymentStatus) {
      const payMap = {
        'unpaid': 'Unpaid',
        'pending': 'Pending Verification',
        'pending verification': 'Pending Verification',
        'partial': 'Partial',
        'paid': 'Paid',
        'refunded': 'Refunded',
      };
      booking.payment.paymentStatus = payMap[String(paymentStatus).toLowerCase()] || paymentStatus;
    }
    if (paidAmount !== undefined) booking.payment.paidAmount = Number(paidAmount);
    if (trxId !== undefined) booking.payment.trxId = trxId;
    const finalNotes = adminNotes !== undefined ? adminNotes : notes;
    if (finalNotes !== undefined) booking.adminNotes = finalNotes;
    if (assignedGuide !== undefined) booking.assignedGuide = assignedGuide;
    if (assignedVehicle !== undefined) booking.assignedVehicle = assignedVehicle;

    const updated = await booking.save();

    // 📬 Dispatch Customer Notification Email on Status Change
    try {
      if (updated.email) {
        if (updated.status === 'Confirmed' && previousSnapshot.status !== 'Confirmed') {
          if (process.env.VERCEL) {
            await emailQueue.sendCustomerBookingConfirmed(updated);
          } else {
            emailQueue.sendCustomerBookingConfirmed(updated);
          }
        } else if (updated.status === 'Cancelled' && previousSnapshot.status !== 'Cancelled') {
          if (process.env.VERCEL) {
            await emailQueue.sendCustomerBookingCancelled(updated, updated.adminNotes);
          } else {
            emailQueue.sendCustomerBookingCancelled(updated, updated.adminNotes);
          }
        }
      }
    } catch (e) {
      console.warn('[Email Queue Warning] Failed sending customer status update email:', e.message);
    }

    // Record audit log
    logAction({
      req,
      action: 'UPDATE_BOOKING_STATUS',
      targetModel: 'Booking',
      targetId: updated.bookingId,
      description: `Updated booking ${updated.bookingId}: Status -> ${updated.status}, Payment -> ${updated.payment.paymentStatus}`,
      changes: {
        before: previousSnapshot,
        after: {
          status: updated.status,
          paymentStatus: updated.payment?.paymentStatus,
          paidAmount: updated.payment?.paidAmount,
          trxId: updated.payment?.trxId,
          assignedGuide: updated.assignedGuide,
          assignedVehicle: updated.assignedVehicle,
        },
      },
    });

    res.json({
      success: true,
      message: `Booking ${updated.bookingId} updated successfully`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete booking (Admin)
// @route   DELETE /api/bookings/:id
// @access  Private (SuperAdmin)
const deleteBooking = async (req, res, next) => {
  try {
    const booking = await findBookingFlexible(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    await Booking.findByIdAndDelete(booking._id);

    // Record audit log
    logAction({
      req,
      action: 'DELETE_BOOKING',
      targetModel: 'Booking',
      targetId: booking.bookingId,
      description: `Deleted booking ${booking.bookingId} (${booking.customerName})`,
      changes: {
        deletedData: {
          bookingId: booking.bookingId,
          customerName: booking.customerName,
          phone: booking.phone,
          grandTotal: booking.pricing?.grandTotal,
        },
      },
    });

    res.json({ success: true, message: `Booking ${booking.bookingId} deleted successfully` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  trackBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
};
