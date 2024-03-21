import {
  IoSearch,
  FaFilter,
  FaList,
  IoIosArrowDown,
  FaDownload,
  FaExchangeAlt,
} from "@assets/Icons/Icons";
import { useTranslation } from "react-i18next";
import Button from "@shared/components/Buttons/Button/Button";
import { Link } from "react-router-dom";

const FilterSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row flex-wrap gap-1 justify-end">
      <div className=" flex flex-row flex-wrap gap-1">
        <Button
          className={
            "bg-info  text-slate-100 dark:text-white p-2 text-sm hover:text-white duration-500 hover:shadow-md"
          }
          icon={IoSearch}
        >
          {t("inventories.search")}
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100  text-sm hover:bg-slate-300 hover:text-gray-600 px-2"
          }
        >
          2 / 2 {t("inventories.results")}
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaFilter />
          <span className="">{t("inventories.filter")}</span>
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaList />
          <span className="">{t("inventories.columns")}</span>
          <IoIosArrowDown />
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 px-3 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaDownload />
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
