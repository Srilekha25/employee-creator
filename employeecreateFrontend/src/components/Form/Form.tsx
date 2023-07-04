import React, { useEffect } from "react";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import PISection from "../PI_Section/PISection";
import CDSection from "../CD_Section/CDSection";
import ESSection from "../ES_Section/ESSection";
import Buttons from "../Buttons_Section/Buttons";
import Header from "../Header/Header";
import { submitEmployee } from "../../services/employee-services";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  patchEmployeeByID,
  retrieveEmployeeByID,
} from "../../services/post-services";
import { useselectedEmployeeContext } from "../../context/EmployeeSelectedContext";

const Form = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const { employeeSelected, setEmployeeSelected } =
    useselectedEmployeeContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Employee>();

  const onSubmit = async (data: Employee) => {
    console.log("Data", data);
    if (id) {
      await patchEmployeeByID(employeeSelected.id || "", data).then(
        (response: Employee) => {
          alert("Request successful");
          const startDate = response.startDate;
          console.log("startDate", startDate);
          const sday = (startDate.getFullYear);
          console.log("sday",sday)
          reset(response);
        }
      );
    } else {
      const updatedAndFetchedEmployees = submitEmployee(data);
      console.log("updatedAndFetchedEmployees", updatedAndFetchedEmployees);
      queryClient.setQueryData(
        ["allEmployees"],
        await updatedAndFetchedEmployees
      );
    }
  };

  useEffect(() => {
    if (id) {
      retrieveEmployeeByID(id).then((response: Employee) => {
        console.log("Employee in edit after retrieve-> ", response);
        reset(response);
      });
    }
  }, [id, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container__AddEmployee__title}>
        <Header />
        <div className={styles.container__body}>
          <PISection errors={errors} register={register} />
          <CDSection errors={errors} register={register} />
          <ESSection errors={errors} register={register} />
          <Buttons />
        </div>
      </div>
    </form>
  );
};

export default Form;
