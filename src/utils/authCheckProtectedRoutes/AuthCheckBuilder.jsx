import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthCheckBuilder = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthCheckBuilder;
