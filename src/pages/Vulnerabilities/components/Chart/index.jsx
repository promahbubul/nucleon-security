import { useTranslation } from "react-i18next";
import ChartSection from "../../../../shared/components/Chart/ChartSection";
import LineChartBasic from "../../../../shared/components/Chart/LineChart";
import PieChart from "../../../../shared/components/Chart/PieChart";

const Chart = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 mb-3 gap-3">
      <ChartSection
        filter={false}
        chartTitle={t("vulnerabilities.topVulnerablePrograms")}
        className={"col-span-12 md:col-span-6 lg:col-span-4"}
      >
        <PieChart width={"420"} height={"230"} />
      </ChartSection>
      <ChartSection
        filter={false}
        chartTitle={t("vulnerabilities.topVulnerableEndpoints")}
        className={"col-span-12 md:col-span-6 lg:col-span-4"}
      >
        <PieChart width={"420"} height={"230"} />
      </ChartSection>
      <ChartSection
        filter={false}
        chartTitle={t("vulnerabilities.totalVulnerabilities")}
        className={"col-span-12 md:col-span-6 lg:col-span-4"}
      >
        <LineChartBasic />
      </ChartSection>
    </div>
  );
};

export default Chart;
