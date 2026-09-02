const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Destination = require('../models/Destination');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const dataFile = fs.readFileSync(path.join(__dirname, '../../public/js/data.js'), 'utf8');
eval(dataFile.replace('const TOURSTK', 'global.TOURSTK'));

async function syncAllDestinations() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas.');

    const deletedIds = ['kumira-ghat', 'barabkunda-fire-spring', 'jhorjhori-trail'];
    const delRes = await Destination.deleteMany({ destinationId: { $in: deletedIds } });
    console.log('Removed obsolete destinations:', delRes.deletedCount);

    console.log('Syncing all', global.TOURSTK.destinations.length, 'destinations with full galleries...');

    for (const spot of global.TOURSTK.destinations) {
      const sId = spot.id || spot.destinationId;
      const doc = {
        destinationId: sId,
        name: spot.name,
        bnName: spot.bnName || '',
        category: spot.category || 'Hills & Peaks',
        difficulty: spot.difficulty || 'Moderate',
        bestTime: spot.bestTime || 'Morning & Sunset',
        lat: spot.lat || 0,
        lng: spot.lng || 0,
        image: spot.image,
        shortDesc: spot.shortDesc || '',
        description: spot.description || '',
        tags: spot.tags || [],
        thingsToDo: spot.thingsToDo || [],
        tips: spot.tips || [],
        gallery: spot.gallery && spot.gallery.length > 0
          ? spot.gallery
          : [{ type: 'image', src: spot.image, thumb: spot.image, label: 'Main View' }],
        isActive: true
      };

      await Destination.findOneAndUpdate(
        { destinationId: sId },
        { $set: doc },
        { upsert: true, new: true }
      );
      console.log(`Synced: ${sId.padEnd(25)} (${doc.gallery.length} photos)`);
    }

    const finalCount = await Destination.countDocuments();
    console.log('TOTAL DESTINATIONS IN MONGODB NOW:', finalCount);
    process.exit(0);
  } catch (err) {
    console.error('Sync failed:', err);
    process.exit(1);
  }
}

syncAllDestinations();
