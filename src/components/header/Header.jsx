import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Search from "../search/Search";
import { useSelector } from "react-redux";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const {carts} = useSelector(state => state.carts)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <Navbar expand='md'>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Search/>
            </NavItem>
          </Nav>
          <NavbarText>
            Cart <span>{carts.length}</span>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
