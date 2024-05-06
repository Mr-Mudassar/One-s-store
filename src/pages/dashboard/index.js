import React from "react";
import MainCard from "./main-card";
import SmallCard from "./small-card";

const Dashboard = () => {
  return (
    <div className="space-y-4 items-center mx-auto ">
      <div className="flex justify-between m-auto flex-wrap gap-y-4">
        <div>
          <h5 className="font-semibold text-theme-primary text-xl">Main Dashboard</h5>
          <p className="text-sm font-semibold text-theme-tertiary">Global view</p>
        </div>

        <div className="my-auto space-x-4">
          <button className="bg-theme-btnBg p-3  rounded-md text-theme-btnColor text-sm font-semibold">
            More Details
          </button>
          <button className="bg-gray-200 text-theme-tertiary p-3 rounded-md text-sm font-semibold">
            View Details
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
        <MainCard />
        <SmallCard />
        <SmallCard ImgUrl={"https://th.bing.com/th/id/OIP.pOh4X4d_pa5dQ3HT4dlQsAHaET?rs=1&pid=ImgDetMain"} />
      </div>
    </div>
  );
};

export default Dashboard;
