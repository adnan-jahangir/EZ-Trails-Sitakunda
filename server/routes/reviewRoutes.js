const express = require('express');
const router = express.Router();
const { getReviews, createReview, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');
const { validate, reviewSchema } = require('../middleware/validate');

router.get('/', getReviews);
router.post('/', protect, validate(reviewSchema), createReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
