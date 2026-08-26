const Package = require('../models/Package');
const cacheService = require('../config/cache');

// @desc    Get all active packages (Public)
// @route   GET /api/packages
// @access  Public
const getPackages = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const query = { isActive: true };

    if (category && category !== 'all') {
      query.category = new RegExp(category, 'i');
    }

    if (featured === 'true') {
      query.featured = true;
    }

    const packages = await Package.find(query).sort({ price: 1 });
    res.json({ success: true, count: packages.length, data: packages });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single package by ID (Public)
// @route   GET /api/packages/:id
// @access  Public
const getPackageById = async (req, res, next) => {
  try {
    const pkg = await Package.findOne({
      $or: [{ packageId: req.params.id }, { _id: req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null }],
    });

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    res.json({ success: true, data: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new package (Admin)
// @route   POST /api/packages
// @access  Private (Admin)
const createPackage = async (req, res, next) => {
  try {
    const pkg = await Package.create(req.body);
    cacheService.invalidatePrefix('packages');
    res.status(201).json({ success: true, data: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Update package (Admin)
// @route   PUT /api/packages/:id
// @access  Private (Admin)
const updatePackage = async (req, res, next) => {
  try {
    const pkg = await Package.findOneAndUpdate(
      { $or: [{ packageId: req.params.id }, { _id: req.params.id }] },
      req.body,
      { new: true, runValidators: true }
    );

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    cacheService.invalidatePrefix('packages');
    res.json({ success: true, data: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete package (Admin)
// @route   DELETE /api/packages/:id
// @access  Private (Admin)
const deletePackage = async (req, res, next) => {
  try {
    const pkg = await Package.findOneAndDelete({
      $or: [{ packageId: req.params.id }, { _id: req.params.id }],
    });

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    cacheService.invalidatePrefix('packages');
    res.json({ success: true, message: 'Package deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
};
