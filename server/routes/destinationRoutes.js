const express = require('express');
const router = express.Router();
const { getDestinations, createDestination, updateDestination, deleteDestination } = require('../controllers/destinationController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { validate, destinationSchema } = require('../middleware/validate');
const { cacheMiddleware } = require('../middleware/cacheMiddleware');

router.get('/', cacheMiddleware('destinations', 300), getDestinations);
router.post('/', protect, authorize('superadmin', 'manager'), validate(destinationSchema), createDestination);
router.put('/:id', protect, authorize('superadmin', 'manager'), updateDestination);
router.delete('/:id', protect, authorize('superadmin'), deleteDestination);

module.exports = router;
