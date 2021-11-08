import { sum } from "./sum";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(5, 5)).toBe(10);
  });

  it("adds two negative numbers", () => {
    expect(sum(-5, -5)).toBe(-10);
  });

  it("adds multiple numbers", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
});
