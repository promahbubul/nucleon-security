import { useTranslation } from "react-i18next";
import {
  FaDesktop,
  FaLockOpen,
  FaBiohazard,
  FaLightbulb,
} from "../../assets/Icons/Icons";
import StatusCard from "../../shared/components/Card/StatusCard";
import TrainingTable from "./components/Table/TrainingTable";

const Training = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* SATUS */}
      <div className="grid grid-cols-12 gap-2 md:gap-3">
        <StatusCard
          icon={FaDesktop}
          title={t("training.endpoint")}
          number={1}
          className={"col-span-6 md:col-span-3"}
        />
        <StatusCard
          icon={FaBiohazard}
          title={t("training.threats")}
          number={2}
          className={"col-span-6 md:col-span-3"}
        />
        <StatusCard
          icon={FaLockOpen}
          title={t("training.vulnerabilities")}
          number={3}
          className={"col-span-6 md:col-span-3"}
        />
        <div className=" bg-slate-200  dark:bg-navy-700 col-span-6 md:col-span-3 cursor-pointer rounded-md flex flex-row p-2 items-center justify-between gap-1">
          <div className="w-9/12">
            <div className="dark:bg-[#384766] bg-slate-300 h-2 md:h-3 rounded-full">
              <div className="w-7/12 bg-[#11B883] h-full rounded-full"></div>
            </div>
            <h5 className="text-sm font-nucleon-secondary md:text-sm text-gray-500 dark:text-navy-100 font-normal text-center mt-2">
              {t("training.security")} 95%
            </h5>
          </div>
          <div className="relative flex justify-center w-3/12">
            <FaLightbulb className="text-gray-500 dark:text-navy-100 text-2xl md:text-3xl" />
            <span className="bg-info absolute top-4 left-5 md:left-10 text-[8px] md:text-xs px-1 py-0.5 md:px-2 md:py-1 rounded-full">
              6
            </span>
          </div>
        </div>
      </div>
      {/* CHART */}
      {/* TABLE */}
      <TrainingTable />
    </div>
  );
};

export default Training;
