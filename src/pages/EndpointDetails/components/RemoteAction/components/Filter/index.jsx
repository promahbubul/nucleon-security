import Button from "../../../../../../shared/components/Buttons/Button/Button";
import {
  FaPlus,
  IoSearch,
  FaFilter,
  FaList,
} from "../../../../../../assets/Icons/Icons";
import FilterAction from "./FilterAction";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const [showActionModal, setShowActionModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex flex-row flex-wrap justify-between w-max md:w-full">
      <Button
        onClick={() => setShowActionModal(true)}
        className={
          "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
        }
        icon={FaPlus}
      >
        {t("singleEndpoint.newAction")}
      </Button>
      <div className="flex flex-row  gap-2">
        <Button className={"bg-info text-white p-2"} icon={IoSearch}>
          {t("singleEndpoint.search")}
        </Button>
        <Button
          className={
            "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
          }
        >
          {t("singleEndpoint.results")}
        </Button>
        <Button
          className={
            "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
          }
          icon={FaFilter}
        >
          {t("singleEndpoint.addFilter")}
        </Button>
        <Button
          className={
            "bg-slate-200 p-2 hover:bg-slate-300  dark:bg-navy-500 dark:hover:bg-navy-600 dark:text-navy-100"
          }
          icon={FaList}
        >
          {t("singleEndpoint.colums")}
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
