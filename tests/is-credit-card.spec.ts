import { isCreditCard } from "../src";

describe("isCreditCard", () => {
  it("should be credit card", () => {
    expect(isCreditCard("6212345678900000003")).toBe(true);
    expect(isCreditCard("378282246310005", "amex")).toBe(true);
    expect(isCreditCard("30569309025904", "dinersclub")).toBe(true);
    expect(isCreditCard("6011000990139424", "discover")).toBe(true);
    expect(isCreditCard("3530111333300000", "jcb")).toBe(true);
    expect(isCreditCard("4012888888881881", "visa")).toBe(true);
    expect(isCreditCard("2222420000001113", "mastercard")).toBe(true);
    expect(isCreditCard("6212345678901265", "unionpay")).toBe(true);
  });

  it("should not be credit card", () => {
    expect(isCreditCard("invalid")).toBe(false);
    expect(isCreditCard("6212345678901265", "visa")).toBe(false);
  });
});
