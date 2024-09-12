const isError = (value) =>
  Object.prototype.toString.call(value) === "[object Error]";

const errorMessages = new Set([
  "network error", // Chrome
  "Failed to fetch", // Chrome
  "NetworkError when attempting to fetch resource.", // Firefox
  "The Internet connection appears to be offline.", // Safari 16
  "Load failed", // Safari 17+
  "Network request failed", // `cross-fetch`
  "fetch failed", // Undici (Node.js)
  "terminated", // Undici (Node.js)
]);

/**
 * Validates if the given input is network error or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the input is network error, false otherwise.
 */
const isNetworkError = (error: any) => {
  const isValid =
    error &&
    isError(error) &&
    error.name === "TypeError" &&
    typeof error.message === "string";

  if (!isValid) return false;

  // We do an extra check for Safari 17+ as it has a very generic error message.
  // Network errors in Safari have no stack.
  if (error.message === "Load failed") return error.stack === undefined;

  return errorMessages.has(error.message);
};

export { isNetworkError };
