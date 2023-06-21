import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import App from "../App";

const renderApp = () => {
    render(
            <App/>
    )
}

// const user = userEvent.setup();

// describe("renders link", () =>{
//     test("renders / link", () => {
//         renderApp();
//         const getAllEmployeesPath = screen.getByText("/");
//         expect(getAllEmployeesPath).toBeInTheDocument();
//     })
// })