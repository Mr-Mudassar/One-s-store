import React, { useEffect } from "react";
import useStore from "../hooks/useStore";
import UserImg from "../assests/navbar/user-img.png";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  const appMode = useStore((state) => state.appMode);
  const setAppMode = useStore((state) => state.setAppMode);

  const setAppThemeColor = useStore((state) => state.setAppThemeColor )

  // Check the system default theme and apply on app
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setAppMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setAppMode("light");
    }
  }, []);

  const ToggleAppTheme = () => {
    if (appMode === "dark") {
      document.documentElement.classList.remove("dark");
      setAppMode("light");
    } else {
      document.documentElement.classList.add("dark");
      setAppMode("dark");
    }
  };

  return (
    <div
      className={`bg-theme-primaryBg w-full py-3 px-8 fixed top-0 ${
        toggleSidebar ? "pl-72" : "pl-20"
      }`}
    >
      <div className="flex justify-between">
        <input
          className="border border-theme-primaryBorder rounded-md p-2 bg-theme-secondaryBg text-theme-primary"
          type="search"
          placeholder="Search"
        />

        <div className="flex">
          <p className="text-center mx-2 my-auto text-theme-primary">
            Welcome <b>Mudassar!</b>
          </p>
          <div className="m-auto rounded-full overflow-hidden p-1">
            <img src={UserImg} alt="user-profile" width={30} />
          </div>
        </div>

        <div className="flex my-auto" onClick={ToggleAppTheme} >
          {appMode === "light" ? (
            <FaMoon className="text-2xl text-theme-secondary" />
          ) : (
            <MdSunny className="text-2xl text-theme-secondary" />
          )}
        </div>

     <div className="flex gap-2">
       <button className="rounded-md py-2 px-3 text-white bg-red-600" onClick={() => setAppThemeColor("redish") }>Red</button>
       <button className="rounded-md py-2 px-3 text-white bg-blue-600" onClick={() => setAppThemeColor("bluish") }>Blue</button>
       <button className="rounded-md py-2 px-3 text-white bg-green-600" onClick={() => setAppThemeColor("greenish") }>Green</button>
       <button className="rounded-md py-2 px-3 text-white bg-orange-600" onClick={() => setAppThemeColor("orangish") }>Orange</button>
       <button className="rounded-md py-2 px-3 text-white bg-[#f59e0b]" onClick={() => setAppThemeColor("yellowish") }>Yellow</button>
       <button className="rounded-md py-2 px-3 text-white bg-violet-600" onClick={() => setAppThemeColor("violetish") }>Violet</button>
     </div>

      </div>
    </div>
  );
};

export default Navbar;
