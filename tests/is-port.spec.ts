import { isPort } from "../src";

describe("isPort", () => {
  it("should be port number", () => {
    expect(isPort(12)).toBe(true);
    expect(isPort(6000)).toBe(true);
    expect(isPort("12")).toBe(true);
    expect(isPort("6000")).toBe(true);
  });

  it("should not be port number", () => {
    expect(isPort("-12")).toBe(false);
    expect(isPort("100000")).toBe(false);
    expect(isPort("12.5")).toBe(false);
    expect(isPort("0080")).toBe(false);
  });
});
