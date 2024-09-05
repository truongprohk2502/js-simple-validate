import { isDate } from "../src";

describe("isDate", () => {
  it("should be valid date", () => {
    expect(isDate("2024-12-25")).toBe(true);
    expect(isDate("2024/12/25")).toBe(true);
    expect(isDate("25.12.2024", { format: "DD.MM.YYYY" })).toBe(true);
    expect(isDate("12/25/2024", { format: "mm.dd.yyyy" })).toBe(true);
  });

  it("should not be valid date", () => {
    expect(isDate("2024-12-35")).toBe(false);
    expect(
      isDate("2024/12/25", { format: "YYYY-MM-DD", strictMode: true })
    ).toBe(false);
    expect(isDate("12.25.2024", { format: "dd.mm.yyyy" })).toBe(false);
    expect(
      isDate("12.25.2024", { format: "mm-dd-yyyy", strictMode: true })
    ).toBe(false);
  });
});
