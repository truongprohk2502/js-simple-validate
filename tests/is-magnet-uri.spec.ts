import { isMagnetURI } from "../src";

describe("isMagnetURI", () => {
  it("should be Magnet URI", () => {
    expect(
      isMagnetURI(
        "magnet:?xt=urn:btih:5dee65101db281ac9c46344cd6b175cdcad53426&dn=download"
      )
    ).toBe(true);
  });

  it("should not be Magnet URI", () => {
    expect(
      isMagnetURI(
        ":?xt=urn:btih:5dee65101db281ac9c46344cd6b175cdcad53426&dn=download"
      )
    ).toBe(false);
    expect(
      isMagnetURI(
        "magnet:?xt=urn:fake:5dee65101db281ac9c46344cd6b175cdcad53426&dn=download"
      )
    ).toBe(false);
  });
});
