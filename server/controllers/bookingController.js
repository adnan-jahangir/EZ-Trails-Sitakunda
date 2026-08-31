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
      phone,
      email,
      emergencyContact,
      address,
      packageId,
      packageName,
      travelDate,
      returnDate,
      guests,
      pickupLocation,
      selectedSpots,
      addOns,
      pricing,
      payment,
      specialRequests,
    } = req.body;

    if (!customerName || !phone || !travelDate || !pricing?.grandTotal) {
      return res.status(400).json({
        success: false,
        message: 'Missing required booking fields (Name, Phone, Travel Date, Price)',
      });
    }

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
      customerName,
      phone,
      email,
      emergencyContact,
      address,
      packageId: packageId || 'custom',
      packageName: packageName || 'Custom Sitakunda Tour',
      travelDate,
      returnDate,
      guests: guests || { adults: 1, children: 0, total: 1 },
      pickupLocation,
      selectedSpots: selectedSpots || [],
      addOns: addOns || [],
      pricing,
      payment: payment || {
        method: 'bkash',
        paymentStatus: 'Unpaid',
        paidAmount: 0,
      },
      status: 'Pending',
      specialRequests,
    });

    // 📬 Background Asynchronous Email / Notification Queue Dispatch
    try {
      emailQueue.sendBookingConfirmation(newBooking);
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
    const cleanId = (identifier || '').trim();
    if (!cleanId || cleanId.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Invalid search identifier',
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
    const { status, paymentStatus, paidAmount, trxId, adminNotes, assignedGuide, assignedVehicle } = req.body;

    const booking = await findBookingFlexible(req.params.id);

    if (!booking) {
      return res.status(404).json({ success: false, message: `Booking "${req.params.id}" not found` });
    }

    const previousSnapshot = {
      status: booking.status,
      paymentStatus: booking.payment?.paymentStatus,
      paidAmount: booking.payment?.paidAmount,
      trxId: booking.payment?.trxId,
      assignedGuide: booking.assignedGuide,
      assignedVehicle: booking.assignedVehicle,
    };

    if (status) booking.status = status;
    if (paymentStatus) booking.payment.paymentStatus = paymentStatus;
    if (paidAmount !== undefined) booking.payment.paidAmount = Number(paidAmount);
    if (trxId !== undefined) booking.payment.trxId = trxId;
    if (adminNotes !== undefined) booking.adminNotes = adminNotes;
    if (assignedGuide !== undefined) booking.assignedGuide = assignedGuide;
    if (assignedVehicle !== undefined) booking.assignedVehicle = assignedVehicle;

    const updated = await booking.save();

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
