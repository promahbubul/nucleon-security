import {
  IoSearch,
  FaFilter,
  FaList,
  IoIosArrowDown,
  FaDownload,
  FaPlus,
} from "@assets/Icons/Icons";
import { useTranslation } from "react-i18next";
import Button from "@shared/components/Buttons/Button/Button";

const FilterSection = ({ handleModal }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row flex-wrap gap-1  justify-between">
      <div className="">
        <Button
          onClick={() => handleModal(true)}
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 p-2 dark:text-navy-100  text-sm hover:bg-slate-300 hover:text-gray-600 px-2"
          }
          icon={FaPlus}
        >
          New Group
        </Button>
      </div>
      <div className=" flex flex-row flex-wrap gap-1">
        <Button
          className={
            "bg-info  text-slate-100 dark:text-white p-2 text-sm hover:text-white duration-500 hover:shadow-md"
          }
          icon={IoSearch}
        >
          {t("applications.search")}
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100  text-sm hover:bg-slate-300 hover:text-gray-600 px-2"
          }
        >
          2 / 2 results
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaFilter />
          <span className="">Add filter</span>
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaList />
          <span className="">Columns</span>
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
