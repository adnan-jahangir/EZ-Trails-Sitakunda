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
    bnTagline: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
    },
    bnDuration: {
      type: String,
      trim: true,
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
    priceNote: {
      type: String,
    },
    bnPriceNote: {
      type: String,
    },
    badge: {
      type: String,
      default: 'Popular',
    },
    bnBadge: {
      type: String,
    },
    category: {
      type: String,
      default: 'Adventure & Trekking',
    },
    groupSize: {
      type: String,
      default: '1-10 Persons',
    },
    minTravelers: {
      type: String,
    },
    bnMinTravelers: {
      type: String,
    },
    difficulty: {
      type: String,
      default: 'Moderate',
    },
    bnDifficulty: {
      type: String,
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
    bnIncluded: [
      {
        type: String,
      },
    ],
    exclusions: [
      {
        type: String,
      },
    ],
    bnExcluded: [
      {
        type: String,
      },
    ],
    whatToPack: [
      {
        type: String,
      },
    ],
    bnWhatToPack: [
      {
        type: String,
      },
    ],
    meals: [
      {
        type: mongoose.Schema.Types.Mixed,
      },
    ],
    scheduleDays: [
      {
        type: mongoose.Schema.Types.Mixed,
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

