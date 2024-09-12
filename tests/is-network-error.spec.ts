import { isNetworkError } from "../src";

describe("isNetworkError", () => {
  it("should be network error", async () => {
    try {
      await fetch("https://oyzaiz.abc/fake");
    } catch (err) {
      expect(isNetworkError(err)).toBe(true);
    }
  });

  it("should not be network error", () => {
    try {
      JSON.parse("invalid");
    } catch (err) {
      expect(isNetworkError(err)).toBe(false);
    }
  });
});
