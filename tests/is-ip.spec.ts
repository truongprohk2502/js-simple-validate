import { isIP } from "../src";

describe("isIP", () => {
  it("should be IPv4 address", () => {
    expect(isIP("192.168.1.12")).toBe(true);
    expect(isIP("255.255.255.255")).toBe(true);
    expect(isIP("0.0.0.0")).toBe(true);
  });

  it("should be IPv6 address", () => {
    expect(isIP("12:12:12:12:12:12:192.168.1.12")).toBe(true);
    expect(isIP("123:ABC:DEF:456:789:12:23:34")).toBe(true);
    expect(isIP("::")).toBe(true);
    expect(isIP("::12:23")).toBe(true);
    expect(isIP("12:23::")).toBe(true);
    expect(isIP("12:23::34:45")).toBe(true);
  });

  it("should not be a IPv4 address", () => {
    expect(isIP("192:168:1:12")).toBe(false);
    expect(isIP("300.300.300.300")).toBe(false);
    expect(isIP("-1.-1.-1.-1")).toBe(false);
  });

  it("should not be a IPv6 address", () => {
    expect(isIP("12:12:12:12:192.168.1.12")).toBe(false);
    expect(isIP("GGG:ABC:DEF:456:789:12:23:34")).toBe(false);
    expect(isIP(":")).toBe(false);
    expect(isIP(":12:23")).toBe(false);
    expect(isIP("12:23:")).toBe(false);
    expect(isIP("12:23:34:45")).toBe(false);
  });

  it("should pass version of IP address", () => {
    expect(isIP("192.168.1.12", "IPv6")).toBe(false);
    expect(isIP("::", "IPv4")).toBe(false);
  });
});
