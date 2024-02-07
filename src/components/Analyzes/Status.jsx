import React, { useState } from "react";
import StatusCard from "../ui/StatusCard/StatusCard";
import { FaBiohazard, FaFlask, FaFile } from "../../assets/Icons/Icons";
import OnButton from "../ui/Buttons/OnButton";
import OffButton from "../ui/Buttons/OffButton";

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
      <div className="col-span-3 border-2 border-dashed hover:border-info border-secondary rounded-sm h-full w-full bg-dark-gray flex flex-row items-center justify-center gap-2 relative">
        <input
          type="file"
          name="file"
          id=""
          className="absolute inset-y-0 inset-x-0 bg-orange-500 cursor-pointer opacity-0"
        />
        <FaFile className="text-4xl text-info" />
        <p className="text-silver-gray text-base font-normal">
          Upload file to analyze
        </p>
      </div>
      {/* SHARE ANALYSIS  */}
      <div className="bg-dark-gray h-full w-full col-span-3 flex flex-row justify-center items-center gap-3">
        <p className="text-silver-gray text-base font-normal">Share Analysis</p>
        <button className="" onClick={() => setToggleButton(!toggleButton)}>
          {" "}
          {toggleButton ? (
            <OnButton setToggleButton={setToggleButton} />
          ) : (
            <OffButton setToggleButton={setToggleButton} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Status;
