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
import { FaBell, FaBook } from "react-icons/fa";
import LanguageSelector from "../components/LanguageSelector";

const TrainingLayout = ({
  handleThemeSwitch,
  theme,
  showLanguage,
  setShowLanguage,
}) => {
  const sideLinks = [
    { path: "training", icon: AiFillDashboard },
    { path: "events", icon: IoSearch },
    { path: "analyzes", icon: ImLab },
    { path: "policies", icon: RiBankFill },
    { path: "endpoints", icon: ImDisplay },
    { path: "vulnerabilities", icon: FaLockOpen },
    { path: "capacity", icon: MdInsertChart },
  ];

  // HEADER MENUS
  const headerMenu = [
    { path: "/account", icon: IoMdSettings },
    { path: "/account", icon: FaBell },
    { path: "/account", icon: FaBook },
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
      <header className="h-14 dark:bg-navy-800 bg-white border-b border-b-gray-200 dark:border-slate-700   flex flex-row  justify-between px-5 items-center">
        {/* PAGE TITLE */}
        <h3 className="w-full dark:text-white  text-black  text-base font-medium capitalize">
          {pageTitle.path}
        </h3>
        {/* HEADER LOGO */}
        <div className="w-full md:flex  text-center m-auto justify-center items-center hidden ">
          {theme === "dark" ? (
            <img
              src="/images/header-logo-2.png"
              alt=""
              className="w-7/12 cursor-pointer"
            />
          ) : (
            <img
              src="/images/header-logo-1.png"
              alt=""
              className="w-7/12 cursor-pointer"
            />
          )}
        </div>
        {/* HEADER MENU */}
        <div className="w-full flex flex-row justify-end gap-3">
          {/* LANGUAGE SWITCH */}
          <LanguageSelector />
          {/* DARK MODE BUTTON */}
          <button className="" onClick={handleThemeSwitch}>
            {theme === "dark" ? <DarkButton /> : <LightButton />}
          </button>
          {/* HEADER MENU */}
          <div className="flex flex-row gap-2 ">
            {headerMenu.map((menu, index) => (
              <Link key={index} to={"/"} className="">
                <button className=" hover:bg-slate-100  p-2 text-gray-500 dark:text-navy-100 dark:hover:bg-navy-600   rounded-full">
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
