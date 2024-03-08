import StatusCard from "../../../../shared/components/Card/StatusCard";
import {
  FaKey,
  FaPowerOff,
  FaHeartbeat,
  FaDesktop,
} from "../../../../assets/Icons/Icons";
import { useTranslation } from "react-i18next";

const Status = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaKey}
        number={110}
        title={t("endpoints.licenses")}
      />
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaDesktop}
        number={49}
        title={t("endpoints.installedEndpoints")}
      />
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaPowerOff}
        number={32}
        title={t("endpoints.enabledEndpoints")}
      />
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaHeartbeat}
        number={3}
        title={t("endpoints.onlineEndpoints")}
      />
    </div>
  );
};

export default Status;
