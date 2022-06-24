import { fibonacciObject } from "../types";

export const getFibonacciNumber = (baseNumber: number): fibonacciObject => {
  const calculatedNumber =
    baseNumber <= 1 ? baseNumber : calculateFibonacciNumber(baseNumber);

  return { calculatedNumber: calculatedNumber };
};

export const calculateFibonacciNumber = (baseNumber: number): number => {
  let previousNumber1 = 0;
  let previousNumber2 = 1;
  let newNumber = 0;

  for (let i = 2; i <= baseNumber; i++) {
    newNumber = previousNumber1 + previousNumber2;
    previousNumber1 = previousNumber2;
    previousNumber2 = newNumber;
  }

  return newNumber;
};
