const mongoose = require('mongoose');

// Configure mongoose behavior
mongoose.set('bufferCommands', false); // Fail fast if not connected instead of hanging

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    return true;
  }
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tourstk_db';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`[Database] ✅ MongoDB Connected Successfully to: ${conn.connection.host}`);
    ensureAdminUser().catch(() => {});
    return true;
  } catch (error) {
    console.warn(`[Database] ⚠️ MongoDB connection standby: ${error.message}`);
    console.log(`[Database Tip] To connect cloud MongoDB, paste your MongoDB Atlas URI in server/.env (e.g. MONGO_URI=mongodb+srv://...)`);
    return false;
  }
};

const ensureAdminUser = async () => {
  try {
    const AdminUser = require('../models/AdminUser');
    const adminEmail = 'admin@tourstk.com';
    const admin = await AdminUser.findOne({ email: adminEmail });
    if (!admin) {
      await AdminUser.create({
        name: 'EZ Trails Sitakunda Admin',
        email: adminEmail,
        password: 'admin123456',
        role: 'superadmin',
      });
      console.log(`[Database] 🔑 Default Admin initialized: ${adminEmail}`);
    }
  } catch (e) {
    // Non-blocking
  }
};

module.exports = connectDB;
