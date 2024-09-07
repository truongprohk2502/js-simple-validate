const latRegex = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const longRegex = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

const getLatDMS = (d: string, m: string, s: string) =>
  new RegExp(
    `^(([1-8]?\\d)${d}([1-5]?\\d|60)${m}([1-5]?\\d|60)(\\.\\d+)?|90${d}0${m}0)${s}[NSns]?$`,
    "i"
  );
const getLongDMS = (d: string, m: string, s: string) =>
  new RegExp(
    `^([1-7]?\\d{1,2}${d}([1-5]?\\d|60)${m}([1-5]?\\d|60)(\\.\\d+)?|180${d}0${m}0)${s}[EWew]?$`,
    "i"
  );

interface Options {
  checkDMS?: boolean;
  dmsUnits?: {
    degree: string;
    minute: string;
    second: string;
  };
}

/**
 * Validates if the given string is Latitude and Longitude value or not.
 *
 * @param {any} input The string to validate.
 * @param {boolean} checkDMS Check the format LatLong is DMS.
 * @param {object} dmsUnits The unit text of DMS `{ degree, minute, second }`.
 * @returns {boolean} Returns true if the string is LatLong, false otherwise.
 */
const isLatLong = (input: any, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Replace all white spaces and newlines with empty string
  input = input.replace(/\s/g, "").replace(/\n|\r/, "");

  // LatLong must be separated by comma
  if (!input.includes(",")) return false;

  const pair = input.split(",");

  // Check if LatLong is wrapped by parentheses
  if (
    (pair[0].startsWith("(") && !pair[1].endsWith(")")) ||
    (pair[1].endsWith(")") && !pair[0].startsWith("("))
  )
    return false;

  // Get DMS value
  const d = options?.dmsUnits?.degree || "°";
  const m = options?.dmsUnits?.minute || "'";
  const s = options?.dmsUnits?.second || "''";

  const latDMS = getLatDMS(d, m, s);
  const longDMS = getLongDMS(d, m, s);

  // Check by DMS format
  if (options?.checkDMS) return latDMS.test(pair[0]) && longDMS.test(pair[1]);

  return (
    (latRegex.test(pair[0]) && longRegex.test(pair[1])) ||
    (latDMS.test(pair[0]) && longDMS.test(pair[1]))
  );
};

export { isLatLong };
