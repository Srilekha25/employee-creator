import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import EditEmployee from "./components/EditEmployee/EditEmployee";
import GetAllEmployees from "./components/GetAllEmployees/GetAllEmployees";
import { AllEmployeeContext } from "./context/GetAllEmployeesContext";
import { getAllEmployees } from "./services/post-services";
import styles from "./App.module.scss";
import { Employee } from "./Interfaces/EmployeeInterface";

function App() {
  const [loading, setLoading] = useState(true);
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    try {
      getAllEmployees().then((data: []) => {
        setAllEmployees(data), setLoading(false);
      });
    } catch (error) {
      console.log("Error in fetching ", error);
    }
  }, []);

  return (
    <div className={styles.app}>
    <AllEmployeeContext.Provider value={{ allEmployees, setAllEmployees }}>
      <BrowserRouter>
        <div>{loading && <p>Loading...</p>}</div>
        <Routes>
          <Route path="/" element={<GetAllEmployees />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/EditEmployee/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </AllEmployeeContext.Provider>
    </div>
  );
}

export default App;
