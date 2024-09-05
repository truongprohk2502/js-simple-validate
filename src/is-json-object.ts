/**
 * Validates if the given string is JSON format or not by JSON.parse.
 *
 * @param {string} input - The string to validate.
 * @returns {boolean} - Returns true if the string is JSON format, false otherwise.
 */
const isStrictJSON = (input: string) => {
  try {
    JSON.parse(input);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validates if the given input is JSON object or array of objects.
 *
 * @param {any} input The input to validate.
 * @returns {boolean} Returns true if the input is JSON object or array of objects, false otherwise.
 */
const isValidObject = (input: any) => {
  if (Array.isArray(input)) return input.every(isValidObject);
  return typeof input === "object" && input !== null;
};

/**
 * Validates if the given string is JSON format or not.
 *
 * The JSON string must be in type of key/value pairs.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is JSON format, false otherwise.
 */
const isJsonObject = (input: any) => {
  let string = input;

  // Returns false input is not a string
  if (typeof string !== "string") return false;

  // Replace all white spaces and newlines with empty string
  string = string.replace(/\s/g, "").replace(/\n|\r/, "");

  // Check if the string is JSON object
  const isObjectFormat = /^\{.*\}$/.test(string);
  if (isObjectFormat) return isStrictJSON(string);

  // Check if the string is JSON array
  const isArrayFormat = /^\[.*\]$/.test(string);
  if (isArrayFormat) {
    const isValidArray = isStrictJSON(string);
    if (!isValidArray) return false;
    const array = JSON.parse(string) as Array<any>;
    return isValidObject(array);
  }

  return false;
};

export { isJsonObject };
