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
  IoMdSettings,
  RiLogoutBoxRLine,
} from "../assets/Icons/Icons";
import { Link, Outlet, useLocation } from "react-router-dom";

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

  // HEADER MENUS
  const headerMenu = [
    { path: "/account", icon: IoMdSettings },
    { path: "/account", icon: FaUser },
    { path: "/account", icon: RiLogoutBoxRLine },
  ];

  const params = useLocation();
  const pageTitles = [
    "policies",
    "events",
    "training",
    "endpoints",
    "analyzes",
    "vulnerabilities",
    "capacity",
  ];

  // console.log(params.pathname.split("/")[1]);
  // const pageTitleHandeler = () => {
  //   pageTitle.find(title => params.pathname ==)
  // };

  // PAGE TITLE
  const pathname = params.pathname.split("/")[1];
  const pageTitle = pageTitles.find((title) => title == pathname);

  return (
    <div className=" h-screen">
      {/* HEADER */}
      <header className="h-14 bg-black flex flex-row justify-between px-5 items-center">
        <h3 className="text-white  text-base font-medium capitalize">
          {pageTitle}
        </h3>
        <div className="flex flex-row gap-2 ">
          {headerMenu.map((menu, index) => (
            <Link key={index} to={"/"} className="">
              <button className="bg-dark-gray p-2 text-silver-gray hover:bg-info hover:text-white  rounded-sm">
                {menu.icon()}
              </button>
            </Link>
          ))}

          {/* ACCOUNT */}
          {/* SETTINGS */}
          {/* LOGOUT */}
        </div>
      </header>
      {/* MAIN */}
      <main className="flex flex-row h-[calc(100vh-56px)]">
        {/* SIDEBAR */}
        <SideMenu sideLinks={sideLinks} />
        {/* CONTENT AREA */}
        <div className="p-3 bg-black w-full    overflow-hidden overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TrainingLayout;
