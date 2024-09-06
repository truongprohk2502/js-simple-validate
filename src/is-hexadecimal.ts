const hexadecimalRegex = /^(0x|0h)?[0-9A-F]+$/i;

/**
 * Validates if the given string is hexadecimal number or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is hexadecimal number, false otherwise.
 */
const isHexadecimal = (input: any) => {
  if (typeof input !== "string") return false;
  return hexadecimalRegex.test(input);
};

export { isHexadecimal };
