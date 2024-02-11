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
        <div className="flex flex-col md:flex-row bg-white dark:bg-navy-800 ">
          {/* HEAD LEFT  */}
          <div className="w-6/12  grid grid-cols-12  items-center gap-2 ">
            <select
              className="py-1 col-span-3 h-full cursor-pointer px-2 rounded-md  border-gray-600  bg-slate-200 dark:bg-navy-500   text-gray-500 dark:text-navy-100"
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
              className="col-span-8 rounded-md px-2 h-full outline-none  bg-slate-200 dark:bg-navy-500   dark:text-navy-100 text-gray-500"
            />
          </div>
          {/* HEAD RIGHT */}
          <div className="flex flex-row justify-end gap-2 text-sm  w-6/12">
            <Button icon={IoSearch} className={"bg-info py-2 px-4"}>
              Search
            </Button>
            <Button
              className={
                " bg-slate-200 dark:bg-navy-500  text-gray-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600 p-2 text-sm    duration-300  "
              }
            >
              5 / 5 results
            </Button>
            <Button
              icon={FaFilter}
              className={
                " bg-slate-200 dark:bg-navy-500  text-gray-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600 p-2 text-sm    duration-300  "
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
                className=" bg-slate-200 dark:bg-navy-500  text-gray-500 hover:bg-slate-300 hover:text-gray-600 dark:text-navy-100 text-sm p-2 rounded-md  flex flex-row gap-2 items-center"
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
              className={
                "bg-slate-200 dark:bg-navy-500  text-gray-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600   p-2 text-sm "
              }
            ></Button>
          </div>
        </div>
        {/* TABLE */}
        <div className="mt-3   overflow-hidden scroll-smooth overflow-x-auto">
          <div className="w-max md:w-full overflow-hidden ">
            <div className=" grid grid-cols-12  text-gray-500 dark:text-navy-100  text-base font-bold text-left border-b-2 pb-2 border-b-gray-200 dark:border-b-gray-600  mt-3  w-auto md:w-full ">
              <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
                Date
              </h3>
              <h3 className=" col-span-1  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
                Host
              </h3>
              <h3 className=" col-span-1  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
                Type
              </h3>
              <h3 className=" col-span-4  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
                Process
              </h3>
              <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
                Target
              </h3>
              <h3 className=" col-span-2  hover:text-gray-600 dark:hover:text-slate-100 cursor-pointer">
                Action
              </h3>
            </div>
            {events.map((event, index) => (
              <div
                key={index}
                className="last:border-b-0  duration-300  w-auto md:w-full text-base border-b border-b-gray-200 dark:border-b-slate-600 relative"
              >
                <input
                  type="checkbox"
                  className="absolute top-0 right-0 z-10 opacity-0 inset-x-0  peer h-10  cursor-pointer
                      "
                />
                <FaChevronDown className="absolute dark:text-navy-100 text-gray-500 right-6 top-3 peer-checked:rotate-180" />

                <div className="grid grid-cols-12 gap-3- text-gray-500 dark:text-navy-100 hover:bg-slate-100 dark:hover:bg-navy-700  py-2 ">
                  <p className="col-span-2">
                    {event.date} <span className="">{event.time}</span>
                  </p>
                  <p className="col-span-1">{event.host}</p>
                  <p className="col-span-1">{event.type}</p>
                  <p className="col-span-4">{event.process}</p>
                  <p className="col-span-2">{event.target}</p>
                  <p className="col-span-2 flex flex-row gap-2 items-center">
                    {event.action == "Allowed" ? (
                      <FaCheck className="text-xl font-bold text-success" />
                    ) : event.action == "Blocked" ? (
                      <IoClose className="text-xl font-bold text-danger" />
                    ) : (
                      <IoWarning className="text-xl font-bold text-warning" />
                    )}
                    {event.action}
                  </p>
                </div>
                <div className="hidden flex-row gap-2 peer-checked:flex bg-slate-200 dark:bg-navy-900 py-2 px-3">
                  {/* event menu */}
                  <div className=" flex flex-col gap-2">
                    {eventsMenu.map((menu, i) => (
                      <Link
                        className="p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600 rounded-md text-xl"
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
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default EventTable;
