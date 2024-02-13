import React from "react";
import { FiSun, IoMoonOutline } from "../../../assets/Icons/Icons";

const DarkButton = () => {
  return (
    <button className="bg-navy-900/90 shadow-md w-14 h-7 rounded-full flex justify-end items-center p-1">
      <button className="text-sm bg-navy-700  p-1 text-info rounded-full  shadow-md ">
        <IoMoonOutline />
      </button>
    </button>
  );
};

export default DarkButton;
