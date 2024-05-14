import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";
import axios from "axios";
import Cookies from "js-cookie";

import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import LoginImg from "../../assests/login-illustration.svg";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const setIsLogin = useStore((state) => state.setIsLogin);

  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Email", email);
    formData.append("Password", password);

    try {
      // Send POST request to API
      const response = await axios.post(`${baseUrl}/Account/login`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response?.data?.message);
      setIsLogin(true);
      Cookies.set("token", response?.data?.data?.jwToken);
      Navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.Message);
    }
  };

  console.log(Cookies.get("token"));

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Form  */}
      <div className="max-w-screen-xl m-4 sm:m-10 shadow-lg rounded-lg flex justify-center items-center flex-1 bg-theme-primaryBg px-4 py-8 sm:p-0">
        <div className="lg:w-1/2 xl:w-5/12 p-0 sm:p-12">
          {/* <div> */}
          {/* Later we add logo here */}
          {/* <img src=""
                            className="w-mx-auto" /> */}
          {/* </div> */}

          <h1 className="text-theme-btnBgText text-center font-semibold text-3xl">
            One's Store
          </h1>

          <p className="mt-6 text-sm text-theme-tertiary text-center ">
            Don't have Account?{" "}
            <Link
              to="/auth/signup"
              className="border-b border-theme-primaryBorder border-dotted text-theme-btnBgText font-semibold"
            >
             SignUp{" "}
            </Link>
          </p>

          <div className="flex flex-col items-center">
            <div className="w-full flex-1 mt-4">
              <div className="flex flex-col items-center ">
                <button
                  onClick={() =>
                    toast.error(
                      "SignIn with Goggle is not available now. Please SignIn using Email and Password"
                    )
                  }
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-theme-primary flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline bg-theme-secondaryBg"
                >
                  {/* Google icon    */}
                  <FcGoogle className="text-2xl" />
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>

              <div className="mt-7 mb-6 border-t border-theme-primaryBorder text-center mx-14">
                <div className="leading-none px-2 inline-block text-sm text-theme-tertiary tracking-wide font-medium transform translate-y-1/2">
                  Or SignIn with E-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={handleLogin}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-theme-primaryBg border border-theme-primaryBorder placeholder-theme-tertiary text-sm focus:outline-none focus:border-gray-400 focus:bg-theme-secondaryBg text-theme-primary"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-theme-primaryBg border border-theme-primaryBorder placeholder-theme-tertiary text-sm focus:outline-none focus:border-gray-400 focus:bg-theme-secondaryBg text-theme-primary mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-theme-btnBg text-theme-btnColor w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <MdLogin className="text-2xl text-theme-btnColor" />
                    <span className="ml-2">Log In</span>
                  </button>
                </form>
                <p className="mt-6 text-xs text-theme-tertiary text-center ">
                  I agree to{" "}
                  <Link
                    to="#"
                    className="border-b border-theme-primaryBorder border-dotted text-theme-btnBgText"
                  >
                    Terms of Service{" "}
                  </Link>
                  and its
                  <Link
                    to="#"
                    className="border-b border-theme-primaryBorder border-dotted text-theme-btnBgText"
                  >
                    {" "}
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image illustration */}
        <div className="flex-1 bg-theme-btnBg text-center h-full hidden lg:flex items-center rounded-r-lg">
          <img
            className="object-cover mx-auto p-16"
            src={LoginImg}
            alt="one's store login screen illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
