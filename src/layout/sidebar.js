import React from "react";
import useStore from "../hooks/useStore";
import { Link } from "react-router-dom";



// Icons import
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import { IoGiftOutline } from "react-icons/io5";
import {
  MdOutlineDashboardCustomize,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";


const Sidebar = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const setToggleSidebar = useStore((state) => state.setToggleSidebar);

  return (

    <div
      className={`${toggleSidebar ? "w-64" : "w-14"} h-screen bg-theme-primaryBg fixed top-0`}
    >
      {/* First line of sidebar including toggle button*/}
      <div className="py-2 my-2 flex justify-around items-center">

        {toggleSidebar && (
          <>
            <LuStore className="bg-theme-btnBg text-4xl my-auto text-white p-2 rounded" />

            <h1 className="text-theme-primary font-bold text-2xl">One's Store</h1>
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

      <Link to={"/"} className="flex text-theme-secondary my-3 mx-2 rounded-md p-2 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer " >
        <MdOutlineDashboardCustomize className="text-2xl text-center my-auto" />
        {toggleSidebar && <p className="px-3 font-semibold"> Dashboard</p>}
      </Link>

      <Link to={"/stores"} className="flex text-theme-secondary my-3 mx-2 rounded-md p-2 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer">
        <LuStore  className="text-2xl text-center my-auto" />
        {toggleSidebar && <p className="px-3 font-semibold"> Stores</p>}
      </Link>

      <Link to={"/orders"} className="flex text-theme-secondary my-3 mx-2 rounded-md p-2 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer ">
        <IoGiftOutline className="text-2xl text-center my-auto" />
        {toggleSidebar && <p className="px-3 font-semibold"> Orders</p>}
      </Link>

      
    </div>
 
  );
};

export default Sidebar;
