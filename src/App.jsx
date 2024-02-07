import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Accounts from "./pages/Accounts/Accounts";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TrainingLayout from "./Layout/TrainingLayout";
import Training from "./pages/Training/Training";
import Events from "./pages/Events/Events";
import Analyzes from "./pages/Analyzes/Analyzes";
import Policies from "./pages/Policies/Policies";
import Endpoints from "./pages/Endpoints/Endpoints";
import Vulnerabilities from "./pages/Vulnerabilities/Vulnerabilities";
import Capacity from "./pages/Capacity/Capacity";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/" element={<TrainingLayout />}>
          <Route path="training" element={<Training />} />
          <Route path="events" element={<Events />} />
          <Route path="analyzes" element={<Analyzes />} />
          <Route path="policies" element={<Policies />} />
          <Route path="endpoints" element={<Endpoints />} />
          <Route path="vulnerabilities" element={<Vulnerabilities />} />
          <Route path="capacity" element={<Capacity />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
