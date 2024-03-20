import Button from "../../Buttons/Button/Button";
import { FaFilter, FaSync } from "../../../../assets/Icons/Icons";

const ChartSection = ({ children, className, chartTitle, number }) => {
  return (
    <div className={`bg-white dark:bg-navy-700 rounded-md p-3 ${className}`}>
      {/* TOP */}
      <div className="flex flex-row justify-between flex-wrap gap-2">
        <select className="bg-slate-200 hover:bg-slate-300 hover:text-gray-600  dark:bg-navy-800   text-gray-500 dark:text-navy-100 p-1 rounded-md cursor-pointer  outline-none">
          <option value="">Last hour</option>
          <option value="">Last 6 hour</option>
        </select>
        <h3 className="text-info text-sm font-bold md:text-base">
          {chartTitle} ({number && number}%)
        </h3>
        <div className="flex flex-row gap-1">
          <Button
            className={
              "bg-slate-200 dark:bg-navy-500   text-gray-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600 p-2"
            }
          >
            <FaFilter className="" />
          </Button>
          <Button
            className={
              "bg-slate-200 dark:bg-navy-500 p-2  text-gray-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600 p-2"
            }
          >
            <FaSync />
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ChartSection;
