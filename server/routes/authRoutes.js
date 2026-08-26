const express = require('express');
const router = express.Router();
const { loginAdmin, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { validate, loginSchema } = require('../middleware/validate');

router.post('/login', validate(loginSchema), loginAdmin);
router.get('/me', protect, getMe);

module.exports = router;
