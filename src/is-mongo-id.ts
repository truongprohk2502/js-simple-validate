import { isHexadecimal } from "./is-hexadecimal";

/**
 * Validates if the given string is mongo id or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is mongo id, false otherwise.
 */
const isMongoId = (input: any) => {
  if (typeof input !== "string") return false;
  return isHexadecimal(input) && input.length === 24;
};

export { isMongoId };
