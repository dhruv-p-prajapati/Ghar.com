import React from "react";
import { Navigate } from "react-router-dom";

const CheckAuthentication = ({ isAuthenticated = true, children }) => {
  return isAuthenticated ? children : <Navigate to={'/login'} />
};

export default CheckAuthentication;
