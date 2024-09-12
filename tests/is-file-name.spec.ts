import { isFileName } from "../src";

describe("isFileName", () => {
  it("should be file name", () => {
    expect(isFileName("foo bar")).toBe(true);
    expect(isFileName("foo-bar")).toBe(true);
    expect(isFileName("foobar")).toBe(true);
    expect(isFileName("foobar.csv")).toBe(true);
    expect(isFileName("foobar.csv")).toBe(true);
    expect(isFileName("foobar.spec.ts2")).toBe(true);
    expect(
      isFileName("foobar.spec.sublime-build", { requireExtension: true })
    ).toBe(true);
  });

  it("should not be file name", () => {
    expect(isFileName("foo/bar")).toBe(false);
    expect(isFileName("CON")).toBe(false);
    expect(isFileName("con")).toBe(false);
    expect(isFileName("foobar", { requireExtension: true })).toBe(false);
    expect(isFileName("foobar.spec.ts2", { requireExtension: true })).toBe(
      false
    );
    expect(
      isFileName("foobar.spec.sublime--build", { requireExtension: true })
    ).toBe(false);
  });
});
