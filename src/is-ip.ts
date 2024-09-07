// IPv4 value is octet number between 0 to 255
const IPv4SegmentFormat =
  "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
// IPv4 format is x.x.x.x
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);

// IPv6 value is hexadecimal between 0 and FFFF
const IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
// IPv6 format is has max 8 segments separated by ":"
// Basic: y:y:y:y:y:y:y:y
// Imply zero: :: (all segments are zero)
// Imply zero: y:y:: (last 6 segments are zero)
// Imply zero: ::y:y (first 6 segments are zero)
// Imply zero: y:y::y:y (middle of 4 segments are zero)
// Dual: y:y:y:y:x.x.x.x (can combine IPv4 and IPv6 format)
// The IPv6 portion is always at the beginning, followed by the IPv4 portion
const IPv6AddressRegExp = new RegExp(
  "^(" +
    `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
    `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
    `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
    `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
    `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
    `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
    `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
    `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
    ")(%[0-9a-zA-Z-.:]{1,})?$"
);

type Version = "IPv4" | "IPv6";

/**
 * Validates if the given string is IP address or not.
 *
 * @param {any} input The string to validate.
 * @param {Version} version The version of IP address.
 * @returns {boolean} Returns true if the string is IP address, false otherwise.
 */
const isIP = (input: any, version?: Version) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  if (version === "IPv4") return IPv4AddressRegExp.test(input);
  if (version === "IPv6") return IPv6AddressRegExp.test(input);
  return IPv4AddressRegExp.test(input) || IPv6AddressRegExp.test(input);
};

export { isIP };
