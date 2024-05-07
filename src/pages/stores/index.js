import React from "react";
import DataTableComponent from "./components/dataTable";

import { MdOutlineAddHome } from "react-icons/md";


const Stores = () => {
  return (
    <div>
      <div className="flex justify-between m-auto flex-wrap mb-4">
        <div>
          <h5 className="font-semibold text-theme-primary text-xl">Stores</h5>
          <p className="text-sm font-semibold text-theme-tertiary">
            All your stores shows here
          </p>
        </div>

        <div className="my-auto space-x-4">
          <button className="flex bg-theme-btnBg p-3  rounded-md text-theme-btnColor text-sm font-semibold">
          <MdOutlineAddHome className="text-xl text-center my-auto mr-2"/>
            Add Store
          </button>
        </div>
      </div>

      <DataTableComponent />
    </div>
  );
};

export default Stores;
 