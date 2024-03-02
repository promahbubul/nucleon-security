import Button from "../Buttons/Button/Button";
import {
  FaPlus,
  IoSearch,
  FaFilter,
  FaList,
  IoIosArrowDown,
} from "../../../assets/Icons/Icons";

const SectionFiltter = ({ title, searchTotal, handleModal }) => {
  return (
    <div className="flex flex-row  justify-between">
      <div className="">
        <Button
          onClick={() => handleModal(true)}
          className={
            "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 duration-300"
          }
          icon={FaPlus}
        >
          New {title}
        </Button>
      </div>
      <div className=" flex flex-row gap-1">
        <Button
          className={
            "bg-info  text-slate-100 dark:text-navy-100 p-2 text-sm hover:text-white duration-500 hover:shadow-md"
          }
          icon={IoSearch}
        >
          Search
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
