import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize'
import './style/NavBar.scss';

function NavBar() {
  return (
    <Navbar
      className="barUser"
      alignLinks="right"
      brand={<a href="#">
        <Icon>
          arrow_back
        </Icon>
        </a>}
      >
      <NavItem href="#" >
        <Icon>
          shopping_basket
        </Icon>
      </NavItem>
      <NavItem href="#" >
        <Icon>
          search
        </Icon>
      </NavItem>
    </Navbar>
  );
}

export default NavBar;