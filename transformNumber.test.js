import { expect, it } from "vitest";
import { transformToNum } from "./transformNum";


it("return a  number for numeric string",()=>{
    const stringNUmber ="5"
    const result =transformToNum(stringNUmber)

    // expect(result).toBeTypeOf('number')
    // expect(result).not.toBeTypeOf('number')
    expect(isNaN(result)).not.toBe(true)
})

