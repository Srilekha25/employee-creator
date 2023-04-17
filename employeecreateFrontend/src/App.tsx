import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import EditEmployee from "./components/EditEmployee/EditEmployee";
import GetAllEmployees from "./components/GetAllEmployees/GetAllEmployees";
import styles from "./App.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className={styles.app}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetAllEmployees />} />
            <Route path="/AddEmployee" element={<AddEmployee />} />
            <Route path="/EditEmployee/:id" element={<EditEmployee />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
