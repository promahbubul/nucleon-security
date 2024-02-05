import React from "react";
import {
  FaBiohazard,
  FaDesktop,
  GiNuclear,
  IoIosArrowDown,
  PiBankFill,
  FaShieldAlt,
} from "../../../assets/Icons/Icons";

const TableRow = () => {
  return (
    <tr className="bg-white cursor-pointer  flex-row px-2 py-3 rounded-sm text-black text-xs  justify-between grid grid-cols-12">
      <td className="  col-span-3  flex flex-row items-center gap-2">
        <FaBiohazard className="text-danger text-4xl" />
        <p className=" ">24/01/2024 14:01:41</p>
      </td>
      <td className="  col-span-2  flex flex-row gap-2 items-center">
        <FaDesktop className="text-sm text-black" />
        <p className="">Nucleon-Zenbook-ABO</p>
      </td>
      <td className="  col-span-2  flex flex-row gap-2 items-center">
        <GiNuclear className="text-sm text-black" />
        <p className="">Nucleon-Zenbook-ABO</p>
      </td>
      <td className="  col-span-3  flex flex-row gap-2 items-center">
        <PiBankFill className="text-sm text-black" />
        <p className="">Nucleon-Zenbook-ABO</p>
      </td>
      <td className=" flex flex-row justify-end  col-span-2   items-center gap-2 text-success">
        <div className="flex flex-row gap-2 items-center">
          <FaShieldAlt className="text-sm text-success " />
          <p className="font-bold">Blocked</p>
        </div>
        <IoIosArrowDown />
      </td>
    </tr>
  );
};

export default TableRow;
