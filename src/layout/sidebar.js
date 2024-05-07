import React, { useEffect } from "react";
import useStore from "../hooks/useStore";
import { Link, useLocation } from "react-router-dom";

// Icons import
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import {
  MdOutlineDashboardCustomize,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Sidebar = () => {

  const location = useLocation();

  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const setToggleSidebar = useStore((state) => state.setToggleSidebar);


  useEffect(() => {
    CloseSidebarOnSmallDevices();
  });

  const CloseSidebarOnSmallDevices = () => {
    if (window.innerWidth < 620) {
      setToggleSidebar(false);
    }
  };

  //  Links on sidebar
  const RoutesData = [
    {
      name: "Dashboard",
      path: "/",
      icon: (
        <MdOutlineDashboardCustomize className="text-2xl text-center my-auto" />
      ),
    },
    {
      name: "Stores",
      path: "/stores",
      icon: <LuStore className="text-2xl text-center my-auto" />,
    },
    {
      name: "Gifts",
      path: "/gifts",
      icon: <IoGiftOutline className="text-2xl text-center my-auto" />,
    },
  ];

  return (
    <div
      className={`${
        toggleSidebar ? "w-64" : "w-14"
      } h-full bg-theme-primaryBg absolute sm:fixed top-0 transition-all duration-300 ease-out`}
    >
      {/* First line of sidebar including toggle button*/}
      <div className="py-2 my-2 flex justify-around items-center">
        {toggleSidebar && (
          <>
            <LuStore className="bg-theme-btnBg text-4xl my-auto text-white p-2 rounded" />

            <h1 className="text-theme-primary font-bold text-2xl">
              One's Store
            </h1>
          </>
        )}

        {/* Toggle sidebar button  */}
        <div
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="my-auto"
        >
          {toggleSidebar ? (
            <MdKeyboardDoubleArrowLeft className="text-4xl my-auto pt-2 text-theme-tertiary" />
          ) : (
            <MdKeyboardDoubleArrowRight className="text-4xl my-auto pt-2 text-theme-tertiary" />
          )}
        </div>
      </div>

      <div className="border border-dashed border-theme-primaryBorder mx-2"></div>

      {RoutesData.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex my-3 mx-2 rounded-md p-2 hover:cursor-pointer text-theme-secondary ${location.pathname === item.path ? "bg-theme-secondaryBg !text-theme-btnBgText" : ""} hover:bg-theme-secondaryBg hover:text-theme-primary `}
        >
          {item.icon}
          {toggleSidebar && <p className="px-3 font-semibold"> {item.name}</p>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
