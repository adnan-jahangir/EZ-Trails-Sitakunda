const mongoose = require('mongoose');

const customRequestSchema = new mongoose.Schema(
  {
    requestId: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    customerName: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    duration: {
      type: String,
      default: 'Day Tour (1 Day)',
    },
    travelDate: {
      type: String,
    },
    groupSize: {
      type: Number,
      default: 2,
    },
    groupType: {
      type: String,
      default: 'Friends',
    },
    selectedSpots: [
      {
        type: String,
      },
    ],
    preferences: {
      accommodation: String,
      transport: String,
      mealPlan: String,
      guideType: String,
      budgetRange: String,
    },
    specialRequests: {
      type: String,
      trim: true,
    },
    estimatedBudget: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Quoted', 'Confirmed', 'Cancelled', 'Archived'],
      default: 'New',
    },
    adminNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

customRequestSchema.statics.generateRequestId = function () {
  const rand = Math.floor(1000 + Math.random() * 9000);
  const year = new Date().getFullYear();
  return `REQ-${year}-${rand}`;
};

module.exports = mongoose.model('CustomRequest', customRequestSchema);
