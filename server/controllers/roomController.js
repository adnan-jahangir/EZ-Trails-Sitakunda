const Room = require('../models/Room');
const { logAction } = require('../services/auditService');

const DEFAULT_ROOMS = [
  {
    name: 'Standard Eco Cottage',
    bnName: 'স্ট্যান্ডার্ড ইকো কটেজ',
    slug: 'standard-eco-cottage',
    category: 'Standard Cottage',
    pricePerRoom: 0,
    badge: 'Package Included (৳0)',
    bnBadge: 'প্যাকেজে অন্তর্ভুক্ত (৳০)',
    subtitle: 'Eco Cottage with Mountain Forest View',
    bnSubtitle: 'প্রাকৃতিক বাতাস ও পাহাড় সংলগ্ন কটেজ',
    desc: 'Traditional Sitakunda eco-cottage designed for comfort and natural ventilation. Located close to the mountain base, offering serene nature vibes, clean western bathroom, and fresh running water.',
    bnDesc: 'সীতাকুণ্ড পাহাড়ের পাদদেশে প্রাকৃতিক ও শান্ত পরিবেশে অবস্থিত ইকো কটেজ। খোলামেলা নির্মল বাতাস, পরিচ্ছন্ন অ্যাটাচড বাথরুম ও সার্বক্ষণিক বিশুদ্ধ পানির সুব্যবস্থা রয়েছে।',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80',
    photos: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    ],
    amenities: [
      'Western Attached Bathroom with Toiletries',
      'Ceiling Fan & Natural Cross Ventilation',
      'Mosquito Net & Clean Linens',
      '24/7 Running Mountain Water',
      'Eco-friendly Solar / Grid Backup',
    ],
    bnAmenities: [
      'টয়লেট্রিজসহ ওয়েস্টার্ন অ্যাটাচড বাথরুম',
      'সিলিং ফ্যান ও প্রাকৃতিক খোলামেলা বাতাস',
      'মশারি ও সম্পূর্ণ পরিচ্ছন্ন বিছানার চাদর',
      'সার্বক্ষণিক বিশুদ্ধ পানির সুব্যবস্থা',
      'নিরবচ্ছিন্ন বিদ্যুৎ / সোলার ব্যাকআপ',
    ],
    bedOptions: [
      { key: '1_queen', name: '1 Queen Double Bed', bnName: '১টি কুইন সাইজ ডাবল বেড (২ জন)', capacity: 2 },
      { key: '2_twin', name: '2 Separate Single Beds', bnName: '২টি আলাদা সিঙ্গেল বেড (টুইন শেয়ার)', capacity: 2 },
      { key: '3_single', name: '3 Separate Beds', bnName: '৩টি আলাদা সিঙ্গেল বেড (গ্রুপ ৩ জন)', capacity: 3 },
    ],
    maxGuestsPerRoom: 3,
    totalRoomsAvailable: 12,
    isAvailable: true,
    sortOrder: 1,
  },
  {
    name: 'Deluxe AC Hill View Room',
    bnName: 'ডিলাক্স এসি হিল ভিউ রুম',
    slug: 'deluxe-ac-hill-view-room',
    category: 'Deluxe Room',
    pricePerRoom: 800,
    badge: '+৳800 / Room / Night',
    bnBadge: '+৳৮০০ / রুম / রাত',
    subtitle: 'Air Conditioned Mountain Facing Room',
    bnSubtitle: 'পাহাড়মুখী ব্যালকনি ও আধুনিক এসি রুম',
    desc: 'Modern air-conditioned room with large panoramic windows and a private balcony overlooking Chandranath hill slopes. Includes high-speed WiFi, smart TV, hot water geyser, and premium hotel-grade bedding.',
    bnDesc: 'চন্দ্রনাথ পাহাড়ের দৃশ্য সংবলিত আধুনিক শীতাতপ নিয়ন্ত্রিত (এসি) রুম ও প্রাইভেট ব্যালকনি। হাই-স্পিড ওয়াইফাই, স্মার্ট টিভি, গিজার ও প্রিমিয়াম হোটেলের সুযোগ-সুবিধা অন্তর্ভুক্ত।',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80',
    photos: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=80',
    ],
    amenities: [
      '1.5 Ton Inverter Air Conditioner (AC)',
      'Private Balcony with Hill View',
      'High-Speed Wi-Fi & Smart TV',
      'Hot Water Geyser in Bathroom',
      'Room Service & Electric Kettle',
    ],
    bnAmenities: [
      '১.৫ টন ইনভার্টার এয়ার কন্ডিশনার (এসি)',
      'পাহাড়ের ভিউসহ ব্যক্তিগত ব্যালকনি',
      'উচ্চগতির ওয়াইফাই ও স্মার্ট এলইডি টিভি',
      'বাথরুমে ২৪ ঘণ্টা গরম পানির গিজার',
      'রুম সার্ভিস ও চা তৈরির ইলেকট্রিক কেটলি',
    ],
    bedOptions: [
      { key: '1_queen', name: '1 Queen Double Bed', bnName: '১টি কুইন সাইজ ডাবল বেড (২ জন)', capacity: 2 },
      { key: '2_twin', name: '2 Separate Single Beds', bnName: '২টি আলাদা সিঙ্গেল বেড (টুইন শেয়ার)', capacity: 2 },
      { key: '1_king_1_single', name: '1 King + 1 Single Bed', bnName: '১টি কিং + ১টি সিঙ্গেল বেড (ফ্যামিলি ৩ জন)', capacity: 3 },
    ],
    maxGuestsPerRoom: 3,
    totalRoomsAvailable: 8,
    isAvailable: true,
    sortOrder: 2,
  },
  {
    name: 'Premium Mountain Resort Suite',
    bnName: 'প্রিমিয়াম মাউন্টেন রিসোর্ট স্যুট',
    slug: 'premium-mountain-resort-suite',
    category: 'Luxury Resort Suite',
    pricePerRoom: 1500,
    badge: '+৳1,500 / Room / Night',
    bnBadge: '+৳১,৫০০ / রুম / রাত',
    subtitle: '360° Panoramic Cloud-Level Luxury Villa Suite',
    bnSubtitle: '৩৬০° পাহাড়ের চূড়ায় মেঘ ছোঁয়া লাক্সারি স্যুট',
    desc: 'Exclusive hilltop resort villa offering ultra-luxury stay with 360-degree mountain views, private terrace, soaking bathtub, complimentary morning buffet breakfast, and dedicated butler service.',
    bnDesc: 'সীতাকুণ্ড পাহাড়ের চূড়ায় মেঘ ছুঁয়ে যাওয়ার মতো এক্সক্লুসিভ লাক্সারি স্যুট। প্রাইভেট রুফটপ টেরেস, বাথটাব, সকালের সুস্বাদু নাস্তা এবং ২৪ ঘণ্টা ডেডিকেটেড পার্সোনাল সার্ভিস।',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
    photos: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
    ],
    amenities: [
      'Master King Bed Suite + Private Terrace',
      'Panoramic 360° Cloud & Mountain View',
      'Luxury Bathroom with Bathtub & Hot Shower',
      'Complimentary Morning Breakfast & Tea/Coffee',
      'Dedicated 24/7 Resort Butler & Room Service',
    ],
    bnAmenities: [
      'মাস্টার কিং বেড স্যুট ও প্রাইভেট টেরেস',
      '৩৬০° মেঘ ও সবুজ পাহাড়ের নয়নাভিরাম ভিউ',
      'বাথটাব ও হট শাওয়ারসহ লাক্সারি বাথরুম',
      'কমপ্লিমেন্টারি সকালের ব্রেকফাস্ট ও চা/কফি',
      'সার্বক্ষণিক ডেডিকেটেড রিসোর্ট কেয়ারটেকার',
    ],
    bedOptions: [
      { key: '1_queen', name: '1 Master King Bed', bnName: '১টি মাস্টার কিং সাইজ বেড (২ জন)', capacity: 2 },
      { key: '1_king_1_single', name: '1 King + 1 Single Bed', bnName: '১টি কিং + ১টি সিঙ্গেল বেড (ফ্যামিলি ৩ জন)', capacity: 3 },
      { key: '4_bunk', name: '4 Single Luxury Bunk Beds', bnName: '৪টি সিঙ্গেল বাঙ্ক বেড (গ্রুপ স্যুট)', capacity: 4 },
    ],
    maxGuestsPerRoom: 4,
    totalRoomsAvailable: 5,
    isAvailable: true,
    sortOrder: 3,
  },
  {
    name: 'Adventure Hill Camping Tent',
    bnName: 'অ্যাডভেঞ্চার হিল ক্যাম্পিং তাবু',
    slug: 'adventure-hill-camping-tent',
    category: 'Camping Tent',
    pricePerRoom: 0,
    badge: 'Adventure Special (৳0)',
    bnBadge: 'অ্যাডভেঞ্চার স্পেশাল (৳০)',
    subtitle: 'Under-the-Stars Ridge Camping with Campfire & BBQ',
    bnSubtitle: 'পাহাড়ের চূড়ায় ক্যাম্পিং, বারবিকিউ ও ক্যাম্পফায়ার',
    desc: 'High-grade waterproof camping tent pitched at scenic hill ridges. Experience authentic night camping under the stars with inflatable sleeping mats, campfire, BBQ setup, and dedicated 24/7 security team.',
    bnDesc: 'সীতাকুণ্ড পাহাড়ের চূড়ায় তারাভরা আকাশের নিচে রোমাঞ্চকর ক্যাম্পিং। ওয়াটারপ্রুফ তাবু, ফোম ম্যাট, উষ্ণ কম্বল, ক্যাম্পফায়ার ও বারবিকিউ আয়োজনের সাথে সার্বক্ষণিক নিরাপত্তা বেষ্টনী।',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80',
    photos: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80',
    ],
    amenities: [
      'Waterproof 2/3 Person Heavy-Duty Tent',
      'Inflatable Foam Sleeping Mat & Warm Fleece Blanket',
      'Night Campfire & BBQ Grilling Pit Access',
      'Clean Base Camp Western Toilet & Wash Facility',
      '24/7 Camp Security & Certified Night Trek Lead',
    ],
    bnAmenities: [
      'ওয়াটারপ্রুফ ২/৩ জনের হেভি-ডিউটি তাবু',
      'ফোম ম্যাট ও উষ্ণ ফ্লিস কম্বলের ব্যবস্থা',
      'রাতের ক্যাম্পফায়ার ও বারবিকিউ গ্রিল সুবিধা',
      'বেসক্যাম্পে পরিচ্ছন্ন ওয়াশরুম ও পানির ব্যবস্থা',
      'সার্বক্ষণিক নাইট ক্যাম্প সিকিউরিটি ও গাইড সাপোর্ট',
    ],
    bedOptions: [
      { key: 'tent_mat', name: 'Dual Sleeping Mats & Pillows', bnName: '২ জনের ক্যাম্পিং ম্যাট ও বালিশ', capacity: 2 },
      { key: '3_single', name: 'Triple Sleeping Mats', bnName: '৩ জনের আলাদা ক্যাম্পিং ম্যাট', capacity: 3 },
    ],
    maxGuestsPerRoom: 3,
    totalRoomsAvailable: 20,
    isAvailable: true,
    sortOrder: 4,
  },
];

// Helper: Seed default rooms if none exist
const autoSeedRooms = async () => {
  try {
    const count = await Room.countDocuments();
    if (count === 0) {
      await Room.insertMany(DEFAULT_ROOMS);
      console.log('[Room Seed] Seeded 4 default Sitakunda room accommodation records into MongoDB.');
    }
  } catch (err) {
    console.warn('[Room Seed Error]:', err.message);
  }
};

// @desc    Get all active rooms / accommodations
// @route   GET /api/rooms
// @access  Public
const getRooms = async (req, res, next) => {
  try {
    await autoSeedRooms();
    const { category, availableOnly } = req.query;
    const filter = {};

    if (category && category !== 'all') {
      filter.category = category;
    }
    if (availableOnly === 'true') {
      filter.isAvailable = true;
    }

    const rooms = await Room.find(filter).sort({ sortOrder: 1, createdAt: 1 });
    res.json({
      success: true,
      count: rooms.length,
      data: rooms,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single room by ID or slug
// @route   GET /api/rooms/:id
// @access  Public
const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let room = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      room = await Room.findById(id);
    }
    if (!room) {
      room = await Room.findOne({ slug: id });
    }
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }
    res.json({ success: true, data: room });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new room (Admin)
// @route   POST /api/rooms
// @access  Private (SuperAdmin, Manager)
const createRoom = async (req, res, next) => {
  try {
    const {
      name,
      bnName,
      category,
      pricePerRoom,
      badge,
      bnBadge,
      subtitle,
      bnSubtitle,
      desc,
      bnDesc,
      image,
      photos,
      amenities,
      bnAmenities,
      bedOptions,
      maxGuestsPerRoom,
      totalRoomsAvailable,
      isAvailable,
      sortOrder,
    } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: 'Room name is required' });
    }

    const newRoom = await Room.create({
      name,
      bnName: bnName || '',
      category: category || 'Standard Cottage',
      pricePerRoom: Number(pricePerRoom) || 0,
      badge: badge || (pricePerRoom > 0 ? `+৳${pricePerRoom} / Room` : 'Package Included (৳0)'),
      bnBadge: bnBadge || (pricePerRoom > 0 ? `+৳${pricePerRoom} / রুম` : 'প্যাকেজে অন্তর্ভুক্ত (৳০)'),
      subtitle: subtitle || 'Sitakunda Tour Accommodation',
      bnSubtitle: bnSubtitle || '',
      desc: desc || '',
      bnDesc: bnDesc || '',
      image: image || 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80',
      photos: Array.isArray(photos) && photos.length > 0 ? photos : [image || 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop&q=80'],
      amenities: Array.isArray(amenities) ? amenities : (typeof amenities === 'string' ? amenities.split(',').map(s => s.trim()) : ['Attached Bathroom', '24/7 Water', 'Clean Linens']),
      bnAmenities: Array.isArray(bnAmenities) ? bnAmenities : [],
      bedOptions: Array.isArray(bedOptions) && bedOptions.length > 0 ? bedOptions : [
        { key: '1_queen', name: '1 Queen Double Bed', bnName: '১টি কুইন সাইজ ডাবল বেড', capacity: 2 },
        { key: '2_twin', name: '2 Separate Single Beds', bnName: '২টি আলাদা সিঙ্গেল বেড', capacity: 2 },
      ],
      maxGuestsPerRoom: Number(maxGuestsPerRoom) || 3,
      totalRoomsAvailable: Number(totalRoomsAvailable) || 10,
      isAvailable: isAvailable !== undefined ? Boolean(isAvailable) : true,
      sortOrder: Number(sortOrder) || 0,
    });

    logAction({
      req,
      action: 'CREATE_ROOM',
      targetModel: 'Room',
      targetId: newRoom._id,
      description: `Created accommodation room "${newRoom.name}" with fee ৳${newRoom.pricePerRoom}`,
    });

    res.status(201).json({
      success: true,
      message: 'Room created successfully in MongoDB',
      data: newRoom,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a room (Admin)
// @route   PUT /api/rooms/:id
// @access  Private (SuperAdmin, Manager)
const updateRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    let room = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      room = await Room.findById(id);
    }
    if (!room) {
      room = await Room.findOne({ slug: id });
    }
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    const fields = [
      'name', 'bnName', 'category', 'pricePerRoom', 'badge', 'bnBadge',
      'subtitle', 'bnSubtitle', 'desc', 'bnDesc', 'image', 'photos',
      'amenities', 'bnAmenities', 'bedOptions', 'maxGuestsPerRoom',
      'totalRoomsAvailable', 'isAvailable', 'sortOrder',
    ];

    fields.forEach(field => {
      if (req.body[field] !== undefined) {
        if (field === 'amenities' && typeof req.body[field] === 'string') {
          room[field] = req.body[field].split(',').map(s => s.trim()).filter(Boolean);
        } else if (field === 'bnAmenities' && typeof req.body[field] === 'string') {
          room[field] = req.body[field].split(',').map(s => s.trim()).filter(Boolean);
        } else {
          room[field] = req.body[field];
        }
      }
    });

    const updated = await room.save();

    logAction({
      req,
      action: 'UPDATE_ROOM',
      targetModel: 'Room',
      targetId: updated._id,
      description: `Updated accommodation room "${updated.name}"`,
    });

    res.json({
      success: true,
      message: 'Room updated successfully in MongoDB',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a room (Admin)
// @route   DELETE /api/rooms/:id
// @access  Private (SuperAdmin)
const deleteRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    let room = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      room = await Room.findById(id);
    }
    if (!room) {
      room = await Room.findOne({ slug: id });
    }
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    await Room.findByIdAndDelete(room._id);

    logAction({
      req,
      action: 'DELETE_ROOM',
      targetModel: 'Room',
      targetId: room._id,
      description: `Deleted accommodation room "${room.name}"`,
    });

    res.json({
      success: true,
      message: 'Room deleted successfully from MongoDB',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
  autoSeedRooms,
};
