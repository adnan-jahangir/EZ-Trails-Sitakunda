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
      fallbackImage: 'images/spots/chandranath-hill-2.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/chandranath-hill.jpg', thumb: 'images/spots/chandranath-hill.jpg', label: 'Summit Peak' },
        { type: 'image', src: 'images/spots/chandranath-hill-2.jpg', thumb: 'images/spots/chandranath-hill-2.jpg', label: 'Lake & Hillscape' },
        { type: 'image', src: 'images/spots/chandranath-hill-3.jpg', thumb: 'images/spots/chandranath-hill-3.jpg', label: 'Misty Ridge View' },
        { type: 'image', src: 'images/spots/chandranath-hill-4.jpg', thumb: 'images/spots/chandranath-hill-4.jpg', label: 'Summit Cliff Peak' },
        { type: 'image', src: 'images/spots/chandranath-hill-5.jpg', thumb: 'images/spots/chandranath-hill-5.jpg', label: 'Green Hills Panorama' }
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
      fallbackImage: 'images/spots/guliakhali-sea-beach-3.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/guliakhali-sea-beach.jpg', thumb: 'images/spots/guliakhali-sea-beach.jpg', label: 'Green Lawn Beach' },
        { type: 'image', src: 'images/spots/guliakhali-sea-beach-2.jpg', thumb: 'images/spots/guliakhali-sea-beach-2.jpg', label: 'Tidal Water Canals' },
        { type: 'image', src: 'images/spots/guliakhali-sea-beach-3.jpg', thumb: 'images/spots/guliakhali-sea-beach-3.jpg', label: 'Coastal Green Carpet' },
        { type: 'image', src: 'images/spots/guliakhali-sea-beach-4.jpg', thumb: 'images/spots/guliakhali-sea-beach-4.jpg', label: 'Sunset Horizon & Mangrove' }
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
      name: 'Shuptodhara Waterfall & Eco Park',
      bnName: 'সুপ্তধারা ওয়াটারফল ও ইকোপার্ক (Shuptodhara Waterfall & Eco Park)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'water_drop',
      difficulty: 'Easy to Moderate',
      elevation: 'Forest Gorge',
      duration: 'Half Day Trip',
      bestTime: 'Monsoon & Winter',
      lat: 22.6105,
      lng: 91.6685,
      image: 'images/spots/sitakunda-eco-park.jpg',
      fallbackImage: 'images/spots/shuptodhara-waterfall-2.png',
      gallery: [
        { type: 'image', src: 'images/spots/shuptodhara-waterfall.png', thumb: 'images/spots/shuptodhara-waterfall.png', label: 'Shuptodhara Cascade' },
        { type: 'image', src: 'images/spots/shuptodhara-waterfall-2.png', thumb: 'images/spots/shuptodhara-waterfall-2.png', label: 'Scenic Stream & Plunge Pool' },
        { type: 'image', src: 'images/spots/shuptodhara-waterfall-3.png', thumb: 'images/spots/shuptodhara-waterfall-3.png', label: 'Eco Park Forest Staircase Trail' }
      ],
      shortDesc: 'A breathtaking wild cascade hidden inside Sitakunda Eco Park, reached via dramatic stone forest staircases and stream valleys.',
      description: 'Shuptodhara (The Sleeping Stream) awakens into a roaring multistream waterfall during rainy seasons within the Sitakunda Botanical Garden & Eco Park. Descending the steep stone staircase through deep forest canopy leads adventurers to this secluded waterfall amphitheater and cool mountain stream basin.',
      tags: ['Wild Waterfall', 'Forest Staircase', 'Botanical Eco Park', 'Stream Trek'],
      thingsToDo: ['Trek down the forest staircase trail', 'Cool off under Shuptodhara waterfall stream', 'Explore Botanical Garden conservatory', 'Crossing Eco Park suspension footbridge'],
      tips: ['Use the handrails while descending the forest stairs', 'Carry anti-slip footwear for wet rocks']
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
      fallbackImage: 'images/spots/banshbaria-sea-beach-2.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/banshbaria-sea-beach.jpg', thumb: 'images/spots/banshbaria-sea-beach.jpg', label: 'Sea Bridge Pier' },
        { type: 'image', src: 'images/spots/banshbaria-sea-beach-2.jpg', thumb: 'images/spots/banshbaria-sea-beach-2.jpg', label: 'Coast & Casuarina Forest' },
        { type: 'image', src: 'images/spots/banshbaria-sea-beach-3.jpg', thumb: 'images/spots/banshbaria-sea-beach-3.jpg', label: 'Sunny Beach Horizon' },
        { type: 'image', src: 'images/spots/banshbaria-sea-beach-4.jpg', thumb: 'images/spots/banshbaria-sea-beach-4.jpg', label: 'Wide Seashore Panorama' }
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
      image: 'images/spots/bhatiari-lake-2.jpg',
      fallbackImage: 'images/spots/bhatiari-lake-3.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/bhatiari-lake-2.jpg', thumb: 'images/spots/bhatiari-lake-2.jpg', label: 'Sunset Ridge & Water' },
        { type: 'image', src: 'images/spots/bhatiari-lake-3.jpg', thumb: 'images/spots/bhatiari-lake-3.jpg', label: 'Emerald Lakeside View' },
        { type: 'image', src: 'images/spots/bhatiari-lake-4.jpg', thumb: 'images/spots/bhatiari-lake-4.jpg', label: 'Golden Hour Reflections' },
        { type: 'image', src: 'images/spots/bhatiari-lake-5.jpg', thumb: 'images/spots/bhatiari-lake-5.jpg', label: 'Bhatiari Lake Shore' }
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
      fallbackImage: 'images/hero-slide-7.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/mohamaya-lake-kayaks.jpg', thumb: 'images/spots/mohamaya-lake-kayaks.jpg', label: 'Colorful Kayak Fleet' },
        { type: 'image', src: 'images/hero-slide-7.jpg', thumb: 'images/hero-slide-7.jpg', label: 'Lake Dock & Hillside Basin' },
        { type: 'image', src: 'images/spots/mohamaya-lake-paddling.jpg', thumb: 'images/spots/mohamaya-lake-paddling.jpg', label: 'Kayakers on Calm Water' },
        { type: 'image', src: 'images/spots/mohamaya-lake-boats.jpg', thumb: 'images/spots/mohamaya-lake-boats.jpg', label: 'Hillside Lake Promenade & Boats' }
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
      fallbackImage: 'images/spots/napittachora-trail-2.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/napittachora-trail.jpg', thumb: 'images/spots/napittachora-trail.jpg', label: 'Bandorkum Main Cascade' },
        { type: 'image', src: 'images/spots/napittachora-trail-2.jpg', thumb: 'images/spots/napittachora-trail-2.jpg', label: 'Forest Stream Waterfall' },
        { type: 'image', src: 'images/spots/napittachora-trail-4.jpg', thumb: 'images/spots/napittachora-trail-4.jpg', label: 'Rocky Waterslide Cascade' }
      ],
      shortDesc: 'A thrilling 3-in-1 waterfall gorge trail featuring Kupakatakum, Mithachora, and Bandorkum cascading falls.',
      description: 'Napittachora is one of the most rewarding gorge treks in Sitakunda. Within a single 3-hour jungle trail, hikers encounter three distinct, roaring waterfalls enclosed by mossy stone canyons and hanging mountain vines.',
      tags: ['Triple Waterfalls', 'Gorge Trekking', 'Mossy Canyons', 'Adventure Trail'],
      thingsToDo: ['Trekking through shallow rocky streams', 'Bathing at Bandorkum waterfall', 'Jungle nature photography'],
      tips: ['Trek in groups of 4 or more with a local guide', 'Avoid trekking during severe heavy thunderstorm flash flood alerts']
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
      image: 'images/spots/sahasradhara-waterfall-2.jpg',
      fallbackImage: 'images/spots/sahasradhara-waterfall.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/sahasradhara-waterfall-2.jpg', thumb: 'images/spots/sahasradhara-waterfall-2.jpg', label: 'Cascading Mountain Flow' },
        { type: 'image', src: 'images/spots/sahasradhara-waterfall.jpg', thumb: 'images/spots/sahasradhara-waterfall.jpg', label: 'Sahasradhara Stream & Falls' },
        { type: 'image', src: 'images/spots/sahasradhara-waterfall-3.jpg', thumb: 'images/spots/sahasradhara-waterfall-3.jpg', label: 'Waterfall Pool & Rocks' }
      ],
      shortDesc: 'A serene waterfall inside the Eco Park nestled amidst dense mahogany and bamboo forests with staircase access.',
      description: 'Sahasradhara is the most accessible waterfall in Sitakunda, making it ideal for families and casual walkers. Paved concrete steps and scenic lookout pavilions lead right to the base of the waterfall pool.',
      tags: ['Family Accessible', 'Paved Stairs', 'Pavilion View', 'Picnic Spot'],
      thingsToDo: ['Family stroll down the staircase', 'Fresh spring water splash', 'Lakeside resting under forest shade'],
      tips: ['Stairs can be slippery after rain; use handrails when descending']
    },
    {
      id: 'jhum-bari',
      name: 'Jhum Bari (Traditional Hilltop Cottage)',
      bnName: 'জুম বাড়ি (Jhum Bari)',
      category: 'Heritage & Springs',
      categoryIcon: 'cottage',
      difficulty: 'Moderate',
      elevation: '800+ ft',
      duration: '1 Day Trip',
      bestTime: 'Afternoon & Sunset',
      lat: 22.6250,
      lng: 91.6780,
      image: 'images/spots/jhum-bari.jpg',
      fallbackImage: 'images/spots/jhum-bari-arch.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/jhum-bari.jpg', thumb: 'images/spots/jhum-bari.jpg', label: 'Jhum Bari Entrance' },
        { type: 'image', src: 'images/spots/jhum-bari-arch.jpg', thumb: 'images/spots/jhum-bari-arch.jpg', label: 'Lush Valley & Crop Fields View' },
        { type: 'image', src: 'images/spots/jhum-bari-2.jpg', thumb: 'images/spots/jhum-bari-2.jpg', label: 'Hilltop Cottage & Tent Camp' },
        { type: 'image', src: 'images/spots/jhum-bari-3.jpg', thumb: 'images/spots/jhum-bari-3.jpg', label: 'Treehouse Deck' }
      ],
      shortDesc: 'A rustic hilltop bamboo cottage and treehouse experience surrounded by lush green valleys, offering authentic tribal culture and breathtaking sunset views.',
      description: 'Jhum Bari is a unique hilltop retreat featuring traditional bamboo-woven cottages and treehouses built in the style of indigenous Jhum (shifting cultivation) communities. Perched on a scenic ridge with panoramic valley views, visitors can relax in hammocks, enjoy local tribal cuisine, and experience life above the clouds. The bamboo deck treehouse is one of the most Instagrammable spots in the entire Sitakunda region.',
      tags: ['Bamboo Cottage', 'Treehouse', 'Hilltop View', 'Tribal Culture', 'Camping'],
      thingsToDo: ['Relax in hilltop hammocks with valley views', 'Explore bamboo treehouse deck', 'Experience tribal bamboo cottage life', 'Sunset photography from ridge'],
      tips: ['Wear comfortable trekking shoes for the uphill walk', 'Best visited during dry season (Nov-Mar)', 'Carry water and snacks as options on top are limited']
    },
    {
      id: 'akilpur-sea-beach',
      name: 'Akilpur Sea Beach',
      bnName: 'আকিলপুর সী বিচ (Akilpur Sea Beach)',
      category: 'Beaches & Coastlines',
      categoryIcon: 'beach_access',
      difficulty: 'Easy Walk',
      elevation: 'Sea Level',
      duration: 'Half Day / Sunset',
      bestTime: 'Afternoon Sunset',
      lat: 22.5180,
      lng: 91.6550,
      image: 'images/spots/akilpur-sea-beach.jpg',
      fallbackImage: 'images/spots/akilpur-sea-beach-3.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/akilpur-sea-beach.jpg', thumb: 'images/spots/akilpur-sea-beach.jpg', label: 'Akilpur Shoreline' },
        { type: 'image', src: 'images/spots/akilpur-sea-beach-3.jpg', thumb: 'images/spots/akilpur-sea-beach-3.jpg', label: 'Sunset Coastline & Waves' },
        { type: 'image', src: 'images/spots/akilpur-sea-beach-4.jpg', thumb: 'images/spots/akilpur-sea-beach-4.jpg', label: 'Tranquil Sea Beach View' },
        { type: 'image', src: 'images/spots/akilpur-sea-beach-1.jpg', thumb: 'images/spots/akilpur-sea-beach-1.jpg', label: 'Coastal Horizon' }
      ],
      shortDesc: 'A serene and less-crowded coastal beach near Kumira, famous for quiet sunsets, mangrove shores, and calming ocean breezes.',
      description: 'Akilpur Sea Beach is one of the hidden coastal gems of Sitakunda upazila. Less congested than nearby tourist beaches, Akilpur offers uninterrupted horizons over the Bay of Bengal, picturesque sunset reflections on wet sand plains, and peaceful nature walks along coastal embankment roads.',
      tags: ['Peaceful Beach', 'Sunset Horizon', 'Less Crowded', 'Coastal Walk', 'Seafood Stalls'],
      thingsToDo: ['Watching peaceful sunset over sea', 'Walking along the quiet shoreline', 'Tasting fresh local coastal street snacks', 'Sunset photography'],
      tips: ['Visit between 4:00 PM and 6:30 PM for magical sunset colors', 'Wear easy-to-clean sandals for tidal sand walks']
    },
    {
      id: 'ruposhi-jhorna',
      name: 'Ruposhi Jhorna (Ruposhi Waterfall)',
      bnName: 'রূপসী ঝর্ণা (Ruposhi Waterfall)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'water_drop',
      difficulty: 'Moderate Trek',
      elevation: 'Gorge Canyons',
      duration: '1 Day Adventure',
      bestTime: 'Monsoon & Post-Monsoon',
      lat: 22.7550,
      lng: 91.5580,
      image: 'images/spots/ruposhi-jhorna.jpg',
      fallbackImage: 'images/spots/ruposhi-jhorna-2.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/ruposhi-jhorna.jpg', thumb: 'images/spots/ruposhi-jhorna.jpg', label: 'Towering Plunge Falls' },
        { type: 'image', src: 'images/spots/ruposhi-jhorna-2.jpg', thumb: 'images/spots/ruposhi-jhorna-2.jpg', label: 'Wide Stepped Cascade' },
        { type: 'image', src: 'images/spots/ruposhi-jhorna-3.jpg', thumb: 'images/spots/ruposhi-jhorna-3.jpg', label: 'Layered Rock Amphitheater' }
      ],
      shortDesc: 'A captivating multistep canyon waterfall surrounded by deep green virgin forests, famous for natural bathing pools and dramatic rock slides.',
      description: 'Ruposhi Jhorna, true to its name (The Beautiful Waterfall), is renowned for its wide cascading streams and striking layered stone walls. Trekkers hike through crystal clear forest rivulets and rock gorges before reaching the dramatic multi-tiered amphitheater where cool mountain springs invite for a refreshing swim.',
      tags: ['Multistep Waterfall', 'Natural Plunge Pool', 'Jungle Gorge Trek', 'Monsoon Beauty'],
      thingsToDo: ['Bathing in natural waterfall pools', 'Trekking through shallow rocky streams', 'Rock wall waterfall photography', 'Jungle nature trek'],
      tips: ['Wear anti-slip trekking shoes as riverbed rocks can be mossy', 'Carry waterproof dry bags for phone and valuables', 'Best visited during rainy season when water volume is high']
    },
    {
      id: 'cafe-24',
      name: 'Cafe 24 Park & Lake (Hillview)',
      bnName: 'ক্যাফে ২৪ পার্ক ও লেক (Cafe 24 Park)',
      category: 'Lakes & Kayaking',
      categoryIcon: 'local_cafe',
      difficulty: 'Easy Walk',
      elevation: 'Hillside Basin',
      duration: 'Half Day Trip',
      bestTime: 'Afternoon & Evening',
      lat: 22.4630,
      lng: 91.7820,
      image: 'images/spots/cafe-24.jpg',
      fallbackImage: 'images/spots/cafe-24-2.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/cafe-24.jpg', thumb: 'images/spots/cafe-24.jpg', label: 'Cafe 24 Park Entrance' },
        { type: 'image', src: 'images/spots/cafe-24-2.jpg', thumb: 'images/spots/cafe-24-2.jpg', label: 'Lakeside Hills & Boating' },
        { type: 'image', src: 'images/spots/cafe-24-3.jpg', thumb: 'images/spots/cafe-24-3.jpg', label: 'Park Pavilion & Gardens' },
        { type: 'image', src: 'images/spots/cafe-24-4.jpg', thumb: 'images/spots/cafe-24-4.jpg', label: 'Lake Fountain & Stone Walkway' }
      ],
      shortDesc: 'A picturesque hilltop and lakeside recreation park in Bhatiari, featuring scenic lake boating, landscaped gardens, family rides, and open-air cafes.',
      description: 'Perched along the Bhatiari-Hathazari link road near the Army cantonment, Cafe 24 Park (Hillview) is one of Chittagong’s most sought-after weekend retreats. Surrounded by serene hills and calm lake waters, visitors can enjoy paddle boating, relax at shaded pavilions, stroll through landscaped botanical gardens, and dine at hill-view restaurants.',
      tags: ['Lakeside Park', 'Paddle Boating', 'Hillview Restaurant', 'Family Friendly', 'Sunset Hangout'],
      thingsToDo: ['Lake paddle boating & cruising', 'Relaxing by the waterside fountain', 'Family picnic in lush gardens', 'Evening dining with hill view'],
      tips: ['Great spot for families with kids and elderly travelers', 'Best visited in late afternoon for golden hour reflection over the lake']
    },
    {
      id: 'dc-park',
      name: 'DC Park (Chattogram Flower Fest)',
      bnName: 'ডিসি পার্ক ও ফ্লাওয়ার ফেস্টিভ্যাল (DC Park)',
      category: 'Heritage & Springs',
      categoryIcon: 'local_florist',
      difficulty: 'Easy Walk',
      elevation: 'Coastal Plains',
      duration: 'Half Day Trip',
      bestTime: 'Afternoon & Winter (Flower Fest)',
      lat: 22.4040,
      lng: 91.7580,
      image: 'images/spots/dc-park.jpg',
      fallbackImage: 'images/spots/dc-park-2.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/dc-park.jpg', thumb: 'images/spots/dc-park.jpg', label: 'DC Park Flower Fest Letters' },
        { type: 'image', src: 'images/spots/dc-park-2.jpg', thumb: 'images/spots/dc-park-2.jpg', label: 'Aerial View of Flower Beds' },
        { type: 'image', src: 'images/spots/dc-park-3.jpg', thumb: 'images/spots/dc-park-3.jpg', label: 'Central Fountain & Gardens' },
        { type: 'image', src: 'images/spots/dc-park-4.jpg', thumb: 'images/spots/dc-park-4.jpg', label: 'Lakeside Pedal Boating' }
      ],
      shortDesc: 'A sprawling coastal flower garden park on the Faujdarhat-Sitakunda coastline, world-famous for the grand annual Chattogram Flower Festival.',
      description: 'Reclaimed from coastal wetlands by the district administration, DC Park at Faujdarhat has transformed into one of Bangladesh’s grandest flower exhibition destinations. Featuring over 120 varieties of rare flowers, picturesque lake pedal boating, illuminated fountain plazas, and sea breeze promenades, it is the ultimate family holiday attraction in Sitakunda.',
      tags: ['Flower Festival', 'Coastal Park', 'Pedal Boating', 'Lakeside Walk', 'Family Picnic'],
      thingsToDo: ['Strolling through vibrant flower exhibitions', 'Lake pedal boat rides', 'Photography at floral sculptures', 'Watching sunset along coastal link road'],
      tips: ['Winter season (Dec-Feb) offers full bloom flower festival', 'Evenings have beautiful decorative fountain illumination']
    }
  ],

  // Curated Signature Tour Packages (Matching User Screenshot Layout)
  // Curated Signature Tour Packages with Rich Localized Data (BN & EN)
  packages: [
    {
      id: 'sitakunda-adventure-tour',
      name: 'Sitakunda Adventure Tour',
      bnName: 'সীতাকুণ্ড অ্যাডভেঞ্চার ট্যুর',
      tagline: 'The flagship complete experience covering Chandranath peak, coastal sea breeze and scenic trails.',
      bnTagline: 'চন্দ্রনাথ চূড়া, সবুজ উপকূল ও ঝর্ণা ট্রেইলের ফ্ল্যাগশিপ পরিপূর্ণ ২ দিন ১ রাতের অ্যাডভেঞ্চার।',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      bnType: '২ দিন • ১ রাত',
      badge: 'Popular',
      bnBadge: 'জনপ্রিয়',
      minTravelers: 'Min 4 Travelers',
      bnMinTravelers: 'ন্যূনতম ৪ জন',
      difficulty: 'Moderate',
      bnDifficulty: 'মাঝারি',
      price: 3490,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '2 Days • 1 Night',
      bnDuration: '২ দিন • ১ রাত',
      image: 'images/spots/chandranath-hill.jpg',
      destinations: ['chandranath-hill', 'guliakhali-sea-beach', 'sitakunda-eco-park'],
      shortDesc: 'The flagship complete experience covering Chandranath peak, coastal sea breeze and scenic trails.',
      bnShortDesc: 'চন্দ্রনাথের ভোর, গুলিয়াখালীর সবুজ সৈকত ও ইকো পার্কের পরিপূর্ণ ভ্রমণ।',
      includesList: ['Certified Guide', 'Reserved Transport', 'Resort Stay', 'All Meals & BBQ', 'Entry Tickets'],
      included: [
        'Certified Local Sitakunda Guide for all hill & beach trails',
        'Reserved Local Transport & Jeep (Chander Gari / AC HiAce) for all transfers',
        'All Spot Entry Tickets, Eco-Park Fees & Parking Permits',
        'Overnight Deluxe Room / Resort Stay (Twin/Couple Sharing)',
        '4 Full Meals: 2 Breakfasts, 2 Lunches, Evening Hill Snacks & Live Night BBQ'
      ],
      bnIncluded: [
        'পাহাড় ও সমুদ্র ট্রেইলের জন্য অভিজ্ঞ সার্টিফাইড লোকাল গাইড',
        'সকল স্পটে যাতায়াতের জন্য সংরক্ষিত চাঁদের গাড়ি / এসি হাইস',
        'চন্দ্রনাথ, গুলিয়াখালী ও ইকোপার্কের সকল এন্ট্রি টিকিট ও পার্কিং ফি',
        'মানসম্মত ডিলাক্স রুম / ইকো-রিসোর্টে রাত্রিযাপন (টুইন/কাপল শেয়ারিং)',
        '৪ বেলার পুষ্টিকর খাবার: ২ ব্রেকফাস্ট, ২ লাঞ্চ, বিকালের নাস্তা ও লাইভ বারবিকিউ'
      ],
      excluded: [
        'Main train or highway bus tickets to Sitakunda from your city',
        'Personal shopping, souvenirs, or extra beverage outside package',
        'Personal medical expenses and personal tipping'
      ],
      bnExcluded: [
        'নিজ জেলা/ঢাকা থেকে সীতাকুণ্ড আসা-যাওয়ার মূল বাস/ট্রেন টিকিট',
        'ব্যক্তিগত কেনাকাটা বা প্যাকেজ বহির্ভূত অতিরিক্ত খাবার/পানীয়',
        'ব্যক্তিগত ওষুধ ও নিজস্ব টিপস'
      ],
      whatToPack: [
        'Non-slip grip trekking shoes or hiking boots',
        'Comfortable light backpack with 1-2 extra sets of cotton clothes',
        'Reusable water bottle & energy hydration saline (ORS)',
        'Power bank & waterproof phone pouch for waterfall'
      ],
      bnWhatToPack: [
        'গ্রিপযুক্ত আরামদায়ক ট্র্যাকিং কেডস বা নন-স্লিপ জুতো',
        'হালকা ব্যাকপ্যাক ও অতিরিক্ত ১-২ সেট সুতি কাপড়',
        'রি-ইউজেবল পানির বোতল ও ওআরএস স্যালাইন',
        'পাওয়ার ব্যাংক ও মোবাইলের ওয়াটারপ্রুফ পাউচ'
      ],
      meals: [
        {
          time: '08:00 AM',
          bnTime: '০৮:০০ AM',
          title: 'Day 1 Breakfast',
          bnTitle: '১ম দিন: সকালের নাস্তা',
          icon: '🌅',
          items: ['Fresh Hot Paratha', 'Egg Omelette / Fry', 'Thick Dal Bhuna', 'Special Hot Milk/Black Tea'],
          bnItems: ['গরম পরোটা', 'ডিম ভাজি / অমলেট', 'ঘন বুটের ডাল ভুনা', 'স্পেশাল গরম দুধ/রং চা'],
          note: 'Hygienic local restaurant at Sitakunda Bazar'
        },
        {
          time: '01:30 PM',
          bnTime: '০১:৩০ PM',
          title: 'Day 1 Traditional Feast Lunch',
          bnTitle: '১ম দিন: দুপুরের ঐতিহ্যবাহী খাবার',
          icon: '☀️',
          items: ['Steamed Fragrant Rice', 'Sitakunda Mejbani Beef / Deshi Chicken', 'Traditional Dal & Chutney', 'Fresh Salad & Lemon'],
          bnItems: ['সুগন্ধি সাদা ভাত (আনলিমিটেড)', 'ঐতিহ্যবাহী মেজবানি মাংস / দেশি মুরগি ভুনা', 'ঘন ডাল ও টমেটো চাটনি', 'ফ্রেশ সালাদ ও লেবু'],
          note: 'Authentic Chittagong authentic flavors with unlimited rice/dal'
        },
        {
          time: '05:30 PM',
          bnTime: '০৫:৩০ PM',
          title: 'Sunset Hill Snacks & Tea',
          bnTitle: '১ম দিন: বিকালের পাহাড়ি নাস্তা',
          icon: '🌇',
          items: ['Sweet Sitakunda Pineapple', 'Crispy Piyaju & Puffed Rice', 'Clay Cup Special Tea'],
          bnItems: ['সীতাকুণ্ডের মিষ্টি আনারস / পাহাড়ি ফল', 'গরম মুচমুচে পেঁয়াজু ও মুড়ি মাখা', 'মাটির কাপে স্পেশাল চা'],
          note: 'Freshly cut hill fruits & evening beach breeze'
        },
        {
          time: '08:30 PM',
          bnTime: '০৮:৩০ PM',
          title: 'Live Charcoal BBQ Dinner',
          bnTitle: '১ম দিন: লাইভ বারবিকিউ ডিনার',
          icon: '🌙',
          items: ['Live Charcoal BBQ Chicken', 'Special Butter Naan / Luchi', 'Creamy Dip & Salad', 'Chilled Soft Drinks'],
          bnItems: ['লাইভ কয়লার চিকেন বারবিকিউ (BBQ)', 'স্পেশাল বাটার নান / গরম লুচি', 'হোমমেড মেয়োনিজ ও সস', 'কোল্ড ড্রিঙ্কস'],
          note: 'Live campfire setup at resort courtyard'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Arrival, Trail Exploration & Camp',
          bnTitle: 'সীতাকুণ্ড আগমন, ট্রেইল ট্রেকিং ও বিচ সূর্যাস্ত',
          timeline: [
            { time: '08:00 AM', text: 'Pickup from Sitakunda Bus Station & authentic breakfast' },
            { time: '10:00 AM', text: 'Guided hiking and waterfall expedition' },
            { time: '02:00 PM', text: 'Traditional local lunch at Sitakunda' },
            { time: '05:30 PM', text: 'Sunset view & rest at accommodation' },
            { time: '08:30 PM', text: 'Live charcoal BBQ dinner' }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          bnDayLabel: '২য় দিন',
          title: 'Sunrise Summit & Departure',
          bnTitle: 'চন্দ্রনাথ সানরাইজ ও বিদায়',
          timeline: [
            { time: '05:30 AM', text: 'Chandranath sunrise peak hike' },
            { time: '09:00 AM', text: 'Breakfast at hill base' },
            { time: '01:30 PM', text: 'Farewell lunch & market walk' },
            { time: '05:00 PM', text: 'Return drop-off at Sitakunda Bus Station' }
          ]
        }
      ]
    },
    {
      id: 'day-sitakunda-escape',
      name: '1 Day Sitakunda Escape',
      bnName: '১ দিন সীতাকুণ্ড এক্সপ্রেস ডে ট্যুর',
      tagline: 'The best day-trip itinerary for busy travelers seeking maximum adventure in minimal time.',
      bnTagline: '১ দিনেই চন্দ্রনাথ চূড়া, ইকো পার্ক ও গুলিয়াখালী গ্রিন বিচ ঘুরে আসার প্রিমিয়াম প্যাকেজ।',
      category: '1 Day',
      type: '1 Day Express',
      bnType: '১ দিন এক্সপ্রেস',
      badge: 'Best Seller',
      bnBadge: 'সর্বাধিক বুকিং',
      minTravelers: 'Min 4 Travelers',
      bnMinTravelers: 'ন্যূনতম ৪ জন',
      difficulty: 'Moderate',
      bnDifficulty: 'মাঝারি',
      price: 1590,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '1 Day',
      bnDuration: '১ দিন',
      image: 'images/spots/guliakhali-sea-beach.jpg',
      destinations: ['chandranath-hill', 'guliakhali-sea-beach', 'sitakunda-eco-park'],
      shortDesc: 'The best day-trip itinerary for busy travelers seeking maximum adventure in minimal time.',
      bnShortDesc: '১ দিনের মধ্যে চন্দ্রনাথ পাহাড়, ইকোপার্ক ও গুলিয়াখালী বিচের সম্পূর্ণ ডে ট্রিপ।',
      includesList: ['Certified Guide', 'Reserved Transport', 'Feast Lunch', 'Entry Tickets', 'Snacks & Tea'],
      included: [
        'Certified Local Trekking Guide for Chandranath Hill & Beach',
        'Reserved Local Transport & Jeep (Sitakunda Bus Station pickup to all spots)',
        'All Spot Entry Tickets, Eco-Park & Suspension Bridge Fees',
        'Grand Traditional Feast Lunch with Authentic Meat & Unlimited Rice/Dal',
        'Afternoon Fresh Snacks, Local Pineapple & Beach Tea'
      ],
      bnIncluded: [
        'চন্দ্রনাথ পাহাড় ও সৈকত ভ্রমণের অভিজ্ঞ সার্টিফাইড লোকাল গাইড',
        'সারাদিনের সকল স্পটে যাতায়াতের জন্য সংরক্ষিত চাঁদের গাড়ি / সিএনজি',
        'ইকোপার্ক, ঝুলন্ত ব্রিজ ও সৈকতের সকল প্রবেশ টিকিট ও টোল',
        'ঐতিহ্যবাহী মেজবানি মাংস / দেশি মুরগি দিয়ে দুপুরের স্পেশাল লাঞ্চ',
        'বিকালের পাহাড়ি আনারস, গরম পেঁয়াজু ও মাটির কাপে চা'
      ],
      excluded: [
        'Main bus/train tickets from Dhaka/Ctg to Sitakunda',
        'Personal shopping or breakfast before reporting',
        'Personal medical kits and personal tips'
      ],
      bnExcluded: [
        'ঢাকা/চট্টগ্রাম থেকে সীতাকুণ্ড আসার মূল বাস/ট্রেন টিকিট',
        'ব্যক্তিগত কেনাকাটা বা নিজস্ব অতিরিক্ত খাবার',
        'ব্যক্তিগত ওষুধ ও নিজস্ব টিপস'
      ],
      whatToPack: [
        'Light trail shoes with water drainage',
        'Small day-backpack with 1 extra shirt for after trek',
        'Water bottle, sunglasses, sunscreen & cap',
        'Phone waterproof pouch'
      ],
      bnWhatToPack: [
        'গ্রিপযুক্ত হালকা জুতো বা স্যান্ডেল',
        'হালকা ডে-প্যাক ও অতিরিক্ত ১টি টি-শার্ট',
        'পানির বোতল, রোদচশমা ও ক্যাপ',
        'ফোনের জন্য ওয়াটারপ্রুফ কভার'
      ],
      meals: [
        {
          time: '08:30 AM',
          bnTime: '০৮:৩০ AM',
          title: 'Welcome Breakfast & Tea',
          bnTitle: 'সকালের নাস্তা ও চা',
          icon: '🌅',
          items: ['Hot Paratha', 'Egg Omelette', 'Vegetable & Dal', 'Hot Tea'],
          bnItems: ['গরম পরোটা', 'ডিম ভাজি/অমলেট', 'সবজি ও ডাল', 'গরম চা'],
          note: 'Quick energy breakfast before climbing Chandranath'
        },
        {
          time: '01:30 PM',
          bnTime: '০১:৩০ PM',
          title: 'Authentic Local Feast Lunch',
          bnTitle: 'দুপুরের মেজবানি লাঞ্চ',
          icon: '☀️',
          items: ['Steamed Rice (Unlimited)', 'Mejbani Beef / Deshi Chicken', 'Thick Dal & Chutney', 'Fresh Salad & Lemon'],
          bnItems: ['সুগন্ধি সাদা ভাত (আনলিমিটেড)', 'ঐতিহ্যবাহী মেজবানি মাংস / দেশি মুরগি ভুনা', 'ঘন ডাল ও টমেটো চাটনি', 'ফ্রেশ সালাদ ও লেবু'],
          note: 'Unlimited rice & dal with full hearty portions'
        },
        {
          time: '05:30 PM',
          bnTime: '০৫:৩০ PM',
          title: 'Beachside Sunset Snacks',
          bnTitle: 'সৈকতে বিকালের নাস্তা',
          icon: '🌇',
          items: ['Sitakunda Sweet Pineapple', 'Crispy Snacks & Hot Tea'],
          bnItems: ['সীতাকুণ্ডের তাজা মিষ্টি আনারস', 'গরম মুচমুচে পেঁয়াজু ও মাটির কাপে স্পেশাল চা'],
          note: 'Served right on the coastal green lawn at sunset'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Peak Trek, Eco Park & Sunset Beach',
          bnTitle: 'চন্দ্রনাথ চূড়া, ইকোপার্ক ও সৈকত সূর্যাস্ত',
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
      bnName: '২ দিন ১ রাত ট্রেইল ও ঝর্ণা অ্যাডভেঞ্চার',
      tagline: 'Balanced weekend getaway tailored for active friends and nature enthusiasts.',
      bnTagline: 'খৈয়াছড়া ৯-ধাপ ঝর্ণা, ক্যাম্পফায়ার BBQ ও চন্দ্রনাথ চূড়ার দুর্দান্ত অ্যাডভেঞ্চার।',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      bnType: '২ দিন • ১ রাত',
      badge: 'Adventure',
      bnBadge: 'অ্যাডভেঞ্চার',
      minTravelers: 'Min 4 Travelers',
      bnMinTravelers: 'ন্যূনতম ৪ জন',
      difficulty: 'Challenging',
      bnDifficulty: 'চ্যালেঞ্জিং ট্রেইল',
      price: 3200,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '2 Days • 1 Night',
      bnDuration: '২ দিন • ১ রাত',
      image: 'images/spots/khaiyachora-waterfall.jpg',
      destinations: ['khaiyachora-waterfall', 'chandranath-hill', 'guliakhali-sea-beach'],
      shortDesc: 'Balanced weekend getaway tailored for active friends and nature enthusiasts.',
      bnShortDesc: 'খৈয়াছড়া ঝর্ণায় গোসল, রাতের বারবিকিউ ও চন্দ্রনাথ ট্রেকিংয়ের প্যাকেজ।',
      includesList: ['Certified Guide', 'Reserved Transport', 'Eco Resort Stay', '4 Full Meals & BBQ', 'Spot Tickets'],
      included: [
        'Certified Waterfall & Mountain Trek Guide with safety ropes',
        'Dedicated Local Jeep / Chander Gari throughout 2 days',
        'Overnight Eco Cottage / Resort stay (Twin/Group sharing)',
        '4 Full Meals including Night Campfire Live BBQ',
        'All Forest Reserve entry tickets, parking & trail permits'
      ],
      bnIncluded: [
        'খৈয়াছড়া ৯-ধাপ ঝর্ণার জন্য অভিজ্ঞ রোপ-ট্র্যাকিং সার্টিফাইড গাইড',
        'পুরো ২ দিনের জন্য সংরক্ষিত লোকাল চাঁদের গাড়ি / হাইস',
        'ইকো কটেজ / রিসোর্টে রাত্রিযাপন (টুইন/গ্রুপ শেয়ারিং)',
        'ক্যাম্পফায়ার লাইভ BBQ সহ মোট ৪ বেলার পুষ্টিকর খাবার',
        'বন বিভাগ ও সকল দর্শনীয় স্থানের প্রবেশ ফি ও অনুমতি'
      ],
      excluded: [
        'Main bus/train tickets to Sitakunda',
        'Personal extreme sports gears or extra shopping',
        'Personal medicine'
      ],
      bnExcluded: [
        'সীতাকুণ্ড আসা-যাওয়ার মূল বাস/ট্রেন টিকিট',
        'ব্যক্তিগত কেনাকাটা বা অতিরিক্ত পানীয়',
        'ব্যক্তিগত ওষুধ'
      ],
      whatToPack: [
        'High-grip rubber shoes with good drainage for stream walking',
        'Extra waterproof bags for phone/wallet',
        'Comfortable synthetic quick-dry trek clothes',
        'Small first-aid / antiseptic wipes'
      ],
      bnWhatToPack: [
        'ঝর্ণার পাথরে হাঁটার জন্য হাই-গ্রিপ রাবার জুতো',
        'মোবাইল ও মানিব্যাগের জন্য ওয়াটারপ্রুফ জিপলক ব্যাগ',
        'তাড়াতাড়ি শুকায় এমন সিন্থেটিক ট্র্যাকিং পোশাক',
        'ব্যক্তিগত ওডোমস ও অ্যান্টিসেপটিক ওয়াইপস'
      ],
      meals: [
        {
          time: '08:30 AM',
          bnTime: '০৮:৩০ AM',
          title: 'Trail Energy Breakfast',
          bnTitle: 'সকালের নাস্তা',
          icon: '🌅',
          items: ['Paratha & Egg Omelette', 'Chickpeas Dal Bhuna', 'Hot Milk Tea'],
          bnItems: ['গরম পরোটা ও ডিম ভাজি', 'বুটের ডাল ভুনা', 'গরম চা'],
          note: 'Energizing meal before waterfall trek'
        },
        {
          time: '02:00 PM',
          bnTime: '০২:০০ PM',
          title: 'Village Style Hot Lunch',
          bnTitle: 'দুপুরের খাবার',
          icon: '☀️',
          items: ['Hot Steamed Rice', 'Deshi Chicken / Beef Curry', 'Thick Dal & Green Salad'],
          bnItems: ['গরম সাদা ভাত', 'দেশি মুরগি / মেজবানি গরুর মাংস', 'ঘন ডাল ও ফ্রেশ সালাদ'],
          note: 'Served fresh right after coming down from waterfall'
        },
        {
          time: '08:30 PM',
          bnTime: '০৮:৩০ PM',
          title: 'Campfire Live BBQ Dinner',
          bnTitle: 'রাতের বারবিকিউ ডিনার',
          icon: '🌙',
          items: ['Charcoal Grilled Chicken BBQ', 'Fresh Naan & Salad Dip', 'Cold Drinks'],
          bnItems: ['কয়লার লাইভ চিকেন BBQ', 'বাটার নান ও মেয়োনিজ সালাদ', 'কোল্ড ড্রিঙ্কস'],
          note: 'Campfire gathering at the resort'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Waterfall Expedition & Evening BBQ',
          bnTitle: 'খৈয়াছড়া ঝর্ণা অভিযান ও ক্যাম্পফায়ার BBQ',
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
          bnDayLabel: '২য় দিন',
          title: 'Summit Sunrise & Beach Twilight',
          bnTitle: 'চন্দ্রনাথ সানরাইজ ও গুলিয়াখালী বিচ',
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
      bnName: 'ফ্যামিলি কমফোর্ট ট্যুর',
      tagline: 'Carefully curated easy-paced itinerary with priority comfort, family-safe trails and delicious meals.',
      bnTagline: 'পরিবার, বয়োজ্যেষ্ঠ ও বাচ্চাদের জন্য আরামদায়ক বাহন, নিরাপদ ট্রেইল ও সেরা রিসোর্ট স্টে।',
      category: '2 Days • 1 Night',
      type: 'Family Safe',
      bnType: 'পারিবারিক নিরাপদ',
      badge: 'Family Safe',
      bnBadge: 'ফ্যামিলি স্পেশাল',
      minTravelers: 'Min 4 Travelers',
      bnMinTravelers: 'ন্যূনতম ৪ জন',
      difficulty: 'Easy',
      bnDifficulty: 'খুব সহজ ও নিরাপদ',
      price: 3850,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '2 Days • 1 Night',
      bnDuration: '২ দিন • ১ রাত',
      image: 'images/spots/bhatiari-lake.jpg',
      destinations: ['sitakunda-eco-park', 'bhatiari-lake', 'banshbaria-sea-beach'],
      shortDesc: 'Carefully curated easy-paced itinerary with priority comfort, family-safe trails and delicious meals.',
      bnShortDesc: 'পরিবারের সবার জন্য নিরাপদ ট্রেইল, প্রাইভেট গাড়ি ও পারিবারিক বুফে খাবারের প্যাকেজ।',
      includesList: ['Private AC Vehicle', 'Family Resort', 'Mild Hygienic Buffet', 'Dedicated Host', 'All Tickets'],
      included: [
        'Private Dedicated AC Microbus / Car for family throughout the tour',
        'Premium Family Resort Stay with attached baths & AC',
        'Mild & Hygienic Family Buffet Meals suitable for all ages',
        'Senior and child friendly paved spots & private lake boat ride',
        'All Eco Park drive-in permits and spot entry tickets'
      ],
      bnIncluded: [
        'পুরো ট্যুরে পরিবারের জন্য সম্পূর্ণ প্রাইভেট এসি মাইক্রোবাস / কার',
        'প্রিমিয়াম ফ্যামিলি রিসোর্ট রুম (এসি ও আধুনিক সুযোগ-সুবিধা)',
        'বাচ্চা ও বয়স্কদের উপযোগী স্বাস্থ্যকর পারিবারিক বুফে খাবার',
        'ঝুঁকিমুক্ত সমতল স্পট ও ভাটিয়ারি লেকে পারিবারিক বোট রাইড',
        'ইকোপার্কের সরাসরি গাড়ি প্রবেশের অনুমতি ও সকল টিকিট'
      ],
      excluded: ['Train/Bus ticket to Sitakunda', 'Personal shopping and extra snacks'],
      bnExcluded: ['সীতাকুণ্ড আসার মূল ট্রেন/বাস টিকিট', 'ব্যক্তিগত কেনাকাটা'],
      whatToPack: ['Comfortable walking shoes', 'Personal daily medicines', 'Sun protection & hats'],
      bnWhatToPack: ['আরামদায়ক হাঁটার জুতো', 'ব্যক্তিগত নিয়মিত ওষুধপত্র', 'ক্যাপ ও রোদচশমা'],
      meals: [
        {
          time: '08:30 AM',
          bnTime: '০৮:৩০ AM',
          title: 'Family Breakfast',
          bnTitle: 'পারিবারিক সকালের নাস্তা',
          icon: '🌅',
          items: ['Soft Paratha / Ruti', 'Egg Omelette / Boiled', 'Mixed Vegetable & Dal', 'Hot Tea / Milk'],
          bnItems: ['নরম পরোটা / রুটি', 'ডিম অমলেট / সিদ্ধ', 'মিক্সড সবজি ও ডাল', 'গরম চা ও দুধ'],
          note: 'Mild and healthy for kids & seniors'
        },
        {
          time: '01:30 PM',
          bnTime: '০১:৩০ PM',
          title: 'Family Buffet Lunch',
          bnTitle: 'পারিবারিক দুপুরের বুফে',
          icon: '☀️',
          items: ['Steamed Rice & Pulao', 'Deshi Chicken Korma / Beef Bhuna', 'Fish Curry / Vegetable', 'Thick Dal & Fresh Salad'],
          bnItems: ['সুগন্ধি ভাত ও পোলাও', 'দেশি চিকেন কোরমা / গরু ভুনা', 'তাজা মাছের ঝোল ও সবজি', 'ঘন ডাল ও সালাদ'],
          note: 'Non-spicy, healthy hygienic preparation'
        },
        {
          time: '08:30 PM',
          bnTime: '০৮:৩০ PM',
          title: 'Resort Dinner',
          bnTitle: 'রাতের রিসোর্ট ডিনার',
          icon: '🌙',
          items: ['Mild BBQ Chicken or Ruti', 'Butter Naan / Steamed Rice', 'Dessert / Sweet treats'],
          bnItems: ['মৃদু ঝালের চিকেন BBQ বা রুটি', 'বাটার নান বা গরম ভাত', 'সুইট ডেজার্ট / মিষ্টি'],
          note: 'Peaceful dining inside the resort restaurant'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Comfort Sightseeing & Lake Boating',
          bnTitle: 'আরামদায়ক সাইটসিয়িং ও লেক বোটিং',
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
          bnDayLabel: '২য় দিন',
          title: 'Eco Park Botanical Drive & Sea Pier Walk',
          bnTitle: 'ইকোপার্ক ড্রাইভ ও বাঁশবাড়িয়া সী বিচ',
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
      bnName: 'কাপল রোমান্টিক ট্যুর',
      tagline: 'Private and memorable retreat with peaceful scenic destinations, flexible schedules, and private comfort.',
      bnTagline: 'দম্পতিদের জন্য নিরিবিলি পাহাড়ি রিসোর্ট, ক্যান্ডেললাইট BBQ ও ব্যক্তিগত এসি গাড়ির প্রিমিয়াম অভিজ্ঞতা।',
      category: '2 Days • 1 Night',
      type: 'Honeymoon Special',
      bnType: 'হানিমুন স্পেশাল',
      badge: 'Honeymoon Special',
      bnBadge: 'কাপল স্পেশাল',
      minTravelers: 'Min 2 Travelers',
      bnMinTravelers: '২ জন কাপল',
      difficulty: 'Easy',
      bnDifficulty: 'খুব সহজ ও রিল্যাক্সিং',
      price: 4200,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '2 Days • 1 Night',
      bnDuration: '২ দিন • ১ রাত',
      image: 'images/spots/banshbaria-sea-beach.jpg',
      destinations: ['bhatiari-lake', 'guliakhali-sea-beach', 'mohamaya-lake'],
      shortDesc: 'Private and memorable retreat with peaceful scenic destinations, flexible schedules, and private comfort.',
      bnShortDesc: 'ব্যক্তিগত গাড়ি, ক্যান্ডেললাইট ডিনার ও পাহাড়ি লেকে কায়াকিংয়ের রোমান্টিক ট্যুর।',
      includesList: ['Private AC Sedan', 'Deluxe Couple Room', 'Candlelight BBQ', 'Lake Kayaking', 'Personal Host'],
      included: [
        'Private AC Sedan Car with dedicated chauffeur for couple throughout',
        'Premium Deluxe Couple Room with hill/lake private balcony view',
        'Private Starlit Candlelight BBQ Dinner setup',
        'Couple Kayaking & Private Boat Ride at Mohamaya Lake',
        'All spot entry tickets, toll & discreet personal coordination'
      ],
      bnIncluded: [
        'পুরো ২ দিনের জন্য দম্পতির নিজস্ব প্রাইভেট এসি সিডান কার',
        'পাহাড়/লেক ভিউ ব্যালকনি সহ প্রিমিয়াম ডিলাক্স কাপল রুম',
        'খোলা আকাশের নিচে মোমবাতির আলোয় রোমান্টিক ক্যান্ডেললাইট BBQ ডিনার',
        'মহামায়া লেকের গভীর ক্যানিয়নে কাপল কায়াকিং ও বোট রাইড',
        'সকল স্পটের ভিআইপি এন্ট্রি ও সার্বক্ষণিক প্রাইভেট ট্রিপ সাপোর্ট'
      ],
      excluded: ['Train/Bus ticket to Sitakunda', 'Personal shopping'],
      bnExcluded: ['সীতাকুণ্ড আসার বাস/ট্রেন টিকিট', 'ব্যক্তিগত কেনাকাটা'],
      whatToPack: ['Casual smart travel outfits', 'Sunglasses, hats & camera', 'Personal power bank'],
      bnWhatToPack: ['পছন্দের ট্রাভেল পোশাক', 'সানগ্লাস, হ্যাট ও ক্যামেরা', 'ব্যক্তিগত পাওয়ার ব্যাংক'],
      meals: [
        {
          time: '01:00 PM',
          bnTime: '০১:০০ PM',
          title: 'Curated Couple Lunch',
          bnTitle: 'দুপুরের স্পেশাল খাবার',
          icon: '☀️',
          items: ['Steamed Rice / Kacchi', 'Special Chicken Bhuna or Beef Roast', 'Thick Dal & Fresh Salad'],
          bnItems: ['সুগন্ধি ভাত / পোলাও', 'স্পেশাল চিকেন রোস্ট বা মেজবানি মাংস', 'ঘন ডাল ও স্পেশাল সালাদ'],
          note: 'Served in private dining room'
        },
        {
          time: '05:00 PM',
          bnTime: '০৫:০০ PM',
          title: 'Sunset Beach Coffee & Pastry',
          bnTitle: 'সৈকতে বিকালের কফি ও স্ন্যাকস',
          icon: '🌇',
          items: ['Fresh Coffee & Cookies', 'Local Pineapple Bowl'],
          bnItems: ['হট কফি ও কুকিজ', 'সীতাকুণ্ডের ফ্রেশ মিষ্টি আনারস'],
          note: 'Romantic sunset tea by the sea'
        },
        {
          time: '08:30 PM',
          bnTime: '০৮:৩০ PM',
          title: 'Candlelight BBQ Dinner',
          bnTitle: 'ক্যান্ডেললাইট বারবিকিউ ডিনার',
          icon: '🌙',
          items: ['Hot Chicken BBQ Platter', 'Butter Naan / Soft Roti', 'Creamy Mayo & Cold Drinks'],
          bnItems: ['চিকেন বারবিকিউ প্ল্যাটার', 'বাটার নান ও ডিপ সস', 'স্পেশাল কোল্ড ড্রিঙ্কস'],
          note: 'Candlelight romantic setup under the starry hill night'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Romantic Sunset & Candlelight Dinner',
          bnTitle: 'রোমান্টিক সূর্যাস্ত ও ক্যান্ডেললাইট ডিনার',
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
          bnDayLabel: '২য় দিন',
          title: 'Lake Kayaking & Hill Cafe Romance',
          bnTitle: 'মহামায়া কায়াকিং ও হিল ক্যাফে',
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
      bnName: 'স্টুডেন্ট গ্রুপ অ্যাডভেঞ্চার ট্যুর',
      tagline: 'High energy, budget-friendly thrill pack designed specially for college and university student groups.',
      bnTagline: 'কলেজ ও বিশ্ববিদ্যালয়ের বন্ধুদের জন্য বাজেট-ফ্রেন্ডলি থ্রিলিং ট্রেইল, ক্যাম্পফায়ার ও ক্যাম্পিং।',
      category: '2 Days • 1 Night',
      type: 'Budget Thrill',
      bnType: 'বাজেট থ্রিল',
      badge: 'Budget Thrill',
      bnBadge: 'ছাত্র-ছাত্রী স্পেশাল',
      minTravelers: 'Min 8 Travelers',
      bnMinTravelers: 'ন্যূনতম ৮ জন',
      difficulty: 'Moderate',
      bnDifficulty: 'অ্যাডভেঞ্চার ট্রেইল',
      price: 1450,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '2 Days • 1 Night',
      bnDuration: '২ দিন • ১ রাত',
      image: 'images/spots/napittachora-trail.jpg',
      destinations: ['khaiyachora-waterfall', 'napittachora-trail', 'guliakhali-sea-beach'],
      shortDesc: 'High energy, budget-friendly thrill pack designed specially for college and university student groups.',
      bnShortDesc: 'ঝর্ণা ট্র্যাকিং, সমুদ্রের পাড়ে ফুটবল ও রাতের ক্যাম্পফায়ারের সেরা গ্রুপ প্যাকেজ।',
      includesList: ['Chander Gari', 'Group Eco Cottage', 'Trail Guide', 'Heavy Meals & BBQ', 'Spot Permits'],
      included: [
        'Dedicated Open-Roof Chander Gari / AC HiAce for group excitement',
        'Dormitory / Group Sharing Eco Cottage or Tent stay',
        'Student-Budget Heavy Power Meals & Group Night Campfire BBQ',
        'Trail Guide for stream gorge trekking & safety',
        'All forest reserve entry tickets & camping permits'
      ],
      bnIncluded: [
        'গ্রুপের জন্য নিজস্ব উন্মুক্ত ছাদের চাঁদের গাড়ি / এসি হাইস',
        'ডরমিটরি / গ্রুপ শেয়ারিং ইকো কটেজ বা তাবু ক্যাম্পিং',
        'আনলিমিটেড ভাত/ডাল সহ ভারী খাবার ও ক্যাম্পফায়ার বারবিকিউ',
        'নাপিত্তাছড়া ও খৈয়াছড়া ট্রেইলের অভিজ্ঞ গাইড',
        'সকল দর্শনীয় স্থানের এন্ট্রি টিকিট ও বন বিভাগের অনুমতি'
      ],
      excluded: ['Train/Bus ticket to Sitakunda', 'Personal extra snacks'],
      bnExcluded: ['সীতাকুণ্ড আসার মূল বাস/ট্রেন টিকিট', 'ব্যক্তিগত অতিরিক্ত নাস্তা'],
      whatToPack: ['Hiking shoes with rubber grip', 'Quick-dry sports clothes', 'Power bank & waterproof pouch'],
      bnWhatToPack: ['রাবার গ্রিপযুক্ত স্যান্ডেল বা জুতো', 'খেলাধুলা ও ট্র্যাকিংয়ের সুতি/সিন্থেটিক টি-শার্ট', 'পাওয়ার ব্যাংক ও ওয়াটারপ্রুফ ব্যাগ'],
      meals: [
        {
          time: '08:30 AM',
          bnTime: '০৮:৩০ AM',
          title: 'Power Breakfast',
          bnTitle: 'সকালের নাস্তা',
          icon: '🌅',
          items: ['Hot Paratha & Egg', 'Chickpeas Dal', 'Hot Tea'],
          bnItems: ['গরম পরোটা ও ডিম ভাজি', 'বুটের ডাল ভুনা', 'গরম চা'],
          note: 'Power-packed meal for morning trail hike'
        },
        {
          time: '02:00 PM',
          bnTime: '০২:০০ PM',
          title: 'Mountain Feast Lunch',
          bnTitle: 'পাহাড়ি দুপুরের খাবার',
          icon: '☀️',
          items: ['Steamed Rice (Unlimited)', 'Deshi Chicken / Beef Curry', 'Lentil Dal & Salad'],
          bnItems: ['আনলিমিটেড সাদা ভাত', 'দেশি মুরগি / গরুর মাংস', 'পাতলা ডাল ও সালাদ'],
          note: 'Heavy portions to satisfy post-trek hunger'
        },
        {
          time: '08:30 PM',
          bnTime: '০৮:৩০ PM',
          title: 'Campfire Acoustic BBQ',
          bnTitle: 'ক্যাম্পফায়ার বারবিকিউ',
          icon: '🌙',
          items: ['Chicken BBQ Leg Piece', 'Hot Naan / Luchi', 'Cold Drinks'],
          bnItems: ['চিকেন বারবিকিউ (লেগ পিস)', 'গরম বাটার নান', 'কোল্ড ড্রিঙ্কস'],
          note: 'Music & BBQ around the campfire'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Group Trail Trek & Campfire Beats',
          bnTitle: 'নাপিত্তাছড়া ট্রেইল ও ক্যাম্পফায়ার মিউজিক',
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
          bnDayLabel: '২য় দিন',
          title: 'Summit Challenge & Departure',
          bnTitle: 'চন্দ্রনাথ চ্যালেঞ্জ ও প্রস্থান',
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
      if (!data) return [];
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
      if (parsed && typeof parsed === 'object') return [parsed];
      return [];
    } catch(e) {
      return [];
    }
  },
  save(list) {
    if (Array.isArray(list)) {
      localStorage.setItem(this.KEY, JSON.stringify(list));
    } else if (list && typeof list === 'object') {
      const all = this.getAll();
      const existingIdx = all.findIndex(b => (b.id && b.id === list.id) || (b._id && b._id === list._id));
      if (existingIdx >= 0) {
        all[existingIdx] = { ...all[existingIdx], ...list };
      } else {
        all.unshift(list);
      }
      localStorage.setItem(this.KEY, JSON.stringify(all));
    }
  },
  create(data) {
    const list = this.getAll();
    const id = data.id || data.bookingId || ('STK-' + Math.floor(100000 + Math.random() * 900000));
    const newBooking = {
      id,
      bookingId: id,
      ...data,
      status: data.status || 'pending',
      createdAt: data.createdAt || new Date().toISOString()
    };
    const existingIdx = list.findIndex(b => (b.id && b.id === id) || (b.bookingId && b.bookingId === id));
    if (existingIdx >= 0) {
      list[existingIdx] = { ...list[existingIdx], ...newBooking };
    } else {
      list.unshift(newBooking);
    }
    localStorage.setItem(this.KEY, JSON.stringify(list));
    return newBooking;
  },
  updateStatus(id, newStatus, note, extraFields) {
    const list = this.getAll();
    const cleanSearchId = (id || '').trim().toUpperCase();
    const booking = list.find(b => 
      (b.id && b.id.toUpperCase() === cleanSearchId) || 
      (b.bookingId && b.bookingId.toUpperCase() === cleanSearchId) || 
      (b._id && String(b._id).toUpperCase() === cleanSearchId)
    );
    if (booking) {
      booking.status = newStatus;
      if (note !== undefined) booking.note = note;
      if (extraFields && typeof extraFields === 'object') {
        Object.assign(booking, extraFields);
      }
      this.save(list);
      return booking;
    }
    return null;
  },
  delete(id) {
    let list = this.getAll();
    list = list.filter(b => b.id !== id && b.bookingId !== id && b._id !== id);
    this.save(list);
  },
  findByIdAndPhone(id, phone) {
    const list = this.getAll();
    const cleanId = (id || '').trim().toUpperCase();
    const cleanPhone = (phone || '').trim().replace(/[^0-9]/g, '');
    const last8 = cleanPhone.length >= 8 ? cleanPhone.slice(-8) : cleanPhone;

    return list.find(b => {
      const bId = (b.id || b.bookingId || '').toUpperCase();
      const bPhone = (b.phone || '').replace(/[^0-9]/g, '');
      
      // If both ID and phone given
      if (cleanId && last8) {
        return (bId === cleanId || bId.includes(cleanId)) && (bPhone.includes(last8) || last8.includes(bPhone.slice(-8)));
      }
      // If only ID given
      if (cleanId) {
        return bId === cleanId || bId.includes(cleanId);
      }
      // If only phone given
      if (last8) {
        return bPhone.includes(last8) || last8.includes(bPhone.slice(-8));
      }
      return false;
    });
  }
};
