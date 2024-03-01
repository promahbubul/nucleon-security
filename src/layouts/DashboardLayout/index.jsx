/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { sideLinks } from "@shared/constants/menuLinks.constants";

import SideMenu from "@shared/components/Menus/SideMenu";
import Header from "./components/Header";
import { dropdownMenuList } from "../../shared/constants/dropdownMenu.constants";

const DashboardLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState(dropdownMenuList[0]);
  return (
    <div>
      <div className=" h-screen">
        {/* HEADER */}
        <Header selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        {/* MAIN */}
        <main className="flex flex-row h-[calc(100vh-56px)]">
          {/* SIDEBAR */}
          <SideMenu
            sideLinks={sideLinks.filter((l) =>
              l.allow.includes(selectedMenu?.id)
            )}
          />
          {/* CONTENT AREA */}
          <div className="p-3 bg-slate-100 dark:bg-navy-900 w-full    overflow-hidden overflow-y-auto scroll-smooth">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
