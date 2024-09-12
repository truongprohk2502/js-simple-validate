const filenameReservedRegex = /[<>:"/\\|?*\u0000-\u001F]/g;
const windowsReservedNameRegex = /^(con|prn|aux|nul|com\d|lpt\d)$/i;
const fileExtensionRegex = /^[a-zA-Z]+(-[a-zA-Z]+)*$/;

interface Options {
  requireExtension: boolean;
}

/**
 * Validates if the given string is valid file name or not.
 *
 * @param {any} input The string to validate.
 * @param {boolean} options.requireExtension Requires the file extension.
 * @returns {boolean} Returns true if the string is valid file name, false otherwise.
 */
const isFileName = (input: any, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const split = input.split(".");

  // File name must contain extension
  if (options?.requireExtension) {
    // Not contain extension
    if (split.length < 2) return false;
    const ext = split.pop();

    // Test valid extension
    if (!fileExtensionRegex.test(ext)) return false;
  }

  // File name contains empty part (separated by dot)
  if (split.some((item) => !item.trim())) return false;

  const fileName = split.join(".");

  // Exceed max length
  if (fileName.length > 255) return false;

  // Invalid file name format
  if (
    filenameReservedRegex.test(fileName) ||
    windowsReservedNameRegex.test(fileName)
  )
    return false;

  return true;
};

export { isFileName };
