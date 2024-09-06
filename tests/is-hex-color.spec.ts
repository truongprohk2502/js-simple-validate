import { isHexColor } from "../src";

describe("isHexColor", () => {
  it("should be hex color", () => {
    expect(isHexColor("AAFF00")).toBe(true);
    expect(isHexColor("#AAFF00")).toBe(true);
    expect(isHexColor("#FFF")).toBe(true);
  });

  it("should not be hex color", () => {
    expect(isHexColor("AAFFMM")).toBe(false);
    expect(isHexColor("#FFFFF")).toBe(false);
    expect(isHexColor("##FFF")).toBe(false);
  });
});
