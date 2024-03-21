import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/components/SectionContainer";
import FilterSection from "./components/FilterSection";

import StatusSection from "./components/StatusSection";
import Table from "./components/Table";

const Inventories = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* STATUS SECTION */}
      <StatusSection />
      <SectionContainer
        className={"mt-3"}
        title={t("inventories.section-title")}
      >
        {/* FILTER SECTION */}
        <FilterSection />
        {/* TABLE SECTION */}
        <Table />
      </SectionContainer>
    </div>
  );
};

export default Inventories;
