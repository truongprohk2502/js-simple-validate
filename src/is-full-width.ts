const fullWidthRegex =
  /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Validates if the given string is full width characters or not.
 * Full-width character has horizontal and vertical length ratio are the same
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is full width characters, false otherwise.
 */
const isFullWidth = (input: any) => {
  if (typeof input !== "string") return false;
  return fullWidthRegex.test(input);
};

export { isFullWidth };
