import { isAscii } from "../src";

describe("isAscii", () => {
  it("should be Ascii", () => {
    expect(isAscii("0123456789")).toBe(true);
    expect(
      isAscii("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
    ).toBe(true);
    expect(isAscii("\"'`")).toBe(true);
    expect(isAscii("!#$%&'()*+,-./[\\]^_`{|}~")).toBe(true);
  });

  it("should not be Ascii", () => {
    expect(isAscii("✂️ Copy and 📋 Paste Emoji 👍 No apps required")).toBe(
      false
    );
    expect(isAscii("日本語")).toBe(false);
    expect(isAscii("ภาษาไทย")).toBe(false);
    expect(isAscii("Tiếng Việt")).toBe(false);
  });
});
