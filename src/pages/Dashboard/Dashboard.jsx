import React, { useEffect, useState } from "react";
import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import {
  FaBuilding,
  FaDownload,
  FaFilter,
  IoIosArrowDown,
  LuArrowLeftRight,
  MdViewList,
} from "../../assets/Icons/Icons";
// import BasicTable from "../../components/ui/Table.jsx/BasicTable";
import { IoSearch } from "../../assets/Icons/Icons";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import Button from "../../components/ui/Buttons/Button";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [entities, setEntities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/entities.json")
      .then((res) => res.json())
      .then((data) => setEntities(data));
  }, []);

  return (
    <div>
      <div className="flex flex-row"></div>
      <SectionContainer
        icon={FaBuilding}
        className={"w-full"}
        title={"Entities"}
      >
        <div className="flex flex-row flex-wrap justify-end gap-2 text-sm">
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
            {showDropdown ? <Dropdown setShowDropdown={setShowDropdown} /> : ""}
          </div>
          <Button
            icon={FaDownload}
            className={"bg-gray-200 p-2 text-sm border border-gray-300"}
          ></Button>
        </div>
        {/* Table */}
        <div className="mt-3 w-full overflow-hidden overflow-x-auto">
          <div className=" w-max md:w-full overflow-hidden overflow-x-auto ">
            {/* TABLE HEAD */}
            <div className="w-max md:w-full py-1 border-b border-b-gray-200 ">
              <div className=" grid grid-cols-12 gap-2 text-secondary text-sm md:text-base font-bold text-left">
                <p className=" col-span-2  hover:text-black cursor-pointer">
                  Logo
                </p>
                <p className=" col-span-4  hover:text-black cursor-pointer">
                  Name
                </p>
                <p className=" col-span-2  hover:text-black cursor-pointer">
                  License Count
                </p>
                <p className=" col-span-4  hover:text-black cursor-pointer">
                  Domain
                </p>
              </div>
            </div>
            {/* TABLE BODY */}
            <div className="">
              {entities.map((entitie) => (
                <div
                  key={entitie.id}
                  className="grid grid-cols-12 gap-2  border-b border-b-gray-200  text-left hover:bg-gray-200 items-center py-1 cursor-pointer w-auto text-xs md:text-base"
                >
                  <p className=" col-span-2">
                    <img src={entitie.logo} alt="" className="w-6" />
                  </p>
                  <p className=" col-span-4">{entitie.name}</p>
                  <p className=" col-span-2">{entitie.licenceCount}</p>
                  <p className=" col-span-4">{entitie.domain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Dashboard;
