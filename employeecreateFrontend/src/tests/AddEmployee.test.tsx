import React from "react";
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from "react-router";
import AddEmployee from "../components/AddEmployee/AddEmployee";
import "@testing-library/jest-dom/extend-expect";

const renderAddEmployee = () =>{
    render(
        <MemoryRouter>
            <AddEmployee/>
        </MemoryRouter>
    );
}

describe("Loading Back button", () => {
    test("renders the back button", () => {
        renderAddEmployee();
        const backButton = screen.getByText("Back");
        expect(backButton).toBeInTheDocument();
    })
})