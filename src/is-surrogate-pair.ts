const surrogatePairRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

/**
 * Validates if the given string is surrogate pair characters or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is surrogate pair, false otherwise.
 */
const isSurrogatePair = (input: any) => {
  if (typeof input !== "string") return false;
  return surrogatePairRegex.test(input);
};

export { isSurrogatePair };
