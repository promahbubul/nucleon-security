import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import SideMenu from "../components/Layout/SideMenu";
import {
  AiFillDashboard,
  FaUser,
  IoMdSettings,
  RiLogoutBoxRLine,
} from "../assets/Icons/Icons";
import DarkButton from "../components/ui/Buttons/DarkButton";
import LightButton from "../components/ui/Buttons/LightButton";
import { useEffect, useState } from "react";

const Layout = ({ handleThemeSwitch, theme }) => {
  const sideLinks = [
    { path: "dashboard", icon: AiFillDashboard },
    { path: "account", icon: FaUser },
  ];

  // HEADER MENUS
  const headerMenu = [
    { path: "/account", icon: IoMdSettings },
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
      <header className="h-14 dark:bg-navy-800 bg-white border-b border-b-gray-200 dark:border-slate-700   flex flex-row justify-between px-5 items-center">
        {/* PAGE TITLE */}
        <h3 className="dark:text-white  text-black  text-base font-medium capitalize">
          {pageTitle.path}
        </h3>
        {/* HEADER LOGO */}
        <div className="w-2/12 ">
          {theme === "dark" ? (
            <img
              src="/images/header-logo-2.png"
              alt=""
              className="w-full cursor-pointer"
            />
          ) : (
            <img
              src="/images/header-logo-1.png"
              alt=""
              className="w-full cursor-pointer"
            />
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
                <button className=" hover:bg-navy-600  p-2 text-gray-500 dark:text-navy-100 dark:hover:bg-navy-600 hover:text-white  rounded-full">
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
