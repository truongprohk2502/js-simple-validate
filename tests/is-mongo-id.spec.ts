import { isMongoId } from "../src";

describe("isMongoId", () => {
  it("should be mongo id", () => {
    expect(isMongoId("6592008029c8c3e4dc76256c")).toBe(true);
  });

  it("should not be mongo id", () => {
    expect(isMongoId("0x6592008029c8c3e4dc76256c")).toBe(false);
    expect(isMongoId("ABCDEF")).toBe(false);
  });
});
