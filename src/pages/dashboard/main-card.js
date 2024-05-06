import React from "react";
import UserImage from "../../assests/navbar/user-img.png";
import Buttons from "./buttons";

const MainCard = () => {
  return (
    <div className="bg-theme-primaryBg grid grid-cols-1 sm:grid-cols-2 justify-around p-6 gap-6 rounded-lg col-span-1 sm:col-span-2 ">
        <img
          src="https://th.bing.com/th/id/OIP.lJYQUzKQE7h4AfM-Du5UdAAAAA?w=400&h=461&rs=1&pid=ImgDetMain"
          alt="product"
          className="rounded-md object-cover w-full h-[200px] sm:h-[360px]" 
        />

      <div className="grid content-between">
        {/* Main heading and Product ID */}
        <p className="text-theme-tertiary text-sm font-semibold">
          Prduct ID: 00005450{" "}
        </p>
        <p className="text-3xl font-semibold text-theme-primary">
          The most soled product
        </p>

        <div className="flex gap-4 ">
          <div className="flex gap-2">
            {/* user profile  */}
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

          {/* user earning */}
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
              <p>Creator</p>
              <b className="text-theme-primary">Mudassar</b>
            </span>
          </div>
        </div>

        <div className="border border-dashed border-theme-primaryBorder rounded-md text-center space-y-3 py-2 mb-4">
          <p className="text-theme-tertiary text-sm">Total Sale</p>
          <p className="text-theme-primary text-3xl font-semibold mb-2 ">34.42$</p>
          <p className="text-theme-tertiary text-sm">Stock availability</p>
          <p className="text-theme-secondary text-md font-semibold">600 items</p>
        </div>

        <Buttons />

      </div>
    </div>
  );
};

export default MainCard;
