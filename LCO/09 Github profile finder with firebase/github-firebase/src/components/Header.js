import React, { useContext, useState } from "react";
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
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to={"/"}>Git Fire App</Link>
      </NavbarBrand>
      <NavbarText>
        {context.user?.email ? context.user.email : ""}{" "}
        {/* If logged in, display email id */}
      </NavbarText>
      <NavbarToggler onClick={toggler} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to="/">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
