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
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  // DARK MODE

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* DASHBOARD LAYOUT */}
        <Route
          path="/"
          element={<Layout handleThemeSwitch={handleThemeSwitch} theme={theme} />}
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        {/* TRAINING LAYOUT */}
        <Route
          path="/"
          element={<TrainingLayout handleThemeSwitch={handleThemeSwitch} theme={theme} />}
        >
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
