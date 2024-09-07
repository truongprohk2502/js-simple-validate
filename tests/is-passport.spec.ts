import { isPassport } from "../src";

describe("isPassport", () => {
  it("should be valid passport number", () => {
    expect(isPassport("123456789", "US")).toBe(true);
    expect(isPassport("AB1234567", "JP")).toBe(true);
  });

  it("should not be valid passport number", () => {
    expect(isPassport("12345-6789", "US")).toBe(false);
    expect(isPassport("123456789", "JP")).toBe(false);
  });
});
