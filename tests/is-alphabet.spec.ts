import { isAlphabet } from "../src";

describe("isAlphabet", () => {
  it("should be English", () => {
    expect(isAlphabet("English", "en-US")).toBe(true);
    expect(isAlphabet("Яocket", "en-US")).toBe(false);
  });

  it("should be Spanish", () => {
    expect(isAlphabet("español", "es-ES")).toBe(true);
    expect(isAlphabet("εspañol", "es-ES")).toBe(false);
  });

  it("should be French", () => {
    expect(isAlphabet("français", "fr-FR")).toBe(true);
    expect(isAlphabet("frαnçais", "fr-FR")).toBe(false);
  });

  it("should be Japanese", () => {
    expect(isAlphabet("日本語", "ja-JP")).toBe(true);
    expect(isAlphabet("Γ日本語", "ja-JP")).toBe(false);
  });

  it("should be Russian", () => {
    expect(isAlphabet("русский", "ru-RU")).toBe(true);
    expect(isAlphabet("русскийΩ", "ru-RU")).toBe(false);
  });

  it("should be Thai language", () => {
    expect(isAlphabet("ภาษาไทย", "th-TH")).toBe(true);
    expect(isAlphabet("bภาษาไทย", "th-TH")).toBe(false);
  });

  it("should be Korean", () => {
    expect(isAlphabet("한국어", "ko-KR")).toBe(true);
    expect(isAlphabet("k한국어", "ko-KR")).toBe(false);
  });

  it("should be Vietnamese", () => {
    expect(isAlphabet("Tiếng Việt", "vi-VN")).toBe(true);
    expect(isAlphabet("Tiếng ViệtЯ", "vi-VN")).toBe(false);
  });
});
