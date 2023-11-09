import { expect, it } from "vitest";
import { add } from "./math";

it("sum of the numbers", () => {
  ///! A A A

  //Arranger
  const numbers = [1, 2, 3, 4, 5];
  const expectedResult = numbers.reduce((acc, current) => acc + current);

  /// Action
  const result = add(numbers);

  /// Assertion
  expect(result).toBe(expectedResult);
});

it("sum of the name at least 1 invalid number", () => {
  ///! A A A

  //Arranger
  const numbers = [1, 2, 3, "invalid", 5];
  const expectedResult = numbers.reduce((acc, current) => acc + current);

  /// Action
  const result = add(numbers);

  /// Assertion
  expect(result).toBeNaN();
});

it("sum of the name at array of numeric string", () => {
  ///! A A A

  //Arranger
  const numbers = [1, 2, 3, "4", 5];
  const expectedResult = numbers.reduce((acc, current) => +acc + +current);

  /// Action
  const result = add(numbers);

  /// Assertion
  expect(result).toBe(expectedResult);
});

it("when no argument", () => {
  const resultFun = () => {
    add();
  };
  expect(resultFun).toThrow();
});


