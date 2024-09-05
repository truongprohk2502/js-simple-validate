const notBase64Regex = /[^A-Z0-9+\/=]/i;
const urlSafeBase64Regex = /^[A-Z0-9_\-]*$/i;

interface Options {
  isUrlSafe: boolean;
}

/**
 * Validates if the given string is Base64 format or not.
 *
 * @param {any} input The string to validate.
 * @param {Options} options An optional configuration object.
 * @param {boolean} options.isUrlSafe Tests the string is url safe.
 * @returns {boolean} Returns true if the string is Base64 string, false otherwise.
 */
const isBase64 = (input: any, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Check if string is URL Base64 format
  if (options?.isUrlSafe) return urlSafeBase64Regex.test(input);

  const len = input.length;

  // If string is not matched with Base64 regex
  if (len % 4 !== 0 || notBase64Regex.test(input)) return false;

  // Find the first "=" character
  const firstPaddingChar = input.indexOf("=");

  // If does not exist "=" character
  if (firstPaddingChar === -1) return true;

  // If string ends with "=" character
  if (firstPaddingChar === len - 1) return true;

  // If string ends with double "=" character
  if (firstPaddingChar === len - 2 && input[len - 1] === "=") return true;

  return false;
};

export { isBase64 };
