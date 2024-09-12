import { isTextFile } from "../src";

describe("isTextFile", () => {
  it("should be text file", () => {
    expect(isTextFile("foo bar.txt")).toBe(true);
    expect(isTextFile("foo-bar.js")).toBe(true);
    expect(isTextFile("foobar.html")).toBe(true);
    expect(isTextFile("page.component.tsx")).toBe(true);
  });

  it("should not be text file", () => {
    expect(isTextFile("foo_bar.haha")).toBe(false);
    expect(isTextFile("foo_bar.exe")).toBe(false);
    expect(isTextFile("foo_bar")).toBe(false);
  });
});
