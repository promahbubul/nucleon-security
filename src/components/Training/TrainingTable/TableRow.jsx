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
  FaCheck,
  IoWarning,
  IoClose,
  FaChevronDown,
  FaMagic,
  FaSatelliteDish,
  FaLevelUpAlt,
} from "../../../assets/Icons/Icons";
import RowDetails from "./RowDetails";
import { Link } from "react-router-dom";
import Title from "../../ui/Title/Title";
import ExecutedProcess from "./ExecutedProcess";
import RelatedFiles from "./RelatedFiles";
import NetworkActivities from "./NetworkActivities";
import AccessedProcess from "./AccessedProcess";
import RelatedEvents from "./RelatedEvents";
import SideMenu from "./SideMenu";

const TableRow = ({ training, handleShowMore }) => {
  const [executedProcess, setExecutedProcess] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [relatedFiles, setRelatedFiles] = useState([]);
  const [networkActivitys, setNetworkActivitys] = useState([]);
  const [accessedProcesses, setAccessProcess] = useState([]);
  const [relatedEvents, setRelatedEvents] = useState([]);

  useEffect(() => {
    fetch("/relatedEvents.json")
      .then((res) => res.json())
      .then((data) => {
        setRelatedEvents(data);
      });
  }, []);

  // console.log(relatedEvents);
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
        {/* COLLAPSE ROW*/}
        <div className="rounded-b-sm duration-500 peer-checked:flex hidden flex-col  gap-2 py-2 px-4 bg-[#ECECEC]">
          <div className="flex flex-row gap-2">
            {/* MENU */}
            <SideMenu />
            {/* EXECUTED PROCESS */}
            <ExecutedProcess executedProcess={executedProcess} />
            {/* RELATED FILES */}
            <RelatedFiles relatedFiles={relatedFiles} />
            {/* NETWORK ACTIVITIES */}
            <NetworkActivities networkActivities={networkActivitys} />
            {/* ACCESSED PROCESS */}
            <AccessedProcess accessedProcesses={accessedProcesses} />
          </div>
          {/* RELATED EVENTS */}
          <RelatedEvents relatedEvents={relatedEvents} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
