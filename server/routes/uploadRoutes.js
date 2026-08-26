const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { upload, uploadToCloudinary, deleteFromCloudinary, isCloudinaryConfigured } = require('../config/cloudinary');

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
// @access  Private (Admin)
router.post('/', protect, upload.single('image'), async (req, res, next) => {
  try {
    if (!isCloudinaryConfigured()) {
      return res.status(503).json({
        success: false,
        message: 'Cloudinary is not configured. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET to your .env file.',
      });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file provided' });
    }

    const folder = req.body.folder || 'tourstk';
    const result = await uploadToCloudinary(req.file.buffer, folder);

    res.status(201).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        url: result.url,
        publicId: result.publicId,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Delete image from Cloudinary
// @route   DELETE /api/upload/:publicId
// @access  Private (Admin)
router.delete('/:publicId', protect, async (req, res, next) => {
  try {
    if (!isCloudinaryConfigured()) {
      return res.status(503).json({ success: false, message: 'Cloudinary is not configured.' });
    }

    await deleteFromCloudinary(req.params.publicId);
    res.json({ success: true, message: 'Image deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
