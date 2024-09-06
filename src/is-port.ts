import { isInt } from "./is-int";

/**
 * Validates if the given string is port number or not.
 * Port number must be between 0 and 65535
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is port number, false otherwise.
 */
const isPort = (input: any) => {
  return isInt(input, { min: 0, max: 65535 });
};

export { isPort };
