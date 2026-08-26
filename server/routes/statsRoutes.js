const express = require('express');
const router = express.Router();
const { getAdminStats } = require('../controllers/statsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAdminStats);

module.exports = router;
