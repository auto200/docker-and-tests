import { countOccurences } from "./countOccurences";

describe("countOccurances", () => {
  test("counts number of occurrences of numbers", () => {
    expect(countOccurences([1, 2, 1, 4, 4])).toEqual([
      [1, 2],
      [2, 1],
      [4, 2],
    ]);
  });

  test("counts number of occurrences of strings", () => {
    expect(countOccurences(["a", "b", "a", "b", "c"])).toEqual([
      ["a", 2],
      ["b", 2],
      ["c", 1],
    ]);
  });

  test("counts number of occurrences of mixed numbers and strings", () => {
    expect(countOccurences(["1", "1", 1, 1, "c", 2])).toEqual([
      ["1", 2],
      [1, 2],
      ["c", 1],
      [2, 1],
    ]);
  });
});
