import { isUUID } from "../src";

describe("isUUID", () => {
  it("should be valid UUID string", () => {
    expect(isUUID("3522ac6c-aadd-4165-8e10-d384faa5e076")).toBe(true);
    expect(isUUID("092e7cd9-f3ea-4df4-86b0-d1093379aedf")).toBe(true);
  });

  it("should not be valid UUID string", () => {
    expect(isUUID("092e7cd9:f3ea:4df4:86b0:d1093379aedf")).toBe(false);
    expect(isUUID("0929:f3ea:4df4:86b0:dedf")).toBe(false);
  });
});
