const formats = {
  hour24: {
    default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
    withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
  },
  hour12: {
    default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
    withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/,
  },
};

interface Options {
  hourFormat?: "12" | "24";
  withSeconds?: boolean;
}

/**
 * Validates if the given string is time or not.
 *
 * @param {any} input The string to validate.
 * @param {string} options.hourFormat The hour format.
 * @param {string} options.withSeconds The time need to have seconds.
 * @returns {boolean} Returns true if the string is time, false otherwise.
 */
const isTime = (input, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const formatsRegex = [];

  // If hour format is 12
  if (options?.hourFormat === "12") {
    // If only format time that contains seconds
    if (options?.withSeconds) formatsRegex.push(formats.hour12.withSeconds);
    else formatsRegex.push(formats.hour12.default, formats.hour12.withSeconds);
  }
  // If hour format is 24
  else if (options?.hourFormat === "24") {
    // If only format time that contains seconds
    if (options?.withSeconds) formatsRegex.push(formats.hour24.withSeconds);
    else formatsRegex.push(formats.hour24.default, formats.hour24.withSeconds);
  }
  // If only format time that contains seconds
  else if (options?.withSeconds) {
    formatsRegex.push(formats.hour12.withSeconds, formats.hour24.withSeconds);
  }
  // Check all formats if options is empty
  else {
    formatsRegex.push(
      formats.hour12.default,
      formats.hour12.withSeconds,
      formats.hour24.default,
      formats.hour24.withSeconds
    );
  }

  return formatsRegex.some((item) => item.test(input));
};

export { isTime };
