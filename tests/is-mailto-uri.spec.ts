import { isMailtoURI } from "../src";

describe("isMailtoURI", () => {
  it("should be Mailto URI", () => {
    expect(isMailtoURI("mailto:")).toBe(true);
    expect(isMailtoURI("mailto:foo@domain")).toBe(true);
    expect(isMailtoURI("mailto:foo@domain.com,bar@email.com")).toBe(true);
    expect(
      isMailtoURI("mailto:foo@domain.com?subject=my-subject&body=my-body")
    ).toBe(true);
    expect(
      isMailtoURI(
        "mailto:foo@domain.com?cc=mail@gmail.com;tue@email.com&bcc=wendy@email.com"
      )
    ).toBe(true);
  });

  it("should not be Mailto URI", () => {
    expect(isMailtoURI("mailto:invalid-email")).toBe(false);
    expect(isMailtoURI("mailto:foo@@domain")).toBe(false);
    expect(isMailtoURI("mailto:foo@domain.com|bar@email.com")).toBe(false);
    expect(
      isMailtoURI("mailto:foo@domain.com?title=my-subject&body=my-body")
    ).toBe(false);
    expect(
      isMailtoURI(
        "mailto:foo@domain.com?cc=mail@gmail.com;tue@email.com&bcc=wendy@email..com"
      )
    ).toBe(false);
  });
});
