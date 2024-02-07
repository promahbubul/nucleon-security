import React from "react";
import Title from "../../ui/Title/Title";
import { Link } from "react-router-dom";
import {
  FaCheck,
  IoWarning,
  IoClose,
  FaChevronDown,
  FaSitemap,
  FaMagic,
  FaShieldAlt,
  FaSatelliteDish,
} from "../../../assets/Icons/Icons";
import ContextInformation from "./ContextInformation";
import ProcessDetails from "./ProcessDetails";
import FileDetails from "./FileDetails";

const RelatedEvents = ({ relatedEvents }) => {
  const eventsMenu = [
    { path: "/", icon: FaSitemap },
    { path: "/", icon: FaMagic },
    { path: "/", icon: FaShieldAlt },
    { path: "/", icon: FaSatelliteDish },
  ];

  //   console.log(relatedEvents);
  return (
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
      <table className=" peer-checked:block hidden">
        <div className="tbody">
          <tr className=" grid grid-cols-12 text-secondary text-base font-bold text-left border-b border-b-slate-200 mt-3 ">
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
          {relatedEvents.map((event, index) => (
            <tr
              key={index}
              className="last:border-b-0  duration-300  text-base border-b border-b-slate-200 text-black relative"
            >
              <input
                type="checkbox"
                className="absolute top-0 right-0 z-10 opacity-0  peer h-10 w-full cursor-pointer
                      "
              />
              <FaChevronDown className="absolute right-6 top-3 peer-checked:rotate-180" />

              <div className="grid grid-cols-12 hover:bg-[#ececec]  py-2 ">
                <td className="col-span-2">
                  {event.date} <span className="">{event.time}</span>
                </td>
                <td className="col-span-1">{event.host}</td>
                <td className="col-span-1">{event.type}</td>
                <td className="col-span-4">{event.process}</td>
                <td className="col-span-2">{event.target}</td>
                <td className="col-span-2 flex flex-row gap-2 items-center">
                  {event.action == "Allowed" ? (
                    <FaCheck className="text-xl font-bold text-success" />
                  ) : event.action == "Blocked" ? (
                    <IoClose className="text-xl font-bold text-danger" />
                  ) : (
                    <IoWarning className="text-xl font-bold text-warning" />
                  )}
                  {event.action}
                </td>
              </div>
              <div className="hidden flex-row gap-2 peer-checked:flex bg-[#ececec] py-2 px-3">
                {/* event menu */}
                <div className=" flex flex-col gap-2">
                  {eventsMenu.map((menu, i) => (
                    <Link
                      className="p-2  w- bg-white rounded-md text-xl"
                      key={i}
                      to={menu.path}
                    >
                      {menu.icon()}
                    </Link>
                  ))}
                </div>
                {/* CONTACT INFO */}
                <ContextInformation context={event?.context} />
                {/* PROCESS DETAILS */}
                <ProcessDetails processes={event?.processes} />
                {/* FILE DETAILS */}
                <FileDetails file={event?.file} />
              </div>
            </tr>
          ))}
        </div>
      </table>
    </div>
  );
};

export default RelatedEvents;
