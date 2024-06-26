import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthCheckAdmin = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthCheckAdmin;
