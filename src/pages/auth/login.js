import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";

import LoginImg from "../../assests/login-page-illustaration.png"

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center">

            {/* Form  */}
            <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1 bg-theme-primaryBg p-4 sm:p-0">
                <div className="lg:w-1/2 xl:w-5/12 p-0 sm:p-12">

                    {/* <div> */}
                    {/* Later we add logo here */}
                    {/* <img src=""
                            className="w-mx-auto" /> */}
                    {/* </div> */}

                    <h1 className='text-theme-btnBgText text-center font-semibold text-3xl'>One's Store</h1>

                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center ">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-theme-primary flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline bg-theme-secondaryBg">
                                    {/* Google icon    */}
                                    <FcGoogle className='text-2xl' />
                                    <span className="ml-4">
                                        Sign In with Google
                                    </span>
                                </button>

                            </div>

                            <div className="my-12 border-t border-theme-primaryBorder text-center mx-8">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-theme-tertiary tracking-wide font-medium transform translate-y-1/2">
                                    Or SignIn with E-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-theme-primaryBg border border-theme-primaryBorder placeholder-theme-tertiary text-sm focus:outline-none focus:border-gray-400 focus:bg-theme-secondaryBg text-theme-primary"
                                    type="email" placeholder="Email" />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-theme-primaryBg border border-theme-primaryBorder placeholder-theme-tertiary text-sm focus:outline-none focus:border-gray-400 focus:bg-theme-secondaryBg text-theme-primary mt-5"
                                    type="password" placeholder="Password" />
                                <button
                                    className="mt-5 tracking-wide font-semibold bg-theme-btnBg text-theme-btnColor w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <MdLogin className='text-2xl text-theme-btnColor' />
                                    <span className="ml-2">
                                        Sign In
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-theme-tertiary text-center ">
                                    I agree to {" "}
                                    <a href="#" className="border-b border-theme-primaryBorder border-dotted text-theme-btnBgText">
                                        Terms of Service {" "}
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-theme-primaryBorder border-dotted text-theme-btnBgText">
                                        {" "} Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image illustration */}
                <div className="flex-1 bg-theme-primaryBg text-center hidden lg:flex rounded-md h-[450px] items-center">
                    <img
                        className="object-cover pt-6 m-auto"
                        src={LoginImg}
                        alt="one's store login screen illustration"
                    />
                </div>

            </div>
        </div>
    )
}

export default Login
