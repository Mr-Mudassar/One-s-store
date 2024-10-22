import React from "react";
import UserImage from "../../../assests/navbar/user-img.png";
import Buttons from "./buttons";

const MainCard = () => {
  // grid grid-cols-1 sm:grid-cols-2 col-span-1 sm:col-span-2
  return (
    <div className="bg-theme-primaryBg grid grid-cols-1 md:grid-cols-2 gap-x-4 h-full">
      {/* Image Section */}
      <img
        src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BEmAV2B1f79v28s9orL549CPexAccB0TZLCbmqev2ZadRiEQoF.jpg"
        alt="product"
        className="rounded-md object-cover w-full h-full"
      />

      {/* Content Section */}
      <div className="grid grid-rows-[auto,1fr,auto] h-full">
        {/* Product Info */}
        <div>
          <p className="text-theme-tertiary text-sm font-semibold">
            Product ID: 00005450
          </p>
          <p className="text-3xl font-semibold text-theme-primary">
            The most sold product
          </p>
        </div>

        {/* Creator Info */}
        <div className="flex gap-4">
          <div className="flex gap-2">
            {/* User Profile */}
            <span className="text-center my-auto">
              <img
                src={UserImage}
                alt="user"
                width={40}
                className="rounded-full"
              />
            </span>
            <span className="text-sm text-theme-secondary">
              <p>Creator</p>
              <b className="text-theme-primary">Mudassar</b>
            </span>
          </div>

          {/* User Earning */}
          <div className="flex gap-2">
            <span className="text-center my-auto">
              <img
                src={UserImage}
                alt="user"
                width={40}
                className="rounded-full"
              />
            </span>
            <span className="text-sm text-theme-secondary">
              <p>Earnings</p>
              <b className="text-theme-primary">34.42$</b>
            </span>
          </div>
        </div>

        {/* Sale Info */}
        <div className="border border-dashed border-theme-primaryBorder rounded-md text-center space-y-3 py-2 mb-4">
          <p className="text-theme-tertiary text-sm">Total Sale</p>
          <p className="text-theme-primary text-3xl font-semibold mb-2 ">
            34.42$
          </p>
          <p className="text-theme-tertiary text-sm">Stock availability</p>
          <p className="text-theme-secondary text-md font-semibold">
            600 items
          </p>
        </div>

        {/* Buttons */}
        <Buttons />
      </div>
    </div>
  );
};

export default MainCard;
