/**
 * MongoDB / NoSQL Injection Sanitizer Middleware
 * 
 * Recursively scans req.body, req.query, and req.params and removes
 * any prohibited keys starting with '$' (Mongo Operators) or containing '.' (Prohibited Dot Notation)
 * to completely eliminate NoSQL operator injection attacks (e.g., { "$ne": null }, { "$gt": "" }).
 */

function sanitizeObject(target) {
  if (!target || typeof target !== 'object') {
    return target;
  }

  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i++) {
      if (typeof target[i] === 'object' && target[i] !== null) {
        sanitizeObject(target[i]);
      }
    }
    return target;
  }

  for (const key of Object.keys(target)) {
    // Check for '$' at the start (Mongo query operators) or '.' in key names
    if (key.startsWith('$') || key.includes('.')) {
      delete target[key];
    } else if (typeof target[key] === 'object' && target[key] !== null) {
      sanitizeObject(target[key]);
    }
  }

  return target;
}

const mongoSanitize = (req, res, next) => {
  if (req.body) {
    sanitizeObject(req.body);
  }
  if (req.query) {
    sanitizeObject(req.query);
  }
  if (req.params) {
    sanitizeObject(req.params);
  }
  next();
};

module.exports = { mongoSanitize, sanitizeObject };
