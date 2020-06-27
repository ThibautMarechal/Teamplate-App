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
          <NavbarBrand tag={Link} to="/">App</NavbarBrand>
          <NavbarToggler onClick={handleNavTogglerClick} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!navCollapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/programme">Programme</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/acces">Accès</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/concours">Concours</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}