export const getAllEmployees = async () =>{
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

export const createEmployee = async() =>{
    const response = await fetch ("http://localhost:8080/EmployeeCreator", {
        method: 'POST'
    });
    if (!response.ok) {
        throw new Error("Couldn't add employee ");
      }
      return true;
}