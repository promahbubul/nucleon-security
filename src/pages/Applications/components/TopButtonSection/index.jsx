import Button from "@shared/components/Buttons/Button/Button";
import { FaDownload, FaCheckDouble } from "@assets/Icons/Icons";

const TopButtonSection = () => {
  return (
    <div className="flex flex-row gap-2  justify-end">
      <Button
        className={
          "bg-white dark:text-slate-300 text-gray-500 dark:bg-navy-600 p-2"
        }
        icon={FaDownload}
      >
        Export Policies
      </Button>
      <Button
        className={"bg-info dark:text-slate-100 text-white dark:bg-info p-2"}
        icon={FaCheckDouble}
      >
        Apply & push to endpoints
      </Button>
    </div>
  );
};

export default TopButtonSection;
