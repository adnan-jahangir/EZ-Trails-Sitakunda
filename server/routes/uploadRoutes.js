const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { upload, uploadToCloudinary, deleteFromCloudinary, isCloudinaryConfigured } = require('../config/cloudinary');

const path = require('path');
const fs = require('fs');

// @desc    Upload image to Cloudinary or Local public/images/spots fallback
// @route   POST /api/upload
// @access  Private (Admin)
router.post('/', protect, upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file provided' });
    }

    if (isCloudinaryConfigured()) {
      try {
        const folder = req.body.folder || 'tourstk';
        const result = await uploadToCloudinary(req.file.buffer, folder);
        return res.status(201).json({
          success: true,
          message: 'Image uploaded successfully',
          data: {
            url: result.url,
            publicId: result.publicId,
          },
        });
      } catch (cloudErr) {
        console.warn('Cloudinary upload warning, saving locally:', cloudErr.message);
      }
    }

    // Local storage fallback
    const ext = path.extname(req.file.originalname) || '.jpg';
    const filename = `spot-upload-${Date.now()}-${Math.floor(100 + Math.random() * 900)}${ext}`;
    const targetDir = path.join(__dirname, '../../public/images/spots');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetPath = path.join(targetDir, filename);
    fs.writeFileSync(targetPath, req.file.buffer);

    res.status(201).json({
      success: true,
      message: 'Image saved locally',
      data: {
        url: `images/spots/${filename}`,
        publicId: filename,
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
