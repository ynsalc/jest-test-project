import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Index";

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByLabelText("cost-input");
  return {
    input,
    ...utils,
  };
};

test("It should keep a $ in front of the input", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("$23");
});
test("It should allow a $ to be in the input when the value is changed", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "$23.0" } });
  expect(input.value).toBe("$23.0");
});

test("It should not allow letters to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe(""); // empty before
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe(""); //empty after
});

test("It should allow the $ to be deleted", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("$23"); // need to make a change so React registers "" as a change
  fireEvent.change(input, { target: { value: "" } });
  expect(input.value).toBe("");
});
