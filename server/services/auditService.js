const AuditLog = require('../models/AuditLog');

/**
 * Log an administrative action to the AuditLog collection asynchronously.
 *
 * @param {Object} params
 * @param {Object} [params.req] - Express request object (extracts user info, IP, User-Agent)
 * @param {Object} [params.admin] - Custom admin object if req.admin not populated
 * @param {string} params.action - Action identifier (e.g. UPDATE_BOOKING_STATUS)
 * @param {string} [params.targetModel] - Target entity model (e.g. Booking)
 * @param {string} [params.targetId] - Target entity identifier
 * @param {string} [params.description] - Human-readable description
 * @param {Object} [params.changes] - Before/After payload changes
 */
const logAction = async ({ req, admin, action, targetModel, targetId, description, changes }) => {
  try {
    const actor = admin || (req && req.admin) || {};
    
    // Extract client IP address safely
    let ipAddress = 'unknown';
    let userAgent = 'unknown';
    if (req) {
      ipAddress =
        req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
        req.socket?.remoteAddress ||
        req.ip ||
        'unknown';
      userAgent = req.headers['user-agent'] || 'unknown';
    }

    await AuditLog.create({
      adminId: actor._id || actor.id || null,
      adminName: actor.name || 'System / Guest',
      adminEmail: actor.email || 'system@tourstk.com',
      adminRole: actor.role || 'system',
      action,
      targetModel,
      targetId: String(targetId || ''),
      description: description || `${actor.name || 'Admin'} performed ${action}`,
      changes,
      ipAddress,
      userAgent,
    });
  } catch (error) {
    // Non-blocking: log warning to console so business transactions are never aborted
    console.warn('[AuditLog Warning] Failed to persist audit log:', error.message);
  }
};

module.exports = { logAction };
