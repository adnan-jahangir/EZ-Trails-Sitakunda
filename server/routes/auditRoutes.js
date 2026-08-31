const express = require('express');
const router = express.Router();
const { getAuditLogs, getAuditStats } = require('../controllers/auditController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Only SuperAdmin and Manager can view audit logs
router.get('/', protect, authorize('superadmin', 'manager'), getAuditLogs);
router.get('/stats', protect, authorize('superadmin', 'manager'), getAuditStats);

module.exports = router;
