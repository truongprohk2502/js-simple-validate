import { isNumeric } from "../src";

describe("isNumeric", () => {
  it("should be a numeric", () => {
    expect(isNumeric(123)).toBe(true);
    expect(isNumeric(-123.4)).toBe(true);
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("-123.4")).toBe(true);
    expect(isNumeric("+123.400")).toBe(true);
    expect(isNumeric("0.12")).toBe(true);
  });

  it("should not be a numeric", () => {
    expect(isNumeric("--20")).toBe(false);
    expect(isNumeric("123.4", { noSymbols: true })).toBe(false);
    expect(isNumeric("-123", { noSymbols: true })).toBe(false);
  });
});
