const gitRegex =
  /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/;

/**
 * Validates if the given string is Git URL or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Git URL, false otherwise.
 */
const isGitURL = (input: any) => {
  if (typeof input !== "string") return false;
  return gitRegex.test(input);
};

export { isGitURL };
