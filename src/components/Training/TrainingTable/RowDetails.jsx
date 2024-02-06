import React from "react";
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
import { Link } from "react-router-dom";

const RowDetails = () => {
  const menuList = [
    { path: "/investigate", icon: FaSitemap },
    { path: "/worldmap", icon: FaGlobeEurope },
    { path: "/analyzes", icon: FaFlask },
    { path: "/endpoints", icon: FaSkull },
    { path: "/endpoints", icon: FaBox },
    { path: "/endpoints", icon: FaPowerOff },
    { path: "/endpoints", icon: FaHistory },
    { path: "/", icon: FaArchive },
  ];
  return (
    <td className="border border-red-500 w-full">
      {/* IconMenu */}
      <div className="border flex flex-col gap-2 w-full  border-green-500">
        {menuList.map((menu, index) => {
          <Link to={"/"} className="border w-full">
            <FaSkull className="text-3xl" />
          </Link>;
        })}
        ;
      </div>
      {/* Excluted */}
      <div className="border"></div>
      {/*  Files */}
      <div className="border"></div>
      {/* Network */}
      <div className="border"></div>
      {/* Access */}
      <div className="border"></div>
    </td>
  );
};

export default RowDetails;
