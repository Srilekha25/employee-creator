import styles from "./PISection.module.scss";

const PISection = ({ register, errors }: any) => {
  return (
    <div className={styles.container__personal_details_flex}>
      <h2>Personal information</h2>

      <label role="firstName">First name</label>
      <input
        data-testid="firstName"
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
      <input {...register("middleName")} />

      <label>Last name</label>
      <input
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
