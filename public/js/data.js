// ==========================================================================
// EZ TRILL SITAKUNDA (TOURSTK) - COMPLETE AUTHENTIC DATA STORE
// 12 Sitakunda Destinations with Local Real Downloaded Assets & Online CDNs
// ==========================================================================

var TOURSTK = {
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
      id: 'chagalkanda-waterfall',
      name: 'Chagalkanda Waterfall (Chagalkanda Jhorna)',
      bnName: 'ছাগলকান্দা ঝর্ণা (Chagalkanda Waterfall)',
      category: 'Waterfalls & Treks',
      categoryIcon: 'water_drop',
      difficulty: 'Moderate Trek',
      elevation: 'Forest Canyons',
      duration: 'Half Day Trek',
      bestTime: 'Monsoon & Post-Monsoon',
      lat: 22.7560,
      lng: 91.5620,
      image: 'images/spots/ruposhi-jhorna-2.jpg',
      fallbackImage: 'images/spots/ruposhi-jhorna.jpg',
      gallery: [
        { type: 'image', src: 'images/spots/ruposhi-jhorna-2.jpg', thumb: 'images/spots/ruposhi-jhorna-2.jpg', label: 'Cascading Jungle Falls' },
        { type: 'image', src: 'images/spots/ruposhi-jhorna-3.jpg', thumb: 'images/spots/ruposhi-jhorna-3.jpg', label: 'Rocky Stream Trail' }
      ],
      shortDesc: 'A pristine hidden jungle cascade nestled in the deep green canyons near Ruposhi, known for clean mountain springs and peaceful surroundings.',
      description: 'Chagalkanda Waterfall is one of Sitakunda\'s natural gems tucked inside the evergreen hill ranges. Trekkers navigate crystal clear mountain streams, boulder fields, and lush canopy before reaching the secluded cascade where cool mountain water pours into a serene natural pool.',
      tags: ['Hidden Cascade', 'Forest Riverbed Trek', 'Natural Pool', 'Monsoon Wonder'],
      thingsToDo: ['Hiking through green canyon trails', 'Cool plunge in natural fresh mountain stream', 'Nature photography'],
      tips: ['Wear gripped trekking sandals or water shoes', 'Take guidance from local tour guides while walking riverbeds']
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
      id: 'adventure-squad-1',
      packageId: 'adventure-squad-1',
      name: 'Adventure Squad 1 (2 Days • 1 Night)',
      bnName: 'অ্যাডভেঞ্চার স্কোয়াড ১ | ২ দিন ১ রাত',
      tagline: 'Experience the breathtaking cascades, majestic hills, and tranquil beaches of Sitakunda in an action-packed 2-day squad adventure.',
      bnTagline: 'দুই দিনে উপভোগ করুন সীতাকুণ্ডের ঝর্ণা, পাহাড় ও সমুদ্রের অসাধারণ সৌন্দর্য।',
      category: '2 Days • 1 Night',
      type: '2 Days • 1 Night',
      bnType: '২ দিন • ১ রাত',
      badge: 'Adventure Squad',
      bnBadge: 'অ্যাডভেঞ্চার স্কোয়াড',
      minTravelers: 'Min 4 Travelers',
      bnMinTravelers: 'ন্যূনতম ৪ জন',
      difficulty: 'Moderate',
      bnDifficulty: 'মাঝারি ট্রেইল',
      price: 2799,
      originalPrice: 3499,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '2 Days • 1 Night',
      bnDuration: '২ দিন • ১ রাত',
      days: 2,
      nights: 1,
      image: 'images/spots/ruposhi-jhorna.jpg',
      destinations: [
        'ruposhi-jhorna',
        'sahasradhara-waterfall',
        'akilpur-sea-beach',
        'banshbaria-sea-beach',
        'chandranath-hill',
        'sitakunda-eco-park',
        'guliakhali-sea-beach'
      ],
      spots: [
        'ruposhi-jhorna',
        'sahasradhara-waterfall',
        'akilpur-sea-beach',
        'banshbaria-sea-beach',
        'chandranath-hill',
        'sitakunda-eco-park',
        'guliakhali-sea-beach'
      ],
      shortDesc: 'Experience the breathtaking cascades, majestic hills, and tranquil beaches of Sitakunda in an action-packed 2-day squad adventure.',
      bnShortDesc: 'দুই দিনে উপভোগ করুন সীতাকুণ্ডের ঝর্ণা, পাহাড় ও সমুদ্রের অসাধারণ সৌন্দর্য। রূপসী ও সহস্রধারা ঝর্ণা, বাঁশবাড়িয়া, আকিলপুর, চন্দ্রনাথ ও গুলিয়াখালী বিচসহ ৭টি সেরা স্পট ও ৬ বেলার পুষ্টিকর খাবার।',
      includesList: ['All Spot Tickets', 'Reserved Transport', 'Tour Guide', 'Hotel Stay', '6 Full Meals'],
      included: [
        'Entry tickets and forest permits for all mentioned spots (Ruposhi, Sahasradhara, Eco-Park & Beaches)',
        'Dedicated reserved local transport throughout the 2-day tour (Sitakunda pickup to return)',
        'Certified and experienced local tour guide for hill, waterfall & beach trails',
        'Comfortable & secure hotel accommodation booking (Overnight stay)',
        '6 Wholesome meals: 2 Breakfasts, 2 Lunches, 1 Evening Refreshment, 1 Dinner',
        'Transparent package policy: EZ Trails has NO hidden charges'
      ],
      bnIncluded: [
        'উল্লেখিত সকল স্পটের এন্ট্রি ফি ও অনুমতিপত্র (ঝর্ণা, ইকোপার্ক ও বিচসমূহ)',
        'পুরো ২ দিনের জন্য সংরক্ষিত লোকাল ট্রান্সপোর্ট (সীতাকুণ্ড পিকআপ থেকে ড্রপ-অফ)',
        'পাহাড়, ঝর্ণা ও সৈকত ট্রেইলের অভিজ্ঞ ও সার্টিফাইড ট্যুর গাইড',
        'নিরাপদ ও মানসম্মত হোটেল বুকিং (রাত্রিযাপন)',
        '৬ বেলার পুষ্টিকর খাবার: ২ ব্রেকফাস্ট, ২ লাঞ্চ, ১ বিকালের নাস্তা, ১ ডিনার',
        'স্বচ্ছ ভ্রমণ নীতি: EZ Trails-এর কোনো হিডেন চার্জ নেই'
      ],
      excluded: [
        'Highway bus or train tickets from Dhaka/Chittagong to Sitakunda',
        'Any personal expenses not explicitly mentioned in the package (EZ Trails will not bear unauthorized costs)',
        'Personal shopping, souvenirs, or extra beverage outside package',
        'Personal medications and individual tips'
      ],
      bnExcluded: [
        'নিজ জেলা বা ঢাকা/চট্টগ্রাম থেকে সীতাকুণ্ড আসা-যাওয়ার মূল বাস/ট্রেন টিকিট',
        'প্যাকেজে উল্লেখ নেই এমন কোনো ব্যক্তিগত খরচ EZ Trails বহন করবে না',
        'ব্যক্তিগত কেনাকাটা বা প্যাকেজ বহির্ভূত অতিরিক্ত খাবার/পানীয়',
        'ব্যক্তিগত ওষুধ ও নিজস্ব টিপস'
      ],
      whatToPack: [
        'High-grip hiking boots or non-slip rubber sandals for wet rocks & hill trails',
        'Light backpack with 2-3 extra sets of comfortable cotton clothes',
        'Waterproof phone pouch and power bank for photography',
        'Reusable water bottle and hydration saline (ORS)'
      ],
      bnWhatToPack: [
        'ঝর্ণার পিচ্ছিল পাথর ও পাহাড়ে হাঁটার জন্য গ্রিপযুক্ত ট্র্যাকিং জুতো বা স্যান্ডেল',
        'হালকা ব্যাকপ্যাক ও ২-৩ সেট অতিরিক্ত সহজে শুকায় এমন সুতি কাপড়',
        'মোবাইলের ওয়াটারপ্রুফ পাউচ ও পাওয়ার ব্যাংক',
        'ব্যক্তিগত পানির বোতল ও ওআরএস স্যালাইন'
      ],
      meals: [
        {
          time: '09:00 AM',
          bnTime: 'সকাল ০৯:০০',
          title: 'Day 1 Welcome Breakfast: Egg Khichuri',
          bnTitle: '১ম দিন: সকালের নাস্তা (ডিম খিচুড়ি)',
          icon: '🌅',
          items: ['Egg Khichuri (Dim Khichuri)', 'Traditional Pickle', 'Salad & Mineral Water'],
          bnItems: ['ডিম খিচুড়ি', 'আচার', 'সালাদ ও খাবার পানি'],
          note: 'Freshly cooked authentic egg khichuri after arrival in Sitakunda',
          bnNote: 'সীতাকুণ্ডে পৌঁছে গরম গরম সুস্বাদু ডিম খিচুড়ি'
        },
        {
          time: '03:00 PM',
          bnTime: 'বিকেল ০৩:০০',
          title: 'Day 1 Lunch: Chicken Pulao & Cold Drinks',
          bnTitle: '১ম দিন: দুপুরের খাবার (মুরগি পোলাও ও কোল্ড ড্রিংকস)',
          icon: '☀️',
          items: ['Fragrant Chicken Pulao', 'Chilled Cold Drinks', 'Cucumber & Lemon Salad'],
          bnItems: ['মুরগি পোলাও', 'কোল্ড ড্রিংকস', 'শসা ও লেবু সালাদ'],
          note: 'Hearty satisfying meal after returning from waterfall trek',
          bnNote: 'রূপসী ও সহস্রধারা ঝর্ণা থেকে ফিরে এসে তৃপ্তিদায়ক দুপুরের খাবার'
        },
        {
          time: '06:30 PM',
          bnTime: 'সন্ধ্যা ০৬:৩০',
          title: 'Day 1 Evening Refreshment: Snacks & Tea',
          bnTitle: '১ম দিন: সন্ধ্যার নাস্তা (নুডুলস / পাস্তা / পরোটা-ডালভাজি)',
          icon: '🌇',
          items: ['Hot Noodles / Pasta / Paratha with Dal-Bhaji', 'Fresh Hot Milk/Black Tea'],
          bnItems: ['গরম নুডুলস / পাস্তা / পরোটা ও ডালভাজি', 'গরম স্পেশাল চা'],
          note: 'Served fresh after returning from Akilpur & Banshbaria beach excursion',
          bnNote: 'আকিলপুর ও বাঁশবাড়িয়া সি বিচ থেকে ফিরে এসে সন্ধ্যার নাস্তা'
        },
        {
          time: '10:00 PM',
          bnTime: 'রাত ১০:০০',
          title: 'Day 1 Squad Dinner: Chicken Biryani / Grill-Paratha',
          bnTitle: '১ম দিন: রাতের খাবার (চিকেন বিরিয়ানি / গ্রিল-পরোটা)',
          icon: '🌙',
          items: ['Hot Chicken Biryani or Grilled Chicken with Paratha', 'Special Salad & Sauce', 'Drinking Water'],
          bnItems: ['চিকেন বিরিয়ানি বা গ্রিল চিকেন ও পরোটা', 'সালাদ ও সস', 'খাবার পানি'],
          note: 'Delicious hot dinner before night rest at the hotel',
          bnNote: 'সুস্বাদু রাতের খাবার শেষে হোটেলে রাত্রিযাপন ও বিশ্রাম'
        },
        {
          time: '06:00 AM',
          bnTime: 'সকাল ০৬:০০',
          title: 'Day 2 Trail Breakfast: Ruti, Banana, Egg & Water',
          bnTitle: '২য় দিন: সকালের নাস্তা (রুটি, কলা, ডিম ও পানি)',
          icon: '🌄',
          items: ['Fresh Ruti / Paratha', 'Energy Banana', 'Boiled Egg', 'Drinking Water'],
          bnItems: ['রুটি', 'পাহাড়ি পাকা কলা', 'সিদ্ধ ডিম', 'খাবার পানি'],
          note: 'High-energy trail breakfast before Chandranath summit hike',
          bnNote: 'চন্দ্রনাথ পাহাড় ও ইকোপার্ক যাত্রার আগে পুষ্টিকর সকালের নাস্তা'
        },
        {
          time: '03:00 PM',
          bnTime: 'বিকেল ০৩:০০',
          title: 'Day 2 Traditional Lunch: Rice, Dal, Chicken & Vegetables',
          bnTitle: '২য় দিন: দুপুরের খাবার (ভাত, ডাল, সবজি, চিকেন ও পানি)',
          icon: '🍲',
          items: ['Steamed Fragrant Rice', 'Delicious Deshi Chicken Curry', 'Seasonal Mixed Vegetable', 'Thick Lentil Dal', 'Drinking Water & Salad'],
          bnItems: ['সাদা ভাত', 'চিকেন কারি', 'মিক্সড সবজি', 'ঘন মসুর ডাল', 'পানি ও সালাদ'],
          note: 'Hearty traditional feast after conquering the mountain summit',
          bnNote: 'চন্দ্রনাথ পাহাড় থেকে নেমে এসে তৃপ্তিদায়ক দুপুরের খাবার'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Arrival, Twin Waterfalls & Coastal Beach Sunset',
          bnTitle: 'সীতাকুণ্ড আগমন, জোড়া ঝর্ণা ও সমুদ্র সৈকত',
          timeline: [
            {
              time: '09:00 AM',
              bnTime: 'সকাল ০৯:০০',
              text: 'Arrival in Sitakunda & Welcome Breakfast with delicious Egg Khichuri.',
              bnText: 'সীতাকুণ্ডে আগমন ও সকালের ব্রেকফাস্ট (ডিম খিচুড়ি)।'
            },
            {
              time: '10:00 AM',
              bnTime: 'সকাল ১০:০০',
              text: 'Journey to Ruposhi Waterfall & Sahasradhara Waterfall for trekking and cascade bathing.',
              bnText: 'রূপসী ঝর্ণা ও সহস্রধারা ঝর্ণার উদ্দেশ্যে যাত্রা ও ট্র্যাকিং।'
            },
            {
              time: '03:00 PM',
              bnTime: 'বিকেল ০৩:০০',
              text: 'Return from waterfall trek and enjoy a hearty lunch (Chicken Pulao & Cold Drinks).',
              bnText: 'ফিরে এসে তৃপ্তিদায়ক দুপুরের খাবার (মুরগি পোলাও ও কোল্ড ড্রিংকস)।'
            },
            {
              time: '04:00 PM',
              bnTime: 'বিকেল ০৪:০০',
              text: 'Depart for Akilpur & Banshbaria Sea Beaches; sea bridge walk and sunset view, followed by evening snacks.',
              bnText: 'আকিলপুর ও বাঁশবাড়িয়া সি বিচের উদ্দেশ্যে যাত্রা। সন্ধ্যায় ফিরে এসে নাস্তা।'
            },
            {
              time: '10:00 PM',
              bnTime: 'রাত ১০:০০',
              text: 'Squad dinner (Chicken Biryani / Grill-Paratha) and comfortable night rest at the hotel.',
              bnText: 'রাতের খাবার (চিকেন বিরিয়ানি / গ্রিল-পরোটা) ও হোটেলে বিশ্রাম।'
            }
          ]
        },
        {
          dayNumber: 'D2',
          dayLabel: 'DAY 2',
          bnDayLabel: '২য় দিন',
          title: 'Summit Hike, Eco Park Cascades & Guliakhali Beach',
          bnTitle: 'চন্দ্রনাথ পাহাড়, ইকোপার্ক ঝর্ণা ও গুলিয়াখালী বিচ',
          timeline: [
            {
              time: '06:00 AM',
              bnTime: 'সকাল ০৬:০০',
              text: 'Finish early breakfast (Ruti, Banana, Egg, Water) and set out for Chandranath Hill & Eco Park waterfalls.',
              bnText: 'ব্রেকফাস্ট (রুটি, কলা, ডিম ও পানি) শেষ করে চন্দ্রনাথ পাহাড় ও ইকোপার্কের ঝর্ণার উদ্দেশ্যে যাত্রা।'
            },
            {
              time: '03:00 PM',
              bnTime: 'বিকেল ০৩:০০',
              text: 'Return down from summit and enjoy traditional lunch (Rice, Dal, Mixed Vegetable, Chicken & Water).',
              bnText: 'ফিরে এসে দুপুরের খাবার (ভাত, ডাল, সবজি, চিকেন ও পানি)।'
            },
            {
              time: '04:00 PM',
              bnTime: 'বিকেল ০৪:০০',
              text: 'Depart for the green coastal plains of Guliakhali Sea Beach for sunset golden hour.',
              bnText: 'গুলিয়াখালী সি বিচের উদ্দেশ্যে যাত্রা ও সবুজ কার্পেট সৈকতে সূর্যাস্ত।'
            },
            {
              time: '07:00 PM',
              bnTime: 'সন্ধ্যা ০৭:০০',
              text: 'Tour concludes with beautiful and unforgettable memories of Sitakunda! ❤️ Safe journey back home.',
              bnText: 'এরপর সীতাকুণ্ড ভ্রমণের সুন্দর স্মৃতি নিয়ে ট্যুর সমাপ্তি। ❤️'
            }
          ]
        }
      ],
      highlights: [
        'Ruposhi & Sahasradhara Waterfall Trek',
        'Akilpur & Banshbaria Sea Pier Sunset',
        'Chandranath Peak Hike & Eco Park Waterfalls',
        'Guliakhali Green Carpet Beach Sunset',
        '6 Full Wholesome Meals Included',
        'Comfortable Hotel Stay & Reserved Transport'
      ],
      featured: true,
      isActive: true
    },
    {
      id: 'day-sitakunda-escape',
      packageId: 'day-sitakunda-escape',
      name: '1 Day Sitakunda Escape',
      bnName: '১ দিন সীতাকুণ্ড এস্কেপ',
      tagline: 'Experience the breathtaking cascades and coastal sea breeze of Sitakunda in just one action-packed day.',
      bnTagline: 'একদিনেই উপভোগ করুন সীতাকুণ্ডের ঝর্ণা ও সমুদ্রের অসাধারণ সৌন্দর্য। আমাদের এই প্যাকেজে থাকছে জনপ্রিয় কয়েকটি দর্শনীয় স্থান, খাবার, লোকাল ট্রান্সপোর্ট ও অভিজ্ঞ গাইড।',
      category: '1 Day',
      type: '1 Day Express',
      bnType: '১ দিন এক্সপ্রেস ডে-ট্যুর',
      badge: 'Day Tour Escape',
      bnBadge: 'ডে ট্যুর এস্কেপ',
      minTravelers: 'Min 4 Travelers',
      bnMinTravelers: 'ন্যূনতম ৪ জন',
      difficulty: 'Moderate',
      bnDifficulty: 'মাঝারি ট্রেইল',
      price: 1299,
      originalPrice: 1599,
      priceNote: 'per person all-inclusive',
      bnPriceNote: 'জনপ্রতি সর্বমোট',
      duration: '1 Day',
      bnDuration: '১ দিন',
      days: 1,
      nights: 0,
      image: 'images/spots/ruposhi-jhorna.jpg',
      destinations: [
        'ruposhi-jhorna',
        'chagalkanda-waterfall',
        'sahasradhara-waterfall',
        'akilpur-sea-beach',
        'banshbaria-sea-beach'
      ],
      spots: [
        'ruposhi-jhorna',
        'chagalkanda-waterfall',
        'sahasradhara-waterfall',
        'akilpur-sea-beach',
        'banshbaria-sea-beach'
      ],
      shortDesc: 'Experience the magnificent cascades and coastal sea breeze of Sitakunda in just one day. Includes top scenic spots, meals, local transport, and an experienced guide.',
      bnShortDesc: 'একদিনেই উপভোগ করুন সীতাকুণ্ডের ঝর্ণা ও সমুদ্রের অসাধারণ সৌন্দর্য। রূপশী ঝর্ণা, ছাগলকান্দা ঝর্ণা, সহস্রধারা ২, আকিলপুর ও বাঁশবাড়িয়া বিচসহ আকর্ষণীয় স্পট, ডিম খিচুড়ি ব্রেকফাস্ট, মুরগির লাঞ্চ, লোকাল ট্রান্সপোর্ট ও গাইড।',
      includesList: ['All Spot Entry Fees', 'Local Transport', 'Expert Tour Guide', 'Tour Safety', '2 Full Meals'],
      included: [
        'Entry tickets and forest access fees for all mentioned spots (Ruposhi, Chagalkanda, Sahasradhara 2 & Sea Beaches)',
        'Dedicated reserved local transport throughout the day (Sitakunda arrival to all spots & return)',
        'Certified & experienced local tour guide for waterfall trails and beach tour',
        'Tour safety, security supervision and on-trail group coordination',
        '2 Wholesome meals: Morning authentic Egg Khichuri & Afternoon Chicken Lunch',
        'Transparent package policy: EZ Trails guarantees NO hidden charges'
      ],
      bnIncluded: [
        'উল্লেখিত স্পটের এন্ট্রি ফি ও প্রবেশ টিকিট (রূপসী ঝর্ণা, ছাগলকান্দা, সহস্রধারা ২ ও বিচসমূহ)',
        'সারাদিনের সকল স্পটে যাতায়াতের জন্য সংরক্ষিত লোকাল ট্রান্সপোর্ট',
        'ঝর্ণা ও সৈকত ট্রেইলের অভিজ্ঞ ও আন্তরিক ট্যুর গাইড',
        'ভ্রমণকালীন সার্বিক নিরাপত্তা ও দিকনির্দেশনা',
        '২ বেলার পুষ্টিকর খাবার: সকালের ডিম খিচুড়ি এবং দুপুরের তৃপ্তিদায়ক মুরগির মাংসের লাঞ্চ',
        'স্বচ্ছ ভ্রমণ নীতি: EZ Trails-এর কোনো হিডেন চার্জ নেই'
      ],
      excluded: [
        'Highway bus or train tickets from Dhaka/Chittagong to Sitakunda',
        'Any personal expense not explicitly mentioned in the package (EZ Trails will not bear unauthorized costs)',
        'Personal shopping, souvenirs, or additional snacks/beverages outside package',
        'Personal medications and individual tips'
      ],
      bnExcluded: [
        'নিজ জেলা বা ঢাকা/চট্টগ্রাম থেকে সীতাকুণ্ড আসা-যাওয়ার মূল বাস/ট্রেন টিকিট',
        'প্যাকেজে উল্লেখ নেই এমন কোনো খরচ EZ Trails বহন করবে না',
        'ব্যক্তিগত কেনাকাটা বা প্যাকেজ বহির্ভূত অতিরিক্ত খাবার/পানীয়',
        'ব্যক্তিগত ওষুধ ও নিজস্ব টিপস'
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
          time: '09:00 AM',
          bnTime: 'সকাল ০৯:০০',
          title: 'Morning Breakfast: Egg Khichuri',
          bnTitle: 'সকালের নাস্তা: ডিম খিচুড়ি',
          icon: '🌅',
          items: ['Authentic Egg Khichuri (Dim Khichuri)', 'Traditional Pickle', 'Salad & Mineral Water'],
          bnItems: ['ডিম খিচুড়ি', 'আচার', 'সালাদ ও খাবার পানি'],
          note: 'Freshly cooked authentic egg khichuri after arrival in Sitakunda',
          bnNote: 'সীতাকুণ্ডে পৌঁছে ফ্রেশ হয়ে সকালের নাস্তায় গরম গরম ডিম খিচুড়ি'
        },
        {
          time: '03:00 PM',
          bnTime: 'বিকেল ০৩:০০',
          title: 'Afternoon Lunch: Rice, Dal, Vegetable/Vorta & Chicken',
          bnTitle: 'দুপুরের খাবার: ভাত, ডাল, সবজি/ভর্তা ও মুরগি',
          icon: '☀️',
          items: ['Steamed Fragrant Rice', 'Delicious Deshi Chicken Curry', 'Thick Lentil Dal', 'Seasonal Vegetable / Vorta', 'Salad & Mineral Water'],
          bnItems: ['সুগন্ধি সাদা ভাত', 'দেশি মুরগির ঝোল কারি', 'ঘন মসুর ডাল', 'মৌসুমি সবজি / ভর্তা', 'সালাদ ও খাবার পানি'],
          note: 'Hearty traditional feast after returning from waterfall trek',
          bnNote: 'সীতাকুণ্ডে ফিরে এসে তৃপ্তিদায়ক দুপুরের সুস্বাদু খাবার'
        }
      ],
      scheduleDays: [
        {
          dayNumber: 'D1',
          dayLabel: 'DAY 1',
          bnDayLabel: '১ম দিন',
          title: 'Arrival, Triple Waterfalls Trek & Sunset Coastlines',
          bnTitle: 'সীতাকুণ্ড আগমন, ৩ ঝর্ণা ট্রেইল ও সমুদ্র সৈকত',
          timeline: [
            {
              time: '09:00 AM',
              bnTime: 'সকাল ০৯:০০',
              text: 'Arrival in Sitakunda & Morning Breakfast with delicious Egg Khichuri.',
              bnText: 'সীতাকুণ্ডে আগমন ও সকালের নাস্তা (ডিম খিচুড়ি)।'
            },
            {
              time: '10:00 AM',
              bnTime: 'সকাল ১০:০০',
              text: 'Journey to Ruposhi Waterfall, Chagalkanda Waterfall & Sahasradhara 2 for canyon trekking & cascade bathing.',
              bnText: 'রূপশী ঝর্ণা, ছাগলকান্দা ঝর্ণা ও সহস্রধারা ২ এর উদ্দেশ্যে যাত্রা ও ট্র্যাকিং।'
            },
            {
              time: '03:00 PM',
              bnTime: 'বিকেল ০৩:০০',
              text: 'Return to Sitakunda town and enjoy a satisfying lunch (Rice, Dal, Vegetable/Vorta & Chicken).',
              bnText: 'সীতাকুণ্ডে ফিরে দুপুরের খাবার (ভাত, ডাল, সবজি/ভর্তা ও মুরগি)।'
            },
            {
              time: '04:00 PM',
              bnTime: 'বিকেল ০৪:০০',
              text: 'Depart for Akilpur & Banshbaria Sea Beaches; sea bridge walk and coastal sunset.',
              bnText: 'আকিলপুর ও বাঁশবাড়িয়া সি বিচের উদ্দেশ্যে যাত্রা।'
            },
            {
              time: '06:00 PM',
              bnTime: 'সন্ধ্যা ০৬:০০',
              text: 'Return to Sitakunda and tour concludes with beautiful memories! ❤️ Safe journey back home.',
              bnText: 'সীতাকুণ্ডে ফিরে মিষ্টি মধুর স্মৃতি নিয়ে ট্যুর সমাপ্তি। ❤️'
            }
          ]
        }
      ],
      highlights: [
        'Ruposhi, Chagalkanda & Sahasradhara 2 Waterfalls',
        'Akilpur & Banshbaria Sea Beaches Sunset Walk',
        'Egg Khichuri Breakfast & Chicken Lunch Included',
        'Dedicated Local Transport & Certified Guide',
        'Tour Safety & Security Supervision',
        '100% Transparent: No Hidden Charges'
      ],
      featured: true,
      isActive: true
    },
    {
      id: 'jhum-ghor-bbq-night',
      packageId: 'jhum-ghor-bbq-night',
      name: 'Jhum Ghor BBQ Night',
      bnName: 'ঝুম ঘর BBQ নাইট 🔥',
      tagline: 'Starlit friendly gathering, live charcoal BBQ, and relaxing overnight stay in a traditional hilltop Jhum Ghor amidst serene nature.',
      bnTagline: 'প্রকৃতির মাঝে রাতের আড্ডা, BBQ আর বন্ধুদের সাথে একসাথে থাকার দারুণ আয়োজন! 🌙',
      category: 'Overnight • BBQ',
      type: 'Overnight Nature Stay',
      bnType: 'ওভারনাইট ক্যাম্পিং ও BBQ',
      badge: 'Campfire Special',
      bnBadge: 'ক্যাম্পফায়ার স্পেশাল 🔥',
      minTravelers: 'Max 15 Travelers',
      bnMinTravelers: 'সর্বোচ্চ ১৫ জনের ক্যাপাসিটি',
      difficulty: 'Easy / Relaxing',
      bnDifficulty: 'খুব সহজ ও আরামদায়ক',
      price: 599,
      originalPrice: 799,
      priceNote: 'per person (Min 2 days advance booking)',
      bnPriceNote: 'জনপ্রতি (কমপক্ষে ২ দিন আগে বুকিং)',
      duration: 'Overnight • 1 Night',
      bnDuration: '১ রাত (ওভারনাইট)',
      days: 1,
      nights: 1,
      image: 'images/spots/jhum-bari-camp.jpg',
      destinations: [
        'jhum-bari'
      ],
      spots: [
        'jhum-bari'
      ],
      shortDesc: 'Starlit friendly gathering, live charcoal BBQ, and relaxing overnight stay in a traditional hilltop bamboo Jhum Ghor surrounded by nature.',
      bnShortDesc: 'প্রকৃতির মাঝে রাতের আড্ডা, BBQ আর বন্ধুদের সাথে একসাথে থাকার দারুণ আয়োজন! ঐতিহ্যবাহী পাহাড়ি ঝুম ঘরে রাত্রিযাপন, লাইভ বারবিকিউ ডিনার, সর্বোচ্চ ১৫ জনের ক্যাপাসিটি ও নিরাপদ পরিবেশ।',
      includesList: ['Jhum Ghor Stay', 'BBQ Night & Dinner', 'Safe Environment', 'Max 15 Capacity', 'Campfire আড্ডা'],
      included: [
        'Overnight stay in authentic hilltop bamboo Jhum Ghor cottage (ঝুম ঘর)',
        'Live Charcoal BBQ Dinner (BBQ Chicken, Paratha, Salad/Sauce, Refreshing Drink)',
        'Evening campfire setup and cozy starlit gathering (রাতের আড্ডা)',
        'Peaceful, clean, safe and secure natural hilltop environment',
        'Intimate group experience with strictly capped maximum 15 travelers capacity',
        'Transparent pricing policy: EZ Trails guarantees 100% NO hidden charges'
      ],
      bnIncluded: [
        'ঐতিহ্যবাহী পাহাড়ি বাঁশের ঝুম ঘরে (Jhum Ghor) আরামদায়ক রাত্রিযাপন',
        'লাইভ বারবিকিউ ডিনার (কয়লার ফ্রেশ BBQ চিকেন, পরোটা, সালাদ/সস ও পানীয়)',
        'সন্ধ্যায় পাহাড়ে সূর্যাস্ত, ক্যাম্পফায়ার ও বন্ধুদের সাথে খোলা আকাশের নিচে জমজমাট আড্ডা',
        'সম্পূর্ণ নিরাপদ, মার্জিত ও নিরিবিলি প্রাকৃতিক পরিবেশ',
        'সর্বোচ্চ ১৫ জনের ক্যাপাসিটি (বন্ধু বা পরিবারের একান্ত চমৎকার সময় কাটানোর দারুণ সুযোগ)',
        'স্বচ্ছ ভ্রমণ পলিসি: EZ Trails-এর কোনো হিডেন চার্জ নেই'
      ],
      excluded: [
        'Transportation to and from Jhum Ghor base/Sitakunda',
        'Any personal expense or extra snacks outside the BBQ menu',
        'Personal medications and individual tips'
      ],
      bnExcluded: [
        'নিজ জেলা বা সীতাকুণ্ড বাজার থেকে ঝুম ঘরে আসার অভ্যন্তরীণ যাতায়াত খরচ',
        'BBQ মেন্যুর বাইরে অতিরিক্ত খাবার বা ব্যক্তিগত কোনো খরচ',
        'ব্যক্তিগত ওষুধ ও নিজস্ব টিপস'
      ],
      whatToPack: [
        'Light shawl or warm hoodie for the refreshing night hill breeze',
        'Fully charged power bank and phone camera for nighttime photography',
        'Personal toiletries and necessary personal medicines',
        'Comfortable footwear or rubber sandals for walking around the cottage'
      ],
      bnWhatToPack: [
        'রাতের পাহাড়ি মিষ্টি ঠান্ডার জন্য হালকা চাদর বা হুডি',
        'মোবাইলের জন্য পাওয়ার ব্যাংক ও ছবি তোলার ক্যামেরা',
        'ব্যক্তিগত প্রসাধন সামগ্রী ও প্রয়োজনীয় ওষুধপত্র',
        'কটেজে চলাফেরার জন্য আরামদায়ক জুতো বা স্যান্ডেল'
      ],
      meals: [
        {
          time: '08:30 PM',
          bnTime: 'রাত ০৮:৩০',
          title: 'Live Charcoal BBQ Dinner',
          bnTitle: 'লাইভ বারবিকিউ ডিনার ও নাস্তা',
          icon: '🍖',
          items: ['Charcoal Grilled BBQ Chicken', 'Fresh Crispy Paratha', 'Special Dipping Sauce & Salad', 'Chilled Refreshing Beverage (Drink)'],
          bnItems: ['কয়লার ফ্রেশ BBQ চিকেন', 'গরম পরোটা', 'সালাদ ও স্পেশাল সস', 'ঠান্ডা পানীয়'],
          note: 'Freshly grilled BBQ chicken served piping hot with paratha and dipping sauce under starlit sky',
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
            {
              time: '04:00 PM',
              bnTime: 'বিকেল ০৪:০০',
              text: 'Check-in: Arrival at hilltop Jhum Ghor, freshen up, and welcome to serene nature.',
              bnText: 'Check-in (বিকেল ৪:০০টা): ঝুম ঘরে আগমন ও পাহাড়ি শান্ত ছিমছাম পরিবেশে অভ্যর্থনা।'
            },
            {
              time: '06:00 PM',
              bnTime: 'সন্ধ্যা ০৬:০০',
              text: 'Evening: Sunset over the green ridges, campfire lighting, and lively friendly gathering (আড্ডা).',
              bnText: 'Evening: সূর্যাস্ত উপভোগ, ক্যাম্পফায়ার ও বন্ধুদের সাথে জমজমাট আড্ডা।'
            },
            {
              time: '08:30 PM',
              bnTime: 'রাত ০৮:৩০',
              text: 'BBQ Night: Live charcoal grilling begins! Enjoy hot BBQ chicken, parathas, sauce, salad & drinks.',
              bnText: 'BBQ Night: কয়লার ফ্রেশ বারবিকিউ চিকেন, পরোটা, সালাদ/সস ও পানীয় সহযোগে দারুণ ভোজ।'
            },
            {
              time: '11:00 PM',
              bnTime: 'রাত ১১:০০',
              text: 'Overnight: Peaceful rest and overnight stay in authentic bamboo Jhum Ghor under the starry sky.',
              bnText: 'Overnight: তারার নিচে ঐতিহ্যবাহী বাঁশের ঝুম ঘরে রাত্রিযাপন ও পাহাড়ি নিস্তব্ধতা উপভোগ।'
            },
            {
              time: '10:00 AM',
              bnTime: 'পরদিন সকাল ১০:০০',
              text: 'Check-out (Next Day 10:00 AM): Fresh morning mountain breeze, sweet memories & Check-out.',
              bnText: 'Check-out (পরদিন সকাল ১০:০০টা): পাহাড়ি স্নিগ্ধ সকালের সৌন্দর্য ও মিষ্টি স্মৃতি নিয়ে চেক-আউট।'
            }
          ]
        }
      ],
      highlights: [
        'Traditional Bamboo Jhum Ghor Overnight Stay',
        'Live Charcoal BBQ Chicken Dinner (Paratha, Sauce, Drinks)',
        'Evening Campfire & Relaxing Starlit আড্ডা',
        'Safe, Secure & Peaceful Mountain Atmosphere',
        'Maximum 15 Guests Capacity for Private Squad Comfort',
        'Advance Booking Required (Min 2 Days Prior)',
        '100% No Hidden Charges Policy'
      ],
      featured: true,
      isActive: true
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
      text: 'Tourstk made our Chandranath sunrise and Guliakhali trip completely hassle-free. The AC microbus was on time, the local food was great, and our guide knew the safest trail routes.',
      images: [
        { url: 'images/spots/chandranath-hill.jpg' },
        { url: 'images/spots/guliakhali-sea-beach.jpg' }
      ]
    },
    {
      name: 'Nusrat Jahan & Family',
      role: 'Chittagong',
      package: 'Family Comfort Sitakunda Day Out',
      rating: 5,
      initials: 'NJ',
      text: 'Traveled with my elderly parents and kids. Everything was smooth—no exhausting walks, direct car access to Eco Park, and the coordinator was super attentive.',
      images: [
        { url: 'images/spots/bhatiari-lake.jpg' },
        { url: 'images/spots/dc-park.jpg' }
      ]
    },
    {
      name: 'Rashedul Karim',
      role: 'BUET Trekking Club',
      package: 'Khaiyachora Extreme Waterfall Trek',
      rating: 5,
      initials: 'RK',
      text: 'Our guide was certified and carried safety ropes. Khaiyachora 9-step climb was thrilling and safe. We will definitely book with Tourstk again!',
      images: [
        { url: 'images/spots/khaiyachora-waterfall.jpg' },
        { url: 'images/spots/jhorjhori-trail.jpg' },
        { url: 'images/spots/napittachora-trail.jpg' }
      ]
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

// Ensure destinations are sequence-sorted by category:
// 1. Hills & Peaks -> 2. Waterfalls & Treks -> 3. Beaches & Coastlines -> 4. Lakes & Kayaking -> 5. Heritage & Springs
if (typeof TOURSTK !== 'undefined' && Array.isArray(TOURSTK.destinations)) {
  const _catSeq = [
    'Hills & Peaks',
    'Waterfalls & Treks',
    'Beaches & Coastlines',
    'Lakes & Kayaking',
    'Heritage & Springs'
  ];
  TOURSTK.destinations.sort((a, b) => {
    const ia = _catSeq.indexOf(a.category);
    const ib = _catSeq.indexOf(b.category);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}

if (typeof window !== 'undefined') {
  window.TOURSTK = TOURSTK;
  window.BookingManager = BookingManager;
}
