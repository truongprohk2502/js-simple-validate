const bech32Regex = /^(bc1|tb1|bc1p|tb1p)[ac-hj-np-z02-9]{39,58}$/;
const base58Regex = /^(1|2|3|m)[A-HJ-NP-Za-km-z1-9]{25,39}$/;

/**
 * Validates if the given string is Bitcoin address or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is BTC address, false otherwise.
 */
const isBitcoinAddress = (input: any) => {
  if (typeof input !== "string") return false;
  return bech32Regex.test(input) || base58Regex.test(input);
};

export { isBitcoinAddress };
