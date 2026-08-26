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
const { protect } = require('../middleware/authMiddleware');
const { validate, bookingSchema } = require('../middleware/validate');

// Public Customer endpoints
router.post('/', validate(bookingSchema), createBooking);
router.get('/track/:identifier', trackBooking);

// Protected Admin endpoints
router.get('/', protect, getBookings);
router.get('/:id', protect, getBookingById);
router.patch('/:id/status', protect, updateBookingStatus);
router.delete('/:id', protect, deleteBooking);

module.exports = router;
