import { isBase58 } from "../src";

describe("isBase58", () => {
  it("should be Base58 format", () => {
    expect(
      isBase58("L4baC6eDpmHZ5cmx2BMHZQPvwnokx9yPhE6jFGJBNHz4SU4ez9qH")
    ).toBe(true);
  });

  it("should not be Base58 format", () => {
    expect(isBase58("invalidbase58")).toBe(false);
  });
});
