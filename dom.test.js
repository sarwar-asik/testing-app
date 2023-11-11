import { expect, it, vi } from "vitest";
import { renderTitle } from "./dom";
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

const htmlPath = path.join(__dirname, "index.html");
const htmlContent = fs.readFileSync(htmlPath).toString();

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

vi.stubGlobal("document", document);

// vi.stubGlobal("document")

it("should render the title", () => {
  renderTitle();

  const titleE1 = document.getElementById("title");
  const titlePara = titleE1.firstElementChild;

  expect(titlePara).not.toBeNull();
});
