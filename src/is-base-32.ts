const base32Regex = /^[A-Z2-7]+=*$/;

/**
 * Validates if the given string is Base32 format or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Base32 string, false otherwise.
 */
const isBase32 = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Check if string is Base64 format
  if (input.length % 8 === 0 && base32Regex.test(input)) return true;

  return false;
};

export { isBase32 };
