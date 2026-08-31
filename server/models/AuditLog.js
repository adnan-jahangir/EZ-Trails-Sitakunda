const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AdminUser',
    },
    adminName: {
      type: String,
      default: 'System',
    },
    adminEmail: {
      type: String,
      default: 'system@tourstk.com',
      index: true,
    },
    adminRole: {
      type: String,
      default: 'system',
    },
    action: {
      type: String,
      required: true,
      index: true, // e.g. LOGIN_SUCCESS, UPDATE_BOOKING_STATUS, DELETE_BOOKING, CREATE_PACKAGE, UPDATE_PRICE
    },
    targetModel: {
      type: String, // e.g. Booking, Package, Destination, AdminUser
      index: true,
    },
    targetId: {
      type: String, // e.g. STK-2026-9779 or ObjectId
      index: true,
    },
    description: {
      type: String,
    },
    changes: {
      type: mongoose.Schema.Types.Mixed, // e.g. { before: { status: 'Pending' }, after: { status: 'Approved' } }
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for efficient filtering by action, model, and date
auditLogSchema.index({ createdAt: -1 });
auditLogSchema.index({ action: 1, createdAt: -1 });

module.exports = mongoose.model('AuditLog', auditLogSchema);
