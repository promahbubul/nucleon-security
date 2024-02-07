import React from "react";
import SideMenu from "../components/Layout/SideMenu";
import {
  FaUsersCog,
  ImLab,
  IoSearch,
  AiFillDashboard,
  ImDisplay,
  RiBankFill,
  FaLockOpen,
  FaUser,
  MdInsertChart,
} from "../assets/Icons/Icons";
import { Outlet } from "react-router-dom";

const TrainingLayout = () => {
  const sideLinks = [
    { path: "training", icon: AiFillDashboard },
    { path: "events", icon: IoSearch },
    { path: "analyzes", icon: ImLab },
    { path: "policies", icon: RiBankFill },
    { path: "endpoints", icon: ImDisplay },
    { path: "vulnerabilities", icon: FaLockOpen },
    { path: "capacity", icon: MdInsertChart },
    { path: "", icon: FaUsersCog },
    { path: "", icon: FaUser },
  ];
  return (
    <div className="flex flex-row h-screen">
      {/* sidebar */}
      <SideMenu sideLinks={sideLinks} />
      {/* Content Area */}
      <div className="p-3 bg-black w-full    overflow-hidden overflow-y-scroll scroll-smooth ">
        <Outlet />
      </div>
    </div>
  );
};

export default TrainingLayout;
