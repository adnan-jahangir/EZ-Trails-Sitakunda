const express = require('express');
const router = express.Router();
const {
  createBooking,
  trackBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { validate, bookingSchema } = require('../middleware/validate');

// Public Customer endpoints
router.post('/', validate(bookingSchema), createBooking);
router.get('/track', trackBooking);
router.get('/track/:identifier', trackBooking);

// Protected Admin endpoints
router.get('/', protect, getBookings);
router.get('/:id', protect, getBookingById);
router.put('/:id', protect, authorize('superadmin', 'manager'), updateBookingStatus);
router.patch('/:id', protect, authorize('superadmin', 'manager'), updateBookingStatus);
router.patch('/:id/status', protect, authorize('superadmin', 'manager'), updateBookingStatus);
router.delete('/:id', protect, authorize('superadmin'), deleteBooking);

module.exports = router;

