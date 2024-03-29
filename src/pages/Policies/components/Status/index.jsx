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
import { useTranslation } from "react-i18next";

const Status = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      {/* POLICIES */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={t("policies.policies")}
        number={118}
        icon={FaLandmark}
      ></StatusCard>
      {/* CUSTOM APPLICATIONS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={t("policies.customApplications")}
        number={118}
        icon={FaUsersCog}
      ></StatusCard>
      {/* DEFAULT APPLICATIONS */}
      <StatusCard
        className={"col-span-12 md:col-span-3"}
        title={t("policies.defaultApplications")}
        number={118}
        icon={FaCogs}
      ></StatusCard>
      <div className="grid col-span-12  gap-1.5 md:col-span-3 ">
        <Button
          icon={FaCheckDouble}
          className={
            "rounded-md col-span-2 p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600  text-base shadow-md"
          }
        >
          {t("policies.applyEndpoints")}
        </Button>

        <Button
          icon={FaPlus}
          className={
            "rounded-md col-span-1 p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600  text-base shadow-md "
          }
        >
          {t("policies.createNew")}
        </Button>
        <Button
          icon={FaDownload}
          className={
            "rounded-md col-span-1 p-2  bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600  text-base shadow-md "
          }
        >
          {t("policies.export")}
        </Button>
      </div>
    </div>
  );
};

export default Status;
