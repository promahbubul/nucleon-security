import { useEffect, useState } from "react";
import { FaDesktop, FaShieldAlt, IoWarning, FaTh } from "@assets/Icons/Icons";
import Details from "./Details";

const Table = () => {
  const [policies, setPolicies] = useState(null);

  useEffect(() => {
    fetch("/policies.json")
      .then((res) => res.json())
      .then((data) => setPolicies(data));
  }, []);
  return (
    <div className="mt-4 flex flex-col gap-1 ">
      {/* CARD 1 */}
      {policies?.map((policie, index) => (
        <div
          key={index}
          className=" flex overflow-auto bg-white dark:text-navy-100 text-gray-500  dark:bg-navy-700   shadow-md rounded-md  flex-col relative"
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="absolute peer opacity-0 cursor-pointer inset-x-0 h-[64px] w-full "
          />

          <div className="flex w-fit md:w-full gap-5 rounded-md   flex-row  peer-checked:rounded-b-none rounded-b-sm rounded-t-sm px-2 py-5  select-none justify-between  cursor-pointer ">
            <p className="w-full">{policie.name}</p>
            <div className="w-full flex items-center flex-row gap-2">
              {policie.status === "Protect" ? (
                <FaShieldAlt className="text-2xl text-success" />
              ) : (
                <IoWarning className="text-2xl text-warning" />
              )}
              {policie.status}
            </div>
            <div className="w-full flex flex-row gap-2 items-center">
              <FaDesktop className="text-2xl text-slate-500" />
              {policie.endPoints} Endpoints
            </div>
            <div className="w-full flex flex-row gap-2 items-center">
              <FaTh className="text-2xl text-slate-500  " />
              {policie.endPoints} Applications
            </div>
          </div>
          <Details />
        </div>
      ))}
    </div>
  );
};

export default Table;
