interface Options {
    isUrlSafe: boolean;
}
/**
 * Validates if the given string is Base64 format or not.
 *
 * @param {any} input The string to validate.
 * @param {Options} options An optional configuration object.
 * @param {boolean} options.isUrlSafe Tests the string is url safe.
 * @returns {boolean} Returns true if the string is Base64 string, false otherwise.
 */
declare const isBase64: (input: any, options?: Options) => boolean;
export { isBase64 };
