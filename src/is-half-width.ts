const halfWidthRegex =
  /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Validates if the given string is half width characters or not.
 * Half-width character has horizontal and vertical length ratio are 1/2
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is half width characters, false otherwise.
 */
const isHalfWidth = (input: any) => {
  if (typeof input !== "string") return false;
  return halfWidthRegex.test(input);
};

export { isHalfWidth };
