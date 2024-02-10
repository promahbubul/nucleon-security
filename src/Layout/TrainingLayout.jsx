import React, { useEffect, useState } from "react";
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
  IoMdSettings,
  RiLogoutBoxRLine,
} from "../assets/Icons/Icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import DarkButton from "../components/ui/Buttons/DarkButton";
import LightButton from "../components/ui/Buttons/LightButton";

const TrainingLayout = ({ handleThemeSwitch, theme }) => {
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

  // HEADER MENUS
  const headerMenu = [
    { path: "/account", icon: IoMdSettings },
    { path: "/account", icon: FaUser },
    { path: "/account", icon: RiLogoutBoxRLine },
  ];

  const params = useLocation();

  // PAGE TITLE
  const pathname = params.pathname.split("/")[1];
  const pageTitle = sideLinks.find((title) => title.path === pathname);

  return (
    <div className=" h-screen">
      {/* HEADER */}
      <header className="h-14 dark:bg-navy-800 border-b border-b-gray-200 dark:border-slate-700 bg-white  flex flex-row justify-between px-5 items-center">
        {/* PAGE TITLE */}
        <h3 className="dark:text-white  text-black  text-base font-medium capitalize">
          {pageTitle.path}
        </h3>
        {/* HEADER LOGO */}
        <div className="w-2/12 md:block hidden">
          {theme === "dark" ? (
            <img src="/images/header-logo-2.png" alt="" className="w-full" />
          ) : (
            <img src="/images/header-logo-1.png" alt="" className="w-full" />
          )}
        </div>
        {/* HEADER MENU */}
        <div className="flex flex-row  gap-3">
          {/* DARK MODE BUTTON */}
          <button className="" onClick={handleThemeSwitch}>
            {theme === "dark" ? <DarkButton /> : <LightButton />}
          </button>
          {/* HEADER MENU */}
          <div className="flex flex-row gap-2 ">
            {headerMenu.map((menu, index) => (
              <Link key={index} to={"/"} className="">
                <button className=" hover:bg-navy-600 p-2 text-black dark:text-gray-300 dark:hover:bg-navy-600 hover:text-white  rounded-full">
                  {menu.icon()}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </header>
      {/* MAIN */}
      <main className="flex flex-row h-[calc(100vh-56px)]">
        {/* SIDEBAR */}
        <SideMenu sideLinks={sideLinks} />
        {/* CONTENT AREA */}
        <div className="p-3 bg-slate-100 dark:bg-navy-900 w-full    overflow-hidden overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TrainingLayout;
