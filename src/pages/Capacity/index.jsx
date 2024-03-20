import ChartSection from "../../shared/components/Chart/ChartSection";
import LineChart from "../../shared/components/Chart/LineChart";

const Capacity = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <ChartSection
        chartTitle={"Top CPU usage "}
        number={0}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
      <ChartSection
        chartTitle={"Top Memory usage "}
        number={0}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
      <ChartSection
        chartTitle={"Average CPU usage "}
        number={0}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
      <ChartSection
        chartTitle={"Average Memory usage "}
        number={0}
        className={"col-span-12 md:col-span-6"}
      >
        <LineChart className={"mt-5"} />
      </ChartSection>
    </div>
  );
};

export default Capacity;
