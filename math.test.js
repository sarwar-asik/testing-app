import { expect, it } from "vitest";
import { add } from "./math";

it("sum of the numbers", () => {

    ///! A A A

//Arranger

    const numbers =[1,2,3,4,5]
    const expectedResult =numbers.reduce((acc,current)=>acc+current)


    /// Action
  const result = add(numbers);

  /// Assertion 
  expect(result).toBe(expectedResult);
});
