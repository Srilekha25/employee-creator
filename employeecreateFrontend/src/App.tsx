import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditEmployee from "./components/EditEmployee/EditEmployee";
import GetAllEmployees from "./components/GetAllEmployees/GetAllEmployees";
import styles from "./App.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./components/Form/Form";
import EmployeeSelectedProvider from "./context/EmployeeSelectedProvider";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className={styles.app}>
      <EmployeeSelectedProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<GetAllEmployees />} />
              <Route path="/AddEmployee" element={<Form />} />
              <Route path="/EditEmployee/:id" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </EmployeeSelectedProvider>
    </div>
  );
}

export default App;
