import ReactApexChart from "react-apexcharts";

const LineChartBasic = ({ className }) => {
  const state = {
    options: {
      chart: {
        id: "area-chart",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
    ],
  };
  return (
    <div className={`${className}`}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={200}
      />
    </div>
  );
};

export default LineChartBasic;
