import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import { FaUser, TiGroup } from "../../assets/Icons/Icons";

import {
  FaFilter,
  FaDownload,
  LuArrowLeftRight,
  MdViewList,
  IoSearch,
  IoIosArrowDown,
} from "../../assets/Icons/Icons";
import { useState } from "react";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import Button from "../../components/ui/Buttons/Button";

const Accounts = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const showDropDown = () => {

  // }
  return (
    <>
      <div className="flex flex-row gap-3  w-full">
        <SectionContainer icon={FaUser} title={"Accounts"} className={"w-7/12"}>
          <div className="flex flex-row justify-between">
            <Button icon={LuArrowLeftRight} className={"bg-info p-2 text-sm "}>
              Global Account Managment
            </Button>
            <div className="flex flex-row gap-2 text-sm">
              <Button icon={IoSearch} className={"bg-info py-2 px-4"}>
                Search
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
        </SectionContainer>
        <SectionContainer
          icon={TiGroup}
          title={"Groups"}
          className={"w-5/12"}
        ></SectionContainer>
      </div>
    </>
  );
};

export default Accounts;
