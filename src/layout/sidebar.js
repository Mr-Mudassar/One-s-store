import {
  MdOutlineDashboardCustomize,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";
import useStore from "../hooks/useStore";
import React, { useEffect } from "react";
import { LuStore } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

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
      name: "Orders",
      path: "/orders",
      icon: <IoGiftOutline className="text-2xl text-center my-auto" />,
    },
    {
      name: "Mudassar",
      path: "/mudassar",
      icon: <LuUser2 className="text-2xl text-center my-auto" />,
    },
  ];

  return (
    <div
      className={`${
        toggleSidebar ? "w-64" : "w-14"
      } h-full bg-theme-primaryBg absolute sm:fixed top-0 transition-all duration-300 ease-out z-50 shadow-lg`}
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
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="my-auto cursor-pointer rounded-md hover:bg-theme-secondaryBg mt-2"
        >
          {toggleSidebar ? (
            <MdKeyboardDoubleArrowLeft
              size={30}
              className="text-4xl my-auto text-theme-tertiary"
            />
          ) : (
            <MdKeyboardDoubleArrowRight
              size={30}
              className="text-4xl my-auto text-theme-tertiary"
            />
          )}
        </motion.div>
      </div>

      <div className="border border-dashed border-theme-primaryBorder mx-2"></div>

      {RoutesData.map((item) => (
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <Link
            key={item.name}
            to={item.path}
            className={`flex my-3  rounded-md p-2 hover:cursor-pointer text-theme-secondary ${
              toggleSidebar ? "mx-4" : "mx-2"
            }  ${
              location.pathname === item.path
                ? "bg-theme-secondaryBg !text-theme-btnBgText shadow-md"
                : ""
            } hover:bg-theme-secondaryBg hover:text-theme-primary`}
          >
            {item.icon}
            {toggleSidebar && (
              <p className="px-3 font-semibold"> {item.name}</p>
            )}
          </Link>
        </motion.div>
      ))}

      {toggleSidebar && (
        <div className="absolute bottom-3 left-1">
          <span className="text-xs text-theme-secondary font-semibold mx-2">
            Developed by
          </span>
          <div>
            <Link
              to={"https://dev-mudassar-portfolio.pantheonsite.io/"}
              className="text-md font-semibold mx-2 text-theme-btnBgText"
            >
              Muhammad Mudassar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
