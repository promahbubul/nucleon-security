import Button from "../../../../../../shared/components/Buttons/Button/Button";
import {
  FaPlus,
  IoSearch,
  FaFilter,
  FaList,
} from "../../../../../../assets/Icons/Icons";
import FilterAction from "./FilterAction";
import { useState } from "react";

const Filter = () => {
  const [showActionModal, setShowActionModal] = useState(false);
  return (
    <div className="flex flex-row flex-wrap justify-between w-max md:w-full">
      <Button
        onClick={() => setShowActionModal(true)}
        className={
          "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
        }
        icon={FaPlus}
      >
        New Action
      </Button>
      <div className="flex flex-row  gap-2">
        <Button className={"bg-info text-white p-2"} icon={IoSearch}>
          Search
        </Button>
        <Button
          className={
            "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
          }
        >
          4 / 4 results
        </Button>
        <Button
          className={
            "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
          }
          icon={FaFilter}
        >
          Add filter
        </Button>
        <Button
          className={
            "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
          }
          icon={FaList}
        >
          Colums
        </Button>
      </div>
      <FilterAction
        showModal={showActionModal}
        handleModal={setShowActionModal}
      />
    </div>
  );
};

export default Filter;
