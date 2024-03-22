import { useTranslation } from "react-i18next";
import { FaList, FaMicroscope } from "@assets/Icons/Icons";
import SectionContainer from "@shared/components/SectionContainer";

import Table from "./components/Table";
import Status from "./components/Status";
import FilterSection from "../../shared/components/FilterSection";
import Button from "../../shared/components/Buttons/Button/Button";
import { useState } from "react";
import YaraModal from "./components/YaraModal";

const Analyzes = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  console.log(showModal);
  return (
    <div>
      <div className="">
        {/* STATUS */}
        <Status />
        {/* TABLE */}
        <SectionContainer
          title={t("analyze.section-title")}
          icon={FaList}
          className={"mt-3 "}
          childrenClass={"overflow-auto"}
        >
          {/* FILTER */}
          <div className="flex flex-row justify-between w-full flex-wrap gap-2">
            <Button
              onClick={() => setShowModal(true)}
              className={
                "bg-slate-200 dark:bg-navy-500 text-gray-500 dark:text-navy-100 p-2 text-sm hover:bg-slate-300 hover:text-gray-600 "
              }
              icon={FaMicroscope}
            >
              Yara Result
            </Button>
            <FilterSection />
          </div>

          <Table />
        </SectionContainer>
        {/* FILTER MODAL */}
        <YaraModal showModal={showModal} handleModal={setShowModal} />
      </div>
    </div>
  );
};

export default Analyzes;
