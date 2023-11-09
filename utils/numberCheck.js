import { transformToNum } from "../transformNum";

export function validateNumber(value) {
  return +value;
}

export function cleanNumbers(values) {
  const numbers = [];
  for (const value of values) {
    validateNumber(value);
    const number = transformToNum(value);
    numbers.push(number);
  }
  return  numbers
}
