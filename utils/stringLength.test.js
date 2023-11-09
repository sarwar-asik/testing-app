import { expect, it } from "vitest";
import { stringLength } from "./stringLength";

it("return length for non empty", () => {
  expect(stringLength("hello")).toBe(5);
});

it("return 0 for empty string", () => {
  expect(stringLength("")).toBe(0);
});

it("return error for not string input", () => {
  expect(() => stringLength(null)).toThrow();
  expect(() => stringLength(undefined)).toThrow();
  expect(stringLength(123)).toBeUndefined()
});
