import { isTime } from "../src";

describe("isTime", () => {
  it("should be valid date", () => {
    expect(isTime("23:12:30")).toBe(true);
    expect(isTime("23:12")).toBe(true);
    expect(isTime("00:12")).toBe(true);
    expect(isTime("23:12:30", { hourFormat: "24", withSeconds: true })).toBe(
      true
    );
  });

  it("should not be valid date", () => {
    expect(isTime("23:12:90")).toBe(false);
    expect(isTime("25:12:90")).toBe(false);
    expect(isTime("-02:12:90")).toBe(false);
    expect(isTime("23:12:30", { hourFormat: "12" })).toBe(false);
    expect(isTime("23:12", { withSeconds: true })).toBe(false);
  });
});
