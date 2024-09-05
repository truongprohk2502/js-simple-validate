import { isBase64 } from "../src";

describe("isBase64", () => {
  it("should be standard Base64 format", () => {
    expect(isBase64("SGVsbG8sIFdvcmxkIQ==")).toBe(true);
  });

  it("should be URLSafe Base64 format", () => {
    expect(isBase64("SGVsbG8sIFdvcmxkIQ", { isUrlSafe: true })).toBe(true);
  });

  it("should not be Base64 format", () => {
    expect(isBase64("invalid base64")).toBe(false);
    expect(isBase64("SGVsbG8sIFdvcmxkIQ==", { isUrlSafe: true })).toBe(false);
  });
});
