const Destination = require('../models/Destination');
const cacheService = require('../config/cache');

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res, next) => {
  try {
    const destinations = await Destination.find().sort({ createdAt: -1 });
    res.json({ success: true, count: destinations.length, data: destinations });
  } catch (error) {
    next(error);
  }
};

// @desc    Create destination
// @route   POST /api/destinations
// @access  Private (Admin)
const createDestination = async (req, res, next) => {
  try {
    let { destinationId, name, bnName, category, difficulty, bestTime, shortDesc, description, image } = req.body;
    if (!destinationId) {
      destinationId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    const exists = await Destination.findOne({ destinationId });
    if (exists) {
      destinationId += '-' + Math.floor(100 + Math.random() * 900);
    }
    const item = await Destination.create({
      destinationId,
      name,
      bnName,
      category: category || 'Hills & Peaks',
      difficulty: difficulty || 'Moderate',
      bestTime: bestTime || 'Morning & Sunset',
      shortDesc,
      description,
      image: image || 'images/spots/chandranath-hill.jpg',
    });
    cacheService.invalidatePrefix('destinations');
    res.status(201).json({ success: true, message: 'Destination spot added successfully', data: item });
  } catch (error) {
    next(error);
  }
};

// @desc    Update destination
// @route   PUT /api/destinations/:id
// @access  Private (Admin)
const updateDestination = async (req, res, next) => {
  try {
    const item = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ success: false, message: 'Destination not found' });
    cacheService.invalidatePrefix('destinations');
    res.json({ success: true, message: 'Destination updated successfully', data: item });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete destination
// @route   DELETE /api/destinations/:id
// @access  Private (Admin)
const deleteDestination = async (req, res, next) => {
  try {
    const item = await Destination.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Destination not found' });
    cacheService.invalidatePrefix('destinations');
    res.json({ success: true, message: 'Destination deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDestinations, createDestination, updateDestination, deleteDestination };
