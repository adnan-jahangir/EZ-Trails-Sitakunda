// ==========================================================================
// EZ TRILL SITAKUNDA (TOURSTK) - COMPLETE AUTHENTIC DATA STORE
// 12 Sitakunda Destinations with Local Real Downloaded Assets & Online CDNs
// ==========================================================================

const TOURSTK = {
  // 12 Authentic Iconic Sitakunda Destinations
  destinations: [
    {
      id: 'chandranath-hill',
      name: 'Chandranath Hill & Summit',
      bnName: 'চন্দ্রনাথ পাহাড় (Chandranath Hill)',
      category: 'Hills & Peaks',
      categoryIcon: 'terrain',
      difficulty: 'Moderate to Hard',
      elevation: '1,152 ft',
      duration: '2 Days • 1 Night',
      bestTime: 'Sunrise & Morning',
      lat: 22.6189,
      lng: 91.6811,
      image: 'images/spots/chandranath-hill.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/chandranath-hill.jpg', thumb: 'images/spots/chandranath-hill.jpg', label: 'Summit Peak' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80', label: 'Sunrise Ridge' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', label: 'Valley View' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80', label: '4K Drone Tour' }
      ],
      shortDesc: 'The highest peak in Chittagong district (1,152 ft) offering sweeping 360-degree views of misty green hills, cloud valleys, and the Bay of Bengal coastline.',
      description: 'Chandranath Hill stands tall as the crown jewel of Sitakunda. Rising 1,152 feet above sea level, the trekking route features stairways and scenic forest trails that lead to the sacred temple at the summit. Morning clouds float beneath the ridge, making it Bangladesh’s most popular sunrise ridge hike.',
      tags: ['Trekking', 'Sunrise Peak', 'Cloud Valley', 'Scenic Photography'],
      thingsToDo: ['Summit sunrise photography', 'Ridge cloud watching', 'Ancient temple exploration', 'Forest trail walking'],
      tips: ['Start hiking by 5:30 AM to catch golden sunrise', 'Carry at least 1.5L drinking water and trekking pole', 'Wear non-slip hiking boots']
    },
    {
      id: 'guliakhali-sea-beach',
      name: 'Guliakhali Sea Beach',
      bnName: 'গুলিয়াখালী সী বিচ (Guliakhali Beach)',
      category: 'Beaches & Coastlines',
      categoryIcon: 'beach_access',
      difficulty: 'Easy Walk',
      elevation: 'Sea Level',
      duration: '1 Day Trip',
      bestTime: 'Late Afternoon / Sunset',
      lat: 22.5694,
      lng: 91.5975,
      image: 'images/spots/guliakhali-sea-beach.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/guliakhali-sea-beach.jpg', thumb: 'images/spots/guliakhali-sea-beach.jpg', label: 'Green Lawn' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80', label: 'Sunset Waves' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=300&q=80', label: 'Tidal Canals' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', thumb: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=300&q=80', label: '4K Beach Video' }
      ],
      shortDesc: 'A rare coastal green carpet landscape where velvety green grass plains meet tidal mangrove canals and the tranquil sea.',
      description: 'Unlike standard sandy beaches, Guliakhali (also known as Muradpur Beach) is famous for its lush green grass carpet divided by natural tidal water channels, framed by sprawling mangrove forests on one side and the open sea on the other.',
      tags: ['Green Lawn Beach', 'Mangrove Canals', 'Sunset Drone Spot', 'Family Friendly'],
      thingsToDo: ['Walking on coastal green lawns', 'Tidal canal boat ride', 'Golden hour sunset shoot', 'Mangrove forest stroll'],
      tips: ['Check high tide and low tide timings before visiting', 'Late afternoon (3:30 PM - 6:00 PM) offers the best lighting', 'Barefoot walking on the grass carpet is soothing']
    },
    {
      id: 'khaiyachora-waterfall',
      name: 'Khaiyachora 9-Step Waterfall',
      bnName: 'খৈয়াছড়া ওয়াটারফল (Khaiyachora Waterfall)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'water_drop',
      difficulty: 'Challenging Trail',
      elevation: 'Mountain Cascades',
      duration: '1 Day Hike',
      bestTime: 'Monsoon & Post-Monsoon',
      lat: 22.7486,
      lng: 91.5647,
      image: 'images/spots/khaiyachora-waterfall.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/khaiyachora-waterfall.jpg', thumb: 'images/spots/khaiyachora-waterfall.jpg', label: 'Main Tier' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=300&q=80', label: '9 Cascades' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=300&q=80', label: 'Forest Canyon' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=300&q=80', label: '4K Waterfall Trek' }
      ],
      shortDesc: 'Known as the Queen of Waterfalls in Bangladesh — a magnificent 9-tier cascading waterfall deep inside ancient mountain forests.',
      description: 'Hidden in the hills of Mirsharai-Sitakunda range, Khaiyachora cascades down through nine breathtaking stone steps. Reaching the upper tiers requires crossing streams, bamboo groves, and climbing rocky cliffs guided by experienced trek leaders.',
      tags: ['9-Tier Cascades', 'Stream Trekking', 'Natural Pool Bath', 'Extreme Adventure'],
      thingsToDo: ['Cascading freshwater bath', 'Multi-tier mountain climb', 'Stream boulder trekking', 'Jungle picnic'],
      tips: ['Certified local guide is compulsory for safety', 'Keep smartphones in waterproof bags', 'Carry high-grip trail shoes with good drainage']
    },
    {
      id: 'sitakunda-eco-park',
      name: 'Sitakunda Eco Park & Botanical Garden',
      bnName: 'সীতাকুণ্ড ইকোপার্ক ও ঝুলন্ত ব্রিজ (Eco Park)',
      category: 'Hills & Peaks',
      categoryIcon: 'park',
      difficulty: 'Easy to Moderate',
      elevation: 'Forest Reserve',
      duration: 'Half Day',
      bestTime: 'Year Round',
      lat: 22.6105,
      lng: 91.6685,
      image: 'images/spots/sitakunda-eco-park.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/sitakunda-eco-park.jpg', thumb: 'images/spots/sitakunda-eco-park.jpg', label: 'Hanging Bridge' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=300&q=80', label: 'Botanical Reserve' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80', label: 'Jungle Canopy' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4', thumb: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=300&q=80', label: '4K Park Tour' }
      ],
      shortDesc: 'A lush 1,996-acre forest reserve featuring iconic suspension bridges, deer sanctuaries, exotic botanical plant species, and hidden springs.',
      description: 'Bangladesh’s first eco-park stretches over almost 2,000 acres of scenic mountain valleys. It houses a rare botanical conservatory, hanging suspension footbridge over green valleys, and shaded paved paths ideal for comfortable family sightseeing.',
      tags: ['Hanging Bridge', 'Botanical Conservatory', 'Deer Sanctuary', 'Family Picnic'],
      thingsToDo: ['Suspension bridge crossing', 'Exploring Suptadhara spring trail', 'Wildlife and deer watching', 'Orchid garden visit'],
      tips: ['Direct vehicle access available up to primary viewpoints', 'Great destination for seniors and kids', 'Open daily 8:30 AM to 5:00 PM']
    },
    {
      id: 'banshbaria-sea-beach',
      name: 'Banshbaria Sea Beach & Pier',
      bnName: 'বাঁশবাড়িয়া সী বিচ ও ব্রিজ (Banshbaria Beach)',
      category: 'Beaches & Coastlines',
      categoryIcon: 'wb_twilight',
      difficulty: 'Easy Walk',
      elevation: 'Sea Wharf',
      duration: 'Sunset Trip',
      bestTime: 'Afternoon Sunset',
      lat: 22.5312,
      lng: 91.6421,
      image: 'images/spots/banshbaria-sea-beach.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/banshbaria-sea-beach.jpg', thumb: 'images/spots/banshbaria-sea-beach.jpg', label: 'Sea Bridge Pier' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=300&q=80', label: 'Sunset Waves' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80', label: 'Casuarina Shore' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', thumb: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=300&q=80', label: '4K Pier Video' }
      ],
      shortDesc: 'Famous for its long iron footbridge extending nearly half a kilometer straight into the waves of the sea.',
      description: 'Banshbaria beach is celebrated for its scenic extended pier bridge that lets visitors walk directly over roaring sea waves without getting wet. The wide sandy beach lined with coastal casuarina trees provides a breezy escape.',
      tags: ['Sea Footbridge', 'Coastal Casuarina Trees', 'Breezy Pier', 'Sunset View'],
      thingsToDo: ['Walking the iron sea bridge', 'Speedboat ocean rides', 'Fresh green coconut drinks', 'Beach photography'],
      tips: ['Do not step off the pier during turbulent high tide', 'Visit around 4:00 PM for the coolest sea breeze']
    },
    {
      id: 'bhatiari-lake',
      name: 'Bhatiari Lake & Sunset Hills',
      bnName: 'ভাটিয়ারী লেক ও সানসেট পয়েন্ট (Bhatiari Lake)',
      category: 'Lakes & Kayaking',
      categoryIcon: 'kayaking',
      difficulty: 'Relaxed / Leisure',
      elevation: 'Hillside Lake',
      duration: 'Day & Sunset',
      bestTime: 'Late Afternoon',
      lat: 22.4285,
      lng: 91.7588,
      image: 'images/spots/bhatiari-lake.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/bhatiari-lake.jpg', thumb: 'images/spots/bhatiari-lake.jpg', label: 'Lake Water' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80', label: 'Sunset Cafe' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', label: 'Winding Hills' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80', label: '4K Sunset Tour' }
      ],
      shortDesc: 'Crystal turquoise hill lake surrounded by manicured military cantonment ridges, sunset coffee cafes, and scenic winding roads.',
      description: 'Located at the southern entrance of Sitakunda, Bhatiari is renowned for its impeccably clean winding mountain roads, shimmering lake, tranquil boat rides, and hilltop open-air cafes overlooking scenic sunsets.',
      tags: ['Hill Lake', 'Boating & Coffee', 'Winding Cantonment Road', 'Couple Friendly'],
      thingsToDo: ['Lake boat cruise', 'Hilltop cafe coffee & snacks', 'Sunset ridge view', 'Scenic drive photography'],
      tips: ['ID verification may be required at the entry checkpost', 'Strictly maintained cleanliness and speed limits apply']
    },
    {
      id: 'mohamaya-lake',
      name: 'Mohamaya Lake & Kayaking Reserve',
      bnName: 'মহামায়া লেক ও কায়াকিং (Mohamaya Lake)',
      category: 'Lakes & Kayaking',
      categoryIcon: 'rowing',
      difficulty: 'Easy to Active',
      elevation: 'Hill Basin',
      duration: '2 Days • 1 Night',
      bestTime: 'Morning & Afternoon',
      lat: 22.7933,
      lng: 91.5683,
      image: 'images/spots/mohamaya-lake.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/mohamaya-lake.jpg', thumb: 'images/spots/mohamaya-lake.jpg', label: 'Kayaking Basin' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&q=80', label: 'Canyon Caves' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', label: 'Lakeside Camp' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&q=80', label: '4K Kayaking Video' }
      ],
      shortDesc: 'The 2nd largest artificial lake in Bangladesh, surrounded by evergreen hills, hidden canyon caves, and thrilling kayaking routes.',
      description: 'Spanning over 11 square kilometers of calm water encircled by towering mountain ranges, Mohamaya is the premier kayaking and electric boating destination in Chittagong. Hidden canyon passages lead to private interior waterfalls.',
      tags: ['Kayaking', 'Canyon Waterfall', 'Lake Camping', 'Speedboating'],
      thingsToDo: ['Kayaking across hill canyons', 'Engine boat ride to interior waterfall', 'Lakeside camping & BBQ', 'Hill ridge hiking'],
      tips: ['Life jackets are mandatory for all kayakers and boaters', 'Early morning kayaking offers glassy calm waters']
    },
    {
      id: 'napittachora-trail',
      name: 'Napittachora Triple Waterfall Trail',
      bnName: 'নাপিত্তাছড়া ওয়াটারফল ট্রেইল (Napittachora)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'water_drop',
      difficulty: 'Moderate Hike',
      elevation: 'Gorge Canyons',
      duration: '1 Day Adventure',
      bestTime: 'Monsoon & Autumn',
      lat: 22.7055,
      lng: 91.5833,
      image: 'images/spots/napittachora-trail.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/napittachora-trail.jpg', thumb: 'images/spots/napittachora-trail.jpg', label: 'Bandorkum Fall' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80', label: 'Kupakatakum Fall' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=300&q=80', label: 'Mossy Stream' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4', thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80', label: '4K Trek Video' }
      ],
      shortDesc: 'A thrilling 3-in-1 waterfall gorge trail featuring Kupakatakum, Mithachora, and Bandorkum cascading falls.',
      description: 'Napittachora is one of the most rewarding gorge treks in Sitakunda. Within a single 3-hour jungle trail, hikers encounter three distinct, roaring waterfalls enclosed by mossy stone canyons and hanging mountain vines.',
      tags: ['Triple Waterfalls', 'Gorge Trekking', 'Mossy Canyons', 'Adventure Trail'],
      thingsToDo: ['Trekking through shallow rocky streams', 'Bathing at Bandorkum waterfall', 'Jungle nature photography'],
      tips: ['Trek in groups of 4 or more with a local guide', 'Avoid trekking during severe heavy thunderstorm flash flood alerts']
    },
    {
      id: 'jhorjhori-trail',
      name: 'Jhorjhori Trail & Murti Waterfall',
      bnName: 'ঝরঝরি ট্রেইল ও ওয়াটারফল (Jhorjhori Trail)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'hiking',
      difficulty: 'Active Jungle Trek',
      elevation: 'Hidden Valleys',
      duration: '1 Day Hike',
      bestTime: 'Rainy & Winter Seasons',
      lat: 22.7210,
      lng: 91.5720,
      image: 'images/spots/jhorjhori-trail.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/jhorjhori-trail.jpg', thumb: 'images/spots/jhorjhori-trail.jpg', label: 'Murti Waterfall' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=300&q=80', label: 'Natural Stone Slide' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80', label: 'Limestone Canyon' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', thumb: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=300&q=80', label: '4K Trail Reel' }
      ],
      shortDesc: 'A serene, untouched wilderness trek with natural rock water-slides and the famous hidden Murti cascading fall.',
      description: 'For travelers seeking pristine nature away from common crowds, Jhorjhori trail in Panthochil offers crystal-clear hill streams, smooth natural stone slides, and limestone mountain formations.',
      tags: ['Untouched Wilderness', 'Natural Rock Slide', 'Limestone Gorge', 'Peaceful Stream'],
      thingsToDo: ['Stream wading', 'Rock slide glides', 'Wilderness hiking', 'Picnic by stone pool'],
      tips: ['Pack light with quick-drying clothes and dry bags for electronics']
    },
    {
      id: 'barabkunda-fire-spring',
      name: 'Barabkunda Fire Spring & Lava Springs',
      bnName: 'বাড়বকুণ্ড ফায়ার স্প্রিং (Barabkunda Fire Spring)',
      category: 'Heritage & Springs',
      categoryIcon: 'local_fire_department',
      difficulty: 'Easy Walk',
      elevation: 'Hill Foot',
      duration: 'Half Day',
      bestTime: 'Daytime',
      lat: 22.5938,
      lng: 91.6705,
      image: 'images/spots/barabkunda-fire-spring.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/barabkunda-fire-spring.jpg', thumb: 'images/spots/barabkunda-fire-spring.jpg', label: 'Burning Water' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80', label: 'Ancient Temple' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', label: 'Hot Spring' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', thumb: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80', label: '4K Spring Video' }
      ],
      shortDesc: 'A rare geological wonder where natural underground methane gas fuels perpetual flames dancing on natural water springs.',
      description: 'Barabkunda houses hot water springs and natural eternal fire fissures embedded in volcanic stone beds. Revered for centuries for both spiritual heritage and geological fascination.',
      tags: ['Perpetual Flame', 'Natural Hot Spring', 'Geological Wonder', 'Heritage'],
      thingsToDo: ['Witnessing burning water springs', 'Visiting historical stone temples', 'Learning local folklore'],
      tips: ['Respect local cultural sanctuaries and avoid touching open natural flame vents']
    },
    {
      id: 'kumira-ghat',
      name: 'Kumira Sandwip Pier & Coastal Wharf',
      bnName: 'কুমিরা ঘাট ও স্পিডবোট জেটি (Kumira Ghat)',
      category: 'Beaches & Coastlines',
      categoryIcon: 'directions_boat',
      difficulty: 'Easy Walk',
      elevation: 'Sea Level',
      duration: 'Sunset Pier Trip',
      bestTime: 'Sunset & High Tide',
      lat: 22.5186,
      lng: 91.7161,
      image: 'images/spots/kumira-ghat.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/kumira-ghat.jpg', thumb: 'images/spots/kumira-ghat.jpg', label: 'Speedboat Pier' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=300&q=80', label: 'Sunset Horizon' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=300&q=80', label: 'Fishing Boats' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', thumb: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=300&q=80', label: '4K Sea Channel' }
      ],
      shortDesc: 'The bustling coastal speedboat gateway connecting mainland Sitakunda to Sandwip island, famous for breezy sunset views.',
      description: 'Kumira Ghat offers an expansive open view of the sea channel with fishermen casting nets, sea gulls soaring overhead, and traditional wooden boats bobbing against modern speedboats.',
      tags: ['Gateway to Sandwip', 'Coastal Sunset', 'Fishermen Pier', 'Sea Breeze'],
      thingsToDo: ['Sunset watch from wharf', 'Speedboat channel ride', 'Fresh sea fish bazaar visit'],
      tips: ['Evening tea and hot snacks are popular around the wharf shops']
    },
    {
      id: 'sahasradhara-waterfall',
      name: 'Sahasradhara Waterfall (Eco Park)',
      bnName: 'সহস্রধারা ওয়াটারফল (Sahasradhara Waterfall)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'water_drop',
      difficulty: 'Easy Walk with Staircase',
      elevation: 'Lakeside Falls',
      duration: 'Half Day',
      bestTime: 'Morning & Afternoon',
      lat: 22.6133,
      lng: 91.6660,
      image: 'images/spots/sahasradhara-waterfall.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        { type: 'image', src: 'images/spots/sahasradhara-waterfall.jpg', thumb: 'images/spots/sahasradhara-waterfall.jpg', label: 'Waterfall Pool' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=300&q=80', label: 'Eco Staircase' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=80', thumb: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=300&q=80', label: 'Lakeside Stream' },
        { type: 'video', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', thumb: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=300&q=80', label: '4K Waterfall View' }
      ],
      shortDesc: 'A serene waterfall inside the Eco Park nestled amidst dense mahogany and bamboo forests with staircase access.',
      description: 'Sahasradhara is the most accessible waterfall in Sitakunda, making it ideal for families and casual walkers. Paved concrete steps and scenic lookout pavilions lead right to the base of the waterfall pool.',
      tags: ['Family Accessible', 'Paved Stairs', 'Pavilion View', 'Picnic Spot'],
      thingsToDo: ['Family stroll down the staircase', 'Fresh spring water splash', 'Lakeside resting under forest shade'],
      tips: ['Stairs can be slippery after rain; use handrails when descending']
    }
  ],

  // Curated Signature Tour Packages (Matching User Screenshot Layout)
  packages: [
    {
      id: 'sitakunda-adventure-tour',
      name: 'Sitakunda Adventure Tour',
      tagline: 'The flagship complete experience covering Chandranath peak, coastal sea breeze and scenic trails.',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      badge: 'Popular',
      minTravelers: 'Min 4 Travelers',
      difficulty: 'Moderate',
      price: 3490,
      priceNote: 'per person',
      duration: '2 Days • 1 Night',
      image: 'images/spots/chandranath-hill.jpg',
      destinations: ['chandranath-hill', 'guliakhali-sea-beach', 'sitakunda-eco-park'],
      shortDesc: 'The flagship complete experience covering Chandranath peak, coastal sea breeze and scenic trails.',
      includesList: ['Transport', 'Accommodation', 'Meals', 'Tour Guide'],
      included: [
        'Dedicated AC local transport (Sitakunda Bus Station pickup & return)',
        'Overnight Deluxe Room / Resort stay (Twin share)',
        'All meals included (Breakfast, Lunch, Dinner BBQ)',
        'Certified local mountain & beach guide'
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          title: 'Scenic Escapes & Coastal Sunset for Two',
          timeline: [
            { time: '10:00 AM', text: 'Private arrival greeting & welcome drink at Sitakunda Bus Station' },
            { time: '11:00 AM', text: 'Check-in to partner deluxe room to freshen up' },
            { time: '01:00 PM', text: 'Curated lunch at partner venue' },
            { time: '03:30 PM', text: 'Private drive to Guliakhali Green Beach' },
            { time: '05:30 PM', text: 'Golden hour photography & seaside tranquility' },
            { time: '08:30 PM', text: 'Special live BBQ dinner' }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          title: 'Gentle Nature Trails & Departure',
          timeline: [
            { time: '08:30 AM', text: 'Breakfast at accommodation' },
            { time: '10:00 AM', text: 'Visit peaceful viewpoints around Botanical Garden & Eco Park' },
            { time: '01:00 PM', text: 'Lunch' },
            { time: '03:30 PM', text: 'Local market stroll & sweet treats' },
            { time: '05:00 PM', text: 'Tour completion & return drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    },
    {
      id: 'day-sitakunda-escape',
      name: '1 Day Sitakunda Escape',
      tagline: 'The best day-trip itinerary for busy travelers seeking maximum adventure in minimal time.',
      category: '1 Day',
      type: '1 Day',
      badge: 'Best Seller',
      minTravelers: 'Min 4 Travelers',
      difficulty: 'Moderate',
      price: 1590,
      priceNote: 'per person',
      duration: '1 Day',
      image: 'images/spots/guliakhali-sea-beach.jpg',
      destinations: ['chandranath-hill', 'guliakhali-sea-beach', 'sitakunda-eco-park'],
      shortDesc: 'The best day-trip itinerary for busy travelers seeking maximum adventure in minimal time.',
      includesList: ['Transport', 'Meals', 'Tour Guide', 'Entry Tickets'],
      included: [
        'Dedicated AC local transport (Sitakunda Bus Station pickup & return)',
        'Traditional local feast style buffet lunch',
        'Certified local trekking guide for hill trails',
        'All forest reserve entry tickets & parking permits'
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          title: 'Iconic Peak Trek & Coastal Sunset Day Out',
          timeline: [
            { time: '08:00 AM', text: 'Arrival & greeting at Sitakunda Bus Station' },
            { time: '08:30 AM', text: 'Guided trek up Chandranath Hill summit' },
            { time: '01:00 PM', text: 'Authentic local feast style lunch' },
            { time: '02:30 PM', text: 'Sitakunda Eco Park & hanging bridge walk' },
            { time: '04:30 PM', text: 'Guliakhali Green Beach sunset stroll' },
            { time: '07:30 PM', text: 'Return drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    },
    {
      id: 'weekend-2d1n-adventure',
      name: '2 Days 1 Night Adventure',
      tagline: 'Balanced weekend getaway tailored for active friends and nature enthusiasts.',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      badge: 'Adventure',
      minTravelers: 'Min 4 Travelers',
      difficulty: 'Moderate',
      price: 3200,
      priceNote: 'per person',
      duration: '2 Days • 1 Night',
      image: 'images/spots/khaiyachora-waterfall.jpg',
      destinations: ['khaiyachora-waterfall', 'chandranath-hill', 'guliakhali-sea-beach'],
      shortDesc: 'Balanced weekend getaway tailored for active friends and nature enthusiasts.',
      includesList: ['Transport', 'Accommodation', 'Meals', 'Tour Guide'],
      included: [
        'Round-trip local transport from Sitakunda Bus Station',
        'Overnight eco-resort stay (Twin share)',
        '4 Full meals including night BBQ',
        'Khaiyachora waterfall guide & trekking gears'
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          title: 'Waterfall Expedition & Evening BBQ',
          timeline: [
            { time: '09:00 AM', text: 'Arrival at Sitakunda Bus Station & transfer to Khaiyachora' },
            { time: '10:00 AM', text: '9-Tier waterfall hike with natural cascade bath' },
            { time: '02:00 PM', text: 'Traditional hot village lunch' },
            { time: '05:00 PM', text: 'Resort check-in & freshen up' },
            { time: '08:00 PM', text: 'Campfire & live BBQ dinner' }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          title: 'Summit Sunrise & Beach Twilight',
          timeline: [
            { time: '05:30 AM', text: 'Chandranath sunrise trek' },
            { time: '09:00 AM', text: 'Breakfast at hill base' },
            { time: '03:30 PM', text: 'Guliakhali Beach photography' },
            { time: '06:00 PM', text: 'Return drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    },
    {
      id: 'family-tour',
      name: 'Family Tour',
      tagline: 'Carefully curated easy-paced itinerary with priority comfort, family-safe trails and delicious meals.',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      badge: 'Family Safe',
      minTravelers: 'Min 4 Travelers',
      difficulty: 'Easy',
      price: 3850,
      priceNote: 'per person',
      duration: '2 Days • 1 Night',
      image: 'images/spots/bhatiari-lake.jpg',
      destinations: ['sitakunda-eco-park', 'bhatiari-lake', 'banshbaria-sea-beach'],
      shortDesc: 'Carefully curated easy-paced itinerary with priority comfort, family-safe trails and delicious meals.',
      includesList: ['Transport', 'Accommodation', 'Meals', 'Tour Guide'],
      included: [
        'Private dedicated AC vehicle throughout the tour',
        'Premium family resort rooms',
        'Mild hygienic family buffet meals',
        'Senior and child friendly boat rides'
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          title: 'Comfort Sightseeing & Lake Boating',
          timeline: [
            { time: '10:00 AM', text: 'Sitakunda Bus Station reception & resort check-in' },
            { time: '01:00 PM', text: 'Family buffet lunch' },
            { time: '03:30 PM', text: 'Bhatiari Hill Lake boating & afternoon tea' },
            { time: '07:30 PM', text: 'Family dinner at resort' }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          title: 'Eco Park Walk & Coastal Sea Breeze',
          timeline: [
            { time: '08:30 AM', text: 'Breakfast at resort' },
            { time: '10:00 AM', text: 'Sitakunda Eco Park botanical drive & deer feeding' },
            { time: '01:00 PM', text: 'Lunch' },
            { time: '03:30 PM', text: 'Banshbaria sea pier walk' },
            { time: '06:00 PM', text: 'Return drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    },
    {
      id: 'couple-tour',
      name: 'Couple Tour',
      tagline: 'Private and memorable retreat with peaceful scenic destinations, flexible schedules, and private comfort.',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      badge: 'Honeymoon Special',
      minTravelers: 'Min 2 Travelers',
      difficulty: 'Easy',
      price: 4200,
      priceNote: 'per person',
      duration: '2 Days • 1 Night',
      image: 'images/spots/banshbaria-sea-beach.jpg',
      destinations: ['bhatiari-lake', 'guliakhali-sea-beach', 'mohamaya-lake'],
      shortDesc: 'Private and memorable retreat with peaceful scenic destinations, flexible schedules, and private comfort.',
      includesList: ['Transport', 'Accommodation', 'Meals', 'Tour Guide'],
      included: [
        'Private AC Sedan car for couple throughout',
        'Premium Deluxe Couple Room with hill/lake view',
        'Candlelight BBQ dinner setup & private boating',
        'Discreet personal tour coordinator'
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          title: 'Romantic Sunset & Candlelight Dinner',
          timeline: [
            { time: '11:00 AM', text: 'Arrival & luxury check-in with welcome drinks' },
            { time: '01:00 PM', text: 'Curated intimate lunch' },
            { time: '04:00 PM', text: 'Guliakhali private sunset walk' },
            { time: '08:00 PM', text: 'Private candlelight BBQ dinner under the stars' }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          title: 'Lake Kayaking & Hill Cafe Romance',
          timeline: [
            { time: '08:30 AM', text: 'Continental breakfast' },
            { time: '10:30 AM', text: 'Mohamaya Lake couple kayaking into canyon caves' },
            { time: '01:30 PM', text: 'Hilltop cafe lunch overlooking sunset ridges' },
            { time: '05:00 PM', text: 'Drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    },
    {
      id: 'student-group-tour',
      name: 'Student Group Tour',
      tagline: 'High energy, budget-friendly thrill pack designed specially for college and university student groups.',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      badge: 'Budget Thrill',
      minTravelers: 'Min 8 Travelers',
      difficulty: 'Moderate',
      price: 1450,
      priceNote: 'per person',
      duration: '2 Days • 1 Night',
      image: 'images/spots/napittachora-trail.jpg',
      destinations: ['khaiyachora-waterfall', 'napittachora-trail', 'guliakhali-sea-beach'],
      shortDesc: 'High energy, budget-friendly thrill pack designed specially for college and university student groups (1 Day option also available).',
      includesList: ['Transport', 'Accommodation', 'Meals', 'Tour Guide'],
      included: [
        'Dedicated group Chander Gari / AC HiAce transport',
        'Dorm / Group sharing eco-cottage',
        'Student-budget power meals & group campfire',
        'Adventure trail guide & trekking support'
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          title: 'Group Trail Trek & Campfire Beats',
          timeline: [
            { time: '08:00 AM', text: 'Sitakunda Bus Station meetup & Chander Gari boarding' },
            { time: '09:30 AM', text: 'Napittachora triple waterfall gorge trek' },
            { time: '02:00 PM', text: 'Heavy mountain lunch feast' },
            { time: '04:30 PM', text: 'Guliakhali beach group football & sunset' },
            { time: '08:30 PM', text: 'Group campfire with BBQ and acoustic music' }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          title: 'Summit Challenge & Departure',
          timeline: [
            { time: '05:00 AM', text: 'Group race up Chandranath summit' },
            { time: '09:00 AM', text: 'Street breakfast at bazaar' },
            { time: '01:00 PM', text: 'Final lunch and group photo session' },
            { time: '04:00 PM', text: 'Drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    }
  ],

  // Customer Reviews
  reviews: [
    {
      name: 'Tanvir Hossain',
      role: 'Software Engineer, Dhaka',
      package: 'Sitakunda Classic Day Tour',
      rating: 5,
      initials: 'TH',
      text: 'Tourstk made our Chandranath sunrise and Guliakhali trip completely hassle-free. The AC microbus was on time, the local food was great, and our guide knew the safest trail routes.'
    },
    {
      name: 'Nusrat Jahan & Family',
      role: 'Chittagong',
      package: 'Family Comfort Sitakunda Day Out',
      rating: 5,
      initials: 'NJ',
      text: 'Traveled with my elderly parents and kids. Everything was smooth—no exhausting walks, direct car access to Eco Park, and the coordinator was super attentive.'
    },
    {
      name: 'Rashedul Karim',
      role: 'BUET Trekking Club',
      package: 'Khaiyachora Extreme Waterfall Trek',
      rating: 5,
      initials: 'RK',
      text: 'Our guide was certified and carried safety ropes. Khaiyachora 9-step climb was thrilling and safe. We will definitely book with Tourstk again!'
    }
  ]
};

// Booking Manager
const BookingManager = {
  KEY: 'tourstk_bookings_v2',
  getAll() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  },
  save(list) {
    localStorage.setItem(this.KEY, JSON.stringify(list));
  },
  create(data) {
    const list = this.getAll();
    const id = 'TSK-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      id,
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    list.unshift(newBooking);
    this.save(list);
    return newBooking;
  },
  findByIdAndPhone(id, phone) {
    const list = this.getAll();
    const cleanId = (id || '').trim().toUpperCase();
    const cleanPhone = (phone || '').trim().replace(/[^0-9]/g, '');
    return list.find(b => 
      b.id.toUpperCase() === cleanId && 
      b.phone.replace(/[^0-9]/g, '').includes(cleanPhone.slice(-10))
    );
  }
};
