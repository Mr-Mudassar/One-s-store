import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useStore from "../../../hooks/useStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
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

  return (
    <div className="w-full bg-theme-primaryBg text-theme-secondary">
      <h2 className="text-2xl font-bold mb-4 text-theme-primary">
      Sale Rate
      </h2>
      <div style={{ maxWidth: "450px" }}>
        <Bar
          data={{
            labels: [
              "1st bar",
              "2nd bar",
              "3rd bar",
              "4th bar",
              "5th bar",
              "6th bar",
              "7th bar",
              "8th bar",
              "9th bar",
            ],
            datasets: [
              {
                label: "total count/value",
                data: [1552, 1319, 613, 1400, 3366, 5423, 2034, 6432, 432],
                backgroundColor: ChartColor,
                borderColor: ChartColor,
                borderWidth: 0.5,
              },
            ],
          }}
          height={256}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
