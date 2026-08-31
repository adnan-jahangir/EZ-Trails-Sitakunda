const express = require('express');
const router = express.Router();
const XLSX = require('xlsx');
const { protect, authorize } = require('../middleware/authMiddleware');
const { logAction } = require('../services/auditService');
const Booking = require('../models/Booking');

// @desc    Export all bookings as Excel (.xlsx) file
// @route   GET /api/export/bookings
// @access  Private (SuperAdmin, Manager)
router.get('/bookings', protect, authorize('superadmin', 'manager'), async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).lean();

    const rows = bookings.map((b, i) => ({
      'SL': i + 1,
      'Booking ID': b.bookingId,
      'Customer Name': b.customerName,
      'Phone': b.phone,
      'Email': b.email || '',
      'Package': b.packageName,
      'Room Category': b.roomPreference?.roomType || 'Standard Eco Cottage',
      'Bed Setup': b.roomPreference?.bedType || '1 Queen Double Bed',
      'Room Count': b.roomPreference?.roomCount || 1,
      'Room Features': (b.roomPreference?.features || []).join(', ') || 'Attached Bath, Nature Breeze, 24/7 Water',
      'Room Upgrade Fee (BDT)': b.roomPreference?.upgradeFee || 0,
      'Travel Date': b.travelDate,
      'Adults': b.guests?.adults || 1,
      'Children': b.guests?.children || 0,
      'Pickup Location': b.pickupLocation || '',
      'Base Price (BDT)': b.pricing?.basePrice || 0,
      'Add-Ons (BDT)': b.pricing?.addOnsTotal || 0,
      'Discount (BDT)': b.pricing?.discount || 0,
      'Grand Total (BDT)': b.pricing?.grandTotal || 0,
      'Payment Method': b.payment?.method || '',
      'Transaction ID': b.payment?.trxId || '',
      'Payment Status': b.payment?.paymentStatus || 'Unpaid',
      'Booking Status': b.status,
      'Special Requests': b.specialRequests || '',
      'Admin Notes': b.adminNotes || '',
      'Created At': b.createdAt ? new Date(b.createdAt).toLocaleString('en-BD') : '',
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);

    // Auto-width columns
    const colWidths = Object.keys(rows[0] || {}).map(key => ({
      wch: Math.max(key.length + 2, ...rows.map(r => String(r[key] || '').length + 2)),
    }));
    ws['!cols'] = colWidths;

    XLSX.utils.book_append_sheet(wb, ws, 'Bookings');

    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    const filename = `Tourstk_Bookings_${new Date().toISOString().split('T')[0]}.xlsx`;

    // Record audit log for data export
    logAction({
      req,
      action: 'EXPORT_BOOKINGS_EXCEL',
      targetModel: 'Booking',
      description: `Exported ${bookings.length} booking records to Excel (${filename})`,
    });

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
