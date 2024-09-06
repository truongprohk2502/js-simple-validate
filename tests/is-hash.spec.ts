import { isHash } from "../src";

describe("isHash", () => {
  it("should be valid hash string", () => {
    expect(
      isHash(
        "6aaeb5af1a33e5c77e546224eb33de9ef1d0c0cbaeb682fc0de8e64bdf6e812e",
        "sha256"
      )
    ).toBe(true);
    expect(isHash("6aaeb5af", "crc32")).toBe(true);
  });

  it("should not be valid hash string", () => {
    expect(isHash("invalid", "sha256")).toBe(false);
    expect(isHash("6ayeb5af389dj12h34a", "crc32")).toBe(false);
  });
});
