import React from "react";
import Links from "../navbar/Links";
import { userLinks } from "../navbar/LinkData";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary text-white pt-4 pb-2 mt-auto">
      <div className="flex justify-around items-center w-screen">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-2 hover:text-gray-200 duration-300 cursor-pointer">Contact Us</h3>
          <p className="text-sm">Ghar.com, Ahmedabad, Gujarat, India</p>
          <p className="text-sm">Email: info@ghar.com</p>
          <p className="text-sm">Phone: +1234567890</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-5 items-center justify-center">
          <h3 className="text-lg md:text-xl font-semibold hover:text-gray-200 duration-300 cursor-pointer">Follow Us</h3>
          <div className="grid grid-cols-2 gap-4">
            <NavLink to="#" className="text-white hover:text-gray-200 duration-300 hover:scale-110">
              <div className="text-xl">
                <FaTwitter />
              </div>
            </NavLink>
            <NavLink to="#" className="text-white hover:text-gray-200 duration-300 hover:scale-110">
              <div className="text-xl">
                <FaFacebook />
              </div>
            </NavLink>
            <NavLink to="#" className="text-white hover:text-gray-200 duration-300 hover:scale-110">
              <div className="text-xl">
                <FaInstagram />
              </div>
            </NavLink>
            <NavLink to="#" className="text-white hover:text-gray-200 duration-300 hover:scale-110">
              <div className="text-xl">
                <FaLinkedin />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" text-white text-center font-bold mt-4">
        <p className="text-base">&copy; {new Date().getFullYear()} Ghar.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
