import { isGitURL } from "../src";

describe("isGitURL", () => {
  it("should be Git url", () => {
    expect(isGitURL("git://github.com/repo/is-git-url.git")).toBe(true);
    expect(isGitURL("ssh://login@server.com:12345/repository.git")).toBe(true);
    expect(isGitURL("https://github.com/repo/my-app.git")).toBe(true);
  });

  it("should not be Git url", () => {
    expect(isGitURL("github.com/repo/is-git-url.git")).toBe(false);
    expect(isGitURL("https://github.com/repo/my-app")).toBe(false);
    expect(isGitURL("https://github.com/repo/my-app")).toBe(false);
  });
});
