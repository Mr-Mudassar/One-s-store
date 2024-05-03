import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import useStore from "../hooks/useStore";

const Layout = ({ children }) => {

   const toggleSidebar = useStore((state) => state.toggleSidebar )

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={`mt-[66px] p-6 ${toggleSidebar ? "ml-[258px]" : "ml-14"}`}>{children}</div>
    </>
  );
};

export default Layout;
