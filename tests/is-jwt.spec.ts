import { isJWT } from "../src";

describe("isJWT", () => {
  it("should be JWT token", () => {
    expect(
      isJWT(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      )
    ).toBe(true);
  });

  it("should not be JWT token", () => {
    expect(isJWT("anh.yêu.em")).toBe(false);
    expect(isJWT("abc.def.ghy.jwt")).toBe(false);
  });
});
