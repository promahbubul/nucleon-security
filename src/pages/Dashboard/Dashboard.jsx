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
        <div className="flex flex-row justify-end gap-2 text-sm">
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
        <div className="mt-3">
          <table className=" w-full ">
            <thead className="w-full py-1 border-b border-b-gray-200 ">
              <tr className=" grid grid-cols-12 text-secondary text-base font-bold text-left">
                <th className=" col-span-2  hover:text-black cursor-pointer">
                  Logo
                </th>
                <th className=" col-span-4  hover:text-black cursor-pointer">
                  Name
                </th>
                <th className=" col-span-2  hover:text-black cursor-pointer">
                  License Count
                </th>
                <th className=" col-span-4  hover:text-black cursor-pointer">
                  Domain
                </th>
              </tr>
            </thead>

            <tbody className="">
              {entities.map((entitie) => (
                <tr
                  key={entitie.id}
                  className="grid grid-cols-12  border-b border-b-gray-200  text-left hover:bg-gray-200 items-center py-1 cursor-pointer"
                >
                  <td className=" col-span-2">
                    <img src={entitie.logo} alt="" className="w-6" />
                  </td>
                  <td className=" col-span-4">{entitie.name}</td>
                  <td className=" col-span-2">{entitie.licenceCount}</td>
                  <td className=" col-span-4">{entitie.domain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Dashboard;
