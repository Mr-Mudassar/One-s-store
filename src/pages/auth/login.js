import Cookies from "js-cookie";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import useStore from "../../hooks/useStore";
import { LoginInSchema } from "../../schemas";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import LoginImg from "../../assests/login-illustration.svg";
import ParticlesComponent from "../../components/particles";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const setIsLogin = useStore((state) => state.setIsLogin);

  // Environmental variable import
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;
  // UseNavigate
  const Navigate = useNavigate();

  // Login function and API call on form submit
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginInSchema,
    onSubmit: async (values) => {
      if (
        values.email === "mudassar@gmail.com" &&
        values.password === "Password@1"
      ) {
        Cookies.set(
          "token",
          JSON.stringify({
            email: values.email,
            password: values.password,
          })
        );
        toast.success("Login Successful");
        setIsLogin(true);
        Navigate("/");
      } else {
        toast.error("Please enter valid credentials");
      }
      // const formData = new FormData();
      // formData.append("Email", values.email);
      // formData.append("Password", values.password);

      // try {
      //   const response = await axios.post(
      //     `${baseUrl}/Account/login`,
      //     formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );
      //   toast.success(response?.data?.message);
      //   setIsLogin(true);
      //   console.log("token", response?.data);
      //   Cookies.set("token", response?.data?.data?.jwToken);
      //   Navigate("/");
      // } catch (error) {
      //   console.log(error.message)
      //   toast.error(error?.message);
      // }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <ParticlesComponent />
      {/* Form  */}
      <div className="max-w-screen-xl m-4 sm:m-10 shadow-lg rounded-lg flex justify-center items-center flex-1 bg-theme-primaryBg px-4 py-8 sm:p-0 z-50">
        <div className="lg:w-1/2 xl:w-5/12 p-0 sm:p-4">
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
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => toast.warning("This feature is Coming Soon")}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-theme-primary flex items-center justify-center focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline bg-theme-secondaryBg"
                >
                  {/* Google icon    */}
                  <FcGoogle className="text-2xl" />
                  <span className="ml-4">Sign In with Google</span>
                </motion.button>
              </div>

              <div className="mt-7 mb-6 border-t border-theme-primaryBorder text-center mx-14">
                <div className="leading-none px-2 inline-block text-sm text-theme-tertiary tracking-wide font-medium transform translate-y-1/2">
                  Or SignIn with E-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={handleSubmit}>
                  <InputField
                    errors={errors.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    values={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <InputField
                    errors={errors.password}
                    name="password"
                    type={!showPassword ? "password" : "text"}
                    placeholder="Password"
                    values={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={
                      <div
                        className="z-30 cursor-pointer"
                        onClick={() => setShowPassword((toggle) => !toggle)}
                      >
                        {!showPassword ? (
                          <FaRegEye className="absolute text-xl text-theme-secondary right-5 top-4" />
                        ) : (
                          <FaRegEyeSlash className="absolute text-xl text-theme-secondary right-5 top-4" />
                        )}
                      </div>
                    }
                  />

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-theme-btnBg text-theme-btnColor w-full py-4 rounded-lg  flex items-center justify-center focus:shadow-outline focus:outline-none hover:bg-theme-btnColorHover"
                  >
                    <MdLogin className="text-2xl text-theme-btnColor" />
                    <span className="ml-2">Log In</span>
                  </motion.button>
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
        <div className="flex-1 bg-theme-btnBg text-center h-full hidden md:flex items-center rounded-r-lg">
          <img
            className="object-cover mx-auto p-16"
            src={LoginImg}
            alt="one's store login screen illustration"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
