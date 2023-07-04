import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { deleteEmployeeByID } from "../../services/post-services";
import { fetchEmployees } from "../../services/post-services";

import styles from "../GetAllEmployees/GetAllEmployees.module.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//import { useEmployeeContext } from "../../context/EmployeeSelectedProvider";
import { useselectedEmployeeContext } from "../../context/EmployeeSelectedContext";

const GetAllEmployees = () => {
  const { employeeSelected, setEmployeeSelected } =
    useselectedEmployeeContext();
  const queryClient = useQueryClient();
  const { data: allEmployees, isLoading } = useQuery(
    ["allEmployees"],
    fetchEmployees
  );

  console.log("allEmployees", allEmployees);

  if (allEmployees === null) {
    return <h2>Error while fetching Employees.</h2>;
  } 
  // else {
  //   setEmployeeSelected(allEmployees);
  // }

  const currentDate = new Date();

  const deleteById = useMutation(async (employeeIdToDelete: number) => {
    return await deleteEmployeeByID(employeeIdToDelete).then(
      (response: Boolean) => {
        if (response) {
          const updatedEmployeesAfterDelete = allEmployees?.filter(
            (employee: Employee) => employee.id !== employeeIdToDelete
          );
          console.log(
            "all employees after delete",
            updatedEmployeesAfterDelete
          );
          queryClient.setQueryData(
            ["allEmployees"],
            updatedEmployeesAfterDelete
          );
        }
      }
    );
  });

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
        {isLoading ? (
          <p>
            <h3>Loading...</h3>
          </p>
        ) : (
          <div>
            {allEmployees?.map((employee: any, index: number) => (
              <div key={index}>
                <div className={styles.container__employees_flex}>
                  <div>
                    {employee.firstName} {employee.lastName}
                    <div>
                      {employee.contractType} -{" "}
                      {currentDate.getFullYear() -
                        new Date(employee.startDate).getFullYear()}{" "}
                      yrs
                    </div>
                    <div>{employee.email}</div>
                  </div>
                  <div className={styles.container__buttons_flex}>
                    <button
                      onClick={()=>setEmployeeSelected(employee)}>
                      <Link to={`/EditEmployee/${employee.id}`}>Edit</Link>
                    </button>
                    |
                    <button
                      onClick={() => {
                        deleteById.mutate(employee.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <hr className={styles.hr__solid}></hr>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetAllEmployees;
