import { sum } from "../sum/sum";

export const trzmielar = (inputNumber: number): number => {
  const isNegative = inputNumber < 0;

  let summedNumber = Math.abs(inputNumber);

  while (summedNumber > 9) {
    const digitArray = summedNumber.toString().split("").map(Number);
    summedNumber = sum(...digitArray);
  }

  return isNegative ? -summedNumber : summedNumber;
};
