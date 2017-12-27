import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo_inverse_small from './logo_word_inverse_small.png';

function MyNavBar(props) {
  return (
    <Navbar color="dark" dark expand>
      <NavbarBrand href="/">
        <img src={logo_inverse_small} alt="My logo" />
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/components/">[Get Mining Widget]</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">[Remote Mining]</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default MyNavBar;
