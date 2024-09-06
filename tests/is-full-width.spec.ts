import { isFullWidth } from "../src";

describe("isFullWidth", () => {
  it("should be full width characters", () => {
    expect(isFullWidth("Ａｌｉｃｅ　ｗａｓ　ｂｅｇｉｎｎｉｎｇ")).toBe(true);
    expect(isFullWidth("日本語組版処理の要件")).toBe(true);
  });

  it("should not be full width characters", () => {
    expect(isFullWidth("Alice was beginning")).toBe(false);
  });
});
