const ethRegex = /^(0x)[0-9a-f]{40}$/i;

/**
 * Validates if the given string is Ethereum address or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Ethereum address, false otherwise.
 */
const isEthereumAddress = (input: any) => {
  if (typeof input !== "string") return false;
  return ethRegex.test(input);
};

export { isEthereumAddress };
