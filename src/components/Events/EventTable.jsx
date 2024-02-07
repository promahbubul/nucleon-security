import React, { useState } from "react";
import SectionContainer from "../ui/SectionContainer/SectionContainer";
import { FaList } from "../../assets/Icons/Icons";
import Button from "../ui/Buttons/Button";
import {
  IoSearch,
  FaFilter,
  MdViewList,
  IoIosArrowDown,
  FaDownload,
} from "../../assets/Icons/Icons";
import Dropdown from "../ui/Dropdown/Dropdown";

const EventTable = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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
      </SectionContainer>
    </div>
  );
};

export default EventTable;
