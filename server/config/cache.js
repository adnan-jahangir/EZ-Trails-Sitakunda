const NodeCache = require('node-cache');

// Standard in-memory TTL: 300 seconds (5 mins), checkperiod: 120s
const memoryCache = new NodeCache({ stdTTL: 300, checkperiod: 120, useClones: false });

/**
 * Cache Interface (Compatible with Redis and In-Memory RAM Cache)
 */
const cacheService = {
  get: (key) => {
    try {
      return memoryCache.get(key);
    } catch (e) {
      return null;
    }
  },

  set: (key, data, ttlSeconds = 300) => {
    try {
      return memoryCache.set(key, data, ttlSeconds);
    } catch (e) {
      return false;
    }
  },

  del: (key) => {
    try {
      return memoryCache.del(key);
    } catch (e) {
      return false;
    }
  },

  invalidatePrefix: (prefix) => {
    try {
      const keys = memoryCache.keys();
      const matchingKeys = keys.filter(k => k.startsWith(prefix));
      if (matchingKeys.length > 0) {
        memoryCache.del(matchingKeys);
        console.log(`[Cache] ⚡ Invalidation for prefix "${prefix}" cleared ${matchingKeys.length} keys.`);
      }
    } catch (e) {}
  },

  stats: () => {
    return memoryCache.getStats();
  }
};

module.exports = cacheService;
