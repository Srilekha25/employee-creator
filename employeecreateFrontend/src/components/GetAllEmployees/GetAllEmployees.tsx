import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../../context/GetAllEmployeesContext";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { deleteEmployeeByID } from "../../services/post-services";

const GetAllEmployees = () => {
  const { allEmployees, setAllEmployees } = useEmployeeContext();
  console.log("allEmployees-", allEmployees);

  const handleDelete = async (id: number) => {
    console.log("id for delete employee", id);
    try {
      await deleteEmployeeByID(id).then((response: Boolean) => {
        if (response) {
          const updatedEmployees = allEmployees.filter(
            (employee) => employee.id !== id
          );
          setAllEmployees(updatedEmployees);
        } else {
          console.log("Error deleting the Employee. Please try again later");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Employees' List</h1>
      </div>
      <div>
        <p>Please click on 'Edit' to find more details of each employee.</p>
        <Link to={"/AddEmployee"}>
          <button>Add Employee</button>
        </Link>
      </div>
      {allEmployees?.map((employee: Employee, index: number) => (
        <div key={index}>
          {employee.firstName} {employee.lastName}
          <div>
            {employee.contractType} - {employee.startDate}
          </div>
          <div>{employee.email}</div>
          <div>
            <Link to={`EditEmployee/${employee.id}`}>Edit</Link> |
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllEmployees;
