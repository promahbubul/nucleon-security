import React, { useEffect, useState } from "react";
import SectionContainer from "../ui/SectionContainer/SectionContainer";
import { FaList } from "../../assets/Icons/Icons";
import Button from "../ui/Buttons/Button";
import {
  IoSearch,
  FaFilter,
  MdViewList,
  IoIosArrowDown,
  FaDownload,
  FaChevronDown,
  IoWarning,
  FaSitemap,
  FaMagic,
  FaShieldAlt,
  IoClose,
  FaCheck,
  FaSatelliteDish,
} from "../../assets/Icons/Icons";
import Dropdown from "../ui/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import ContextInformation from "../Training/TrainingTable/ContextInformation";
import ProcessDetails from "../Training/TrainingTable/ProcessDetails";
import FileDetails from "../Training/TrainingTable/FileDetails";

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const eventsMenu = [
    { path: "/", icon: FaSitemap },
    { path: "/", icon: FaMagic },
    { path: "/", icon: FaShieldAlt },
    { path: "/", icon: FaSatelliteDish },
  ];

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  console.log(events);
  return (
    <div className="mt-3">
      <SectionContainer icon={FaList} title={"Events"}>
        {/* HEAD */}
        <div className="flex flex-row bg-white ">
          {/* HEAD LEFT  */}
          <div className="w-6/12  grid grid-cols-12  items-center gap-2 ">
            <select
              className="py-1 col-span-3 h-full cursor-pointer px-2 rounded-md border border-secondary bg-slate-200"
              disabled
            >
              <option value="timestamp" className="" selected>
                Date
              </option>
            </select>
            <input
              type="date"
              name=""
              id=""
              className="col-span-8 border px-2 h-full rounded-sm outline-none border-slate-300"
            />
          </div>
          {/* HEAD RIGHT */}
          <div className="flex flex-row justify-end gap-2 text-sm BORDER w-6/12">
            <Button icon={IoSearch} className={"bg-info py-2 px-4"}>
              Search
            </Button>
            <Button
              className={
                "bg-gray-200 p-2 text-sm border border-gray-300 hover:bg-gray-100  duration-300  "
              }
            >
              5 / 5 results
            </Button>
            <Button
              icon={FaFilter}
              className={
                "bg-gray-200 p-2 text-sm border border-gray-300 hover:bg-gray-100  duration-300  "
              }
            >
              Add Filter
            </Button>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative"
            >
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gray-200 text-sm p-2 rounded-md border border-gray-300 flex flex-row gap-2 items-center"
              >
                <MdViewList className="text-lg" />
                <span className="">List View</span>
                <IoIosArrowDown className="text-lg" />
              </button>
              {showDropdown ? (
                <Dropdown setShowDropdown={setShowDropdown} />
              ) : (
                ""
              )}
            </div>
            <Button
              icon={FaDownload}
              className={"bg-gray-200 p-2 text-sm border border-gray-300"}
            ></Button>
          </div>
        </div>
        {/* TABLE */}
        <table className="mt-3">
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
            {events.map((event, index) => (
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
      </SectionContainer>
    </div>
  );
};

export default EventTable;
