import { FaBuilding } from "@assets/Icons/Icons";
import SectionContainer from "@shared/components/SectionContainer";
import { useTranslation } from "react-i18next";
import FilterSection from "../../shared/components/FilterSection";
import TableSection from "./components/Table";
import { useState } from "react";
import ChartSection from "../../shared/components/Chart/ChartSection";
import LineChartBasic from "../../shared/components/Chart/LineChart";

const Overview = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation("translation", "about");

  return (
    <div>
      <div className="grid grid-cols-12 mb-3 gap-3">
        <ChartSection
          dropDown={true}
          chartTitle={t("dashboard.securityLevel")}
          className={"col-span-12 md:col-span-6"}
        >
          <LineChartBasic className={"mt-2"} />
        </ChartSection>
        <ChartSection
          dropDown={true}
          chartTitle={t("dashboard.vulnerabilities")}
          className={"col-span-12 md:col-span-6"}
        >
          <LineChartBasic className={"mt-2"} />
        </ChartSection>
      </div>
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
