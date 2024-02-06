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
    { path: "", icon: AiFillDashboard },
    { path: "search", icon: IoSearch },
    { path: "feature", icon: ImLab },
    { path: "bank", icon: RiBankFill },
    { path: "monitor", icon: ImDisplay },
    { path: "lock", icon: FaLockOpen },
    { path: "chart", icon: MdInsertChart },
    { path: "account-setting", icon: FaUsersCog },
    { path: "account", icon: FaUser },
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
