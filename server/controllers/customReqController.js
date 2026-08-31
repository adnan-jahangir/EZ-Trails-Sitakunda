const CustomRequest = require('../models/CustomRequest');
const { escapeRegex, isValidObjectId } = require('../utils/securityUtils');

// @desc    Submit a custom trip planning request (Customer)
// @route   POST /api/custom-requests
// @access  Public
const createCustomRequest = async (req, res, next) => {
  try {
    const {
      customerName,
      phone,
      email,
      duration,
      travelDate,
      groupSize,
      groupType,
      selectedSpots,
      preferences,
      specialRequests,
      estimatedBudget,
    } = req.body;

    if (!customerName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide at least your name and phone number',
      });
    }

    let uniqueId = CustomRequest.generateRequestId();
    let exists = await CustomRequest.findOne({ requestId: uniqueId });
    while (exists) {
      uniqueId = CustomRequest.generateRequestId();
      exists = await CustomRequest.findOne({ requestId: uniqueId });
    }

    const newRequest = await CustomRequest.create({
      requestId: uniqueId,
      customerName,
      phone,
      email,
      duration,
      travelDate,
      groupSize: Number(groupSize) || 2,
      groupType: groupType || 'Friends',
      selectedSpots: selectedSpots || [],
      preferences: preferences || {},
      specialRequests,
      estimatedBudget: Number(estimatedBudget) || 0,
      status: 'New',
    });

    res.status(201).json({
      success: true,
      message: 'Your custom trip plan request has been submitted! Our trip planner will call you with a tailored quote.',
      data: newRequest,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all custom trip requests (Admin)
// @route   GET /api/custom-requests
// @access  Private (Admin)
const getCustomRequests = async (req, res, next) => {
  try {
    const { status, search } = req.query;
    const query = {};

    if (status && status !== 'all' && typeof status === 'string') {
      query.status = status;
    }

    if (search && typeof search === 'string') {
      const safeSearch = escapeRegex(search.trim().slice(0, 100));
      query.$or = [
        { requestId: { $regex: safeSearch, $options: 'i' } },
        { customerName: { $regex: safeSearch, $options: 'i' } },
        { phone: { $regex: safeSearch, $options: 'i' } },
      ];
    }

    const requests = await CustomRequest.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: requests.length, data: requests });
  } catch (error) {
    next(error);
  }
};

// @desc    Update custom request status / notes (Admin)
// @route   PATCH /api/custom-requests/:id
// @access  Private (Admin)
const updateCustomRequest = async (req, res, next) => {
  try {
    const { status, adminNotes } = req.body;
    const idParam = req.params.id;

    if (!idParam || !isValidObjectId(idParam)) {
      return res.status(400).json({ success: false, message: 'Invalid request ID format' });
    }

    const reqItem = await CustomRequest.findById(idParam);

    if (!reqItem) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }

    if (status) reqItem.status = status;
    if (adminNotes !== undefined) reqItem.adminNotes = adminNotes;

    await reqItem.save();
    res.json({ success: true, message: 'Request updated successfully', data: reqItem });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCustomRequest,
  getCustomRequests,
  updateCustomRequest,
};
