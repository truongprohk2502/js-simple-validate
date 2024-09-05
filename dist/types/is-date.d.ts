interface Options {
    format?: string;
    delimiters?: string[];
    strictMode?: boolean;
}
/**
 * Validates if the given string is date string or not.
 *
 * @param {any} input The string to validate.
 * @param {Options} options An optional configuration object.
 * @param {boolean} options.format The format of date string.
 * @param {boolean} options.strictMode Match exactly format.
 * @returns {boolean} Returns true if the string is date string, false otherwise.
 */
declare const isDate: (input: any, options?: Options) => boolean;
export { isDate };
