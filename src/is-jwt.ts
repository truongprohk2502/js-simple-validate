import { isBase64 } from "./is-base-64";

/**
 * Validates if the given string is JWT token or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is JWT token, false otherwise.
 */
const isJWT = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Three sections of JWT token
  const dotSplit = input.split(".");

  // JWT token must have 3 sections separated by dot
  if (dotSplit.length !== 3) return false;

  // All sub strings must be Base64 format
  return dotSplit.every((item) => isBase64(item, { isUrlSafe: true }));
};

export { isJWT };
