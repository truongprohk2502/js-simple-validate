type LanguageType = "en-US" | "de-DE" | "es-ES" | "fr-FR" | "ja-JP" | "ru-RU" | "th-TH" | "vi-VN" | "ko-KR";
/**
 * Validates if the given string contains only alphabetical letters.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is alphabet, false otherwise.
 */
declare const isAlphabet: (input: any, locale: LanguageType) => boolean;
export { isAlphabet, LanguageType };
