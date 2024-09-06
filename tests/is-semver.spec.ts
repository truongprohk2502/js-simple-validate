import { isSemVer } from "../src";

describe("isSemVer", () => {
  it("should be semantic version", () => {
    expect(isSemVer("1.0.0")).toBe(true);
    expect(isSemVer("1.2.3-alpha")).toBe(true);
    expect(isSemVer("2.0.0-beta.1")).toBe(true);
    expect(isSemVer("2.1.0+build.123")).toBe(true);
  });

  it("should not be semantic version", () => {
    expect(isSemVer("1")).toBe(false);
    expect(isSemVer("1.01.1")).toBe(false);
    expect(isSemVer("alpha+beta")).toBe(false);
  });
});
