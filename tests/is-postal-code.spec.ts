import { isPostalCode } from "../src";

describe("isPostalCode", () => {
  it("should be postal code", () => {
    expect(isPostalCode("AD123", "AD")).toBe(true);
    expect(isPostalCode("12345", "KR")).toBe(true);
    expect(isPostalCode("9486", "LI")).toBe(true);
    expect(isPostalCode("94812-4444", "US")).toBe(true);
  });

  it("should not be postal code", () => {
    expect(isPostalCode("AF123", "AD")).toBe(false);
    expect(isPostalCode("1234567", "KR")).toBe(false);
    expect(isPostalCode("9481", "LI")).toBe(false);
    expect(isPostalCode("94812-444", "US")).toBe(false);
  });
});
