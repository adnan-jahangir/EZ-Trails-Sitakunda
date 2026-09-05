const express = require('express');
const router = express.Router();
const {
  createCustomRequest,
  getCustomRequests,
  updateCustomRequest,
  deleteCustomRequest,
} = require('../controllers/customReqController');
const { protect } = require('../middleware/authMiddleware');
const { validate, customRequestSchema } = require('../middleware/validate');

router.post('/', validate(customRequestSchema), createCustomRequest);
router.get('/', protect, getCustomRequests);
router.patch('/:id', protect, updateCustomRequest);
router.delete('/:id', protect, deleteCustomRequest);

module.exports = router;
