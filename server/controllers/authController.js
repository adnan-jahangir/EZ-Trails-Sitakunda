const AdminUser = require('../models/AdminUser');
const jwt = require('jsonwebtoken');

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

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both email and password' });
    }

    const admin = await AdminUser.findOne({ email: email.toLowerCase().trim() });

    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (!admin.isActive) {
      return res.status(403).json({ success: false, message: 'Your admin account has been deactivated' });
    }

    admin.lastLogin = new Date();
    await admin.save();

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
