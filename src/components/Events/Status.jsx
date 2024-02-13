import React from "react";
import StatusCard from "../../components/ui/StatusCard/StatusCard";
import {
  FaBiohazard,
  IoWarning,
  FaCalendarDay,
  FaDatabase,
} from "../../assets/Icons/Icons";

const Status = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"Threats"}
        number={118}
        icon={FaBiohazard}
      ></StatusCard>
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"Week signals"}
        number={118}
        icon={IoWarning}
      ></StatusCard>
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"TOday events count"}
        number={118}
        icon={FaCalendarDay}
      ></StatusCard>
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"Total events count"}
        number={118}
        icon={FaDatabase}
      ></StatusCard>
    </div>
  );
};

export default Status;
