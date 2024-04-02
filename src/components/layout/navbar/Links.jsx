import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ linksToRender = [], toggleNavbar, show }) => {
  return linksToRender.map((currLink, index) => {
    return (
      <NavLink
        to={currLink?.slug}
        className={({ isActive }) =>
          `${
            isActive ? "border-white bg-white text-primary font-bold" : "border-primary"
          } flex items-center gap-1 border rounded-md p-1 hover:border-white`
        }
        onClick={toggleNavbar}>
        <div className="text-base md:text-xl">{currLink?.icon ? currLink.icon : null}</div>
        <div className="line-clamp-1">{currLink?.label}</div>
      </NavLink>
    );
  });
};

export default Links;
