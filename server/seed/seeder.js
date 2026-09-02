const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const connectDB = require('../config/db');
const AdminUser = require('../models/AdminUser');
const Package = require('../models/Package');
const Booking = require('../models/Booking');
const Destination = require('../models/Destination');
const CustomRequest = require('../models/CustomRequest');
const ContactMessage = require('../models/ContactMessage');
const TourGuide = require('../models/TourGuide');
const Review = require('../models/Review');

const initialPackages = [
  {
    packageId: 'sitakunda-adventure-tour',
    title: 'Sitakunda Adventure Tour',
    bnTitle: 'সীতাকুণ্ড অ্যাডভেঞ্চার ট্যুর',
    tagline: 'The flagship complete experience covering Chandranath peak, coastal sea breeze and scenic trails.',
    category: '2 Days • 1 Night',
    duration: '2 Days • 1 Night',
    days: 2,
    nights: 1,
    price: 3490,
    originalPrice: 4200,
    badge: 'Popular',
    difficulty: 'Moderate',
    groupSize: 'Min 4 Travelers',
    image: 'images/spots/chandranath-hill.jpg',
    spots: ['chandranath-hill', 'guliakhali-sea-beach', 'sitakunda-eco-park'],
    inclusions: [
      'Dedicated AC local transport (Sitakunda pickup & return)',
      'Overnight Deluxe Room / Resort stay (Twin share)',
      'All meals included (Breakfast, Lunch, Dinner BBQ)',
      'Certified local mountain & beach guide',
    ],
    exclusions: ['Personal shopping & tips', 'Train/Bus tickets from Dhaka/Chittagong'],
    highlights: ['Chandranath Peak Hike', 'Guliakhali Green Beach Sunset', 'Live BBQ Dinner'],
    featured: true,
    isActive: true,
  },
  {
    packageId: 'day-sitakunda-escape',
    title: '1 Day Sitakunda Escape',
    bnTitle: '১ দিন সীতাকুণ্ড এস্কেপ ডে-ট্যুর',
    tagline: 'The best day-trip itinerary for busy travelers seeking maximum adventure in minimal time.',
    category: '1 Day',
    duration: '1 Day',
    days: 1,
    nights: 0,
    price: 1590,
    originalPrice: 2000,
    badge: 'Best Seller',
    difficulty: 'Moderate',
    groupSize: 'Min 4 Travelers',
    image: 'images/spots/guliakhali-sea-beach.jpg',
    spots: ['chandranath-hill', 'guliakhali-sea-beach', 'sitakunda-eco-park'],
    inclusions: [
      'Dedicated AC local transport (Sitakunda pickup & return)',
      'Traditional local feast style buffet lunch',
      'Certified local trekking guide for hill trails',
      'All forest reserve entry tickets & parking permits',
    ],
    exclusions: ['Dinner & personal snacks', 'Personal medical expenses'],
    highlights: ['Chandranath Morning Climb', 'Eco Park Walk', 'Guliakhali Sunset'],
    featured: true,
    isActive: true,
  },
  {
    packageId: 'weekend-2d1n-adventure',
    title: '2 Days 1 Night Adventure',
    bnTitle: '২ দিন ১ রাত অ্যাডভেঞ্চার ট্রেইল',
    tagline: 'Balanced weekend getaway tailored for active friends and nature enthusiasts.',
    category: '2 Days • 1 Night',
    duration: '2 Days • 1 Night',
    days: 2,
    nights: 1,
    price: 3200,
    originalPrice: 3800,
    badge: 'Adventure',
    difficulty: 'Moderate',
    groupSize: 'Min 4 Travelers',
    image: 'images/spots/khaiyachora-waterfall.jpg',
    spots: ['khaiyachora-waterfall', 'chandranath-hill', 'guliakhali-sea-beach'],
    inclusions: [
      'Round-trip local transport from Sitakunda',
      'Overnight eco-resort stay (Twin share)',
      '4 Full meals including night BBQ',
      'Khaiyachora waterfall guide & trekking gears',
    ],
    exclusions: ['Bus tickets to Sitakunda', 'Emergency rescue expenses'],
    highlights: ['9-Tier Khaiyachora Waterfall', 'Campfire BBQ', 'Guliakhali Photography'],
    featured: true,
    isActive: true,
  },
  {
    packageId: 'family-tour',
    title: 'Family Tour',
    bnTitle: 'পারিবারিক রিলাক্সেশন ট্যুর',
    tagline: 'Carefully curated easy-paced itinerary with priority comfort, family-safe trails and delicious meals.',
    category: '2 Days • 1 Night',
    duration: '2 Days • 1 Night',
    days: 2,
    nights: 1,
    price: 3850,
    originalPrice: 4500,
    badge: 'Family Safe',
    difficulty: 'Easy',
    groupSize: 'Min 4 Travelers',
    image: 'images/spots/bhatiari-lake.jpg',
    spots: ['sitakunda-eco-park', 'bhatiari-lake', 'banshbaria-sea-beach'],
    inclusions: [
      'Private dedicated AC vehicle throughout the tour',
      'Premium family resort rooms',
      'Mild hygienic family buffet meals',
      'Senior and child friendly boat rides',
    ],
    exclusions: ['Personal medication', 'Extra ordered food outside package'],
    highlights: ['Bhatiari Lake Boating', 'Eco Park Deer Reserve', 'Banshbaria Sea Pier Walk'],
    featured: false,
    isActive: true,
  },
  {
    packageId: 'couple-tour',
    title: 'Couple Tour (Private)',
    bnTitle: 'কাপল প্রাইভেট রিট্রিট',
    tagline: 'Private and memorable retreat with peaceful scenic destinations, flexible schedules, and private comfort.',
    category: '2 Days • 1 Night',
    duration: '2 Days • 1 Night',
    days: 2,
    nights: 1,
    price: 4200,
    originalPrice: 5000,
    badge: 'Honeymoon Special',
    difficulty: 'Easy',
    groupSize: 'Min 2 Travelers',
    image: 'images/spots/banshbaria-sea-beach.jpg',
    spots: ['bhatiari-lake', 'guliakhali-sea-beach', 'mohamaya-lake'],
    inclusions: [
      'Private AC Sedan car for couple throughout',
      'Premium Deluxe Couple Room with hill/lake view',
      'Candlelight BBQ dinner setup & private boating',
      'Discreet personal tour coordinator',
    ],
    exclusions: ['Personal shopping & tips'],
    highlights: ['Private Candlelight Dinner', 'Mohamaya Lake Kayaking', 'Guliakhali Sunset Walk'],
    featured: false,
    isActive: true,
  },
  {
    packageId: 'student-group-tour',
    title: 'Student Group Thrill Tour',
    bnTitle: 'স্টুডেন্ট গ্রুপ থ্রিল ট্যুর',
    tagline: 'High energy, budget-friendly thrill pack designed specially for college and university student groups.',
    category: '2 Days • 1 Night',
    duration: '2 Days • 1 Night',
    days: 2,
    nights: 1,
    price: 1450,
    originalPrice: 1900,
    badge: 'Budget Thrill',
    difficulty: 'Moderate',
    groupSize: 'Min 8 Travelers',
    image: 'images/spots/mohamaya-lake.jpg',
    spots: ['chandranath-hill', 'khaiyachora-waterfall', 'mohamaya-lake', 'guliakhali-sea-beach'],
    inclusions: [
      'Group local transport',
      'Dormitory / Group tent camping setup',
      'All local meals & campfire dinner',
      'Experienced trek leader for group safety',
    ],
    exclusions: ['Individual expenses', 'Travel to Sitakunda'],
    highlights: ['Camping Under Stars', 'Waterfall Stream Hike', 'Group Kayaking Battle'],
    featured: false,
    isActive: true,
  },
];

const initialDestinations = [
  {
    destinationId: 'chandranath-hill',
    name: 'Chandranath Hill & Summit',
    bnName: 'চন্দ্রনাথ পাহাড় (Chandranath Hill)',
    category: 'Hills & Peaks',
    difficulty: 'Moderate to Hard',
    bestTime: 'Sunrise & Morning',
    lat: 22.6189,
    lng: 91.6811,
    image: 'images/spots/chandranath-hill.jpg',
    shortDesc: 'The highest peak in Chittagong district (1,152 ft) offering sweeping 360-degree views of misty green hills and coastal sea.',
  },
  {
    destinationId: 'guliakhali-sea-beach',
    name: 'Guliakhali Sea Beach',
    bnName: 'গুলিয়াখালী সী বিচ (Guliakhali Beach)',
    category: 'Beaches & Coastlines',
    difficulty: 'Easy Walk',
    bestTime: 'Late Afternoon / Sunset',
    lat: 22.5694,
    lng: 91.5975,
    image: 'images/spots/guliakhali-sea-beach.jpg',
    shortDesc: 'A rare coastal green carpet landscape where velvety green grass plains meet tidal mangrove canals.',
  },
  {
    destinationId: 'khaiyachora-waterfall',
    name: 'Khaiyachora 9-Step Waterfall',
    bnName: 'খৈয়াছড়া ওয়াটারফল (Khaiyachora Waterfall)',
    category: 'Waterfalls & Treks',
    difficulty: 'Challenging Trail',
    bestTime: 'Monsoon & Post-Monsoon',
    lat: 22.7486,
    lng: 91.5647,
    image: 'images/spots/khaiyachora-waterfall.jpg',
    shortDesc: 'The Queen of Waterfalls in Bangladesh — a magnificent 9-tier cascading waterfall deep inside mountain forests.',
  },
  {
    destinationId: 'sitakunda-eco-park',
    name: 'Shuptodhara Waterfall & Eco Park',
    bnName: 'সুপ্তধারা ওয়াটারফল ও ইকোপার্ক (Shuptodhara Waterfall & Eco Park)',
    category: 'Waterfalls & Treks',
    difficulty: 'Easy to Moderate',
    bestTime: 'Monsoon & Winter',
    lat: 22.6105,
    lng: 91.6685,
    image: 'images/spots/sitakunda-eco-park.jpg',
    shortDesc: 'A breathtaking wild cascade hidden inside Sitakunda Eco Park, reached via dramatic stone forest staircases and stream valleys.',
  },
  {
    destinationId: 'banshbaria-sea-beach',
    name: 'Banshbaria Sea Beach & Pier',
    bnName: 'বাঁশবাড়িয়া সী বিচ ও ব্রিজ (Banshbaria Beach)',
    category: 'Beaches & Coastlines',
    difficulty: 'Easy Walk',
    bestTime: 'Afternoon Sunset',
    lat: 22.5312,
    lng: 91.6421,
    image: 'images/spots/banshbaria-sea-beach.jpg',
    shortDesc: 'Famous for its long iron footbridge extending nearly half a kilometer straight into the waves of the sea.',
  },
  {
    destinationId: 'mohamaya-lake',
    name: 'Mohamaya Lake & Kayaking Reserve',
    bnName: 'মহামায়া লেক ও কায়াকিং (Mohamaya Lake)',
    category: 'Lakes & Kayaking',
    difficulty: 'Easy to Active',
    bestTime: 'Morning & Afternoon',
    lat: 22.7933,
    lng: 91.5683,
    image: 'images/spots/mohamaya-lake.jpg',
    shortDesc: 'The 2nd largest artificial lake in Bangladesh with canyon caves and kayaking routes.',
  },
  {
    destinationId: 'napittachora-trail',
    name: 'Napittachora Triple Waterfall Trail',
    bnName: 'নাপিত্তাছড়া ওয়াটারফল ট্রেইল (Napittachora)',
    category: 'Waterfalls & Treks',
    difficulty: 'Moderate Hike',
    bestTime: 'Monsoon & Autumn',
    lat: 22.7055,
    lng: 91.5833,
    image: 'images/spots/napittachora-trail.jpg',
    shortDesc: 'A thrilling 3-in-1 waterfall gorge trail featuring Kupakatakum, Mithachora, and Bandorkum cascading falls.',
  },
  {
    destinationId: 'jhum-bari',
    name: 'Jhum Bari (Traditional Hilltop Cottage)',
    bnName: 'জুম বাড়ি (Jhum Bari)',
    category: 'Heritage & Springs',
    difficulty: 'Moderate',
    bestTime: 'Afternoon & Sunset',
    lat: 22.6250,
    lng: 91.6780,
    image: 'images/spots/jhum-bari.jpg',
    shortDesc: 'A rustic hilltop bamboo cottage and treehouse experience surrounded by lush green valleys, offering authentic tribal culture and breathtaking sunset views.',
  },
  {
    destinationId: 'akilpur-sea-beach',
    name: 'Akilpur Sea Beach',
    bnName: 'আকিলপুর সী বিচ (Akilpur Sea Beach)',
    category: 'Beaches & Coastlines',
    difficulty: 'Easy Walk',
    bestTime: 'Afternoon Sunset',
    lat: 22.5180,
    lng: 91.6550,
    image: 'images/spots/akilpur-sea-beach.jpg',
    shortDesc: 'A serene and less-crowded coastal beach near Kumira, famous for quiet sunsets, mangrove shores, and calming ocean breezes.',
  },
  {
    destinationId: 'ruposhi-jhorna',
    name: 'Ruposhi Jhorna (Ruposhi Waterfall)',
    bnName: 'রূপসী ঝর্ণা (Ruposhi Waterfall)',
    category: 'Waterfalls & Treks',
    difficulty: 'Moderate Trek',
    bestTime: 'Monsoon & Post-Monsoon',
    lat: 22.7550,
    lng: 91.5580,
    image: 'images/spots/ruposhi-jhorna.jpg',
    shortDesc: 'A captivating multistep canyon waterfall surrounded by deep green virgin forests, famous for natural bathing pools and dramatic rock slides.',
  },
  {
    destinationId: 'cafe-24',
    name: 'Cafe 24 Park & Lake (Hillview)',
    bnName: 'ক্যাফে ২৪ পার্ক ও লেক (Cafe 24 Park)',
    category: 'Lakes & Kayaking',
    difficulty: 'Easy Walk',
    bestTime: 'Afternoon & Evening',
    lat: 22.4630,
    lng: 91.7820,
    image: 'images/spots/cafe-24.jpg',
    shortDesc: 'A picturesque hilltop and lakeside recreation park in Bhatiari, featuring scenic lake boating, landscaped gardens, family rides, and open-air cafes.',
  },
  {
    destinationId: 'dc-park',
    name: 'DC Park (Chattogram Flower Fest)',
    bnName: 'ডিসি পার্ক ও ফ্লাওয়ার ফেস্টিভ্যাল (DC Park)',
    category: 'Heritage & Springs',
    difficulty: 'Easy Walk',
    bestTime: 'Afternoon & Winter (Flower Fest)',
    lat: 22.4040,
    lng: 91.7580,
    image: 'images/spots/dc-park.jpg',
    shortDesc: 'A sprawling coastal flower garden park on the Faujdarhat-Sitakunda coastline, world-famous for the grand annual Chattogram Flower Festival.',
  },
];

const initialGuides = [
  { name: 'Kazi Shakil Ahmed', phone: '01812345671', specialty: 'Mountain & Hill Ridge Trekking', experienceYears: 5, rating: 4.9, perDayRate: 1200, isAvailable: true },
  { name: 'Tanvir Hossain', phone: '01812345672', specialty: 'Waterfall Stream & Canyon Guides', experienceYears: 4, rating: 4.8, perDayRate: 1000, isAvailable: true },
  { name: 'Rezaul Karim', phone: '01812345673', specialty: 'Family & Coastal Beach Coordinator', experienceYears: 6, rating: 5.0, perDayRate: 800, isAvailable: true },
];

const initialReviews = [
  { customerName: 'Fahim Rahman (Dhaka)', tourPackage: 'Sitakunda Adventure Tour', rating: 5, reviewText: 'Amazing 2 days tour! The sunrise at Chandranath peak and BBQ at night were unforgettable.' },
  { customerName: 'Sadia Chowdhury (CU Student)', tourPackage: 'Student Group Thrill Tour', rating: 5, reviewText: 'Best budget-friendly trip with friends! The trek coordinator helped us throughout the Khaiyachora hike.' },
  { customerName: 'Dr. Mahmudul Hasan', tourPackage: 'Family Tour', rating: 5, reviewText: 'Very safe and organized for family with kids. Dedicated transport made it completely hassle-free.' },
];

const seedData = async () => {
  const connected = await connectDB();
  if (!connected) {
    console.error('Cannot seed data without active MongoDB connection.');
    process.exit(1);
  }

  try {
    console.log('Seeding Collections in MongoDB Atlas...');

    // 1. Admin User
    const adminEmail = 'admin@tourstk.com';
    let admin = await AdminUser.findOne({ email: adminEmail });
    if (!admin) {
      admin = await AdminUser.create({
        name: 'EZ Trails Sitakunda Admin',
        email: adminEmail,
        password: 'admin123456',
        role: 'superadmin',
      });
      console.log(`✅ [adminusers] Admin created (${adminEmail})`);
    } else {
      console.log(`✅ [adminusers] Admin exists`);
    }

    // 2. Packages
    for (const pkg of initialPackages) {
      await Package.findOneAndUpdate({ packageId: pkg.packageId }, pkg, { upsert: true });
    }
    console.log(`✅ [packages] ${initialPackages.length} Tour packages seeded.`);

    // 3. Destinations
    for (const dest of initialDestinations) {
      await Destination.findOneAndUpdate({ destinationId: dest.destinationId }, dest, { upsert: true });
    }
    console.log(`✅ [destinations] ${initialDestinations.length} Sitakunda spots seeded.`);

    // 4. Custom Requests (Seed sample inquiry if none)
    const reqCount = await CustomRequest.countDocuments();
    if (reqCount === 0) {
      await CustomRequest.create({
        requestId: 'REQ-2026-1001',
        customerName: 'Ashikur Rahman',
        phone: '01712345678',
        email: 'ashik@gmail.com',
        duration: '2 Days • 1 Night',
        travelDate: '2026-09-10',
        groupSize: 6,
        groupType: 'Friends',
        selectedSpots: ['chandranath-hill', 'guliakhali-sea-beach'],
        specialRequests: 'Need 1 dedicated AC HiAce microbus and BBQ dinner setup.',
        estimatedBudget: 22000,
        status: 'New',
      });
      console.log(`✅ [customrequests] Initial custom plan request created.`);
    } else {
      console.log(`✅ [customrequests] Active`);
    }

    // 5. Contact Messages (Seed sample inquiry if none)
    const msgCount = await ContactMessage.countDocuments();
    if (msgCount === 0) {
      await ContactMessage.create({
        name: 'Nazmul Huda',
        phone: '01912345678',
        email: 'nazmul@example.com',
        subject: 'Corporate Tour Inquiry',
        message: 'We have a group of 25 people from our company. Looking for a weekend tour package.',
        status: 'Unread',
      });
      console.log(`✅ [contactmessages] Initial contact message created.`);
    } else {
      console.log(`✅ [contactmessages] Active`);
    }

    // 6. Tour Guides
    for (const guide of initialGuides) {
      await TourGuide.findOneAndUpdate({ phone: guide.phone }, guide, { upsert: true });
    }
    console.log(`✅ [tourguides] ${initialGuides.length} Local Guides seeded.`);

    // 7. Reviews
    for (const rev of initialReviews) {
      await Review.findOneAndUpdate({ customerName: rev.customerName }, rev, { upsert: true });
    }
    console.log(`✅ [reviews] ${initialReviews.length} Traveler reviews seeded.`);

    console.log('🎉 All Collections successfully initialized in MongoDB Atlas!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();
