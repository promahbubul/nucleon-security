import React from "react";
import {
  FaDesktop,
  FaLockOpen,
  FaBiohazard,
  FaLightbulb,
} from "../../assets/Icons/Icons";
import StatusCard from "../../components/ui/StatusCard/StatusCard";
import TrainingTable from "../../components/Training/TrainingTable/TrainingTable";

const Training = () => {
  return (
    <div>
      {/* Status */}
      <div className="grid grid-cols-12 gap-2 md:gap-3">
        <StatusCard
          icon={FaDesktop}
          title={"Online endpoints"}
          number={1}
          className={"col-span-6 md:col-span-3"}
        />
        <StatusCard
          icon={FaBiohazard}
          title={"Online endpoints"}
          number={1}
          className={"col-span-6 md:col-span-3"}
        />
        <StatusCard
          icon={FaLockOpen}
          title={"Online endpoints"}
          number={1}
          className={"col-span-6 md:col-span-3"}
        />
        <div className="bg-dark-gray col-span-6 md:col-span-3 cursor-pointer rounded-md flex flex-row p-2 items-center justify-between  gap-1">
          <div className="w-9/12  ">
            <div className="bg-secondary  h-2 md:h-4 rounded-sm">
              <div className="w-11/12 bg-success h-full rounded-l-sm"></div>
            </div>
            <h5 className="text-sm md:text-sm text-silver-gray  font-normal text-center mt-2">
              Security level 95%
            </h5>
          </div>
          <div className="relative  flex justify-center w-3/12">
            <FaLightbulb className="text-secondary text-2xl md:text-3xl" />
            <span className="bg-info absolute top-4 left-5 md:left-10 text-[8px] md:text-xs px-1 py-0.5 md:px-2 md:py-1 rounded-full">
              6
            </span>
          </div>
        </div>
      </div>
      {/* Chart */}
      {/* Table */}
      <TrainingTable />
    </div>
  );
};

export default Training;
