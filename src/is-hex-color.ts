const hexcolorRegex = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

/**
 * Validates if the given string is hex color or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is hex color, false otherwise.
 */
const isHexColor = (input: any) => {
  if (typeof input !== "string") return false;
  return hexcolorRegex.test(input);
};

export { isHexColor };
