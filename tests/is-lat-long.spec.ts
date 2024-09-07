import { isLatLong } from "../src";

describe("isLatLong", () => {
  it("should be LatLong value", () => {
    expect(isLatLong("-12.849293,+24.433594")).toBe(true);
    expect(isLatLong("12.849293,24.433594")).toBe(true);
    expect(isLatLong("12° 50' 57.4548'' N,24° 26' 0.9384'' E")).toBe(true);
    expect(
      isLatLong("12deg 50min 57.4548sec N, 24deg 26min 0.9384sec E", {
        dmsUnits: { degree: "deg", minute: "min", second: "sec" },
      })
    ).toBe(true);
  });

  it("should not be LatLong value", () => {
    expect(isLatLong("1200.849293,24.433594")).toBe(false);
    expect(isLatLong("12.849293,24.433594", { checkDMS: true })).toBe(false);
    expect(isLatLong("-12° 50' 57.4548'' N,24° 26' 0.9384'' E")).toBe(false);
    expect(isLatLong("12° 50' 57.4548'' North,24° 26' 0.9384'' East")).toBe(
      false
    );
    expect(
      isLatLong("12deg 50min 57.4548sec N, 24deg 26min 0.9384sec E", {
        checkDMS: true,
      })
    ).toBe(false);
  });
});
