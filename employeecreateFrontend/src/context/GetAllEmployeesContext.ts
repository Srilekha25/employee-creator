import { createContext, useContext } from "react"
import { Employee } from "../Interfaces/EmployeeInterface"

export type EmployeeContext = {
    allEmployees : Employee[]
    setAllEmployees : (data: Employee[]) => void
}

export const AllEmployeeContext = createContext<EmployeeContext>({
    allEmployees: [],
    setAllEmployees: () => {},
})

export const useEmployeeContext = () => useContext(AllEmployeeContext);