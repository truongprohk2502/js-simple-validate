import { isIP } from "./is-ip";

const subnetRegex = /^\d{1,3}$/;
const v4Subnet = 32;
const v6Subnet = 128;

type Version = "IPv4" | "IPv6";

/**
 * Validates if the given string is IP range or not.
 *
 * @param {any} input The string to validate.
 * @param {Version} version The version of IP address.
 * @returns {boolean} Returns true if the string is IP range, false otherwise.
 */
const isIPRange = (input: any, version?: Version) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  const parts = input.split("/");

  // IP range format is IP/subnet
  if (parts.length !== 2) return false;

  const ipAddress = parts[0];
  const subnet = parts[1];

  // If subnet is not an integer with maximum 3 characters length, returns false
  if (!subnetRegex.test(subnet)) return false;

  // Disallow preceding 0 i.e. 01, 02, ...
  if (subnet.length > 1 && subnet.startsWith("0")) return false;

  // Check is valid IP Address
  const isValidIP = isIP(ipAddress, version);
  if (!isValidIP) return false;

  // Define valid subnet according to IP's version
  let expectedSubnet: number;
  switch (version) {
    case "IPv4":
      expectedSubnet = v4Subnet;
      break;
    case "IPv6":
      expectedSubnet = v6Subnet;
      break;
    default:
      expectedSubnet = isIP(ipAddress, "IPv6") ? v6Subnet : v4Subnet;
  }

  const subnetNumber = +subnet;

  // Subnet must be in range between 0 and 32 (IPv4) or 128 (IPv6)
  return subnetNumber <= expectedSubnet && subnetNumber >= 0;
};

export { isIPRange };
