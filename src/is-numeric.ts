interface Options {
  noSymbols: boolean;
}

const numericNoSymbols = /^[0-9]+$/;
const numericWithSymbols = /^[+-]?([0-9]*[\.])?[0-9]+$/;

/**
 * Validates if the given string is numeric or not.
 *
 * @param {any} input The string to validate.
 * @param {boolean} options.noSymbols The number must not have any symbol without digits.
 * @returns {boolean} Returns true if the string is numeric, false otherwise.
 */
const isNumeric = (input: any, options?: Options) => {
  // Convert number to string
  if (typeof input === "number") {
    input = Number(input).toString();
  }

  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const regex = options?.noSymbols ? numericNoSymbols : numericWithSymbols;

  return regex.test(input);
};

export { isNumeric };
