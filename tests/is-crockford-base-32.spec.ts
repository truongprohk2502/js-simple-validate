import { isCrockfordBase32 } from "../src";

describe("isCrockfordBase32", () => {
  it("should be Base32 format", () => {
    expect(
      isCrockfordBase32(
        "AHM6A83HENMP6TS0C9S6YXVE41K6YY10D9TPTW3K41QQCSBJ41T6GS90DHGQMY90CHQPEBG"
      )
    ).toBe(true);
  });

  it("should not be Base32 format", () => {
    expect(isCrockfordBase32("invalidbase32")).toBe(false);
  });
});
