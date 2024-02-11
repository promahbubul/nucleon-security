import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import SideMenu from "../components/Layout/SideMenu";
import {
  AiFillDashboard,
  FaBell,
  FaUser,
  IoMdSettings,
  RiLogoutBoxRLine,
  GrMenu,
} from "../assets/Icons/Icons";
import DarkButton from "../components/ui/Buttons/DarkButton";
import LightButton from "../components/ui/Buttons/LightButton";
import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";

const Layout = ({
  handleThemeSwitch,
  theme,
  showLanguage,
  setShowLanguage,
  showMobileMenu,
  setShowMobileMenu,
}) => {
  const sideLinks = [
    { path: "dashboard", icon: AiFillDashboard },
    { path: "training", icon: AiFillDashboard },
    { path: "account", icon: FaUser },
  ];

  // HEADER MENUS
  const headerMenu = [
    { path: "/settings", icon: IoMdSettings, name: "Settings" },
    { path: "/notification", icon: FaBell, name: "Notification" },
    { path: "/help", icon: FaBook, name: "Book" },
    { path: "/user", icon: FaUser, name: "User" },
    { path: "/", icon: RiLogoutBoxRLine, name: "Logout" },
  ];

  const params = useLocation({ handleThemeSwitch });

  // PAGE TITLE
  const pathname = params.pathname.split("/")[1];
  const pageTitle = sideLinks.find((title) => title.path === pathname);

  // TRANSLATE
  const { t } = useTranslation();

  // const { line1, line2 } = t("description");
  // console.log(line1, line2);

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
        {/* MOBILE MENU */}
        <div className="md:hidden">
          {!showMobileMenu && (
            <button
              onClick={() => setShowMobileMenu(true)}
              className="text-2xl text-gray-500 hover:bg-slate-300 dark:bg-navy-500 dark:text-navy-100 p-2 rounded-md bg-slate-200"
            >
              <GrMenu className="" />
            </button>
          )}
          {showMobileMenu && (
            <>
              <div
                onClick={() => setShowMobileMenu(false)}
                className="fixed inset-y-0 inset-x-0 shadow-md bg-slate-400/70 dark:bg-navy-900/70 z-30"
              ></div>
              <div className="fixed flex flex-col justify-between h-full top-0 left-0 w-10/12  py-5 bg-white dark:bg-navy-700 z-40">
                <div className="">
                  <div className="flex flex-row px-5 justify-between items-center">
                    <div className="">
                      <LanguageSelector />
                    </div>
                    {/* DARK MODE BUTTON */}
                    <button className="" onClick={handleThemeSwitch}>
                      {theme === "dark" ? <DarkButton /> : <LightButton />}
                    </button>
                  </div>
                  {/* SIDEMENU (MOBILE) */}
                  <div className=" flex flex-col gap-0.5 mt-5">
                    {sideLinks.map((item) => (
                      <NavLink
                        onClick={() => setShowMobileMenu(false)}
                        className={
                          "bg-slate-200 dark:bg-navy-900 p-3 dark:hover:bg-navy-800  hover:bg-slate-300 text-gray-500 dark:text-navy-100 font-medium flex flex-row items-center gap-2"
                        }
                        to={item.path}
                      >
                        <span className="">{item.icon()}</span>
                        <span className="capitalize">{item.path}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
                {/* HEADERMENU (MOBILE) */}
                <div className=" flex flex-row justify-between  px-5 text-lg text-gray-500 dark:text-navy-100 ">
                  {headerMenu.map((menu) => (
                    <Link
                      className="dark:bg-navy-500 hover:bg-slate-100 dark:hover:bg-navy-600 p-2  rounded-full"
                      to={menu.path}
                    >
                      {menu.icon()}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {/* HEADER MENU */}
        <div className="w-full hidden md:flex flex-row justify-end gap-3">
          {/* LANGUAGE SWITCH */}
          <div className="md:flex hidden">
            <LanguageSelector />
          </div>
          {/* DARK MODE BUTTON */}
          <button className="" onClick={handleThemeSwitch}>
            {theme === "dark" ? <DarkButton /> : <LightButton />}
          </button>

          {/* HEADER MENU */}
          <div className="hidden md:flex flex-row gap-2  ">
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
