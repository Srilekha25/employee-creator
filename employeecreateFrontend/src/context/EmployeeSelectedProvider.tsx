import { useState } from "react";
import { Employee } from "../Interfaces/EmployeeInterface";
import { selectedEmployeeContext } from "./EmployeeSelectedContext";

interface props {
    children: JSX.Element | JSX.Element[];
}

const EmployeeSelectedProvider = ({ children }: props) =>{
    const [employeeSelected, setEmployeeSelected] = useState<Employee[]>([]);

    return(
        <selectedEmployeeContext.Provider value={{employeeSelected, setEmployeeSelected}}>
            {children}
        </selectedEmployeeContext.Provider>
    )
}

export default EmployeeSelectedProvider;