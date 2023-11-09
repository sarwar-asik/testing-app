import { expect, it } from "vitest";
import { add } from "./math";

it("sum of the numbers", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
