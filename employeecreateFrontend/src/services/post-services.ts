import { Employee } from "../Interfaces/EmployeeInterface";

export const fetchEmployees = async () =>{
    const response = await fetch('http://localhost:8080/EmployeeCreator');
    return await response.json();
}

export const deleteEmployeeByID = async (id: number) =>{
    const response = await fetch('http://localhost:8080/EmployeeCreator/' + id, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error("Couldn't find Employee with id " + id);
      }
      return true;
};

export const createEmployee = async(EmployeeData: Employee) =>{
    const response = await fetch ("http://localhost:8080/EmployeeCreator", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(EmployeeData),
    });
    if (!response.ok) {
        throw new Error("Couldn't add employee ");
      }
      return true;
}

export const retrieveEmployeeByID = async(id: string) =>{
    const response = await fetch ("http://localhost:8080/EmployeeCreator/" +id, {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error("Couldn't find Employee with id " + id);
      }
      return response.json();
}

export const patchEmployeeByID =async (id: string, EmployeeData: Employee) => {
    const response = await fetch("http://localhost:8080/EmployeeCreator/" +id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(EmployeeData),
    });
    if (!response.ok) {
        throw new Error("Couldn't patch the details of Employee with id " + id);
      }
      return response.json();
}