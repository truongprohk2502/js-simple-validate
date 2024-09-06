import { isDecimal } from "../src";

describe("isDecimal", () => {
  it("should be a decimal number", () => {
    expect(isDecimal(123)).toBe(true);
    expect(isDecimal(-123.4)).toBe(true);
    expect(isDecimal("123")).toBe(true);
    expect(isDecimal("-123.4")).toBe(true);
    expect(isDecimal("+123.400")).toBe(true);
    expect(isDecimal("0.12")).toBe(true);
    expect(isDecimal("0.1200", { digits: 2 })).toBe(true);
    expect(isDecimal("0.12", { digits: 2, force: true })).toBe(true);
  });

  it("should not be a decimal number", () => {
    expect(isDecimal("123", { force: true })).toBe(false);
    expect(isDecimal("123.45", { digits: 3 })).toBe(false);
    expect(isDecimal("--20")).toBe(false);
    expect(isDecimal("20..2")).toBe(false);
  });
});
