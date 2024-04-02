import React from "react";
import { Footer, Navbar } from "../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
