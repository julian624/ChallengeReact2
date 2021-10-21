import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Logout from "./Logout";
import "./Navbar.css";
//////// COMPONENT WITH BOOTSTRAP FOR THE NAVBAR/////////
const Navbarr = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Navbar">
      <Navbar color="dark" light>
        <NavbarBrand href="/" className="mr-auto NavBarcolor">
          Blog
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/julian624">GitHub</NavLink>
              <Logout />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
