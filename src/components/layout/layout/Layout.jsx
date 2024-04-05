import React from "react";
import { Footer, Navbar } from "../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="md:mr-[70px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
