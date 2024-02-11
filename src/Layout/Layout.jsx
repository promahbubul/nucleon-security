import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import SideMenu from "../components/Layout/SideMenu";
import {
  AiFillDashboard,
  FaBell,
  FaUser,
  IoMdSettings,
  RiLogoutBoxRLine,
} from "../assets/Icons/Icons";
import DarkButton from "../components/ui/Buttons/DarkButton";
import LightButton from "../components/ui/Buttons/LightButton";
import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Layout = ({ handleThemeSwitch, theme }) => {
  const [showLanguage, setShowLanguage] = useState(false);
  const sideLinks = [
    { path: "dashboard", icon: AiFillDashboard },
    { path: "account", icon: FaUser },
  ];

  // HEADER MENUS
  const headerMenu = [
    { path: "/account", icon: IoMdSettings },
    { path: "/account", icon: FaBell },
    { path: "/account", icon: FaBook },
    { path: "/account", icon: FaUser },
    { path: "/account", icon: RiLogoutBoxRLine },
  ];

  const params = useLocation({ handleThemeSwitch });

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
          <div className="w-full relative">
            <button className="w-full border  border-gray-300 hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-navy-600 py-1 px-2 rounded-md flex flex-row items-center gap-2 dark:text-navy-100 text-gray-500 justify-center text-xl">
              <img src="/images/lg/english.png" alt="" className="w-7 h-6" /> |
              English
            </button>
            <div className="absolute bg-white dark:bg-navy-600 dark:hover:bg-navy-700 w-full top-11 shadow-2xl rounded-md ">
              <button className="w-full  hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-navy-600 py-1 px-2 rounded-md flex flex-row items-center gap-2 dark:text-navy-100 text-gray-500 justify-center text-xl">
                <img src="/images/lg/french.png" alt="" className="w-7 h-6" /> |
                French
              </button>
              <button className="w-full  hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-navy-600 py-1 px-2 rounded-md flex flex-row items-center gap-2 dark:text-navy-100 text-gray-500 justify-center text-xl">
                <img src="/images/lg/spanish.png" alt="" className="w-7 h-6" />{" "}
                | Spanish
              </button>
              <button className="w-full  hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-navy-600 py-1 px-2 rounded-md flex flex-row items-center gap-2 dark:text-navy-100 text-gray-500 justify-center text-xl">
                <img src="/images/lg/german.png" alt="" className="w-7 h-6" /> |
                German
              </button>
            </div>
          </div>
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
        <div className="p-3 bg-slate-100 shadow-md w-full  dark:bg-navy-900   overflow-hidden overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
