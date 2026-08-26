const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    tourPackage: { type: String, default: 'Sitakunda Adventure Tour' },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    reviewText: { type: String, required: true },
    isApproved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
