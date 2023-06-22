import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BackButton from "./BackButton";
import "@testing-library/jest-dom/extend-expect";

const renderBackButton = () => {
  render(
    <MemoryRouter>
      <BackButton />
    </MemoryRouter>
  );
};


describe("Render Back button", () => {
  test("BackButton should render properly", () => {
    renderBackButton();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });
});
