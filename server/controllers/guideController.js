const TourGuide = require('../models/TourGuide');

const getGuides = async (req, res, next) => {
  try {
    const guides = await TourGuide.find().sort({ rating: -1 });
    res.json({ success: true, count: guides.length, data: guides });
  } catch (error) { next(error); }
};

const createGuide = async (req, res, next) => {
  try {
    const guide = await TourGuide.create(req.body);
    res.status(201).json({ success: true, message: 'Tour guide added successfully', data: guide });
  } catch (error) { next(error); }
};

const updateGuide = async (req, res, next) => {
  try {
    const guide = await TourGuide.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!guide) return res.status(404).json({ success: false, message: 'Guide not found' });
    res.json({ success: true, message: 'Guide updated successfully', data: guide });
  } catch (error) { next(error); }
};

const deleteGuide = async (req, res, next) => {
  try {
    const guide = await TourGuide.findByIdAndDelete(req.params.id);
    if (!guide) return res.status(404).json({ success: false, message: 'Guide not found' });
    res.json({ success: true, message: 'Guide deleted successfully' });
  } catch (error) { next(error); }
};

module.exports = { getGuides, createGuide, updateGuide, deleteGuide };
