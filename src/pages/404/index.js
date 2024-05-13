import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import NotFoundImg from "../../assests/404-not-found.png"

const isLogin = Cookies.get("token")

const NotFound = () => {
  return (
    <div className='bg-theme-primaryBg h-screen w-full flex flex-col text-center items-center justify-center'>
        <p className='font-semibold text-theme-primary text-3xl'>Looks like you're lost</p>
        <img src={NotFoundImg} alt='not-found' />
        <Link to={isLogin ? "/" : "/auth/login" } className='py-3 px-4 bg-theme-btnBg hover:bg-theme-btnColorHover text-theme-btnColor font-semibold rounded-md text-lg'>Back to Home page</Link>
    </div>
  )
}

export default NotFound