import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../../context/GetAllEmployeesContext";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { createEmployee, getAllEmployees } from "../../services/post-services";


const AddEmployee = () => {
const {allEmployees, setAllEmployees} = useEmployeeContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Employee>();
  const onSubmit: SubmitHandler<Employee> = async (data) => {
    await createEmployee(data).then((response: Boolean) =>{
      if(response) {
        getAllEmployees().then((data: []) =>{
          setAllEmployees(data);
          console.log("Employee Added");
        })
      }
    })

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Link to="/">Back</Link>
        <h1>Employee details</h1>
        <h2>Personal information</h2>
        <label>First name</label>
        <input {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
        )}
        <label>Middle name (if applicable)</label>
        <input {...register("middleName")} />
        <label>Last name</label>
        <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
        {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      </div>

      <div>
        <h2>Contract details</h2>
        <label>Email address</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {errors?.email && <p>Invalid email</p>}
        <label>Mobile number</label>
        <h6>Must be an Australian number</h6>
        <input {...register("mobileNumber", { required: true, pattern: /[0-9]/, maxLength: 10 })} />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {errors?.mobileNumber?.type === "pattern" && (
        <p>Numeric only</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
        <p>Cannot exceed 10 numbers</p>
        )}
        <label>Residential Address</label>
        <span>Start typing to search</span>
        <input {...register("address", { required: true})} />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
      </div>

      <div>
        <h2>Employee status</h2>
        <label>What is contract type?</label>
        <input {...register("contractType", { required: true })} type="radio" value="Permanet" />
        <label>Permanent</label>
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        <input {...register("contractType", { required: true })} type="radio" value="Contract" />
        <label>Contract</label>
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        <label>Start date</label>
        <label>Day</label>
        <input type="Date" {...register("startDate")} />
        <label>Finish date</label>
        <label>on going</label>
        <input type="checkbox" {...register("ongoing", {})} />
        <label>Is this on a full-time or part-time basis?</label>
        <input {...register("timeBasis", { required: true })} type="radio" value="Full-time" />
        <label>Full-time</label>
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        <input {...register("timeBasis", { required: true })} type="radio" value="Part-time" />
        <label>Part-time</label>
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        <label>Hours per week</label>
        <input {...register("hours", {})} />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddEmployee;
