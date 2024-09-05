type LanguageType =
  | "en-US"
  | "de-DE"
  | "es-ES"
  | "fr-FR"
  | "ja-JP"
  | "ru-RU"
  | "th-TH"
  | "vi-VN"
  | "ko-KR";

const alpha = {
  "en-US": /^[A-Z]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "th-TH": /^[ก-๐\s]+$/i,
  "vi-VN":
    /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
};

/**
 * Validates if the given string contains only alphabetical letters.
 *
 * @param {any} input The string to validate.
 * @returns {boolean} Returns true if the string is alphabet, false otherwise.
 */
const isAlphabet = (input: any, locale: LanguageType) => {
  let string = input;

  // Returns false input is not a string
  if (typeof string !== "string") return false;

  // Replace all white spaces and newlines with empty string
  string = string.replace(/\s/g, "").replace(/\n|\r/, "");

  if (locale in alpha) return alpha[locale].test(string);

  // Throws an error if locale does not exist
  throw new Error(`Invalid locale '${locale}'`);
};

export { isAlphabet, LanguageType };
