import { useState } from "react";
import { FaBiohazard, FaFlask, FaFile } from "@assets/Icons/Icons";
import StatusCard from "@shared/components/Card/StatusCard";
import OnButton from "@shared/components/Buttons/OnButton";
import OffButton from "@shared/components/Buttons/OffButton";

const Status = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-3">
      {/* MALICIOUS FILE */}
      <StatusCard
        className={"col-span-3"}
        title={"Malicious File"}
        number={17}
        icon={FaBiohazard}
      ></StatusCard>
      {/* ANALYSIS COUNT  */}
      <StatusCard
        className={"col-span-3"}
        title={"Analysis count"}
        number={118}
        icon={FaFlask}
      ></StatusCard>
      {/* UPLOAD FILE */}
      <div className="col-span-3 border-2 border-dashed hover:border-info border-slate-400 rounded-sm h-full w-full bg-slate-200  drop-shadow-md dark:bg-navy-700 flex flex-row items-center justify-center gap-2 relative">
        <input
          type="file"
          name="file"
          id=""
          className="absolute inset-y-0 inset-x-0  cursor-pointer opacity-0"
        />
        <FaFile className="text-4xl text-info" />
        <p className="text-gray-500 dark:text-navy-100  text-base font-normal">
          Upload file to analyze
        </p>
      </div>
      {/* SHARE ANALYSIS  */}
      <div className="bg-slate-200 drop-shadow-md dark:bg-navy-700 h-full w-full col-span-3 flex flex-row justify-center items-center gap-3">
        <p className="text-gray-500 dark:text-navy-100 text-base font-normal">
          Share Analysis
        </p>
        <button className="" onClick={() => setToggleButton(!toggleButton)}>
          {toggleButton ? (
            <OnButton className={"bg-info"} setToggleButton={setToggleButton} />
          ) : (
            <OffButton setToggleButton={setToggleButton} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Status;
