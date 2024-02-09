import React from "react";
import { Link } from "react-router-dom";
import {
  FaSitemap,
  FaGlobeEurope,
  FaFlask,
  FaSkull,
  FaBox,
  FaPowerOff,
  FaHistory,
  FaArchive,
} from "../../../assets/Icons/Icons";

const SideMenu = () => {
  // MENU OBJECT
  const menuList = [
    { path: "investigate", icon: FaSitemap },
    { path: "orldmap", icon: FaGlobeEurope },
    { path: "analyzes", icon: FaFlask },
    { path: "endpoints", icon: FaSkull },
    { path: "endpoints", icon: FaBox },
    { path: "endpoints", icon: FaPowerOff },
    { path: "ndpoints", icon: FaHistory },
    { path: "", icon: FaArchive },
  ];
  return (
    <div className="flex  flex-col gap-2">
      {menuList.map((menu, i) => (
        <Link
          className="p-2 text-gray-500  dark:bg-navy-600 dark:text-slate-300 rounded-md text-xl"
          key={i}
          to={menu.path}
        >
          {menu.icon()}
        </Link>
      ))}
    </div>
  );
};

export default SideMenu;
