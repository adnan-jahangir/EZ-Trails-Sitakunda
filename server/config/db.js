const mongoose = require('mongoose');

// Configure mongoose behavior
mongoose.set('bufferCommands', false); // Fail fast if not connected instead of hanging

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tourstk_db';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
      connectTimeoutMS: 4000,
    });
    console.log(`[Database] ✅ MongoDB Connected Successfully to: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[Database] ⚠️ MongoDB connection standby: ${error.message}`);
    console.log(`[Database Tip] To connect cloud MongoDB, paste your MongoDB Atlas URI in server/.env (e.g. MONGO_URI=mongodb+srv://...)`);
    return false;
  }
};

module.exports = connectDB;
