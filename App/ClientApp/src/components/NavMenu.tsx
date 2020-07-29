import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import style from './NavMenu.module.scss';

export default () => {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavTogglerClick = useCallback(() => {
    setNavCollapsed(v => !v)
  }, []);

  return (
    <header>
      <Navbar className={cn("navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3 border-primary", style.nav)} light>
        <Container>
          <NavbarBrand tag={Link} to="/">Sylvie & Laurent</NavbarBrand>
          <NavbarToggler onClick={handleNavTogglerClick} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!navCollapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/temoins"><img src="./assets/icon-clock.png" alt="temoins" width={20}/>Nos témoins</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/nous"><img src="./assets/coeurs.png" alt="temoins" width={20}/>Nous</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/programme"><img src="./assets/icon-clock.png" alt="laurier" width={20}/>Programme</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/acces"><img src="./assets/icon-world.png" alt="world" width={20}/>Accès</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/concours"><img src="./assets/icon-concours.png" alt="laurier" width={20}/>Concours</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}