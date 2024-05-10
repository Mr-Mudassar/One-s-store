import React from "react";
import useStore from "../hooks/useStore";
import UserImage from "../assests/navbar/user-img.png";
import { useNavigate } from "react-router-dom";
import ThemesData from "../data/themeColorsData.json";
import Cookies from "js-cookie";

//  importing icons
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = ({ userDetailsModel, setUserDetailsModel }) => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  const setAppMode = useStore((state) => state.setAppMode);

  const appThemeColor = useStore((state) => state.appThemeColor);
  const setAppThemeColor = useStore((state) => state.setAppThemeColor);

  const Navigate = useNavigate()

  const Links = [
    {
      name: "Profile",
      path: "/",
      icon: <FaRegUserCircle className="text-xl text-center my-auto" />,
      funq: () => {
        setUserDetailsModel((toggle) => !toggle);
      },
    },
    {
      name: "Settings",
      path: "/",
      icon: <MdOutlineSettings className="text-xl text-center my-auto" />,
      func: () => {
        setUserDetailsModel((toggle) => !toggle);
      },
    },
    {
      name: "Log out",
      path: "/login",
      icon: <HiOutlineLogout className="text-xl text-center my-auto" />,
      func: () => {
        setUserDetailsModel((toggle) => !toggle);
        Cookies.remove("token");
        Navigate("/auth/login")
      },
    },
  ];

  return (
    <div
      className={`bg-theme-primaryBg !w-full py-3 px-2 sm:px-8  absolute sm:fixed top-0 transition-all duration-300 ease-in-out pl-16 z-50 ${
        toggleSidebar ? "md:pl-72" : "sm:pl-24"
      }`}
    >
      <div className="flex justify-between">
        <input
          className="border border-theme-primaryBorder rounded-md p-2 bg-theme-secondaryBg text-theme-primary"
          type="search"
          placeholder="Search"
        />

        <div
          className="flex cursor-pointer"
          onClick={() => setUserDetailsModel((toggle) => !toggle)}
        >
          <p className="text-center mx-2 my-auto text-theme-primary hidden sm:block">
            Welcome <b>Mudassar!</b>
          </p>
          <img
            src={UserImage}
            alt="user-profile"
            className="rounded-full w-10 h-10 z-30"
          />
        </div>

        {/* Modal  */}

        {userDetailsModel && (
          <div className="absolute right-6 md:right-14 top-16 px-4 py-4 bg-theme-primaryBg rounded-xl w-64 shadow-lg z-50">
            {/* user name and image  */}
            <div className="flex gap-2">
              <span className="text-center my-auto">
                <img
                  src={UserImage}
                  alt="user"
                  width={40}
                  className="rounded-full"
                />
              </span>

              <span className="text-sm text-theme-secondary overflow-hidden">
                <b className="text-theme-primary">Mudassar</b>
                <p className="text-theme-tertiary ">
                  mudassarmuhammad776@gmail.com
                </p>
              </span>
            </div>

            <div className="border border-dashed border-theme-primaryBorder mt-4"></div>

            {/* Links  */}
            {Links.map((item) => (
              <div
                key={item.name}
                onClick={item.func}
                className="flex text-theme-secondary my-3 mx-2 rounded-md py-2 px-3 hover:bg-theme-secondaryBg hover:text-theme-primary hover:cursor-pointer "
              >
                {item.icon}
                <p className="px-3 font-semibold text-sm"> {item.name}</p>
              </div>
            ))}
            {/* Links ended */}

            <div className="border border-dashed border-theme-primaryBorder mt-4"></div>

            <p className="text-theme-primary font-bold text-sm my-2">Color</p>

            {/* Theme different colors button */}
            <div className="grid justify-stretch gap-2 grid-cols-2">
              {ThemesData.themeColors.map((items) => (
                <button
                  key={items.name}
                  disabled={appThemeColor === items.colorValue}
                  onClick={() => {
                    if (appThemeColor !== "") {
                      document.documentElement.classList.remove(
                        "redish",
                        "bluish",
                        "yellowish",
                        "orangish",
                        "greenish",
                        "violetish"
                      );
                    }
                    setAppThemeColor(items.colorValue);
                  }}
                  className="px-3 py-1 rounded-md flex text-sm text-theme-tertiary font-semibold border border-gray-200 hover:bg-theme-secondaryBg "
                >
                  <div
                    className={`rounded-full ${items.color} ${items.text} mr-1`}
                  >
                    ......
                  </div>
                  <p>{items.name}</p>
                </button>
              ))}
            </div>
            {/* Theme different colors button ended */}

            <div className="border border-dashed border-theme-primaryBorder mt-4"></div>

            <p className="text-theme-primary font-bold text-sm mt-2">Mode</p>

            {/* Dark and light mode button */}
            <div className="grid justify-stretch grid-cols-2 gap-2">
              <button
                onClick={() => {
                  document.documentElement.classList.add("dark");
                  setAppMode("dark");
                }}
                className="px-3 py-1 rounded-md flex text-sm text-theme-tertiary font-semibold border border-gray-200 hover:bg-theme-secondaryBg mt-2"
              >
                <FaRegMoon className="text-md text-theme-secondary my-auto mr-2" />
                <p>Dark</p>
              </button>

              <button
                onClick={() => {
                  document.documentElement.classList.remove("dark");
                  setAppMode("light");
                }}
                className="px-3 py-1 rounded-md flex text-sm text-theme-tertiary font-semibold border border-gray-200 hover:bg-theme-secondaryBg mt-2"
              >
                <FiSun className="text-md text-theme-secondary my-auto mr-2" />
                <p>Light</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
