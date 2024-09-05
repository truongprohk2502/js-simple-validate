import { isRgbColor } from "../src";

describe("isRgbColor", () => {
  it("should be RGB color", () => {
    expect(isRgbColor("rgb(255,255,255)")).toBe(true);
    expect(isRgbColor("rgba(146,146,146,0.3)")).toBe(true);
    expect(isRgbColor("rgb(50%,50%,50%)")).toBe(true);
    expect(isRgbColor("rgba(50%,50%,50%,1)")).toBe(true);
  });

  it("should not be RGB color", () => {
    expect(isRgbColor("rgb(300,300,300)")).toBe(false);
    expect(isRgbColor("rgba(146,146,146,1.5)")).toBe(false);
    expect(isRgbColor("rgb(150%,150%,150%)")).toBe(false);
    expect(isRgbColor("rgba(50%,50%,50%,1.5)")).toBe(false);
  });
});
