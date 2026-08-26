const mongoose = require('mongoose');

const tourGuideSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    specialty: { type: String, default: 'Mountain & Hill Trekking' },
    experienceYears: { type: Number, default: 3 },
    rating: { type: Number, default: 4.9 },
    perDayRate: { type: Number, default: 1000 },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TourGuide', tourGuideSchema);
