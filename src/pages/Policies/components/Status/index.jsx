import {
  FaLandmark,
  FaUsersCog,
  FaCogs,
  FaCheckDouble,
  FaPlus,
  FaDownload,
} from "@assets/Icons/Icons";
import Button from "@shared/components/Buttons/Button/Button";
import StatusCard from "@shared/components/Card/StatusCard";

const Status = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      {/* POLICIES */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"Policies"}
        number={118}
        icon={FaLandmark}
      ></StatusCard>
      {/* CUSTOM APPLICATIONS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"Custom Applications"}
        number={118}
        icon={FaUsersCog}
      ></StatusCard>
      {/* DEFAULT APPLICATIONS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={"Default Applications"}
        number={118}
        icon={FaCogs}
      ></StatusCard>
      <div className="grid grid-cols-2 gap-1.5 md:col-span-3 ">
        <Button
          icon={FaCheckDouble}
          className={
            "rounded-md col-span-2 p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600  text-base shadow-md"
          }
        >
          Apply & push to endpoints
        </Button>

        <Button
          icon={FaPlus}
          className={
            "rounded-md col-span-1 p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600  text-base shadow-md "
          }
        >
          Create New
        </Button>
        <Button
          icon={FaDownload}
          className={
            "rounded-md col-span-1 p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600  text-base shadow-md "
          }
        >
          Export
        </Button>
      </div>
    </div>
  );
};

export default Status;
