import { isStrongPassword } from "../src";

describe("isStrongPassword", () => {
  it("should be strong password", () => {
    expect(isStrongPassword("abcdefxyz", { minLength: 8 })).toBe(true);
    expect(isStrongPassword("abcdef123", { minLength: 8, minNumbers: 1 })).toBe(
      true
    );
    expect(
      isStrongPassword("Abcdef123", { minLength: 8, minUppercase: 1 })
    ).toBe(true);
    expect(
      isStrongPassword("12345678abc", { minLength: 8, minLowercase: 1 })
    ).toBe(true);
    expect(
      isStrongPassword("abcdefxyz123", { minLength: 8, minNumbers: 2 })
    ).toBe(true);
    expect(
      isStrongPassword("abcdefxyz@123", { minLength: 8, minSymbols: 1 })
    ).toBe(true);
  });

  it("should not be strong password", () => {
    expect(isStrongPassword("abcdef", { minLength: 8 })).toBe(false);
    expect(isStrongPassword("abcdefxyz", { minLength: 8, minNumbers: 1 })).toBe(
      false
    );
    expect(
      isStrongPassword("abcdef123", { minLength: 8, minUppercase: 1 })
    ).toBe(false);
    expect(
      isStrongPassword("12345678ABC", { minLength: 8, minLowercase: 1 })
    ).toBe(false);
    expect(
      isStrongPassword("abcdefxyz123", { minLength: 8, minNumbers: 5 })
    ).toBe(false);
    expect(
      isStrongPassword("abcdefxyz123", { minLength: 8, minSymbols: 1 })
    ).toBe(false);
  });
});
