interface Options {
    force?: boolean;
    digits?: number;
}
/**
 * Validates if the given string decimal or not.
 *
 * @param {any} input The string to validate.
 * @param {any} options.digits The digits of decimal.
 * @param {any} options.force Check exactly a decimal with dot symbol and digits.
 * @returns {boolean} Returns true if the string decimal number, false otherwise.
 */
declare const isDecimal: (input: any, options?: Options) => boolean;
export { isDecimal };
