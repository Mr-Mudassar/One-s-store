import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useStore from "../../../hooks/useStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
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

  const data = [756.26, 3207.03, 274.94, 5432.65, 4234.65]; // Example data points
  const data2 = [7563.26, 207.03, 2744.94, 8432.65, 234.65]; // Example data points
  const labels = ["2:30 PM", "3:10 PM", "3:55 PM", "4:43 PM", "6:40 PM"]; // Example labels

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Ethereum Rate",
        data: data,
        borderColor: ChartColor,
        borderWidth: 2,
        backgroundColor: ChartColor,
        fill: true,
        // tension: 0.2, // Adjust tension for curve smoothing
      },
      {
        label: "Ethereum Rate",
        data: data2,
        borderWidth: 2,
        borderColor: ChartColor,
        backgroundColor: ChartColor,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full mx-auto col-span-1 sm:col-span-2">
      <div className="bg-theme-primaryBg text-theme-secondary p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-theme-primary">
          Ethereum rate
        </h2>
        <div className="h-64">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
