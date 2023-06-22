import { Employee } from "../Interfaces/EmployeeInterface";
import { createEmployee, getAllEmployees } from "./post-services";

export const submitEmployee = async (data: Employee) => {
  console.log("data", data);

  const combinedStartDate = new Date(
    `${data.startYear}-${data.startMonth}-${data.startDay}`
  );
  const combinedFinishDate = new Date(
    `${data.finishYear}-${data.finishMonth}-${data.finishDay}`
  );
  try{

      await createEmployee({
        ...data,
        startDate: combinedStartDate,
        finishDate: combinedFinishDate,
      });

      const updatedEmployees = await getAllEmployees();
      alert("Employee added");
      return updatedEmployees;
  }
  catch(error){
    return new Error("Cannot add Employee");
  }

};
