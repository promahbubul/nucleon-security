import Button from "../Buttons/Button/Button";
import {
  FaPlus,
  IoSearch,
  FaFilter,
  FaList,
  IoIosArrowDown,
} from "../../../assets/Icons/Icons";
import { useTranslation } from "react-i18next";

const SectionFiltter = ({ title, searchTotal, handleModal }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row  justify-between">
      <div className="">
        <Button
          onClick={() => handleModal(true)}
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 "
          }
          icon={FaPlus}
        >
          {title}
        </Button>
      </div>
      <div className=" flex flex-row gap-1">
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
          {searchTotal}
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaFilter />
        </Button>
        <Button
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600"
          }
        >
          <FaList />
          <IoIosArrowDown />
        </Button>
      </div>
    </div>
  );
};

export default SectionFiltter;
