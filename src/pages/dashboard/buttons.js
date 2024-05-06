import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-between">
      <button className="bg-theme-btnBg p-2 rounded-md text-theme-btnColor text-sm font-semibold">
        Order now
      </button>
      <button className="bg-gray-200 p-2 rounded-md text-sm font-semibold text-theme-tertiary">
        View Product
      </button>

    </div>
  );
};

export default Buttons;
