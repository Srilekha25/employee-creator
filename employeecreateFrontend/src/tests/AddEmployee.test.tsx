import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AddEmployee from "../components/AddEmployee/AddEmployee";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const renderAddEmployee = () => {
  render(
    <MemoryRouter>
      <AddEmployee />
    </MemoryRouter>
  );
};

const user = userEvent.setup();

describe("Loading Back button", () => {
  test("renders the back button", () => {
    renderAddEmployee();
    const backButton = screen.getByRole("back");
    expect(backButton).toBeInTheDocument();
  });
});

describe("Loading Heading", () => {
  test("renders Heading", () => {
    renderAddEmployee();
    const heading = screen.getByText("Employee details");
    expect(heading).toBeInTheDocument();
  });
});

describe("Loading Personal Information", () => {
  //Personal Informtion Heading
  test("renders Heading", () => {
    renderAddEmployee();
    const heading = screen.getByText("Personal information");
    expect(heading).toBeInTheDocument();
  });

  //Firstname testcases
  test("renders Firstname Label", () => {
    renderAddEmployee();
    const firstname = screen.getByRole("firstName");
    expect(firstname).toBeInTheDocument();
  });

    // test("displays error message when first name is not entered", () => {
    //     renderAddEmployee();
    //     const submitButton = screen.getByRole("submit");
    //     user.click(submitButton);
    //     const firstNameRequiredError = screen.getByRole("firstNameRequiredError");
    //     expect(firstNameRequiredError).toBeInTheDocument();
    //   });

//   test("First name cannot exceed 20 characters", () => {
//     renderAddEmployee();
//     const firstname = screen.getByRole("firstName");
//     user.type(firstname, "ihfuihvuaerhgvurdhesguvrleishgaiegrbhlgvrheisgl");
//     user.click(screen.getByRole("submit"));
//     expect(
//       screen.getByText(/First name cannot exceed 20 characters/i)
//     ).toBeInTheDocument();
//   });
});

//Submit Button and Clear Button

describe("Submit button to be in the document", () => {
  test("Render Submit Button", () => {
    renderAddEmployee();
    const submitButton = screen.getByRole("submit");
    expect(submitButton).toBeInTheDocument();
  });

  test("Render Clear Button", () => {
    renderAddEmployee();
    const clearButton = screen.getByRole("clear");
    expect(clearButton).toBeInTheDocument();
  });
});
