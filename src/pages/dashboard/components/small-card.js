import React from "react";
import Buttons from "./buttons";

const SmallCard = ({
  ImgUrl = "https://www.luckymag.com/wp-content/uploads/2023/07/apples-vision-pro.jpg",
}) => {
  return (
    <div className="bg-theme-primaryBg grid grid-rows-[auto,1fr,auto] h-full">
      <img
        src={ImgUrl}
        alt="featured"
        className="rounded-md object-cover w-full h-full"
      />

      {/* <div className="flex flex-col justify-center align-center"> */}
      <h5 className="text-lg font-semibold text-theme-primary">
        Apple Vision Pro
      </h5>
      {/* </div> */}
      <p className="text-sm font-semibold text-theme-secondary">4999$ only</p>

      <Buttons />
    </div>
  );
};

export default SmallCard;
