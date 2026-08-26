const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route Handlers
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const packageRoutes = require('./routes/packageRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const guideRoutes = require('./routes/guideRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const customReqRoutes = require('./routes/customReqRoutes');
const contactRoutes = require('./routes/contactRoutes');
const statsRoutes = require('./routes/statsRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const exportRoutes = require('./routes/exportRoutes');

const app = express();

// =================== SECURITY MIDDLEWARE ===================

// 1. Helmet — sets 11+ security HTTP headers (XSS, clickjacking, sniffing protection)
app.use(
  helmet({
    contentSecurityPolicy: false, // Disabled for CDN-served Tailwind/Fonts
    crossOriginEmbedderPolicy: false,
  })
);

// 2. CORS — Cross-Origin Resource Sharing
app.use(cors());

// 3. Rate Limiting — Global: 200 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
});
app.use('/api/', globalLimiter);

// 4. Strict Auth Rate Limiter — Login: 10 attempts per 15 minutes per IP
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many login attempts. Please wait 15 minutes before trying again.',
  },
});

// =================== BODY PARSING ===================
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Serve Frontend Static files from the parent directory
const clientPath = path.join(__dirname, '..');
app.use(express.static(clientPath));

// =================== API ROUTES ===================
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/custom-requests', customReqRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin/stats', statsRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/export', exportRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'EZ Trails Sitakunda (Tourstk) API Server',
    security: {
      helmet: '✅ Active',
      rateLimiting: '✅ Active (200 req/15min, Login: 10/15min)',
      cors: '✅ Active',
      zodValidation: '✅ Active on all POST/PUT routes',
      cloudinary: require('./config/cloudinary').isCloudinaryConfigured() ? '✅ Connected' : '⚠️ Not configured',
    },
    database: require('mongoose').connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
});

// 404 Fallback Handler
app.use((req, res) => {
  if (req.accepts('html')) {
    res.status(404).sendFile(path.join(clientPath, '404.html'));
  } else {
    res.status(404).json({ success: false, message: 'Resource not found' });
  }
});

// Central Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server after connecting to MongoDB
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Tourstk API Server is running on port: ${PORT}`);
    console.log(`🛡️  Security: Helmet ✅ | Rate Limiter ✅ | CORS ✅ | Zod ✅`);
    console.log(`🌐 Local Web & API: http://localhost:${PORT}`);
    console.log(`📋 Admin Dashboard: http://localhost:${PORT}/admin/index.html`);
    console.log(`🩺 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`====================================================`);
  });
};

startServer();

module.exports = app;
