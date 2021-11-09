import { reverseString } from "./reverseString";

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("abcd")).toBe("dcba");
  });
});
