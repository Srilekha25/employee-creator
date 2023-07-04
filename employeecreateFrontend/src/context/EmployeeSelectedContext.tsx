import { createContext, useContext } from "react";
import { Employee } from "../Interfaces/EmployeeInterface";

export type selectedEmployeeContext = {
    employeeSelected : any
    setEmployeeSelected : React.Dispatch<React.SetStateAction<Employee[]>>
}

export const selectedEmployeeContext = createContext<selectedEmployeeContext>({
    employeeSelected: [],
    setEmployeeSelected: () => [],
})

export const useselectedEmployeeContext = () => useContext(selectedEmployeeContext);

