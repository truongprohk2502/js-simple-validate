import { isULID } from "../src";

describe("isULID", () => {
  it("should be valid ULID string", () => {
    expect(isULID("01AN4Z07BY79KA1307SR9X4MV3")).toBe(true);
  });

  it("should not be valid ULID string", () => {
    expect(isULID("3522ac6c-aadd-4165-8e10-d384faa5e076")).toBe(false);
  });
});
