const Package = require('../models/Package');
const cacheService = require('../config/cache');
const { escapeRegex, isValidObjectId } = require('../utils/securityUtils');
const { logAction } = require('../services/auditService');

// @desc    Get all active packages (Public)
// @route   GET /api/packages
// @access  Public
const getPackages = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const query = { isActive: true };

    if (category && category !== 'all' && typeof category === 'string') {
      query.category = new RegExp(escapeRegex(category.trim().slice(0, 50)), 'i');
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
    const idParam = (req.params.id || '').trim();
    const orQuery = [{ packageId: idParam }];
    if (isValidObjectId(idParam)) {
      orQuery.push({ _id: idParam });
    }

    const pkg = await Package.findOne({ $or: orQuery });

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
// @access  Private (SuperAdmin, Manager)
const createPackage = async (req, res, next) => {
  try {
    const pkg = await Package.create(req.body);
    cacheService.invalidatePrefix('packages');

    // Record audit log
    logAction({
      req,
      action: 'CREATE_PACKAGE',
      targetModel: 'Package',
      targetId: pkg.packageId || pkg._id,
      description: `Created package "${pkg.title}" with base price ৳${pkg.price}`,
      changes: { createdData: pkg },
    });

    res.status(201).json({ success: true, data: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Update package (Admin)
// @route   PUT /api/packages/:id
// @access  Private (SuperAdmin, Manager)
const updatePackage = async (req, res, next) => {
  try {
    const idParam = (req.params.id || '').trim();
    const orQuery = [{ packageId: idParam }];
    if (isValidObjectId(idParam)) {
      orQuery.push({ _id: idParam });
    }

    const previousPkg = await Package.findOne({ $or: orQuery });

    const pkg = await Package.findOneAndUpdate(
      { $or: orQuery },
      req.body,
      { new: true, runValidators: true }
    );

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    cacheService.invalidatePrefix('packages');

    // Record audit log
    logAction({
      req,
      action: 'UPDATE_PACKAGE',
      targetModel: 'Package',
      targetId: pkg.packageId || pkg._id,
      description: `Updated package "${pkg.title}" (Price: ৳${pkg.price})`,
      changes: {
        before: previousPkg ? { title: previousPkg.title, price: previousPkg.price, isActive: previousPkg.isActive } : null,
        after: { title: pkg.title, price: pkg.price, isActive: pkg.isActive },
      },
    });

    res.json({ success: true, data: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete package (Admin)
// @route   DELETE /api/packages/:id
// @access  Private (SuperAdmin)
const deletePackage = async (req, res, next) => {
  try {
    const idParam = (req.params.id || '').trim();
    const orQuery = [{ packageId: idParam }];
    if (isValidObjectId(idParam)) {
      orQuery.push({ _id: idParam });
    }

    const pkg = await Package.findOneAndDelete({ $or: orQuery });

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    cacheService.invalidatePrefix('packages');

    // Record audit log
    logAction({
      req,
      action: 'DELETE_PACKAGE',
      targetModel: 'Package',
      targetId: pkg.packageId || pkg._id,
      description: `Deleted package "${pkg.title}" (${pkg.packageId})`,
      changes: { deletedData: pkg },
    });

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
