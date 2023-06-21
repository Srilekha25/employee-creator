import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Employee } from "../../Interfaces/EmployeeInterface";

import styles from "./ESSection.module.scss";

const ESSection = ({ register, errors }: any) => {
  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [finishDay, setFinishDay] = useState("");
  const [finishMonth, setFinishMonth] = useState("");
  const [finishYear, setFinishYear] = useState("");

  const handleOnGoing = () => {
    const currentDate = new Date();
    const currentDay = String(currentDate.getDay());
    const currentMonth = String(currentDate.getMonth() + 1);
    const currentYear = String(currentDate.getFullYear());

    setFinishDay(currentDay);
    setFinishMonth(currentMonth);
    setFinishYear(currentYear);
  };

  return (
    <div className={styles.container__Employee_status}>
      <h2>Employee status</h2>
      <div className={styles.container__contract_type}>
        <label>What is contract type?</label>
        {errors?.contractType?.type === "required" && (
          <p>Please check a contract type</p>
        )}
        <div className={styles.container__input_radio_buttons}>
          <div className={styles.container__input_radio_permanent}>
            <input
              {...register("contractType", { required: true })}
              type="radio"
              value="Permanet"
            />
            <label>Permanent</label>
          </div>
          <div className={styles.container__input_radio_contract}>
            <input
              {...register("contractType", { required: true })}
              type="radio"
              value="Contract"
            />
            <label>Contract</label>
          </div>
        </div>
      </div>

      <div>
        <label>Start date</label>
        {errors.startDay || errors.startMonth || errors.startYear ? (
          <p>This Field is required.</p>
        ) : null}
        <br />
        <div className={styles.container__startDate}>
          <div>
            <label>Day</label>
            <input
              {...register("startDay", { required: true })}
              type="number"
              min="1"
              max="31"
              onChange={(event) => setStartDay(event.target.value)}
            />
          </div>

          <div>
            <label>Month</label>
            <select
              {...register("startMonth", { required: true })}
              onChange={(event) => setStartMonth(event.target.value)}
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
              {...register("startYear", { required: true })}
              type="number"
              min="1960"
              max="2023"
              onChange={(event) => setStartYear(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <label>Finish date</label>
        {errors.finishDay || errors.finishMonth || errors.finishYear ? (
          <p>This Field is required.</p>
        ) : null}
        <br />
        <div className={styles.container__finishDate}>
          <div>
            <label>Day </label>
            <input
              {...register("finishDay", { required: true })}
              type="number"
              min="1"
              max="31"
              onChange={(event) => setFinishDay(event.target.value)}
            />
          </div>

          <div>
            <label>Month </label>

            <select
              {...register("finishMonth", { required: true })}
              onChange={(event) => setFinishMonth(event.target.value)}
              value={finishMonth}
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
              {...register("finishYear", { required: true })}
              type="number"
              value={finishYear}
              min="1960"
              max="2070"
              onChange={(event) => setFinishYear(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.container__ongoing_checkbox}>
        <input
          type="checkbox"
          {...register("ongoing")}
          onChange={handleOnGoing}
        />
        <label>on going</label>
      </div>

      <div className={styles.container__timebasis}>
        <label>Is this on a full-time or part-time basis?</label>
        {errors?.timeBasis?.type === "required" && (
          <p>This field is required</p>
        )}
        <div className={styles.container__fulltime_flex}>
          <input
            {...register("timeBasis", { required: true })}
            type="radio"
            value="Full-time"
          />
          <label>Full-time</label>
        </div>
        <div className={styles.container__parttime_flex}>
          <input
            {...register("timeBasis", { required: true })}
            type="radio"
            value="Part-time"
          />
          <label>Part-time</label>
        </div>
      </div>

      <div className={styles.container__hours}>
        <label>Hours per week</label>
        <input type="number" min="0" max="168" {...register("hours")} />
      </div>
    </div>
  );
};

export default ESSection;
