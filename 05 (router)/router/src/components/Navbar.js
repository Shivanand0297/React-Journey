import React from "react";
import { NavLink, Router } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About Me</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"/careers"}>careers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
