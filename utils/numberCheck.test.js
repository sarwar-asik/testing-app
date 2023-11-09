import { expect, it } from "vitest";
import { cleanNumbers } from "./numberCheck";

it("array of number provided", () => {
  const stringNumber = ["2", "3"];
  const result = cleanNumbers(stringNumber);
  expect(result[0]).toBeTypeOf("number");
});
