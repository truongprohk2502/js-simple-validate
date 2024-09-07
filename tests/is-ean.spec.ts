import { isEAN } from "../src";

describe("isEAN", () => {
  it("should be valid EAN string", () => {
    expect(isEAN("50123452")).toBe(true);
    expect(isEAN("5012345678900")).toBe(true);
  });

  it("should not be valid EAN string", () => {
    expect(isEAN("0123456789")).toBe(false);
    expect(isEAN("12345678")).toBe(false);
  });
});
