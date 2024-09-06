const hslCommaRegex =
  /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
const hslSpaceRegex =
  /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;

const isHSL = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Strip duplicate spaces before calling the validation regex
  const strippedStr = input
    .replace(/\s+/g, " ")
    .replace(/\s?(hsla?\(|\)|,)\s?/gi, "$1");

  // If has comma, then check by comma format, otherwise check by space format
  const regex = strippedStr.indexOf(",") !== -1 ? hslCommaRegex : hslSpaceRegex;

  return regex.test(strippedStr);
};

export { isHSL };
