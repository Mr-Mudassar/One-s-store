import React from "react";
import Buttons from "./buttons";

const SmallCard = ({
  ImgUrl = "https://www.luckymag.com/wp-content/uploads/2023/07/apples-vision-pro.jpg",
}) => {
  return (
    <div className="rounded-lg bg-theme-primaryBg p-6 space-y-4 h-[410px] grid justify-between">
      <img src={ImgUrl} alt="featured" className="rounded-md h-[240px] w-[100%] justify-stretch" />

      <div>
        <h5 className="text-lg font-semibold text-theme-primary">Apple Vision Pro</h5>
        <p className="text-sm font-semibold text-theme-secondary">4999$ only</p>
      </div>

      <Buttons />
    </div>
  );
};

export default SmallCard;
