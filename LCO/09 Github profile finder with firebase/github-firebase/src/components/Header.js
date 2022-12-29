import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
  Navbar,
} from "reactstrap";
import UserContext from "../context/UserContext";

const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to={"/"}>
          Git Fire App
        </Link>
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar  >
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Singin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
