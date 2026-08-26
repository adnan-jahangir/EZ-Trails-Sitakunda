const cacheService = require('../config/cache');

/**
 * Cache middleware for Express GET requests
 * @param {string} keyPrefix e.g. 'packages', 'destinations'
 * @param {number} ttlSeconds TTL in seconds
 */
const cacheMiddleware = (keyPrefix, ttlSeconds = 300) => {
  return (req, res, next) => {
    // Only cache GET requests
    if (req.method !== 'GET') return next();

    const cacheKey = `${keyPrefix}:${req.originalUrl || req.url}`;
    const cachedData = cacheService.get(cacheKey);

    if (cachedData) {
      res.set('X-Cache', 'HIT');
      return res.json(cachedData);
    }

    // Intercept res.json to store in cache
    const originalJson = res.json.bind(res);
    res.json = function (body) {
      res.set('X-Cache', 'MISS');
      if (body && body.success !== false) {
        cacheService.set(cacheKey, body, ttlSeconds);
      }
      return originalJson(body);
    };

    next();
  };
};

module.exports = { cacheMiddleware, cacheService };
