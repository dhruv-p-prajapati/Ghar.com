import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiAlignRight } from "react-icons/bi";

import { AiOutlineClose } from "react-icons/ai";
import { FaBuildingUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Links from "./Links";
import { userLinks } from "./LinkData";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <>
      <div className="bg-primary bg-fixed z-10 h-16 flex justify-between items-center px-4 md:px-10">
        <div className="flex justify-center items-center">
          <NavLink to="/">
            <img src="/images/logo.png" alt="Main Logo" className="w-10 md:w-16" />
          </NavLink>
          <NavLink to="/">
            <h3 className="text-xl md:text-3xl text-white font-bold">Ghar.com</h3>
          </NavLink>
        </div>

        <ul className="flex justify-between items-center gap-10 font-bold text-white">
          <NavLink to="/builder/register" className="hidden md:flex justify-center items-center gap-1">
            <FaBuildingUser className="text-xl" />
            Become a Builder
          </NavLink>
          <NavLink to="/login" className="hidden md:flex justify-center items-center gap-1">
            <FaRegUserCircle className="text-xl" />
            Login
          </NavLink>

          <li className="text-xl md:text-3xl cursor-pointer px-2 md:invisible" onClick={toggleNavbar}>
            <BiAlignRight />
          </li>
        </ul>
      </div>
      <div>
        <div
          className={`fixed top-0 h-screen w-screen bg-black ${show ? "opacity-30" : "opacity-0 -z-10"} transition-all duration-1000`}
          onClick={toggleNavbar}></div>
        <div
          className={`bg-primary fixed right-0 top-0 h-screen ${
            show ? "w-[min(80vw,300px)]" : "invisible md:visible w-[70px]"
          } transition-all duration-1000 py-5 px-5 flex flex-col justify-between text-white overflow-y-auto`}>
          <div className="flex flex-col gap-4">
            <div className={`text-2xl cursor-pointer ${show ? "flex flex-row-reverse" : ""}`}>
              <div onClick={toggleNavbar}>{show ? <AiOutlineClose /> : <BiAlignRight />}</div>
            </div>

            <Links linksToRender={userLinks} toggleNavbar={toggleNavbar} show={show} />
          </div>

          <div className="flex flex-col gap-2">
            <NavLink
              to="/builder/register"
              className={({ isActive }) =>
                `${
                  isActive ? "border-white p-2 bg-white text-primary font-bold" : "p-2 border-primary"
                } flex items-center gap-1 border rounded-md md:hidden  hover:border-white`
              }
              onClick={toggleNavbar}>
              <FaBuildingUser className="text-xl" />
              Become a Builder
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${
                  isActive ? "border-white p-2 bg-white text-primary font-bold" : "p-2 border-primary"
                } flex items-center gap-1 border rounded-md md:hidden  hover:border-white`
              }
              onClick={toggleNavbar}>
              <FaRegUserCircle className="text-xl" />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
