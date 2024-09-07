import { isLuhnNumber } from "./is-luhn-number";

const imeiRegexWithoutHyphens = /^[0-9]{15}$/;
const imeiRegexWithHyphens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;

interface Options {
  allowHyphens: boolean;
}

/**
 * Validates if the given string is IMEI or not.
 *
 * @param {any} input The string to validate.
 * @param {boolean} options.allowHyphens If the IMEI string has hyphens.
 * @returns {boolean} Returns true if the string is IMEI, false otherwise.
 */
const isIMEI = (input, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const imeiRegex = options?.allowHyphens
    ? imeiRegexWithHyphens
    : imeiRegexWithoutHyphens;

  // If string is not IMEI format, returns false
  if (!imeiRegex.test(input)) return false;

  // Remove all hyphens
  input = input.replace(/-/g, "");

  return isLuhnNumber(input);
};

export { isIMEI };
