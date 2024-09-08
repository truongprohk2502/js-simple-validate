const magnetURIRegex =
  /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;

/**
 * Validates if the given string is Magnet URI or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Magnet URI, false otherwise.
 */
const isMagnetURI = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Magnet must be started with "magnet:?"
  if (!input.startsWith("magnet:?")) return false;

  return magnetURIRegex.test(input);
};

export { isMagnetURI };
