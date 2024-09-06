const validMediaTypeRegex = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
const validAttributeRegex = /^[a-z\-]+=[a-z0-9\-]+$/i;
const validDataRegex = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

/**
 * Validates if the given string is Data URI format or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is Data URI string, false otherwise.
 */
const isDataURI = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const data = input.split(",");

  // Data URI must have comma character
  if (data.length < 2) return false;

  const attributes = data.shift().trim().split(";");

  const schemeAndMediaType = attributes.shift();

  // Data URI must start with "data:"
  if (schemeAndMediaType.slice(0, 5) !== "data:") return false;

  const mediaType = schemeAndMediaType.slice(5);

  // Check if media type is valid
  if (mediaType !== "" && !validMediaTypeRegex.test(mediaType)) return false;

  for (let i = 0; i < attributes.length; i++) {
    // Check if the last attribute is "base64" string
    // Data URI can have the string "base64," before data or not
    const endsWithBase64 =
      i === attributes.length - 1 && attributes[i].toLowerCase() === "base64";

    // Check if attribute value pairs is valid
    // Data URI attribute has format "attribute=value"
    if (!endsWithBase64 && !validAttributeRegex.test(attributes[i]))
      return false;
  }

  for (let i = 0; i < data.length; i++) {
    // Check if data is valid
    // Data URI data must only have ASCII characters
    if (!validDataRegex.test(data[i])) return false;
  }

  return true;
};

export { isDataURI };
