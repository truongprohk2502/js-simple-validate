import { isURL } from "../src";

describe("isURL", () => {
  it("should be URL", () => {
    expect(isURL("http://[1080:0:0:0:8:800:200C:417A]")).toBe(true);
    expect(isURL("http://[1080:0:0:0:8:800:200C:417A]:8000")).toBe(true);
    expect(isURL("www.google.com")).toBe(true);
    expect(isURL("https://username:password@github.com")).toBe(true);
    expect(isURL("www.google.com/books/lord-of-the-rings")).toBe(true);
    expect(isURL("https://www.google.com")).toBe(true);
    expect(isURL("https://www.google.com:3000")).toBe(true);
    expect(
      isURL("https://www.google.com?title=title&body=body#basic", {
        allowFragments: true,
        allowQueries: true,
      })
    ).toBe(true);
    expect(isURL("//www.google.com", { allowRelativeProtocol: true })).toBe(
      true
    );
  });

  it("should not be URL", () => {
    expect(isURL("https://www.google.com:100000")).toBe(false);
    expect(isURL("www.google.com", { requireProtocol: true })).toBe(false);
    expect(isURL(".google.com")).toBe(false);
    expect(isURL("local://www.google.com")).toBe(false);
    expect(isURL("https://www.google.com?title=title&body=body")).toBe(false);
    expect(isURL("https://www.google.com#basic")).toBe(false);
  });
});
