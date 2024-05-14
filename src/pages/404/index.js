import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import NotFoundImg from "../../assests/404-not-found.svg";

const isLogin = Cookies.get("token");

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-xl m-4 sm:m-10 shadow-lg rounded-lg flex justify-center items-center flex-1 bg-theme-primaryBg px-4 py-8 sm:p-0">
        <div className="lg:w-1/2 xl:w-5/12 p-0 sm:p-12 text-center">
          <p className="font-semibold text-theme-primary text-3xl my-10">
            Looks like you're lost
          </p>
          <Link
            to={isLogin ? "/" : "/auth/login"}
            className="py-3 px-4 bg-theme-btnBg hover:bg-theme-btnColorHover text-theme-btnColor font-semibold rounded-md text-lg"
          >
            Back to Home page
          </Link>
        </div>

        {/* Image illustration */}
        <div className="flex-1 bg-theme-btnBg text-center h-full hidden lg:flex items-center rounded-r-lg">
          <img
            className="object-cover mx-auto p-16"
            src={NotFoundImg}
            alt="one's store login screen illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
