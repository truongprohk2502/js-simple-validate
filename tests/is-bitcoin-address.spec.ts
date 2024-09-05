import { isBitcoinAddress } from "../src";

describe("isBitcoinAddress", () => {
  it("should be BTC address", () => {
    expect(isBitcoinAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")).toBe(true);
  });

  it("should not be BTC address", () => {
    expect(isBitcoinAddress("invalid BTC address")).toBe(false);
  });
});
