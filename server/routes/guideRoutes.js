const express = require('express');
const router = express.Router();
const { getGuides, createGuide, updateGuide, deleteGuide } = require('../controllers/guideController');
const { protect } = require('../middleware/authMiddleware');
const { validate, guideSchema } = require('../middleware/validate');

router.get('/', getGuides);
router.post('/', protect, validate(guideSchema), createGuide);
router.put('/:id', protect, updateGuide);
router.delete('/:id', protect, deleteGuide);

module.exports = router;
