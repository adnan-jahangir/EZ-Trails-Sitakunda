const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    // Customer information
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    emergencyContact: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },

    // Tour Package / Custom Details
    packageId: {
      type: String,
      required: true,
      default: 'custom',
    },
    packageName: {
      type: String,
      required: true,
    },
    travelDate: {
      type: String,
      required: [true, 'Travel date is required'],
    },
    returnDate: {
      type: String,
    },
    guests: {
      adults: { type: Number, default: 1, min: 1 },
      children: { type: Number, default: 0, min: 0 },
      total: { type: Number, default: 1 },
    },
    pickupLocation: {
      type: String,
      default: 'Sitakunda Railway Station / Bus Stand',
    },
    selectedSpots: [
      {
        type: String,
      },
    ],
    addOns: [
      {
        id: String,
        name: String,
        price: Number,
      },
    ],

    // Accommodation & Room Selection
    roomPreference: {
      roomType: { type: String, default: 'Standard Eco Cottage' },
      bedType: { type: String, default: '1 Queen Double Bed' },
      roomCount: { type: Number, default: 1 },
      upgradeFee: { type: Number, default: 0 },
    },

    // Financial & Payment details
    pricing: {
      basePrice: { type: Number, required: true },
      addOnsTotal: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      grandTotal: { type: Number, required: true },
    },
    payment: {
      method: {
        type: String,
        enum: ['bkash', 'nagad', 'rocket', 'bank_transfer', 'cash_on_arrival'],
        default: 'bkash',
      },
      trxId: {
        type: String,
        trim: true,
      },
      senderNumber: {
        type: String,
        trim: true,
      },
      paidAmount: {
        type: Number,
        default: 0,
      },
      paymentStatus: {
        type: String,
        enum: ['Unpaid', 'Pending Verification', 'Partial', 'Paid', 'Refunded'],
        default: 'Pending Verification',
      },
    },

    // Booking Execution Status
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'In-Progress', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    // Assigned Resources by Admin upon Confirmation
    assignedGuide: {
      name: { type: String, trim: true },
      phone: { type: String, trim: true },
      role: { type: String, default: 'Certified Local Tour Leader' },
      photo: { type: String },
    },
    assignedVehicle: {
      type: String,
      trim: true,
    },
    adminNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Helper method to generate unique booking code e.g. STK-2026-9812
bookingSchema.statics.generateBookingId = function () {
  const rand = Math.floor(1000 + Math.random() * 9000);
  const year = new Date().getFullYear();
  return `STK-${year}-${rand}`;
};

module.exports = mongoose.model('Booking', bookingSchema);
