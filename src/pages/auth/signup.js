import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../hooks/useStore";
import axios from "axios";
import Cookies from "js-cookie";
import InputField from "../../components/inputField";
import { SignUpSchema } from "../../schemas";

import { MdLogin } from "react-icons/md";
import SignUpImg from "../../assests/signup-illustration.svg";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const SignUp = () => {
  const [email, setEmail] = useState();
  const initialValues = {
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const setIsLogin = useStore((state) => state.setIsLogin);

  // Environmental variable import
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  // UseNavigate
  const Navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {

        console.log(values)
        
    //   const formData = new FormData();
    //   formData.append("UserName", values.userName);
    //   formData.append("Email", values.email);
    //   formData.append("PhoneNumber", values.phoneNumber);
    //   formData.append("Password", values.password);
    //   formData.append("ConfirmPassword", values.confirmPassword);

    //   try {
    //     const response = await axios.post(
    //       `${baseUrl}/Account/login`,
    //       formData,
    //       {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       }
    //     );
    //     toast.success(response?.data?.message);
    //     setIsLogin(true);
    //     console.log("token", response?.data);
    //     Cookies.set("token", response?.data?.data?.jwToken);
    //     Navigate("/");
    //   } catch (error) {
    //     toast.error(error?.response?.data?.Message);
    //   }
    },
  });

  const inputFieldsData = [
    {
      errors: errors.userName,
      name: "userName",
      type: "text",
      placeholder: "User Name",
      values: values.userName,
    },
    {
      errors: errors.email,
      name: "email",
      type: "email",
      placeholder: "Email",
      values: values.email,
    },
    {
      errors: errors.phoneNumber,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      values: values.phoneNumber,
    },
    {
      errors: errors.password,
      name: "password",
      type: "password",
      placeholder: "Password",
      values: values.password,
    },
    {
      errors: errors.confirmPassword,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      values: values.confirmPassword,
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-xl m-4 sm:m-10 shadow-lg rounded-lg flex justify-center items-center flex-1 bg-theme-primaryBg px-4 py-8 sm:p-0">
        {/* Image illustration */}
        <div className="flex-1 bg-theme-btnBg text-center !h-full hidden lg:flex items-center rounded-l-lg">
          <img
            className="object-cover mx-auto p-16"
            src={SignUpImg}
            alt="one's store login screen illustration"
          />
        </div>

        {/* Form  */}
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
            Already have Account?{" "}
            <Link
              to="/auth/login"
              className="border-b border-theme-primaryBorder border-dotted text-theme-btnBgText font-semibold"
            >
              Login{" "}
            </Link>
          </p>

          <div className="flex flex-col items-center">
            <div className="mx-auto max-w-xs">
              <form onSubmit={handleSubmit}>

                 {/* Input fields */}
                {inputFieldsData.map((item, index) => (
                  <InputField
                    key={index}
                    errors={item.errors}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    values={item.values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ))}

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-theme-btnBg text-theme-btnColor w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none hover:bg-theme-btnColorHover"
                >
                  <MdLogin className="text-2xl text-theme-btnColor" />
                  <span className="ml-2">Sign Up</span>
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
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
