import Chart from "react-apexcharts";

const PieChart = ({ height, width }) => {
  // Data for the pie chart
  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "donut",
      },
      labels: [
        "Adobe Phooto",
        "VLC Media",
        "Zoom",
        "Google Chorme",
        "Microsoft Edge",
      ],
    },
  };

  return (
    <div className="overflow-auto">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width={width}
        height={height}
      />
    </div>
  );
};

export default PieChart;
