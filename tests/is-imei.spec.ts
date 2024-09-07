import { isIMEI } from "../src";

describe("isIMEI", () => {
  it("should be an IMEI number", () => {
    expect(isIMEI("333909858444672")).toBe(true);
    expect(isIMEI("45-961095-155032-8", { allowHyphens: true })).toBe(true);
  });

  it("should not be an IMEI number", () => {
    expect(isIMEI("123456789")).toBe(false);
    expect(isIMEI("012345678912345")).toBe(false);
    expect(isIMEI("4596-1095-155-0328")).toBe(false);
  });
});
