const rgbColor =
  /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor =
  /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent =
  /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
const rgbaColorPercent =
  /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;

/**
 * Validates if the given string is RGB (or RGBA) color or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is RGB, false otherwise.
 */
const isRgbColor = (input: any) => {
  let string = input;

  // Returns false input is not a string
  if (typeof string !== "string") return false;

  // Replace all white spaces and newlines with empty string
  string = string.replace(/\s/g, "").replace(/\n|\r/, "");

  return (
    rgbColor.test(string) ||
    rgbaColor.test(string) ||
    rgbColorPercent.test(string) ||
    rgbaColorPercent.test(string)
  );
};

export { isRgbColor };
