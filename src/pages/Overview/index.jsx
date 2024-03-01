import {
  FaBuilding,
  FaDownload,
  FaFilter,
  IoIosArrowDown,
  MdViewList,
  IoSearch,
} from "../../assets/Icons/Icons";
import { useEffect, useState } from "react";
import SectionContainer from "../../shared/components/SectionContainer";
import Button from "../../shared/components/Buttons/Button/Button";
import Dropdown from "../../shared/components";

const Overview = () => {
  const [entities, setEntities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showModal, setShowModal] = useState(false);

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
        <div className="flex  flex-row flex-wrap justify-end gap-2 text-sm">
          <Button icon={IoSearch} className={"bg-info py-2 px-4"}>
            Search
          </Button>
          <Button
            className={
              "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 duration-300"
            }
          >
            5 / 5 results
          </Button>
          <Button
            icon={FaFilter}
            className={
              "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 duration-300"
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
              className="bg-slate-200 text-gray-500 dark:bg-navy-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600 text-sm p-2 rounded-md flex flex-row gap-2 items-center"
            >
              <MdViewList className="text-lg" />
              <span className="">List View</span>
              <IoIosArrowDown className="text-lg" />
            </button>
            {showDropdown ? <Dropdown setShowDropdown={setShowDropdown} /> : ""}
          </div>
          <Button
            icon={FaDownload}
            className={
              "bg-slate-200  dark:bg-navy-500  text-gray-500 dark:text-navy-100  hover:bg-slate-300 hover:text-gray-600 dark:bg p-2 text-sm "
            }
          ></Button>
        </div>
        {/* Table */}
        <div className="mt-3 w-full overflow-hidden overflow-x-auto">
          <div className=" w-max md:w-full overflow-hidden overflow-x-auto ">
            {/* TABLE HEAD */}
            <div className="w-max md:w-full py-1 border-b-2 border-b-gray-200 dark:border-b-slate-700 ">
              <div className=" grid grid-cols-12 gap-2 text-gray-600 hover:text-gray-700 dark:text-navy-100  text-sm md:text-base font-semibold text-left">
                <p className=" col-span-2  dark:hover:text-slate-400 cursor-pointer">
                  Logo
                </p>
                <p className=" col-span-4  dark:hover:text-slate-400 cursor-pointer">
                  Name
                </p>
                <p className=" col-span-2  dark:hover:text-slate-400 cursor-pointer">
                  License Count
                </p>
                <p className=" col-span-4  dark:hover:text-slate-400 cursor-pointer">
                  Domain
                </p>
              </div>
            </div>
            {/* TABLE BODY */}
            <div className="">
              {entities.map((entitie) => (
                <div
                  key={entitie.id}
                  className="grid grid-cols-12 gap-2  border-b dark:border-b-slate-700  text-left dark:hover:bg-navy-700 text-gray-500 dark:hover:text-gray-300 items-center py-1 dark:text-gray-200 cursor-pointer w-auto text-xs md:text-sm"
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

export default Overview;
