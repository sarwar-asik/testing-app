import { expect, it, vi } from "vitest";
import { saveTokenToFiles } from "./io";
import { promises as fs } from "fs";

vi.mock("fs");

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

it("store token to the file", () => {
  const data = "my token";
  const fileName = "token.txt";
  saveTokenToFiles(data, fileName);
  //   expect(fs.writeFile).toHaveBeenCalled();
  expect(fs.writeFile).toBeCalledWith(fileName, data);
});
