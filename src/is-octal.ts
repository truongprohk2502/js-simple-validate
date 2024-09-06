const octalRegex = /^(0o)?[0-7]+$/i;

/**
 * Validates if the given string is octal number or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is octal number, false otherwise.
 */
const isOctal = (input: any) => {
  if (typeof input !== "string") return false;
  return octalRegex.test(input);
};

export { isOctal };
