const base58Regex = /^[A-HJ-NP-Za-km-z1-9]*$/;

/**
 * Validates if the given string is Base58 format or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Base58 string, false otherwise.
 */
const isBase58 = (input: any) => {
  if (typeof input !== "string") return false;
  return base58Regex.test(input);
};

export { isBase58 };
