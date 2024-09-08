import { isFQDN } from "./is-fqdn";

const emailUserPartRegex = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;

/**
 * Validates if the given string is email address or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is email address, false otherwise.
 */
const isEmail = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Email length must be less than 255 characters
  if (input.length > 254) return false;

  const parts = input.split("@");

  // Email must have username and domain that are separated by @
  if (parts.length !== 2) return false;

  const local = parts[0];
  const domain = parts[1];

  const isValidDomain = isFQDN(domain, {
    allowUnderscores: true,
    ignoreMaxLength: true,
  });

  // Domain of email is invalid
  if (!isValidDomain) return false;

  const userParts = local.split(".");

  // Check all local parts (separated by dot) are valid
  for (let i = 0; i < userParts.length; i++) {
    if (!emailUserPartRegex.test(userParts[i])) return false;
  }

  return true;
};

export { isEmail };
