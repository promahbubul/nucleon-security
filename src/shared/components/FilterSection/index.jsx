import { useTranslation } from "react-i18next";
import Button from "../Buttons/Button/Button";
import {
  FaDownload,
  FaFilter,
  IoIosArrowDown,
  MdViewList,
  IoSearch,
} from "@assets/Icons/Icons";
import Dropdown from "../Dropdown";

const FilterSection = ({ handleList, showDropdown }) => {
  const { t } = useTranslation("translation", "about");
  return (
    <div className="flex  flex-row flex-wrap justify-end gap-2 text-sm">
      <Button
        icon={IoSearch}
        className={"bg-info py-2 text-white dark:text-slate-100 px-4"}
      >
        {t("dashboard.search")}
      </Button>
      <Button
        className={
          "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 "
        }
      >
        {t("dashboard.results")}
      </Button>
      <Button
        icon={FaFilter}
        className={
          "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 "
        }
      >
        {t("dashboard.addFilter")}
      </Button>
      <div onClick={() => handleList(!showDropdown)} className="relative">
        <button
          onClick={() => handleList(!showDropdown)}
          className="bg-slate-200 text-gray-500 dark:bg-navy-500 dark:text-navy-100 hover:bg-slate-300 hover:text-gray-600 text-sm p-2 rounded-md flex flex-row gap-2 items-center"
        >
          <MdViewList className="text-lg" />
          <span className="">{t("dashboard.listView")}</span>
          <IoIosArrowDown className="text-lg" />
        </button>
        {showDropdown ? <Dropdown handleDropDown={handleList} /> : ""}
      </div>
      <Button
        icon={FaDownload}
        className={
          "bg-slate-200  dark:bg-navy-500  text-gray-500 dark:text-navy-100  hover:bg-slate-300 hover:text-gray-600 dark:bg p-2 text-sm "
        }
      ></Button>
    </div>
  );
};

export default FilterSection;
