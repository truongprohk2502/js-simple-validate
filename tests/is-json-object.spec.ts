import { isJsonObject } from "../src";

describe("isJsonObject", () => {
  it("should be valid json", () => {
    expect(
      isJsonObject('{"email": "bar@email.com", "age": 26, "isMale": true}')
    ).toBe(true);
    expect(isJsonObject("{}")).toBe(true);
    expect(isJsonObject("[]")).toBe(true);
    expect(isJsonObject('[{"email": "haha@email.com"}]')).toBe(true);
    expect(isJsonObject('[{"a":1},[{"b":2,"c":3}]]')).toBe(true);
  });

  it("should not be valid json", () => {
    expect(isJsonObject('{"email": "bar@email.com"')).toBe(false);
    expect(isJsonObject("{email: bar@email.com}")).toBe(false);
    expect(isJsonObject("[Java, PHP]")).toBe(false);
    expect(isJsonObject('[1,2,{"id":3}]')).toBe(false);
    expect(isJsonObject("123..")).toBe(false);
    expect(isJsonObject("literal string")).toBe(false);
    expect(isJsonObject(null)).toBe(false);
  });
});
