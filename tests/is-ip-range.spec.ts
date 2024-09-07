import { isIPRange } from "../src";

describe("isIPRange", () => {
  it("should be valid IP range", () => {
    expect(isIPRange("192.168.1.12/0")).toBe(true);
    expect(isIPRange("192.168.1.12/20")).toBe(true);
    expect(isIPRange("192.168.1.12/32")).toBe(true);
    expect(isIPRange("192:168::/100")).toBe(true);
    expect(isIPRange("192:168::/128")).toBe(true);
  });

  it("should not be valid IP range", () => {
    expect(isIPRange("192.168.1.12/-20")).toBe(false);
    expect(isIPRange("192.168.1.12/50")).toBe(false);
    expect(isIPRange("192:168::/130")).toBe(false);
  });
});
