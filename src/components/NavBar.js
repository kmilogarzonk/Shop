import React from 'react'
import { Navbar, Icon, NavItem } from 'react-materialize'
import { Link } from "react-router-dom"
import './style/NavBar.scss'

function NavBar() {
  return (
    <Navbar
      className="barUser"
      alignLinks="right"
      brand={
        <Link to="/">
          <Icon>
            arrow_back
          </Icon>
        </Link>}
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