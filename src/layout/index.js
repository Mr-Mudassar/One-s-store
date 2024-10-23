import React, {useState} from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import useStore from "../hooks/useStore";


const Layout = ({ children }) => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const [userDetailsModel, setUserDetailsModel] = useState(false);

  return (
    <>
      <Navbar userDetailsModel={userDetailsModel} setUserDetailsModel={setUserDetailsModel}/>
      <Sidebar />
      <div 
        onClick={() => setUserDetailsModel(false) }
        className={`mt-[66px] ml-14 p-6 ${
          toggleSidebar ? "md:ml-[258px]" : "ml-14"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
