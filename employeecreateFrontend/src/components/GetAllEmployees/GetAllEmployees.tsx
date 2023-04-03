import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../../context/GetAllEmployeesContext";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { deleteEmployeeByID } from "../../services/post-services";

import styles from "../GetAllEmployees/GetAllEmployees.module.scss";

const GetAllEmployees = () => {
  const { allEmployees, setAllEmployees } = useEmployeeContext();
  const currentDate = new Date(); 
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
    <div className={styles.container__getAllEmployees__title}>
      <div>
        <h1 className={styles.container__title_backgroundColor}>
          Employees' List
        </h1>
      </div>
      <div className={styles.container__body}>
        <div className={styles.conatiner__description__flex}>
          <p>Please click on 'Edit' to find more details of each employee.</p>
          <Link to={"/AddEmployee"}>
            <button className={styles.container__button__background_blue}>
              Add Employee
            </button>
          </Link>
        </div>
        <hr className={styles.hr__solid}></hr>
        {allEmployees?.map((employee: Employee, index: number) => (
          <div key={index}>
            <div className={styles.container__employees_flex}>
            <div>
            {employee.firstName} {employee.lastName}
            <div>
              {employee.contractType} - {currentDate.getFullYear() - new Date(employee.startDate).getFullYear()} yrs
            </div>
            <div>{employee.email}</div>
            </div>
            <div className={styles.container__buttons_flex}>
              <button>
                <Link to={`EditEmployee/${employee.id}`}>Edit</Link>
              </button>
              |<button onClick={() => handleDelete(employee.id)}>Delete</button>
            </div>
            </div>
            <hr className={styles.hr__solid}></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllEmployees;
