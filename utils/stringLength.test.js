import { expect, it } from "vitest";
import { stringLength } from "./stringLength";

it("return length for non empty",()=>{
    expect(stringLength("hello")).toBe(5)

})

it('return 0 for empty string',()=>{
    expect(stringLength("")).toBe(0)
})