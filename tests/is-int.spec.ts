import { isInt } from "../src";

describe("isInt", () => {
  it("should be a integer number", () => {
    expect(isInt(123)).toBe(true);
    expect(isInt(-123)).toBe(true);
    expect(isInt("123")).toBe(true);
    expect(isInt("-123")).toBe(true);
    expect(isInt("+123")).toBe(true);
    expect(isInt("003", { leadingZeros: true })).toBe(true);
    expect(isInt("3", { min: 1, max: 3 })).toBe(true);
    expect(isInt("3", { gt: 1, lt: 4 })).toBe(true);
  });

  it("should not be a integer number", () => {
    expect(isInt(123.45)).toBe(false);
    expect(isInt("123.45")).toBe(false);
    expect(isInt("003")).toBe(false);
    expect(isInt("5", { min: 1, max: 3 })).toBe(false);
    expect(isInt("3", { gt: 1, lt: 3 })).toBe(false);
  });
});
