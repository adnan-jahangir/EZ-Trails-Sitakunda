const express = require('express');
const router = express.Router();
const {
  createCustomRequest,
  getCustomRequests,
  updateCustomRequest,
} = require('../controllers/customReqController');
const { protect } = require('../middleware/authMiddleware');
const { validate, customRequestSchema } = require('../middleware/validate');

router.post('/', validate(customRequestSchema), createCustomRequest);
router.get('/', protect, getCustomRequests);
router.patch('/:id', protect, updateCustomRequest);

module.exports = router;
