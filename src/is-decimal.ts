interface Options {
  force?: boolean;
  digits?: number;
}

/**
 * Validates if the given string is decimal or not.
 *
 * @param {any} input The string to validate.
 * @param {any} options.digits The digits of decimal.
 * @param {any} options.force Check exactly a decimal with dot symbol and digits.
 * @returns {boolean} Returns true if the string is decimal number, false otherwise.
 */
const isDecimal = (input: any, options?: Options) => {
  // Convert number to string
  if (typeof input === "number") {
    input = Number(input).toString();
  }

  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Add default options value
  const digits = options?.digits || 1;
  const force = Boolean(options?.force);

  // Make a regex of digits and force digits number
  const regExp = new RegExp(
    `^[-+]?([0-9]+)?(\\.[0-9]{${digits},})${force ? "" : "?"}$`
  );

  // Test if is valid decimal
  return regExp.test(input);
};

export { isDecimal };
