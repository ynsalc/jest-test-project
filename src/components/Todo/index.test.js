import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo app testing", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("3 input create render", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test("Is there an input and a button", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Data should be added to the list when the data is entered in the input and the button is clicked", async() => {
    const name = "Item D";
    await userEvent.type(input, name);

    await userEvent.click(button);
    const item = screen.getByText(name);
    expect(item).toBeInTheDocument();
  });
});
