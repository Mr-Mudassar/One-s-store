import React from "react";
import useStore from "../hooks/useStore";
// Icons import
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import {
  MdOutlineDashboardCustomize,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";


const Sidebar = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const setToggleSidebar = useStore((state) => state.setToggleSidebar);

  return (
    <aside
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

      <div className="flex text-theme-secondary my-3 mx-2 rounded-md p-2 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer ">
        <MdOutlineDashboardCustomize className="text-2xl text-center my-auto" />
        {toggleSidebar && <p className="px-3 font-semibold"> Dashboard</p>}
      </div>

      <div className="flex text-theme-secondary my-3 mx-2 rounded-md p-2 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer ">
        <LuStore  className="text-2xl text-center my-auto" />
        {toggleSidebar && <p className="px-3 font-semibold"> Stores</p>}
      </div>

      <div className="flex text-theme-secondary my-3 mx-2 rounded-md p-2 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer ">
        <IoGiftOutline className="text-2xl text-center my-auto" />
        {toggleSidebar && <p className="px-3 font-semibold"> Orders</p>}
      </div>

      
    </aside>
  );
};

export default Sidebar;
