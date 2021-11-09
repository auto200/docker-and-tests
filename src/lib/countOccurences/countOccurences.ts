type Primitive = number | string | boolean | null | undefined;

export const countOccurences = (arr: Primitive[]): [Primitive, number][] => {
  const map = arr.reduce((acc, item) => {
    const occurrences = acc.get(item);
    occurrences ? acc.set(item, occurrences + 1) : acc.set(item, 1);

    return acc;
  }, new Map());

  return [...map];
};
