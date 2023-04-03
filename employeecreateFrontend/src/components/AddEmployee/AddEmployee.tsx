import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../../context/GetAllEmployeesContext";
import { Employee } from "../../Interfaces/EmployeeInterface";
import { createEmployee, getAllEmployees } from "../../services/post-services";

import styles from "../AddEmployee/AddEmployee.module.scss";

const AddEmployee = () => {
  const { allEmployees, setAllEmployees } = useEmployeeContext();
  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [finishDay, setFinishDay] = useState("");
  const [finishMonth, setFinishMonth] = useState("");
  const [finishYear, setFinishYear] = useState("");
  const [startDate, setStartDate] = useState(new Date("yyyy-mm-dd"));
  const [finishDate, setFinishDate] = useState(new Date("yyyy-mm-dd"));

  const handleStartChangeDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDay(event.target.value);
    console.log("start day: ", startDay);
  };

  const handleStartChangeMonth = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if(event.target.value != "select"){
      setStartMonth(event.target.value);
      console.log("start month", startMonth);
    }else{
      {errors?.startDate?.type === "required" && (
        <p>Please select a month</p>
      )}
    }
  };

  const handleStartChangeYear = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartYear(event.target.value);
    console.log("start year", startYear);
  };

  const handleFinishChangeDay = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFinishDay(event.target.value);
    console.log("finish day: ", finishDay);
  };

  const handleFinishChangeMonth = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if(event.target.value != "select"){
      setFinishMonth(event.target.value);
      console.log("finish month", finishMonth);
    }else{
      {errors?.finishDate?.type === "required" && (
        <p>Please select a month</p>
      )}
    }
  };

  const handleFinishChangeYear = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFinishYear(event.target.value);
    console.log("finish year", finishYear);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();

  const onSubmit: SubmitHandler<Employee> = async (data) => {
    const combinedStartDate = new Date(
      `${startYear}-${startMonth}-${startDay}`
    );
    const combinedFinishDate = new Date(
      `${finishYear}-${finishMonth}-${finishDay}`
    );
    setStartDate(combinedStartDate);
    setFinishDate(combinedFinishDate);
    
    await createEmployee({
      ...data,
      startDate: combinedStartDate,
      finishDate: combinedFinishDate,
    }).then((response: Boolean) => {
      if (response) {
        getAllEmployees().then((data: []) => {
          console.log("data in app.jsx", data);
          setAllEmployees(data);
          alert("employee added");
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container__AddEmployee__title}>
        <div className={styles.container__title_backgroundColor}>
          &#60; <Link to="/">Back</Link>
          <h1>Employee details</h1>
        </div>
        <div className={styles.container__body}>
          <div className={styles.container__personal_details_flex}>
            <h2>Personal information</h2>
            <div>
              <label>First name</label>
              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </div>

            <div>
              <label>Middle name (if applicable)</label>
              <input {...register("middleName")} />
            </div>

            <div>
              <label>Last name</label>
              <input
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </div>
          </div>

          <div className={styles.container__personal_details_flex}>
            <h2>Contract details</h2>
            <div>
              <label>Email address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.email && <p>Invalid email</p>}
            </div>

            <div className={styles.container__mobile_number}>
              <div>
                <label>Mobile number</label>
                <span>Must be an Australian number</span>
              </div>
              <input
                type="tel"
                value="+61"
                readOnly
                className={styles.countryCode_readOnly}
              />
              <input
                {...register("mobileNumber", {
                  required: true,
                  pattern: /[0-9]/,
                  maxLength: 10,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.mobileNumber?.type === "pattern" && <p>Numeric only</p>}
              {errors?.firstName?.type === "maxLength" && (
                <p>Cannot exceed 10 numbers</p>
              )}
            </div>

            <div className={styles.container__residential_Address}>
              <div>
                <label>Residential Address</label>
                <span>Start typing to search</span>
              </div>
              <input {...register("address", { required: true })} />
              {errors?.firstName?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
          </div>

          <div className={styles.container__Employee_status}>
            <h2>Employee status</h2>
            <div className={styles.container__contract_type}>
              <label>What is contract type?</label>
              <div className={styles.container__input_radio_buttons}>
                <div className={styles.container__input_radio_permanent}>
                  <input
                    {...register("contractType", { required: true })}
                    type="radio"
                    value="Permanet"
                  />
                  <label>Permanent</label>
                  {errors?.firstName?.type === "required" && (
                    <p>This field is required</p>
                  )}
                </div>
                <div className={styles.container__input_radio_contract}>
                  <input
                    {...register("contractType", { required: true })}
                    type="radio"
                    value="Contract"
                  />
                  <label>Contract</label>
                  {errors?.firstName?.type === "required" && (
                    <p>This field is required</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label>Start date</label>
              <br />
              <div className={styles.container__startDate}>
                <div>
                  <label>Day</label>
                  <input
                    required
                    type="number"
                    min="1"
                    max="31"
                    onChange={(event) => handleStartChangeDay(event)}
                  />
                </div>

                <div>
                  <label>Month</label>
                  <select
                    onChange={(event) => handleStartChangeMonth(event)}
                    required={true}
                  >
                    <option></option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                <div>
                  <label>Year</label>
                  <input
                    type="number"
                    required={true}
                    minLength={4}
                    maxLength={4}
                    onChange={(event) => handleStartChangeYear(event)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label>Finish date</label>
              <br />
              <div className={styles.container__finishDate}>
                <div>
                  <label>Day </label>
                  <input
                    required
                    type="number"
                    min="1"
                    max="31"
                    onChange={(event) => handleFinishChangeDay(event)}
                  />
                </div>

                <div>
                  <label>Month </label>

                  <select
                    onChange={(event) => handleFinishChangeMonth(event)}
                    required={true}
                  >
                    <option></option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                <div>
                  <label>Year </label>
                  <input
                    type="number"
                    required={true}
                    min="1950"
                    max="2023"
                    onChange={(event) => handleFinishChangeYear(event)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.container__ongoing_checkbox}>
              <input type="checkbox" {...register("ongoing")} />
              <label>on going</label>
            </div>

            <div className={styles.container__timebasis}>
              <label>Is this on a full-time or part-time basis?</label>
              <div className={styles.container__fulltime_flex}>
                <input
                  {...register("timeBasis", { required: true })}
                  type="radio"
                  value="Full-time"
                />
                <label>Full-time</label>
                {errors?.firstName?.type === "required" && (
                  <p>This field is required</p>
                )}
              </div>
              <div className={styles.container__parttime_flex}>
                <input
                  {...register("timeBasis", { required: true })}
                  type="radio"
                  value="Part-time"
                />
                <label>Part-time</label>
                {errors?.firstName?.type === "required" && (
                  <p>This field is required</p>
                )}
              </div>
            </div>

            <div className={styles.container__hours}>
              <label>Hours per week</label>
              <input type="number" {...register("hours")} />
            </div>
          </div>

          <div>
            <button type="submit" className={styles.container__button_submit}>
              Submit
            </button>
            <button type="reset" className={styles.container__button_clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEmployee;
