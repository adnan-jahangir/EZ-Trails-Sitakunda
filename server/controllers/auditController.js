const AuditLog = require('../models/AuditLog');
const { escapeRegex } = require('../utils/securityUtils');

// @desc    Get paginated audit logs (Admin)
// @route   GET /api/admin/audit-logs
// @access  Private (SuperAdmin, Manager)
const getAuditLogs = async (req, res, next) => {
  try {
    const { action, adminEmail, targetModel, search, page = 1, limit = 50 } = req.query;

    const query = {};

    if (action && typeof action === 'string' && action !== 'all') {
      query.action = action;
    }

    if (adminEmail && typeof adminEmail === 'string' && adminEmail !== 'all') {
      query.adminEmail = adminEmail.toLowerCase().trim();
    }

    if (targetModel && typeof targetModel === 'string' && targetModel !== 'all') {
      query.targetModel = targetModel;
    }

    if (search && typeof search === 'string') {
      const safeSearch = escapeRegex(search.trim().slice(0, 100));
      query.$or = [
        { action: { $regex: safeSearch, $options: 'i' } },
        { adminName: { $regex: safeSearch, $options: 'i' } },
        { adminEmail: { $regex: safeSearch, $options: 'i' } },
        { targetId: { $regex: safeSearch, $options: 'i' } },
        { description: { $regex: safeSearch, $options: 'i' } },
      ];
    }

    const safeLimit = Math.min(Math.max(Number(limit) || 50, 1), 200);
    const safePage = Math.max(Number(page) || 1, 1);
    const skip = (safePage - 1) * safeLimit;

    const [logs, total] = await Promise.all([
      AuditLog.find(query).sort({ createdAt: -1 }).skip(skip).limit(safeLimit),
      AuditLog.countDocuments(query),
    ]);

    res.json({
      success: true,
      total,
      page: safePage,
      pages: Math.ceil(total / safeLimit),
      data: logs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get audit stats & summary (Admin)
// @route   GET /api/admin/audit-logs/stats
// @access  Private (SuperAdmin, Manager)
const getAuditStats = async (req, res, next) => {
  try {
    const last24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [totalLogs, last24hCount, recentActions] = await Promise.all([
      AuditLog.countDocuments(),
      AuditLog.countDocuments({ createdAt: { $gte: last24h } }),
      AuditLog.aggregate([
        { $group: { _id: '$action', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 8 },
      ]),
    ]);

    res.json({
      success: true,
      data: {
        totalLogs,
        last24hCount,
        recentActions,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAuditLogs, getAuditStats };
