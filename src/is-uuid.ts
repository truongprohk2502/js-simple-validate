const uuidRegex =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

/**
 * Validates if the given string is UUID or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is UUID, false otherwise.
 */
const isUUID = (input: any) => {
  if (typeof input !== "string") return false;
  return uuidRegex.test(input);
};

export { isUUID };
