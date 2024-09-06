import { isDataURI } from "../src";

describe("isDataURI", () => {
  it("should be valid Data URI", () => {
    expect(isDataURI("data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==")).toBe(true);
    expect(isDataURI("data:text/plain,SGVsbG8sIFdvcmxkIQ==")).toBe(true);
    expect(
      isDataURI(
        "data:image/gif;base64,R0lGODdhAQABAPAAAP8AAAA,AACwAAAAAAQABAAACAkQBADs"
      )
    ).toBe(true);
  });

  it("should not be valid Data URI", () => {
    expect(isDataURI("data::text/plain,SGVsbG8sIFdvcmxkIQ==")).toBe(false);
    expect(isDataURI("text/plain,SGVsbG8sIFdvcmxkIQ==")).toBe(false);
    expect(isDataURI("data:text/plain;base64")).toBe(false);
  });
});
