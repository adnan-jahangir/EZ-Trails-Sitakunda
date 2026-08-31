const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Room name is required in English'],
      trim: true,
    },
    bnName: {
      type: String,
      trim: true,
      default: '',
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Standard Cottage', 'Deluxe Room', 'Luxury Resort Suite', 'Camping Tent'],
      default: 'Standard Cottage',
    },
    pricePerRoom: {
      type: Number,
      default: 0,
      min: 0,
    },
    badge: {
      type: String,
      default: 'Package Included (৳0)',
    },
    bnBadge: {
      type: String,
      default: 'প্যাকেজে অন্তর্ভুক্ত (৳০)',
    },
    subtitle: {
      type: String,
      default: 'Eco Cottage with Mountain Forest View',
    },
    bnSubtitle: {
      type: String,
      default: 'প্রাকৃতিক বাতাস ও পাহাড় সংলগ্ন কটেজ',
    },
    desc: {
      type: String,
      default: '',
    },
    bnDesc: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80',
    },
    photos: [
      {
        type: String,
      },
    ],
    amenities: [
      {
        type: String,
      },
    ],
    bnAmenities: [
      {
        type: String,
      },
    ],
    bedOptions: [
      {
        key: { type: String, default: '1_queen' },
        name: { type: String, default: '1 Queen Double Bed' },
        bnName: { type: String, default: '১টি কুইন সাইজ ডাবল বেড' },
        capacity: { type: Number, default: 2 },
      },
    ],
    maxGuestsPerRoom: {
      type: Number,
      default: 3,
    },
    totalRoomsAvailable: {
      type: Number,
      default: 10,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Auto-generate slug from name if not provided
roomSchema.pre('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

module.exports = mongoose.model('Room', roomSchema);
