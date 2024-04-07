import React from "react";
import { Footer, Navbar } from "../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="md:w-[90vw] mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
