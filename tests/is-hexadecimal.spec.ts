import { isHexadecimal } from "../src";

describe("isHexadecimal", () => {
  it("should be hexadecimal number", () => {
    expect(isHexadecimal("AB0C5342F")).toBe(true);
    expect(isHexadecimal("0xAB0C5342F")).toBe(true);
    expect(isHexadecimal("0hAB0C5342F")).toBe(true);
  });

  it("should not be hexadecimal number", () => {
    expect(isHexadecimal("ABCDEFGH")).toBe(false);
    expect(isHexadecimal("0mAB0C5342F")).toBe(false);
  });
});
