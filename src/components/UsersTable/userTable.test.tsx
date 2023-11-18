import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import UserTable from "./UsersTable";
import { usersData } from "../../const/user";

describe("UserTable()", () => {
  it("SHould render the welcome message ", () => {
    render(<UserTable users={usersData} />);
    const welcomeMessage = screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    );

    // expect(welcomeMessage).toBeInTheDocument()

     screen.logTestingPlaygroundURL(); //! for get a url after test run

  });
});
