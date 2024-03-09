import { useTranslation } from "react-i18next";
import { FaList } from "@assets/Icons/Icons";
import SectionContainer from "@shared/components/SectionContainer";

import Table from "./components/Table";
import Status from "./components/Status";

const Analyzes = () => {
  const { t } = useTranslation();
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
          <Table />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Analyzes;
