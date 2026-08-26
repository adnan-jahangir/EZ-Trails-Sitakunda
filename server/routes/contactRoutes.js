const express = require('express');
const router = express.Router();
const {
  submitContactMessage,
  getContactMessages,
} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');
const { validate, contactSchema } = require('../middleware/validate');

router.post('/', validate(contactSchema), submitContactMessage);
router.get('/', protect, getContactMessages);

module.exports = router;
