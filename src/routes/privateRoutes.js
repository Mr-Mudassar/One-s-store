import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "../layout";

const PrivateRoutes = () => {
  const LoginCheck = Cookies.get("token");

  if (!LoginCheck) {
    return <Navigate to={"/auth/login"} />;
  } else {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }
};

export default PrivateRoutes;
