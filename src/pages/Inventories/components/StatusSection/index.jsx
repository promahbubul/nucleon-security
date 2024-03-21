import StatusCard from "../../../../shared/components/Card/StatusCard";
import { FaBiohazard, FaFile } from "../../../../assets/Icons/Icons";
import { useTranslation } from "react-i18next";

const StatusSection = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 gap-3">
      <StatusCard
        title={`${t("inventories.maliciousFiles")} (0%)`}
        icon={FaBiohazard}
        number={3000}
        className={"col-span-6 md:col-span-3"}
      />
      <StatusCard
        title={`${t("inventories.fileCount")} (0%)`}
        icon={FaFile}
        number={12340}
        className={"col-span-6 md:col-span-3"}
      />
    </div>
  );
};

export default StatusSection;
