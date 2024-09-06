type HashAlgorithmType =
  | "md5"
  | "md4"
  | "sha1"
  | "sha256"
  | "sha384"
  | "sha512"
  | "ripemd128"
  | "ripemd160"
  | "tiger128"
  | "tiger160"
  | "tiger192"
  | "crc32"
  | "crc32b";

// Length of hash by algorithm
const lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8,
};

/**
 * Validates if the given string is hash string by specific hash algorithm or not.
 *
 * @param {any} input The string to validate.
 * @param {string} algorithm The algorithm of hash string.
 * @returns {boolean} Returns true if the valid hash string, false otherwise.
 */
const isHash = (input: any, algorithm: HashAlgorithmType) => {
  if (typeof input !== "string") return false;
  const hash = new RegExp(`^[a-fA-F0-9]{${lengths[algorithm]}}$`);
  return hash.test(input);
};

export { isHash };
