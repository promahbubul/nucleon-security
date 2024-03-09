import StatusCard from "@shared/components/Card/StatusCard";

import {
  FaBiohazard,
  IoWarning,
  FaCalendarDay,
  FaDatabase,
} from "@assets/Icons/Icons";
import { useTranslation } from "react-i18next";

const Status = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={t("events.threats")}
        number={118}
        icon={FaBiohazard}
      ></StatusCard>
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={t("events.weekSignals")}
        number={118}
        icon={IoWarning}
      ></StatusCard>
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={t("events.todayEvents")}
        number={118}
        icon={FaCalendarDay}
      ></StatusCard>
      {/* THREATS */}
      <StatusCard
        className={"col-span-6 md:col-span-3"}
        title={t("events.todayEvents")}
        number={118}
        icon={FaDatabase}
      ></StatusCard>
    </div>
  );
};

export default Status;
