import { isSurrogatePair } from "../src";

describe("isSurrogatePair", () => {
  it("should be surrogate pair", () => {
    expect(isSurrogatePair("😁👨🏿")).toBe(true);
    expect(isSurrogatePair("🍕")).toBe(true);
  });

  it("should not be surrogate pair", () => {
    expect(isSurrogatePair("123")).toBe(false);
    expect(isSurrogatePair("abc")).toBe(false);
  });
});
