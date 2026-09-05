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
    packageId: 'adventure-squad-1',
    title: 'Adventure Squad 1 (2 Days • 1 Night)',
    bnTitle: 'অ্যাডভেঞ্চার স্কোয়াড ১ (২ দিন • ১ রাত)',
    tagline: 'Experience waterfalls, mountains, and sea beach in Sitakunda over 2 days and 1 night.',
    bnTagline: 'দুই দিনে উপভোগ করুন সীতাকুণ্ডের ঝর্ণা, পাহাড় ও সমুদ্রের অসাধারণ সৌন্দর্য।',
    category: '2 Days • 1 Night',
    duration: '2 Days • 1 Night',
    bnDuration: '২ দিন • ১ রাত',
    days: 2,
    nights: 1,
    price: 2799,
    originalPrice: 3499,
    priceNote: 'per person all-inclusive',
    bnPriceNote: 'জনপ্রতি সর্বমোট',
    badge: 'Adventure Special',
    bnBadge: 'অ্যাডভেঞ্চার স্পেশাল',
    difficulty: 'Moderate',
    bnDifficulty: 'মাঝারি',
    groupSize: 'Min 4 Travelers',
    minTravelers: 'Min 4 Travelers',
    bnMinTravelers: 'ন্যূনতম ৪ জন',
    image: 'images/spots/chandranath-hill.jpg',
    spots: [
      'ruposhi-waterfall',
      'sahasradhara-waterfall',
      'akilpur-beach',
      'banshbaria-sea-beach',
      'chandranath-hill',
      'sitakunda-eco-park',
      'guliakhali-sea-beach'
    ],
    inclusions: [
      'Comfortable Hotel Stay (1 Night)',
      'Local transport transfers between destinations',
      'Experienced friendly tour guide',
      'Entry tickets & spot access fees',
      'Full Meals: 2 Breakfasts, 2 Lunches, 1 Dinner & Evening Snacks'
    ],
    bnIncluded: [
      '১ রাত হোটেলে থাকার সুব্যবস্থা',
      'স্পটসমূহে যাতায়াতের জন্য অভ্যন্তরীণ গাড়ি সুবিধা',
      'অভিজ্ঞ ও আন্তরিক ট্যুর গাইড',
      'স্পটসমূহের এন্ট্রি টিকিট',
      'খাবার: ২ বেলা সকালের নাস্তা, ২ বেলা দুপুরের খাবার, ১ বেলা রাতের খাবার এবং সান্ধ্যকালীন নাস্তা'
    ],
    exclusions: [
      'Travel tickets to/from Sitakunda from your city',
      'Personal shopping or expenses outside package',
      'Any extra expense not mentioned in the itinerary'
    ],
    bnExcluded: [
      'নিজ শহর থেকে সীতাকুণ্ড আসা ও যাওয়ার খরচ',
      'ব্যক্তিগত কেনাকাটা বা নিজস্ব খরচ',
      'প্যাকেজে উল্লেখ নেই এমন কোনো খরচ EZ Trails বহন করবে না'
    ],
    whatToPack: [
      'Non-slip grip trekking shoes or sandals',
      'Light backpack & extra set of dry clothes',
      'Reusable water bottle & ORS saline',
      'Power bank & waterproof mobile pouch'
    ],
    bnWhatToPack: [
      'গ্রিপযুক্ত ট্র্যাকিং জুতো বা মজবুত চটি',
      'হালকা ব্যাকপ্যাক ও অতিরিক্ত সুতি শুকনো কাপড়',
      'পানির বোতল ও রিহাইড্রেশন স্যালাইন',
      'পাওয়ার ব্যাংক ও মোবাইলের ওয়াটারপ্রুফ পাউচ'
    ],
    meals: [
      {
        time: 'Day 1 • 09:00 AM',
        bnTime: '১ম দিন • সকাল ০৯:০০',
        title: 'Morning Breakfast',
        bnTitle: 'সকালের নাস্তা',
        icon: '🌅',
        items: ['Fresh Paratha', 'Egg Omelette', 'Hot Dal', 'Special Tea'],
        bnItems: ['পরোটা', 'ডিম ভাজি', 'ডাল', 'চা'],
        note: 'Freshly served at Sitakunda bazaar restaurant',
        bnNote: 'সীতাকুণ্ডে আগমন পরবর্তী ফ্রেশ হয়ে সকালের নাস্তা'
      },
      {
        time: 'Day 1 • 03:00 PM',
        bnTime: '১ম দিন • দুপুর ০৩:০০',
        title: 'Traditional Lunch',
        bnTitle: 'দুপুরের খাবার',
        icon: '☀️',
        items: ['Steamed Rice', 'Deshi Chicken Curry', 'Dal', 'Fresh Salad'],
        bnItems: ['ভাত', 'দেশি মুরগি / মুরগির মাংস', 'ডাল', 'সালাদ'],
        note: 'After exploring Ruposhi & Sahasradhara waterfalls',
        bnNote: 'ঝর্ণা ভ্রমণ শেষে তৃপ্তিদায়ক দুপুরের আহার'
      },
      {
        time: 'Day 1 • 07:00 PM',
        bnTime: '১ম দিন • সন্ধ্যা ০৭:০০',
        title: 'Evening Snacks',
        bnTitle: 'সান্ধ্যকালীন নাস্তা',
        icon: '☕',
        items: ['Hot Tea', 'Crispy Snacks / Biscuits / Noodles'],
        bnItems: ['গরম চা', 'হালকা নাস্তা / স্ন্যাক্স'],
        note: 'After Akilpur & Banshbaria sunset stroll',
        bnNote: 'সমুদ্র সৈকতে সূর্যাস্ত উপভোগ করে ফেরার পর'
      },
      {
        time: 'Day 1 • 10:00 PM',
        bnTime: '১ম দিন • রাত ১০:০০',
        title: 'Dinner Feast',
        bnTitle: 'রাতের খাবার',
        icon: '🌙',
        items: ['Hot Khichuri / Rice', 'Egg / Chicken Bhuna', 'Salad'],
        bnItems: ['খিচুড়ি অথবা ভাত', 'ডিম / মুরগি ভুনা', 'সালাদ'],
        note: 'Followed by relaxing overnight sleep at the hotel',
        bnNote: 'হোটেলে ফ্রেশ হয়ে স্বস্তিদায়ক রাতের খাবার'
      },
      {
        time: 'Day 2 • 06:00 AM',
        bnTime: '২য় দিন • সকাল ০৬:০০',
        title: 'Early Breakfast',
        bnTitle: 'ভোরের নাস্তা',
        icon: '🌄',
        items: ['Paratha', 'Egg / Bhaji', 'Hot Tea'],
        bnItems: ['পরোটা', 'ডিম / সবজি ভাজি', 'চা'],
        note: 'Energy boost before Chandranath Hill trek',
        bnNote: 'চন্দ্রনাথ পাহাড় ট্র্যাকিং শুরুর প্রাক্কালে'
      },
      {
        time: 'Day 2 • 01:30 PM',
        bnTime: '২য় দিন • দুপুর ০১:৩০',
        title: 'Grand Lunch',
        bnTitle: 'দুপুরের খাবার',
        icon: '🍲',
        items: ['Steamed Rice', 'Mejbani Beef or Fish/Chicken', 'Thick Dal', 'Salad'],
        bnItems: ['ভাত', 'গরুর মাংস অথবা মাছ/মুরগি', 'ঘন ডাল', 'সালাদ'],
        note: 'Hearty meal after hiking and eco park tour',
        bnNote: 'চন্দ্রনাথ ও ইকোপার্ক ভ্রমণ শেষে দুপুরের ভুরিভোজ'
      }
    ],
    scheduleDays: [
      {
        dayNumber: 'D1',
        dayLabel: 'DAY 1',
        bnDayLabel: '১ম দিন',
        title: 'Waterfalls & Sunset Coastlines',
        bnTitle: 'ঝর্ণার রোমাঞ্চ ও সমুদ্রের হাতছানি',
        timeline: [
          { time: '09:00 AM', bnTime: 'সকাল ০৯:০০', text: 'Arrival at Sitakunda & energetic morning breakfast', bnText: 'সীতাকুণ্ডে আগমন ও সকালের ব্রেকফাস্ট' },
          { time: '10:00 AM', bnTime: 'সকাল ১০:০০', text: 'Journey to mesmerizing Ruposhi Waterfall & Sahasradhara Waterfall', bnText: 'রূপসী ঝর্ণা ও সহস্রধারা ঝর্ণার উদ্দেশ্যে যাত্রা' },
          { time: '03:00 PM', bnTime: 'বিকেল ০৩:০০', text: 'Return to town and enjoy satisfying traditional lunch', bnText: 'ফিরে এসে দুপুরের তৃপ্তিদায়ক খাবার' },
          { time: '04:00 PM', bnTime: 'বিকেল ০৪:০০', text: 'Scenic coastal tour to Akilpur Beach & Banshbaria Sea Pier, evening snacks on return', bnText: 'আকিলপুর ও বাঁশবাড়িয়া সি বিচের উদ্দেশ্যে যাত্রা, সন্ধ্যায় ফিরে এসে নাস্তা' },
          { time: '10:00 PM', bnTime: 'রাত ১০:০০', text: 'Delicious dinner and overnight rest at the hotel', bnText: 'রাতের খাবার গ্রহণ ও হোটেলে রাত্রিযাপন' }
        ]
      },
      {
        dayNumber: 'D2',
        dayLabel: 'DAY 2',
        bnDayLabel: '২য় দিন',
        title: 'Mountain Ascent, Eco Park & Tidal Beach',
        bnTitle: 'পাহাড় চূড়া, সবুজ বনানী ও গোধূলির গুলিয়াখালী',
        timeline: [
          { time: '06:00 AM', bnTime: 'সকাল ০৬:০০', text: 'Early morning breakfast and journey towards historic Chandranath Hill', bnText: 'সকালের নাস্তা ও চন্দ্রনাথ পাহাড়ের উদ্দেশ্যে যাত্রা' },
          { time: '07:00 AM', bnTime: 'সকাল ০৭:০০', text: 'Chandranath peak trail hike to witness panoramic cloud-draped mountain views', bnText: 'পাহাড় চূড়ার উদ্দেশ্যে ট্র্যাকিং শুরু' },
          { time: '12:00 PM', bnTime: 'দুপুর ১২:০০', text: 'Trek down and visit lush Sitakunda Botanical Garden & Eco Park', bnText: 'পাহাড় থেকে নেমে এসে সীতাকুণ্ড ইকোপার্ক ভ্রমণ' },
          { time: '01:30 PM', bnTime: 'দুপুর ০১:৩০', text: 'Wholesome local lunch feast', bnText: 'দুপুরের খাবার গ্রহণ' },
          { time: '03:30 PM', bnTime: 'বিকেল ০৩:৩০', text: 'Trip to scenic Guliakhali Sea Beach with mangrove coastal canals', bnText: 'গুলিয়াখালী সি বিচের উদ্দেশ্যে যাত্রা' },
          { time: '06:30 PM', bnTime: 'সন্ধ্যা ০৬:৩০', text: 'Tour wraps up with sweet Sitakunda memories, safe journey back home', bnText: 'ট্যুর সমাপ্তি ও নিজ গন্তব্যের উদ্দেশ্যে বিদায়' }
        ]
      }
    ],
    highlights: [
      'Ruposhi & Sahasradhara Waterfalls Trail',
      'Akilpur Beach & Banshbaria Sea Walk',
      'Chandranath Hill 1,150 ft Peak Trek',
      'Sitakunda Eco Park Exploration',
      'Iconic Guliakhali Mangrove Beach',
      'Hotel Night Stay & 6 Full Meals Included'
    ],
    featured: true,
    isActive: true
  },
  {
    packageId: 'day-sitakunda-escape',
    title: '1 Day Sitakunda Escape',
    bnTitle: '১ দিন সীতাকুণ্ড এস্কেপ',
    tagline: 'Experience the breathtaking cascades and coastal sea breeze of Sitakunda in just one action-packed day.',
    bnTagline: 'একদিনেই উপভোগ করুন সীতাকুণ্ডের ঝর্ণা ও সমুদ্রের অসাধারণ সৌন্দর্য। আমাদের এই প্যাকেজে থাকছে জনপ্রিয় কয়েকটি দর্শনীয় স্থান, খাবার, লোকাল ট্রান্সপোর্ট ও অভিজ্ঞ গাইড।',
    category: '1 Day',
    duration: '1 Day',
    bnDuration: '১ দিন',
    days: 1,
    nights: 0,
    price: 1299,
    originalPrice: 1599,
    priceNote: 'per person all-inclusive',
    bnPriceNote: 'জনপ্রতি সর্বমোট',
    badge: 'Day Tour Escape',
    bnBadge: 'ডে ট্যুর এস্কেপ',
    difficulty: 'Moderate',
    bnDifficulty: 'মাঝারি ট্রেইল',
    groupSize: 'Min 4 Travelers',
    minTravelers: 'Min 4 Travelers',
    bnMinTravelers: 'ন্যূনতম ৪ জন',
    image: 'images/spots/ruposhi-jhorna.jpg',
    spots: [
      'ruposhi-jhorna',
      'chagalkanda-waterfall',
      'sahasradhara-waterfall',
      'akilpur-sea-beach',
      'banshbaria-sea-beach'
    ],
    inclusions: [
      'Entry tickets for all mentioned spots (Ruposhi, Chagalkanda, Sahasradhara 2, Beaches)',
      'Dedicated reserved local transport throughout the day (Sitakunda arrival to return)',
      'Certified & experienced local tour guide for waterfall trails and beach tour',
      'Tour safety, security supervision and on-trail group coordination',
      '2 Wholesome meals: Morning Egg Khichuri & Afternoon Chicken Lunch'
    ],
    bnIncluded: [
      'উল্লেখিত স্পটের এন্ট্রি ফি ও প্রবেশ টিকিট (রূপসী ঝর্ণা, ছাগলকান্দা, সহস্রধারা ২ ও বিচসমূহ)',
      'সারাদিনের সকল স্পটে যাতায়াতের জন্য সংরক্ষিত লোকাল ট্রান্সপোর্ট',
      'ঝর্ণা ও সৈকত ট্রেইলের অভিজ্ঞ ও আন্তরিক ট্যুর গাইড',
      'ভ্রমণকালীন সার্বিক নিরাপত্তা ও দিকনির্দেশনা',
      '২ বেলার পুষ্টিকর খাবার: সকালের ডিম খিচুড়ি এবং দুপুরের তৃপ্তিদায়ক মুরগির মাংসের লাঞ্চ'
    ],
    exclusions: [
      'Highway bus or train tickets from Dhaka/Chittagong to Sitakunda',
      'Any personal expense not explicitly mentioned in the package (EZ Trails will not bear unauthorized costs)',
      'Personal shopping, souvenirs, or additional snacks/beverages outside package'
    ],
    bnExcluded: [
      'নিজ জেলা বা ঢাকা/চট্টগ্রাম থেকে সীতাকুণ্ড আসা-যাওয়ার মূল বাস/ট্রেন টিকিট',
      'প্যাকেজে উল্লেখ নেই এমন কোনো খরচ EZ Trails বহন করবে না',
      'ব্যক্তিগত কেনাকাটা বা প্যাকেজ বহির্ভূত অতিরিক্ত খাবার/পানীয়'
    ],
    whatToPack: [
      'Anti-slip grip shoes or rubber sandals for wet waterfall canyon trails',
      'Light day backpack with 1 extra set of dry cotton clothes and towel',
      'Waterproof mobile pouch and power bank for photography',
      'Reusable water bottle and ORS hydration saline'
    ],
    bnWhatToPack: [
      'ঝর্ণার পিচ্ছিল পাথর ও পাহাড়ে হাঁটার জন্য গ্রিপযুক্ত ট্র্যাকিং জুতো বা রাবার স্যান্ডেল',
      'হালকা ডে-ব্যাকপ্যাক, গামছা ও অতিরিক্ত ১ সেট সহজে শুকায় এমন সুতি কাপড়',
      'মোবাইলের ওয়াটারপ্রুফ পাউচ ও পাওয়ার ব্যাংক',
      'ব্যক্তিগত পানির বোতল ও ওআরএস স্যালাইন'
    ],
    meals: [
      {
        time: 'Day 1 • 09:00 AM',
        bnTime: '১ম দিন • সকাল ০৯:০০',
        title: 'Morning Breakfast',
        bnTitle: 'সকালের নাস্তা (ডিম খিচুড়ি)',
        icon: '🌅',
        items: ['Authentic Egg Khichuri (Dim Khichuri)', 'Traditional Pickle', 'Salad & Mineral Water'],
        bnItems: ['ডিম খিচুড়ি', 'আচার', 'সালাদ ও খাবার পানি'],
        note: 'Freshly cooked authentic egg khichuri after arrival in Sitakunda',
        bnNote: 'সীতাকুণ্ডে আগমন পরবর্তী ফ্রেশ হয়ে সকালের নাস্তায় গরম গরম ডিম খিচুড়ি'
      },
      {
        time: 'Day 1 • 03:00 PM',
        bnTime: '১ম দিন • দুপুর ০৩:০০',
        title: 'Afternoon Lunch',
        bnTitle: 'দুপুরের খাবার (ভাত, ডাল, সবজি/ভর্তা ও মুরগি)',
        icon: '☀️',
        items: ['Steamed Rice', 'Deshi Chicken Curry', 'Thick Dal', 'Seasonal Vegetable / Vorta', 'Salad'],
        bnItems: ['সুগন্ধি সাদা ভাত', 'দেশি মুরগির মাংসের তরকারি', 'ঘন ডাল', 'সবজি / ভর্তা', 'সালাদ'],
        note: 'After exploring Ruposhi & Chagalkanda waterfalls',
        bnNote: 'ঝর্ণা ভ্রমণ শেষে সীতাকুণ্ডে ফিরে এসে তৃপ্তিদায়ক দুপুরের খাবার'
      }
    ],
    scheduleDays: [
      {
        dayNumber: 'D1',
        dayLabel: 'DAY 1',
        bnDayLabel: '১ম দিন',
        title: 'Waterfalls Exploration & Coastal Sunset',
        bnTitle: 'ঝর্ণার রোমাঞ্চ, তৃপ্তিদায়ক আহার ও সমুদ্রের হাতছানি',
        timeline: [
          { time: '09:00 AM', bnTime: 'সকাল ০৯:০০', text: 'Arrival at Sitakunda & Morning Breakfast with delicious Egg Khichuri', bnText: 'সীতাকুণ্ডে আগমন ও সকালের নাস্তা (ডিম খিচুড়ি)' },
          { time: '10:00 AM', bnTime: 'সকাল ১০:০০', text: 'Journey to Ruposhi Waterfall, Chagalkanda Waterfall & Sahasradhara 2', bnText: 'রূপশী ঝর্ণা, ছাগলকান্দা ঝর্ণার ও সহস্রধারা ২ এর উদ্দেশ্যে যাত্রা' },
          { time: '03:00 PM', bnTime: 'বিকেল ০৩:০০', text: 'Return to Sitakunda and enjoy satisfying traditional lunch (Rice, Dal, Vegetable/Vorta & Chicken)', bnText: 'সীতাকুণ্ডে ফিরে দুপুরের খাবার' },
          { time: '04:00 PM', bnTime: 'বিকেল ০৪:০০', text: 'Scenic coastal excursion to Akilpur & Banshbaria Sea Beaches', bnText: 'আকিলপুর ও বাঁশবাড়িয়া সি বিচের উদ্দেশ্যে যাত্রা' },
          { time: '06:00 PM', bnTime: 'সন্ধ্যা ০৬:০০', text: 'Return to Sitakunda and tour concludes with sweet memories', bnText: 'সীতাকুণ্ডে ফিরে ট্যুর সমাপ্তি' }
        ]
      }
    ],
    highlights: [
      'Ruposhi, Chagalkanda & Sahasradhara 2 Cascades',
      'Akilpur Beach & Banshbaria Sea Pier Sunset',
      'Egg Khichuri Breakfast & Chicken Lunch Feast',
      'Dedicated Reserved Local Transport',
      'Experienced Tour Guide & Safety Coordination',
      '100% No Hidden Charges Guarantee'
    ],
    featured: true,
    isActive: true,
  },
  {
    packageId: 'jhum-ghor-bbq-night',
    title: 'Jhum Ghor BBQ Night',
    bnTitle: 'ঝুম ঘর BBQ নাইট 🔥',
    tagline: 'Starlit friendly gathering, live charcoal BBQ, and relaxing overnight stay in a traditional hilltop Jhum Ghor amidst serene nature.',
    bnTagline: 'প্রকৃতির মাঝে রাতের আড্ডা, BBQ আর বন্ধুদের সাথে একসাথে থাকার দারুণ আয়োজন! 🌙',
    category: 'Overnight • BBQ',
    duration: 'Overnight • 1 Night',
    bnDuration: '১ রাত (ওভারনাইট)',
    days: 1,
    nights: 1,
    price: 599,
    originalPrice: 799,
    priceNote: 'per person (Min 2 days advance booking)',
    bnPriceNote: 'জনপ্রতি (কমপক্ষে ২ দিন আগে বুকিং)',
    badge: 'Campfire Special',
    bnBadge: 'ক্যাম্পফায়ার স্পেশাল 🔥',
    difficulty: 'Easy / Relaxing',
    bnDifficulty: 'খুব সহজ ও আরামদায়ক',
    groupSize: 'Max 15 Travelers',
    minTravelers: 'Max 15 Travelers',
    bnMinTravelers: 'সর্বোচ্চ ১৫ জনের ক্যাপাসিটি',
    image: 'images/spots/jhum-bari-camp.jpg',
    spots: ['jhum-bari'],
    inclusions: [
      'Overnight stay in authentic hilltop bamboo Jhum Ghor cottage',
      'Live Charcoal BBQ Dinner (BBQ Chicken, Paratha, Salad/Sauce, Drinks)',
      'Evening campfire arrangement and starlit gathering (আড্ডা)',
      'Safe, secure, and serene hillside nature environment',
      'Intimate squad experience with max 15 travelers capacity',
      '100% Transparent pricing: Guaranteed NO hidden charges'
    ],
    bnIncluded: [
      'ঐতিহ্যবাহী পাহাড়ি বাঁশের ঝুম ঘরে (Jhum Ghor) আরামদায়ক রাত্রিযাপন',
      'লাইভ বারবিকিউ ডিনার (কয়লার ফ্রেশ BBQ চিকেন, পরোটা, সালাদ/সস ও পানীয়)',
      'সন্ধ্যায় ক্যাম্পফায়ার ও বন্ধুদের সাথে খোলা আকাশের নিচে জমজমাট আড্ডা',
      'সম্পূর্ণ নিরাপদ, মার্জিত ও নিরিবিলি প্রাকৃতিক পরিবেশ',
      'সর্বোচ্চ ১৫ জনের ক্যাপাসিটি (বন্ধু বা পরিবারের একান্ত সময় কাটানোর দারুণ আয়োজন)',
      'স্বচ্ছ ভ্রমণ পলিসি: EZ Trails-এর কোনো হিডেন চার্জ নেই'
    ],
    exclusions: [
      'Transportation to and from Jhum Ghor base/Sitakunda',
      'Any personal expense or extra snacks outside BBQ menu',
      'Personal medications and individual tips'
    ],
    bnExcluded: [
      'সীতাকুণ্ড বা নিজস্ব স্থান থেকে ঝুম ঘরে যাতায়াত খরচ',
      'BBQ মেন্যুর বাইরে অতিরিক্ত খাবার বা ব্যক্তিগত খরচ',
      'ব্যক্তিগত ওষুধ ও নিজস্ব টিপস'
    ],
    whatToPack: [
      'Light shawl or warm hoodie for the breezy night hill climate',
      'Power bank and camera for nighttime photos and memories',
      'Personal toiletries and necessary medications',
      'Comfortable walking footwear or sandals'
    ],
    bnWhatToPack: [
      'রাতের পাহাড়ি মিষ্টি ঠান্ডার জন্য হালকা চাদর বা হুডি',
      'মোবাইলের জন্য পাওয়ার ব্যাংক ও ক্যামেরা',
      'ব্যক্তিগত প্রসাধন সামগ্রী ও প্রয়োজনীয় ওষুধপত্র',
      'পাহাড়ে হাঁটার উপযোগী আরামদায়ক স্যান্ডেল বা জুতো'
    ],
    meals: [
      {
        time: 'Night • 08:30 PM',
        bnTime: 'রাত ০৮:৩০',
        title: 'Live Charcoal BBQ Dinner',
        bnTitle: 'লাইভ বারবিকিউ ডিনার ও নাস্তা',
        icon: '🍖',
        items: ['Charcoal Grilled BBQ Chicken', 'Fresh Crispy Paratha', 'Special Dipping Sauce & Salad', 'Chilled Refreshing Beverage (Drink)'],
        bnItems: ['কয়লার ফ্রেশ BBQ চিকেন', 'গরম পরোটা', 'সালাদ ও স্পেশাল সস', 'ঠান্ডা পানীয়'],
        note: 'Freshly grilled live BBQ served hot with parathas and dipping sauce in the serene hills',
        bnNote: 'প্রকৃতির মাঝে কয়লার আগুনে তৈরি ফ্রেশ বারবিকিউ চিকেন, গরম পরোটা, সালাদ/সস ও পানীয়'
      }
    ],
    scheduleDays: [
      {
        dayNumber: 'D1',
        dayLabel: 'SCHEDULE',
        bnDayLabel: 'সময়সূচি',
        title: 'Check-in, Evening আড্ডা, BBQ Night & Jhum Ghor Overnight Stay',
        bnTitle: 'চেক-ইন, সান্ধ্যকালীন আড্ডা, BBQ নাইট ও ঝুম ঘরে রাত্রিযাপন',
        timeline: [
          { time: '04:00 PM', bnTime: 'বিকেল ০৪:০০', text: 'Check-in: Arrival at hilltop Jhum Ghor, freshen up, and welcome to serene nature.', bnText: 'Check-in (বিকেল ৪:০০টা): ঝুম ঘরে আগমন ও পাহাড়ি শান্ত ছিমছাম পরিবেশে অভ্যর্থনা।' },
          { time: '06:00 PM', bnTime: 'সন্ধ্যা ০৬:০০', text: 'Evening: Sunset over the green ridges, campfire lighting, and lively friendly gathering (আড্ডা).', bnText: 'Evening: সূর্যাস্ত উপভোগ, ক্যাম্পফায়ার ও বন্ধুদের সাথে জমজমাট আড্ডা।' },
          { time: '08:30 PM', bnTime: 'রাত ০৮:৩০', text: 'BBQ Night: Live charcoal grilling begins! Enjoy hot BBQ chicken, parathas, sauce, salad & drinks.', bnText: 'BBQ Night: কয়লার ফ্রেশ বারবিকিউ চিকেন, পরোটা, সালাদ/সস ও পানীয় সহযোগে দারুণ ভোজ।' },
          { time: '11:00 PM', bnTime: 'রাত ১১:০০', text: 'Overnight: Peaceful rest and overnight stay in authentic bamboo Jhum Ghor under the starry sky.', bnText: 'Overnight: তারার নিচে ঐতিহ্যবাহী বাঁশের ঝুম ঘরে রাত্রিযাপন ও পাহাড়ি নিস্তব্ধতা উপভোগ।' },
          { time: '10:00 AM', bnTime: 'পরদিন সকাল ১০:০০', text: 'Check-out (Next Day 10:00 AM): Fresh morning mountain breeze, sweet memories & Check-out.', bnText: 'Check-out (পরদিন সকাল ১০:০০টা): পাহাড়ি স্নিগ্ধ সকালের সৌন্দর্য ও মিষ্টি স্মৃতি নিয়ে চেক-আউট।' }
        ]
      }
    ],
    highlights: [
      'Authentic Bamboo Jhum Ghor Overnight Stay',
      'Live Charcoal BBQ Chicken Dinner (Paratha, Sauce, Drinks)',
      'Evening Campfire & Relaxing Starlit আড্ডা',
      'Safe, Secure & Peaceful Hilltop Environment',
      'Maximum 15 Guests Capacity for Private Squad Comfort',
      'Advance Booking Required (Min 2 Days Prior)',
      '100% Transparent Policy: No Hidden Charges'
    ],
    featured: true,
    isActive: true,
  }
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
