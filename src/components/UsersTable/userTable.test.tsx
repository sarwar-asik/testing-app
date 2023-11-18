import { render, screen, within } from "@testing-library/react";
import { describe, it } from "vitest";

import UserTable from "./UsersTable";
import { usersData } from "../../const/user";

describe("UserTable()", () => {
  it("SHould render table correctly . ", () => {
    render(<UserTable users={usersData} />);
    const welcomeMessage = screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    );

   //  expect(welcomeMessage).toBeInTheDocument()

    //   screen.logTestingPlaygroundURL(); //! for get a url after test run
   //  screen.debug();
    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    


   //  screen.debug();
    expect(rows).toHaveLength(3);
  });
});
