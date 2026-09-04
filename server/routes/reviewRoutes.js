const express = require('express');
const router = express.Router();
const { getReviews, createReview, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');
const { validate, reviewSchema } = require('../middleware/validate');
const { upload } = require('../config/cloudinary');

router.get('/', getReviews);
router.post('/', upload.array('images', 4), validate(reviewSchema), createReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
