import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-between">
      <buttton className="bg-theme-btnBg p-2 rounded-md text-theme-btnColor text-sm font-semibold">
        Order now
      </buttton>
      <buttton className="bg-gray-200 p-2 rounded-md text-sm font-semibold text-theme-tertiary">
        View Product
      </buttton>
    </div>
  );
};

export default Buttons;
