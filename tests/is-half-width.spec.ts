import { isHalfWidth } from "../src";

describe("isHalfWidth", () => {
  it("should be half width characters", () => {
    expect(isHalfWidth("Alice was beginning")).toBe(true);
    expect(isHalfWidth("ｻﾝﾌﾟﾙ")).toBe(true);
  });

  it("should not be half width characters", () => {
    expect(isHalfWidth("Ａｌｉｃｅ　ｗａｓ　ｂｅｇｉｎｎｉｎｇ")).toBe(false);
    expect(isHalfWidth("日本語組版処理の要件")).toBe(false);
  });
});
