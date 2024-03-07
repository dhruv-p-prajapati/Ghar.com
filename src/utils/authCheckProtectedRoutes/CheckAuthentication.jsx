import React from "react";
import { Navigate } from "react-router-dom";

const CheckAuthentication = ({ isAuthenticated = false, children }) => {
  return isAuthenticated ? children : <Navigate to={'/login'} />
};

export default CheckAuthentication;