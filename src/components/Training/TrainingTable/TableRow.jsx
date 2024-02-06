import React, { useEffect, useState } from "react";
import {
  FaBiohazard,
  FaDesktop,
  GiNuclear,
  IoIosArrowDown,
  PiBankFill,
  FaShieldAlt,
  FaSitemap,
  FaGlobeEurope,
  FaFlask,
  FaSkull,
  FaBox,
  FaPowerOff,
  FaHistory,
  FaArchive,
} from "../../../assets/Icons/Icons";
import RowDetails from "./RowDetails";
import { Link } from "react-router-dom";
import Title from "../../ui/Title/Title";

const TableRow = ({ training, handleShowMore }) => {
  const [relatedEvents, setRelatedEvents] = useState([]);
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

  useEffect(() => {
    fetch("/relatedEvents.json")
      .then((res) => res.json())
      .then((data) => setRelatedEvents(data));
  }, []);

  console.log(relatedEvents);
  return (
    <tr
      onClick={() => handleShowMore(training)}
      id={training}
      className="cursor-pointer flex flex-col    rounded-sm text-black text-xs   "
    >
      <td className=" flex flex-col relative ">
        <input
          type="checkbox"
          name=""
          id=""
          className="absolute top-0 z-10 cursor-pointer peer inset-x-0 w-full h-14 opacity-0 "
        />
        <div className="bg-white peer-checked:rounded-b-none rounded-b-sm rounded-t-sm px-2 py-3 grid  grid-cols-12 select-none justify-between ">
          <div className="  col-span-3  flex flex-row items-center gap-2">
            <FaBiohazard className="text-danger text-4xl" />
            <p className=" ">24/01/2024 14:01:41</p>
          </div>
          <div className="  col-span-2  flex flex-row gap-2 items-center">
            <FaDesktop className="text-sm text-black" />
            <p className="">Nucleon-Zenbook-ABO</p>
          </div>
          <div className="  col-span-2  flex flex-row gap-2 items-center">
            <GiNuclear className="text-sm text-black" />
            <p className="">Nucleon-Zenbook-ABO</p>
          </div>
          <div className="  col-span-3  flex flex-row gap-2 items-center">
            <PiBankFill className="text-sm text-black" />
            <p className="">Nucleon-Zenbook-ABO</p>
          </div>
          <div className=" flex flex-row justify-end  col-span-2   items-center gap-2 text-success">
            <div className="flex flex-row gap-2 items-center">
              <FaShieldAlt className="text-sm text-success " />
              <p className="font-bold">Blocked</p>
            </div>
            <IoIosArrowDown className=" text-black text-2xl font-bold " />
          </div>
        </div>
        {/* collapse row */}
        <div className="rounded-b-sm duration-500 peer-checked:flex hidden flex-col  gap-2 py-2 px-4 bg-[#ECECEC]">
          <div className="flex flex-row gap-2">
            {/* icon menu */}
            <div className="flex  flex-col gap-2">
              {menuList.map((menu, i) => (
                <Link
                  className="p-2  w- bg-white rounded-md text-xl"
                  key={i}
                  to={menu.path}
                >
                  {menu.icon()}
                </Link>
              ))}
            </div>
            {/* Executed */}
            <div className="border p-2 rounded-md bg-white w-5/12">
              <Title>Executed processes (0)</Title>
            </div>
            {/* related */}
            <div className="border p-2 rounded-md bg-white w-3/12">
              <Title>Related files (0) </Title>
            </div>
            {/* Network */}
            <div className="border px-2 py-1 rounded-md bg-white w-2/12">
              <Title>Network activities (3)</Title>
            </div>
            {/* Access */}
            <div className="border px-2 py-1 rounded-md bg-white w-2/12">
              <Title>Accessed process (0)</Title>
            </div>
          </div>
          <div className="bg-white shadow-md shadow-secondary px-2 py-1 rounded-md relative">
            <input
              type="checkbox"
              name=""
              id=""
              className="absolute w-full top-0 peer opacity-0 inset-x-0 h-9 cursor-pointer"
            />
            <h3 className="text-secondary p-1 text-base peer-checked:border-b peer-checked:border-slate-200 font-medium ">
              Related events (3)
            </h3>
            <table className="border peer-checked:block hidden">
              <tr className=" grid grid-cols-12 text-secondary text-base font-bold text-left">
                <th className=" col-span-2  hover:text-black cursor-pointer">
                  Date
                </th>
                <th className=" col-span-1  hover:text-black cursor-pointer">
                  Host
                </th>
                <th className=" col-span-1  hover:text-black cursor-pointer">
                  Type
                </th>
                <th className=" col-span-4  hover:text-black cursor-pointer">
                  Process
                </th>
                <th className=" col-span-2  hover:text-black cursor-pointer">
                  Target
                </th>
                <th className=" col-span-2  hover:text-black cursor-pointer">
                  Action
                </th>
              </tr>
            </table>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
