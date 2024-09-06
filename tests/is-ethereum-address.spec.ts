import { isEthereumAddress } from "../src";

describe("isEthereumAddress", () => {
  it("should be Ethereum address", () => {
    expect(
      isEthereumAddress("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")
    ).toBe(true);
  });

  it("should not be Ethereum address", () => {
    expect(isEthereumAddress("71C7656EC7ab88b098defB751B7401B5f6d8976F")).toBe(
      false
    );
    expect(isEthereumAddress("0x712345")).toBe(false);
  });
});
