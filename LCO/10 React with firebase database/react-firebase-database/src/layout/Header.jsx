import React from "react";
import { Link } from "react-router-dom";
import { NavbarBrand, Navbar, NavbarText } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand tag={Link} to="/" className="text-white">
        Contact App
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        A Simple Contact App
      </NavbarText>
    </Navbar>
  );
};

export default Header;
