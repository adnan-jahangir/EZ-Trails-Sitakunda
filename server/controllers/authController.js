const AdminUser = require('../models/AdminUser');
const jwt = require('jsonwebtoken');
const { logAction } = require('../services/auditService');

// Generate JWT token helper
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'tourstk_enterprise_super_secret_jwt_key_2026',
    { expiresIn: '30d' }
  );
};

// @desc    Admin login
// @route   POST /api/auth/login
// @access  Public
const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ success: false, message: 'Please provide valid email and password' });
    }

    const cleanEmail = email.toLowerCase().trim();
    if (!cleanEmail || cleanEmail.length > 100 || password.length > 200) {
      return res.status(400).json({ success: false, message: 'Invalid credentials format' });
    }

    const admin = await AdminUser.findOne({ email: cleanEmail });

    if (!admin || !(await admin.matchPassword(password))) {
      // Record failed login in audit log
      logAction({
        req,
        action: 'LOGIN_FAILED',
        targetModel: 'AdminUser',
        targetId: cleanEmail,
        description: `Failed login attempt for email: ${cleanEmail}`,
      });
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (!admin.isActive) {
      logAction({
        req,
        admin,
        action: 'LOGIN_BLOCKED',
        targetModel: 'AdminUser',
        targetId: admin._id,
        description: `Deactivated admin attempted login: ${admin.email}`,
      });
      return res.status(403).json({ success: false, message: 'Your admin account has been deactivated' });
    }

    admin.lastLogin = new Date();
    await admin.save();

    // Record successful login in audit log
    logAction({
      req,
      admin,
      action: 'LOGIN_SUCCESS',
      targetModel: 'AdminUser',
      targetId: admin._id,
      description: `Admin ${admin.name} (${admin.role}) logged in successfully`,
    });

    res.json({
      success: true,
      data: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id),
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private (Admin)
const getMe = async (req, res) => {
  res.json({
    success: true,
    data: req.admin,
  });
};

module.exports = { loginAdmin, getMe };
