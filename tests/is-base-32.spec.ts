import { isBase32 } from "../src";

describe("isBase32", () => {
  it("should be Base32 format", () => {
    expect(isBase32("JBSWY3DPEBLW64TMMQQQ====")).toBe(true);
  });

  it("should not be Base32 format", () => {
    expect(isBase32("invalid base32")).toBe(false);
  });
});
