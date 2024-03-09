/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  FaBiohazard,
  FaDesktop,
  GiNuclear,
  IoIosArrowDown,
  PiBankFill,
  FaShieldAlt,
} from "@assets/Icons/Icons";

import ExecutedProcess from "@shared/components/ExecutedProcess";
import RelatedFiles from "@shared/components/RelatedFiles";
import NetworkActivities from "@shared/components/NetworkActivities";
import AccessedProcess from "@shared/components/AccessedProcess";
import RelatedEvents from "@shared/components/RelatedEvents";
import RowSideMenu from "@shared/components/Menus/RowSideMenu";

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
    <div
      onClick={() => handleShowMore(training)}
      id={training}
      className="cursor-pointer flex flex-col    rounded-sm text-black text-xs   "
    >
      <div className=" flex flex-col relative ">
        <input
          type="checkbox"
          name=""
          id=""
          className="absolute top-0 z-10 cursor-pointer peer inset-x-0 w-full h-14 opacity-0 "
        />
        <div className="bg-white shadow-md dark:bg-navy-700  peer-checked:rounded-b-none rounded-b-sm rounded-t-sm px-2 py-3 grid  grid-cols-12 select-none justify-between dark:text-navy-100 text-gray-500">
          <div className="  col-span-3  flex flex-row items-center gap-2">
            <FaBiohazard className="text-danger text-4xl" />
            <p className=" ">24/01/2024 14:01:41</p>
          </div>
          <div className="  col-span-2  flex flex-row gap-2 items-center">
            <FaDesktop className="text-sm text-gray-500 dark:text-navy-100" />
            <p className="">Nucleon-Zenbook-ABO</p>
          </div>
          <div className="  col-span-2  flex flex-row gap-2 items-center">
            <GiNuclear className="text-sm text-gray-500 dark:text-navy-100" />
            <p className="">Nucleon-Zenbook-ABO</p>
          </div>
          <div className="  col-span-3  flex flex-row gap-2 items-center">
            <PiBankFill className="text-sm text-gray-500 dark:text-navy-100" />
            <p className="">Nucleon-Zenbook-ABO</p>
          </div>
          <div className=" flex flex-row justify-end  col-span-2   items-center gap-2 text-success">
            <div className="flex flex-row gap-2 items-center">
              <FaShieldAlt className="text-sm text-success " />
              <p className="font-bold">Blocked</p>
            </div>
            <IoIosArrowDown className=" text-gray-500 dark:text-navy-100 text-2xl font-bold " />
          </div>
        </div>
        {/* COLLAPSE ROW*/}
        <div className="rounded-b-sm  peer-checked:flex hidden flex-col  gap-2 py-2 px-4 bg-slate-200 dark:bg-navy-800">
          <div className="flex flex-row gap-2">
            {/* MENU */}
            <RowSideMenu />
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
      </div>
    </div>
  );
};

export default TableRow;
