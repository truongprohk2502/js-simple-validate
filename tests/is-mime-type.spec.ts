import { isMimeType } from "../src";

describe("isMimeType", () => {
  it("should be mime type", () => {
    expect(isMimeType("image/jpeg")).toBe(true);
    expect(isMimeType("text/plain; charset=UTF-8")).toBe(true);
    expect(isMimeType("multipart/form-data; boundary=aBoundaryString")).toBe(
      true
    );
  });

  it("should not be mime type", () => {
    expect(isMimeType("foo/bar")).toBe(false);
    expect(isMimeType("image/jpeg/")).toBe(false);
  });
});
