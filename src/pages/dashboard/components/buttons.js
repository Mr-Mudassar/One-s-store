import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-between gap-2">
      <button className="bg-theme-btnBg p-2 rounded-md text-theme-btnColor text-sm font-semibold hover:bg-theme-btnColorHover shadow-lg">
        Order now
      </button>
      <button className="bg-gray-200 p-2 rounded-md text-sm font-semibold text-theme-tertiary shadow-lg hover:bg-slate-300">
        View Product
      </button>

    </div>
  );
};

export default Buttons;
