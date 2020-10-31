import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";
import Logo from "./Logo";
import "./Navigation.css";

function Navigation() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar expand="md" className="px-0">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="ml-auto" navbar>
          {/* <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/features/">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pricing/">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog/">Blog</NavLink>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
