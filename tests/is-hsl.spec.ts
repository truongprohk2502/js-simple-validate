import { isHSL } from "../src";

describe("isHSL", () => {
  it("should be HSL color", () => {
    expect(isHSL("hsl(120,100%,50%)")).toBe(true);
    expect(isHSL("hsl(120deg,100%,50%)")).toBe(true);
    expect(isHSL("hsl(120 100% 50%)")).toBe(true);
    expect(isHSL("hsla(-0.5e2rad -100% -2.5%)")).toBe(true);
  });

  it("should not be HSL color", () => {
    expect(isHSL("hsl(120,100,50)")).toBe(false);
    expect(isHSL("hsl(120% 100% 50%)")).toBe(false);
    expect(isHSL("hsl(120|100%|50%)")).toBe(false);
  });
});
