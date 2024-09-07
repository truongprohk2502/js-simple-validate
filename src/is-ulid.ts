const ulidRegex = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i;

/**
 * Validates if the given string is valid ULID or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is valid ULID, false otherwise.
 */
const isULID = (input: any) => {
  if (typeof input !== "string") return false;
  return ulidRegex.test(input);
};

export { isULID };
