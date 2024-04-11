import React from "react";
import { Footer, Navbar } from "../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />

      <div className="pb-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
