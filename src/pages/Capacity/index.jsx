import ChartSection from "../../shared/components/Chart/ChartSection";
import LineChart from "../../shared/components/Chart/LineChart";
import { useTranslation } from "react-i18next";

const Capacity = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 gap-2">
      <ChartSection
        filter={true}
        dropDown={true}
        chartTitle={`${t("capacity.section-title1")} (0%)`}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
      <ChartSection
        filter={true}
        dropDown={true}
        chartTitle={`${t("capacity.section-title2")} (0%)`}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
      <ChartSection
        filter={true}
        dropDown={true}
        chartTitle={`${t("capacity.section-title3")} (0%)`}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
      <ChartSection
        filter={true}
        dropDown={true}
        chartTitle={`${t("capacity.section-title4")} (0%)`}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
    </div>
  );
};

export default Capacity;
