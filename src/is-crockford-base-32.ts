const crockfordBase32Regex = /^[A-HJKMNP-TV-Z0-9]+$/;

/**
 * Validates if the given string is Base32 format with Crockford algorithm or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Base32 string, false otherwise.
 */
const isCrockfordBase32 = (input: any) => {
  if (typeof input !== "string") return false;
  return crockfordBase32Regex.test(input);
};

export { isCrockfordBase32 };
