import { isEmail } from "./is-email";

/**
 * Parse query string of Mailto URI to "cc" and "bcc" emails.
 *
 * @param {string} input The query string to parse.
 * @returns {boolean} Returns parsed emails if it is valid Mailto URI format, false otherwise.
 */
const parseMailtoQueryString = (queryString) => {
  const allowedParams = new Set(["subject", "body", "cc", "bcc"]);
  const query = { cc: "", bcc: "" };
  let isParseFailed = false;

  const queryParams = queryString.split("&");

  // Mailto URI query params only have "subject", "body", "cc", "bcc"
  if (queryParams.length > 4) return false;

  for (const q of queryParams) {
    const [key, value] = q.split("=");

    // Checked for invalid and duplicated query params
    if (key && !allowedParams.has(key)) {
      isParseFailed = true;
      break;
    }

    // If key is "cc" or "bcc", then add value as email
    if (value && (key === "cc" || key === "bcc")) {
      query[key] = value;
    }

    // Remove checked param
    if (key) allowedParams.delete(key);
  }

  return isParseFailed ? false : query;
};

/**
 * Split emails from string that contains multiple email separated by "," or ";"
 *
 * @param {string} input The string to split.
 * @returns {string[]} Returns list of emails.
 */
const splitEmails = (input: string) => {
  if (!input) return [];
  if (input.includes(",")) return input.split(",");
  return input.split(";");
};

/**
 * Validates if the given string is MailTo URI or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is MailTo URI, false otherwise.
 */
const isMailtoURI = (input: any) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // Replace all white spaces and newlines with empty string
  input = input.replace(/\s/g, "").replace(/\n|\r/, "");

  // Must be started with "mailto:"
  if (!input.startsWith("mailto:")) return false;

  const [to, queryString = ""] = input.replace("mailto:", "").split("?");

  // If just "mailto:" without content
  if (!to && !queryString) return true;

  const query = parseMailtoQueryString(queryString);

  // If query string has param that is not in "subject", "body", "cc", "bcc"
  if (!query) return false;

  const emails = [];
  emails.push(...splitEmails(to));
  emails.push(...splitEmails(query.cc));
  emails.push(...splitEmails(query.bcc));

  // Validate all emails in Mailto URI
  return emails.every(isEmail);
};

export { isMailtoURI };
