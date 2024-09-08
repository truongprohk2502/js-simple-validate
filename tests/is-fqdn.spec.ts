import { isFQDN } from "../src";

describe("isFQDN", () => {
  it("should be FQDN string", () => {
    expect(isFQDN("www.google.com")).toBe(true);
    expect(isFQDN("www.google_meet.com", { allowUnderscores: true })).toBe(
      true
    );
    expect(isFQDN("www.google.com.", { allowTrailingDot: true })).toBe(true);
    expect(
      isFQDN(
        "fullyqualifieddomainnamesaretheprimarilyusedformforhumanreadability.com",
        {
          ignoreMaxLength: true,
        }
      )
    ).toBe(true);
    expect(
      isFQDN("www.google.com123", {
        requireTopLevelDomain: true,
        allowNumericTLD: true,
      })
    ).toBe(true);
    expect(isFQDN("*.netlify.app", { allowWildcard: true })).toBe(true);
    expect(isFQDN("www.google-search.com")).toBe(true);
    expect(isFQDN("911.gov")).toBe(true);
  });

  it("should not be FQDN string", () => {
    expect(isFQDN("www.g😃😃gle.com")).toBe(false);
    expect(isFQDN("www.google.com.")).toBe(false);
    expect(
      isFQDN(
        "fullyqualifieddomainnamesaretheprimarilyusedformforhumanreadability.com"
      )
    ).toBe(false);
    expect(isFQDN("*.netlify.app")).toBe(false);
    expect(isFQDN("www.google_meet.com")).toBe(false);
    expect(isFQDN("-google.com")).toBe(false);
    expect(isFQDN("google-.com")).toBe(false);
    expect(isFQDN("google.c", { requireTopLevelDomain: true })).toBe(false);
    expect(isFQDN("google", { requireTopLevelDomain: true })).toBe(false);
  });
});
