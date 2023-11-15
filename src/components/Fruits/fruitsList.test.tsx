import { render, screen } from "@testing-library/react";
import FruitsList from "./FruitsList";
import { fruits } from "../../const/fruits";
describe("FruitsList()", () => {
  it("should be list of fruits", () => {
    render(<FruitsList fruits={fruits} />);
    const list = screen.getByRole("list");
    const listItem = screen.getAllByRole("listitem");

    //@ts-ignore
    expect(list).toBeInTheDocument();
    //@ts-ignore
    expect(listItem).toHaveLength(fruits.length);
  });
});
