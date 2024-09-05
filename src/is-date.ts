interface Options {
  format?: string;
  delimiters?: string[];
  strictMode?: boolean;
}

/**
 * Check is valid format with type like "yyyy-mm-dd", "mm.dd.yyyy", "dd/mm/yy", ...
 *
 * @param {string[]} format The format need to validate.
 * @returns {boolean} Returns true if is valid format.
 */
const checkIsValidFormat = (format: string) =>
  /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(
    format
  );

/**
 * Generate array of each date value and format value pairs.
 *
 * @param {string[]} date The date array.
 * @param {string[]} format The format array.
 * @returns {boolean} Returns the list of date and value pairs.
 */
const zip = (date: string[], format: string[]) => {
  const zippedArr = [];

  const len = Math.max(date.length, format.length);

  for (let i = 0; i < len; i++) {
    zippedArr.push([date[i], format[i]]);
  }

  return zippedArr;
};

/**
 * Validates if the given string is date string or not.
 *
 * @param {any} input The string to validate.
 * @param {Options} options An optional configuration object.
 * @param {boolean} options.format The format of date string.
 * @param {boolean} options.strictMode Match exactly format.
 * @returns {boolean} Returns true if the string is date string, false otherwise.
 */
const isDate = (input: any, options?: Options) => {
  // Delimiters between day,month and year
  const delimiters = ["/", "-", "."];

  // Set default options value
  const format = options?.format || "YYYY/MM/DD";
  const strictMode = Boolean(options?.strictMode);

  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // If format is invalid, return false
  if (!checkIsValidFormat(format)) return false;

  // Find the delimiter of format string
  const formatDelimiter = delimiters.find(
    (delimiter) => format.indexOf(delimiter) !== -1
  );

  // Find the delimiter of input string,
  // if is in strict mode then input delimiter is the same as format delimiter
  const dateDelimiter = strictMode
    ? formatDelimiter
    : delimiters.find((delimiter) => input.indexOf(delimiter) !== -1);

  // Get the list of date value and format pairs
  const dateAndFormat = zip(
    input.split(dateDelimiter),
    format.toLowerCase().split(formatDelimiter)
  );

  const dateObj: any = {};

  // Iterate all date value and format pairs
  for (const [dateWord, formatWord] of dateAndFormat) {
    // Date value and format need to exist and have the same length
    if (!dateWord || !formatWord || dateWord.length !== formatWord.length)
      return false;

    // Add value to dateObj with key is y,m,d
    dateObj[formatWord.charAt(0)] = dateWord;
  }

  let fullYear = dateObj.y;

  // Check if the year starts with a hyphen
  if (fullYear.startsWith("-")) return false;

  // Convert short year to full year
  if (dateObj.y.length === 2) {
    const parsedYear = parseInt(dateObj.y, 10);

    // If year is not a number, return false
    if (isNaN(parsedYear)) return false;

    const currentYearLastTwoDigits = new Date().getFullYear() % 100;

    // Format year based on last 2 digits
    if (parsedYear < currentYearLastTwoDigits) {
      fullYear = `20${dateObj.y}`;
    } else {
      fullYear = `19${dateObj.y}`;
    }
  }

  let month = dateObj.m;

  // Format month if it has 1 character
  if (dateObj.m.length === 1) {
    month = `0${dateObj.m}`;
  }

  let day = dateObj.d;

  // Format day if it has 1 character
  if (dateObj.d.length === 1) {
    day = `0${dateObj.d}`;
  }

  // Check if date instance is valid
  return (
    new Date(`${fullYear}-${month}-${day}T00:00:00.000Z`).getUTCDate() ===
    +dateObj.d
  );
};

export { isDate };
