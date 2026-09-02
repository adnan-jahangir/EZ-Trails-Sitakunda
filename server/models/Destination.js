const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
  {
    destinationId: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bnName: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      default: 'Hills & Peaks',
    },
    difficulty: {
      type: String,
      default: 'Moderate',
    },
    bestTime: {
      type: String,
      default: 'Morning & Sunset',
    },
    lat: { type: Number },
    lng: { type: Number },
    image: { type: String },
    shortDesc: { type: String },
    description: { type: String },
    gallery: [
      {
        type: { type: String, default: 'image' },
        src: { type: String },
        thumb: { type: String },
        label: { type: String }
      }
    ],
    tags: [{ type: String }],
    thingsToDo: [{ type: String }],
    tips: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Destination', destinationSchema);
