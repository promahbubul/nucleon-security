import { FaBuilding } from "@assets/Icons/Icons";
import SectionContainer from "@shared/components/SectionContainer";
import { useTranslation } from "react-i18next";
import FilterSection from "../../shared/components/FilterSection";
import TableSection from "./components/Table";
import { useState } from "react";

const Overview = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation("translation", "about");

  return (
    <div>
      <div className="flex flex-row"></div>
      <SectionContainer
        icon={FaBuilding}
        className={"w-full"}
        title={t("dashboard.section-title")}
      >
        {/* FILTER  */}
        <FilterSection
          showDropdown={showDropdown}
          handleList={setShowDropdown}
        />
        {/* TABLE */}
        <TableSection />
      </SectionContainer>
    </div>
  );
};

export default Overview;
