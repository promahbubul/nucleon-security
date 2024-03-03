import StatusCard from "../../../../shared/components/Card/StatusCard";
import {
  FaKey,
  FaPowerOff,
  FaHeartbeat,
  FaDesktop,
} from "../../../../assets/Icons/Icons";

const Status = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3">
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaKey}
        number={110}
        title={"Licenses"}
      />
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaDesktop}
        number={49}
        title={"Licenses"}
      />
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaPowerOff}
        number={32}
        title={"Licenses"}
      />
      <StatusCard
        className={"md:col-span-3 col-span-6"}
        icon={FaHeartbeat}
        number={3}
        title={"Licenses"}
      />
    </div>
  );
};

export default Status;
