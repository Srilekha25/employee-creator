// import { useEmployeeContext } from "../../context/EmployeeSelectedProvider";
import { useEffect, useState } from "react";
import { useselectedEmployeeContext } from "../../context/EmployeeSelectedContext";
import styles from "./PISection.module.scss";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { useParams } from "react-router-dom";

const PISection = ({ register, errors, edit }: any) => {
  const { id } = useParams<{ id: string }>();
  const { employeeSelected, setEmployeeSelected } =
    useselectedEmployeeContext();
  // 

  // useEffect(()=>{
  //   id ? setEdit(true) : setEdit(false)
  // }, [id])

  // console.log("its working");
  // console.log("id: ", id);
  console.log("employeeSelected", employeeSelected);

  // const empSelected = employeeSelected.filter((emp) => emp.id === Number(id));
  //  console.log("employeeSelected[0]", employeeSelected.firstName);
  // console.log("empSelected", empSelected);

  return (
    <div className={styles.container__personal_details_flex}>
      <h2>Personal information</h2>

      <label role="firstName">First name</label>
      <input
        data-testid="firstName"
        // defaultValue={edit ? employeeSelected.firstName : ""}
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && (
        <p role="firstNameRequiredError">This field is required</p>
      )}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

      <label>Middle name (if applicable)</label>
      <input
        // defaultValue={edit ? employeeSelected.middleName: ""}
        {...register("middleName")}
      />

      <label>Last name</label>
      <input
        // defaultValue={edit ? employeeSelected.lastName: ""}
        {...register("lastName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
    </div>
  );
};

export default PISection;
