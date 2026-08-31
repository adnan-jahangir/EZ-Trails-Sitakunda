const express = require('express');
const router = express.Router();
const { getPackages, getPackageById, createPackage, updatePackage, deletePackage } = require('../controllers/packageController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { validate, packageSchema } = require('../middleware/validate');
const { cacheMiddleware } = require('../middleware/cacheMiddleware');

router.get('/', cacheMiddleware('packages', 300), getPackages);
router.get('/:id', cacheMiddleware('packages', 300), getPackageById);
router.post('/', protect, authorize('superadmin', 'manager'), validate(packageSchema), createPackage);
router.put('/:id', protect, authorize('superadmin', 'manager'), updatePackage);
router.delete('/:id', protect, authorize('superadmin'), deletePackage);

module.exports = router;
