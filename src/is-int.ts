interface Options {
  leadingZeros?: boolean;
  min?: number;
  max?: number;
  gt?: number;
  lt?: number;
}

const intRegex = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
const intLeadingZeroesRegex = /^[-+]?[0-9]+$/;

/**
 * Validates if the given string is integer or not.
 *
 * @param {any} input The string to validate.
 * @param {any} options.leadingZeros Allow leading zeros.
 * @returns {boolean} Returns true if the string is integer, false otherwise.
 */
const isInt = (input: any, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Leading zeroes are allowed or not.
  const regex = options?.leadingZeros ? intLeadingZeroesRegex : intRegex;

  const isValidInteger = regex.test(input);

  // If string is not integer format
  if (!isValidInteger) return false;

  const num = +input;

  // Check min,max,gt,lt
  if (options?.min && num < options.min) return false;
  if (options?.max && num > options.max) return false;
  if (options?.gt && num <= options.gt) return false;
  if (options?.lt && num >= options.lt) return false;

  return true;
};

export { isInt };
