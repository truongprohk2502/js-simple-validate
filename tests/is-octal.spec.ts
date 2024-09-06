import { isOctal } from "../src";

describe("isOctal", () => {
  it("should be octal number", () => {
    expect(isOctal("01234567")).toBe(true);
    expect(isOctal("0o1234567")).toBe(true);
  });

  it("should not be octal number", () => {
    expect(isOctal("AB1010")).toBe(false);
    expect(isOctal("0xAB0C5342F")).toBe(false);
  });
});
