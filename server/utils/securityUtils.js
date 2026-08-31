const mongoose = require('mongoose');

/**
 * Escapes regex special characters to prevent Regular Expression Denial of Service (ReDoS)
 * and arbitrary regex matching attacks in MongoDB queries ($regex).
 *
 * @param {string} str - Raw user input string
 * @returns {string} Escaped string safe for RegExp construction
 */
const escapeRegex = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

/**
 * Checks if a given string is a valid MongoDB ObjectId (24 hex characters).
 *
 * @param {string} id
 * @returns {boolean}
 */
const isValidObjectId = (id) => {
  if (!id || typeof id !== 'string') return false;
  return mongoose.Types.ObjectId.isValid(id) && /^[0-9a-fA-F]{24}$/.test(id);
};

/**
 * Sanitizes generic user text by removing harmful control characters and trimming.
 *
 * @param {string} input
 * @returns {string}
 */
const cleanString = (input) => {
  if (typeof input !== 'string') return '';
  // Strip control characters while keeping standard whitespace/unicode
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
};

module.exports = {
  escapeRegex,
  isValidObjectId,
  cleanString,
};
