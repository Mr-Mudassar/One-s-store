import React from "react";
import { Doughnut } from "react-chartjs-2";

//register the elements for the Doughnut Chart. More info here: https://www.chartjs.org/docs/latest/getting-started/integration.html
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import useStore from "../../../hooks/useStore";
ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const appThemeColor = useStore((state) => state.appThemeColor);
  const ChartColor =
    appThemeColor === "bluish"
      ? "blue"
      : appThemeColor === "orangish"
      ? "orange"
      : appThemeColor === "redish"
      ? "red"
      : appThemeColor === "greenish"
      ? "green"
      : appThemeColor === "yellowish"
      ? "yellow"
      : appThemeColor === "violetish"
      ? "violet"
      : "red";

  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [70, 10, 20],
        backgroundColor: [ChartColor, "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    // You can customize chart options here
  };

  return (
    <div className="w-full bg-theme-primaryBg text-theme-secondary">
      <h2 className="text-2xl font-bold mb-4 text-theme-primary">Sale Rate</h2>
      <div className="h-64 ">
        <Doughnut data={data} options={options} className="mx-auto" />
      </div>
    </div>
  );
};

export default PieChart;
