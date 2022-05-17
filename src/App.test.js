import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

const btnBlueText = "Change to Medium Violet Red";
const changeBtnText1 = "Change to Midnight Blue";
const btnColor1 = "MediumVioletRed";
const btnColor2 = "MidnightBlue";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: changeBtnText1 });

  expect(colorButton).toHaveStyle({ backgroundColor: btnColor1 });
});

test(`button turns ${replaceCamelWithSpaces(btnColor2)} on click`, () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: changeBtnText1 });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: btnColor2 });
  expect(colorButton.textContent).toBe(btnBlueText);
});

test("checkbox changes button state (enabled or disabled)", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: changeBtnText1 });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test(`Disabled button has gray background and reverts to ${replaceCamelWithSpaces(
  btnColor1
)}`, () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: changeBtnText1 });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle(`background-color: ${btnColor1}`);
});

test(`Clicked disabled button has gray backgtound and reverts to ${replaceCamelWithSpaces(
  btnColor2
)}`, () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: changeBtnText1 });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle(`background-color: ${btnColor2}`);
});

// Testing functions with yest suites
describe("spaces before camel-case capital letters", () => {
  test("Works for inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
