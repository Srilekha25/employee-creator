import React from "react";

import styles from "./CDSection.module.scss";
import { useselectedEmployeeContext } from "../../context/EmployeeSelectedContext";

const CDSection = ({ register, errors, edit }: any) => {
  const { employeeSelected, setEmployeeSelected } =
    useselectedEmployeeContext();

  return (
    <div className={styles.container__personal_details_flex}>
      <h2>Contract details</h2>
      <div>
        <label>Email address</label>
        <input
          // defaultValue={edit ? employeeSelected.email : ""}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "pattern" && <p>Invalid email</p>}
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
          // defaultValue={edit ? employeeSelected.mobileNumber : ""}
          {...register("mobileNumber", {
            required: true,
            pattern: /[0-9]/,
            maxLength: 10,
          })}
        />
        {errors?.mobileNumber?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.mobileNumber?.type === "pattern" && <p>Numeric only</p>}
        {errors?.mobileNumber?.type === "maxLength" && (
          <p>Cannot exceed 10 numbers</p>
        )}
      </div>

      <div className={styles.container__residential_Address}>
        <div>
          <label>Residential Address</label>
          <span>Start typing to search</span>
        </div>
        <input
          // defaultValue={edit ? employeeSelected.address : ""}
          {...register("address", { required: true })}
        />
        {errors?.address?.type === "required" && <p>This field is required</p>}
      </div>
    </div>
  );
};

export default CDSection;
