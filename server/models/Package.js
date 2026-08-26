const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema(
  {
    packageId: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    bnTitle: {
      type: String,
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
    },
    days: {
      type: Number,
      default: 1,
    },
    nights: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
    },
    badge: {
      type: String,
      default: 'Popular',
    },
    category: {
      type: String,
      default: 'Adventure & Trekking',
    },
    groupSize: {
      type: String,
      default: '1-10 Persons',
    },
    difficulty: {
      type: String,
      default: 'Moderate',
    },
    image: {
      type: String,
      required: true,
    },
    spots: [
      {
        type: String,
      },
    ],
    inclusions: [
      {
        type: String,
      },
    ],
    exclusions: [
      {
        type: String,
      },
    ],
    highlights: [
      {
        type: String,
      },
    ],
    itinerary: [
      {
        day: Number,
        title: String,
        description: String,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Package', packageSchema);
