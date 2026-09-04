const Review = require('../models/Review');
const { isValidObjectId } = require('../utils/securityUtils');
const { uploadToCloudinary, deleteFromCloudinary, isCloudinaryConfigured } = require('../config/cloudinary');
const path = require('path');
const fs = require('fs');

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) { next(error); }
};

const createReview = async (req, res, next) => {
  try {
    const { customerName, tourPackage, reviewText, rating } = req.body;
    const images = [];

    // Parse any existing image items sent as JSON/string
    if (req.body.images) {
      try {
        const parsed = typeof req.body.images === 'string' ? JSON.parse(req.body.images) : req.body.images;
        if (Array.isArray(parsed)) {
          parsed.forEach(img => {
            if (typeof img === 'string') images.push({ url: img, publicId: '' });
            else if (img && img.url) images.push(img);
          });
        }
      } catch (e) {}
    }

    // Process uploaded file buffers (via Multer memoryStorage)
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        if (isCloudinaryConfigured()) {
          try {
            const cloudRes = await uploadToCloudinary(file.buffer, 'tourstk/reviews');
            images.push({ url: cloudRes.url, publicId: cloudRes.publicId });
            continue;
          } catch (cloudErr) {
            console.warn('[Cloudinary Review Upload Error, falling back to local]', cloudErr.message);
          }
        }

        // Local storage fallback
        const ext = path.extname(file.originalname) || '.jpg';
        const filename = `rev-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}${ext}`;
        const targetDir = path.join(__dirname, '../../public/images/reviews');
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        const targetPath = path.join(targetDir, filename);
        fs.writeFileSync(targetPath, file.buffer);

        images.push({
          url: `images/reviews/${filename}`,
          publicId: filename,
        });
      }
    }

    const review = await Review.create({
      customerName,
      tourPackage: tourPackage || 'Sitakunda Adventure Tour',
      rating: Number(rating) || 5,
      reviewText,
      images,
      isApproved: true,
    });

    res.status(201).json({ success: true, message: 'Review added successfully', data: review });
  } catch (error) { next(error); }
};

const deleteReview = async (req, res, next) => {
  try {
    let review = null;
    if (isValidObjectId(req.params.id)) {
      review = await Review.findById(req.params.id);
    }
    if (!review) {
      review = await Review.findOne({ customerName: req.params.id });
    }
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });

    // Clean up associated images if present
    if (review.images && review.images.length > 0) {
      for (const img of review.images) {
        if (img.publicId) {
          if (isCloudinaryConfigured()) {
            deleteFromCloudinary(img.publicId).catch(() => {});
          } else {
            const localFile = path.join(__dirname, '../../public/images/reviews', img.publicId);
            if (fs.existsSync(localFile)) {
              try { fs.unlinkSync(localFile); } catch (e) {}
            }
          }
        }
      }
    }

    await review.deleteOne();
    res.json({ success: true, message: 'Review deleted successfully' });
  } catch (error) { next(error); }
};

module.exports = { getReviews, createReview, deleteReview };
