import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoutes = () => {
  const UserLogin = Cookies.get("token");
  
   if (UserLogin) {
     return <Navigate to={'/'} />
   } else {
     return <Outlet />
   }

};

export default PublicRoutes;
