const macAddress48 =
  /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
const macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
const macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
const macAddress64 =
  /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
const macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
const macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;

interface Options {
  noSeparators: boolean;
}

/**
 * Validates if the given string is MAC address or not.
 *
 * @param {any} input The string to validate.
 * @param {any} options.noSeparators Allow MAC addresses without separators.
 * @returns {boolean} Returns true if the string is MAC address, false otherwise.
 */
const isMAC = (input: any, options?: Options) => {
  // Returns false input is not a string
  if (typeof input !== "string") return false;

  // If allow MAC address without separators
  if (options?.noSeparators)
    return (
      macAddress48NoSeparators.test(input) ||
      macAddress64NoSeparators.test(input)
    );

  // MAC address with operator
  return (
    macAddress48.test(input) ||
    macAddress48WithDots.test(input) ||
    macAddress64.test(input) ||
    macAddress64WithDots.test(input)
  );
};

export { isMAC };
