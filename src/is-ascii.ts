const asciiRegex = /^[\x00-\x7F]+$/;

/**
 * Validates if the given string contains only ascii letters.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is ascii characters, false otherwise.
 */
const isAscii = (input: any) => {
  if (typeof input !== "string") return false;
  return asciiRegex.test(input);
};

export { isAscii };
