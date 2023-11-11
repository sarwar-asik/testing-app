import { expect, it, vi } from "vitest";
import { saveTokenToFiles } from "./io";
import {promises as fs} from "fs"

vi.mock("fs")

it("store token to the file",()=>{
    const data ="my token";
    const fileName ="token.txt";
    saveTokenToFiles(data,fileName);
    expect(fs.writeFile).toHaveBeenCalled()
})