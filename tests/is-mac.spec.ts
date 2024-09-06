import { isMAC } from "../src";

describe("isMAC", () => {
  it("should be MAC address", () => {
    expect(isMAC("00:1A:2B:3C:4D:5E")).toBe(true);
    expect(isMAC("A1-B2-C3-D4-E5-F6")).toBe(true);
    expect(isMAC("001A.2B3C.4D5E")).toBe(true);
    expect(isMAC("001A2B3C4D5E", { noSeparators: true })).toBe(true);
  });

  it("should not be MAC address", () => {
    expect(isMAC("A1:B2C3.D4-E5F6")).toBe(false);
    expect(isMAC("001A2B3C4D5E")).toBe(false);
    expect(isMAC("GG:XX:YY:ZZ:4D:5E")).toBe(false);
  });
});
