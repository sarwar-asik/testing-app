import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("should run hello world", () => {
  render(<App />);
  const element = screen.getByText("Hello world");
  expect(element).toBeInTheDocument();
});
