const semverRegex =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-z-][0-9a-z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-z-][0-9a-z-]*))*))?(?:\+([0-9a-z-]+(?:\.[0-9a-z-]+)*))?$/i;

/**
 * Validates if the given string is Semantic Version or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is SemVer, false otherwise.
 */
const isSemVer = (input: any) => {
  if (typeof input !== "string") return false;
  return semverRegex.test(input);
};

export { isSemVer };
