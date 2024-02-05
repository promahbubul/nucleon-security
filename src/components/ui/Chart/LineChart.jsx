import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

const LineChart = ({ data, className }) => {
  return (
    <div className={`$className bg-dark-gray/60 rounded-md p-1`}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
