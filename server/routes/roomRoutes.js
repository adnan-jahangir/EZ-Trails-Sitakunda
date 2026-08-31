const express = require('express');
const router = express.Router();
const {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Public endpoints
router.get('/', getRooms);
router.get('/:id', getRoomById);

// Admin endpoints
router.post('/', protect, authorize('superadmin', 'manager'), createRoom);
router.put('/:id', protect, authorize('superadmin', 'manager'), updateRoom);
router.patch('/:id', protect, authorize('superadmin', 'manager'), updateRoom);
router.delete('/:id', protect, authorize('superadmin'), deleteRoom);

module.exports = router;
