import validateUrl from "../src/client/js/validateUrl";

describe("Test URL Validation", () => {
  test("validateUrl should be Truthy", () => {
    const url = validateUrl("https://en.wikipedia.org/wiki/Joke");
    expect(url).toBeTruthy();
  });
});
