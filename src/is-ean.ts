const validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;

/**
 * Calculate EAN Check Digit
 *
 * @param {string} input The EAN string
 * @return {number} The check digit of EAN number
 */
const calculateCheckDigit = (input: string) => {
  let checksum = 0;

  const digits = input.split("");
  let isOdd = true;

  // Loop reverse from the near latest digit from right to left
  for (let i = digits.length - 2; i >= 0; i--) {
    const num = +digits[i];
    // If is odd index, add to sum by multiply 3 with digit,
    // otherwise just add digit to sum
    checksum += num * (isOdd ? 3 : 1);
    isOdd = !isOdd;
  }

  // Get the check digit of EAN
  const remainder = 10 - (checksum % 10);
  return remainder < 10 ? remainder : 0;
};

/**
 * Validates if the given string is valid EAN or not.
 *
 * @param {string} input The string to validate.
 * @return {boolean} Returns true if the string is valid EAN, false otherwise.
 */
const isEAN = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const actualCheckDigit = Number(input.slice(-1));

  // Check EAN is valid format and calculate the check digit that equal to the last digit
  return (
    validEanRegex.test(input) && actualCheckDigit === calculateCheckDigit(input)
  );
};

export { isEAN };
