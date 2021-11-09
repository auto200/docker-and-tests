import { trzmielar } from "./trzmielar";

describe("trzmielar", () => {
  test("produces single digit number", () => {
    expect(trzmielar(123)).toBe(6);
  });

  test("produces single digit number from multiple digit number", () => {
    expect(trzmielar(123602105)).toBe(2);
  });

  test("produces single digit number from multiple digit negative number", () => {
    expect(trzmielar(-123602105)).toBe(-2);
  });

  test("produces single digit number from 0", () => {
    expect(trzmielar(0)).toBe(0);
  });
});
