const express = require('express');
const router = express.Router();
const { getDestinations, createDestination, updateDestination, deleteDestination } = require('../controllers/destinationController');
const { protect } = require('../middleware/authMiddleware');
const { validate, destinationSchema } = require('../middleware/validate');
const { cacheMiddleware } = require('../middleware/cacheMiddleware');

router.get('/', cacheMiddleware('destinations', 300), getDestinations);
router.post('/', protect, validate(destinationSchema), createDestination);
router.put('/:id', protect, updateDestination);
router.delete('/:id', protect, deleteDestination);

module.exports = router;
