import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Accounts from "./pages/Accounts/Accounts";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TrainingLayout from "./Layout/TrainingLayout";
import Training from "./pages/Training/Training";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/training" element={<TrainingLayout />}>
          <Route index element={<Training />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
