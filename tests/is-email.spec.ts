import { isEmail } from "../src";

describe("isEmail", () => {
  it("should be email address", () => {
    expect(isEmail("email@example.com")).toBe(true);
    expect(isEmail("firstname.lastname@example.com")).toBe(true);
    expect(isEmail("email@subdomain.example.com")).toBe(true);
    expect(isEmail("firstname+lastname@example.com")).toBe(true);
    expect(isEmail("email@example.com")).toBe(true);
    expect(isEmail("email@example.com")).toBe(true);
  });

  it("should not be email address", () => {
    expect(isEmail("@example.com")).toBe(false);
    expect(isEmail("email..email@example.com")).toBe(false);
    expect(isEmail("email@-example.com")).toBe(false);
    expect(isEmail("あいうえお@example.com")).toBe(false);
    expect(isEmail(".email@example.co")).toBe(false);
  });
});
