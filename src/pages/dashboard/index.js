import React from "react";
import MainCard from "./components/main-card";
import SmallCard from "./components/small-card";
import ChartComponent from "./components/chart";
import BarChart from "./components/bar-chart";
import PieChart from "./components/pie-chart";

const Dashboard = () => {
  return (
    <div className="space-y-4 items-center mx-auto ">
      <div className="flex justify-between m-auto flex-wrap gap-y-4">
        <div>
          <h5 className="font-bold text-theme-btnBgText text-xl">DASHBOARD</h5>
          <p className="text-sm font-semibold text-theme-tertiary">
            Global view
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-theme-btnBg hover:bg-theme-btnColorHover p-3  rounded-md text-theme-btnColor text-sm font-semibold shadow-lg">
            More Details
          </button>
          <button className="bg-gray-200 text-theme-tertiary p-3 rounded-md text-sm font-semibold shadow-md hover:bg-slate-300">
            View Details
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MainCard />
        <SmallCard />
        <SmallCard
          ImgUrl={
            "https://th.bing.com/th/id/OIP.pOh4X4d_pa5dQ3HT4dlQsAHaET?rs=1&pid=ImgDetMain"
          }
        />
        <ChartComponent />
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
