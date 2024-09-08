import { isFQDN } from "./is-fqdn";
import { isIP } from "./is-ip";
import { isPort } from "./is-port";

const protocols = ["http", "https", "ftp"];

const wrappedIPv6Regex = /^\[([^\]]+)\](?::([0-9]+))?$/;

interface Options {
  allowFragments?: boolean;
  allowQueries?: boolean;
  allowRelativeProtocol?: boolean;
  requireProtocol?: boolean;
}

/**
 * Validates if the given string is URL or not.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is URL, false otherwise.
 */
const isURL = (input: any, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string" || !input) return false;

  // URL must not contain space, < and >
  if (/[\s<>]/.test(input)) return false;

  // URL cannot be Mailto URI
  if (input.startsWith("mailto:")) return false;

  // If not allow fragments (#)
  if (!options?.allowFragments && input.includes("#")) return false;

  // If not allow query components
  if (!options?.allowQueries && (input.includes("?") || input.includes("&")))
    return false;

  // Remove fragments
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    input = input.slice(0, fragmentIndex);
  }

  // Remove query components
  const queryIndex = input.indexOf("?");
  if (queryIndex >= 0) {
    input = input.slice(0, queryIndex);
  }

  // Check if contains protocol
  if (input.includes("://")) {
    const protocol = input.split("://").shift().toLowerCase();

    // If protocol is not valid
    if (protocols.indexOf(protocol) === -1) return false;

    // Remove protocol
    input = input.slice(protocol.length + 3);
  } else if (options?.requireProtocol) {
    return false;
  } else if (input.slice(0, 2) === "//") {
    // If not allow relative protocol and url starts with //
    if (!options.allowRelativeProtocol) return false;
    input = input.slice(2);
  }

  if (!input) return false;

  // Remove subpath
  const firstSlashIndex = input.indexOf("/");
  if (firstSlashIndex !== -1) {
    input = input.slice(0, firstSlashIndex);
  }

  // If contains auth
  if (input.includes("@")) {
    // If contains 2 '@'
    if (input.split("@").length > 2) return false;

    const auth = input.split("@")[0];

    // If auth is empty
    if (!auth) return false;

    // If auth format is not "username:password"
    if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) return false;

    const [user, password] = auth.split(":");

    // If username and password is empty
    if (user === "" && password === "") return false;
  }

  const hostname = input.split("@").pop();

  const ipv6Match = hostname.match(wrappedIPv6Regex);

  let host;
  let port = null;

  // If hostname is IPv6
  if (ipv6Match) {
    host = ipv6Match[1] || null;
    port = ipv6Match[2] || null;
  } else {
    const split = hostname.split(":");
    host = split[0];
    port = split[1] || null;
  }

  // Validate port number
  if (port !== null && port.length > 0) {
    // If is not valid port
    if (!isPort(port)) return false;
  }

  // If domain is not IPv6 and FQDN
  if (
    !isIP(host) &&
    !isFQDN(host, { allowUnderscores: true, ignoreMaxLength: true })
  )
    return false;

  return true;
};

export { isURL };
