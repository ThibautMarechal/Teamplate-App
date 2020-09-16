import React, { useEffect } from 'react';
import Fanny from '../Equipe/Fanny';
import { Container, Row, Col, Nav, NavLink } from 'reactstrap';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Joel from '../Equipe/Joel';
import Aurelie from '../Equipe/Aurelie';
import Robin from '../Equipe/Robin';
import Jennifer from '../Equipe/Jennifer';

export default () => {
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case "/equipe/fanny":
        break;
      case "/equipe/joel":
        break;
      case "/equipe/aurelie":
        break;
      case "/equipe/robin":
        break;
      case "/equipe/jennifer":
        break;
      default:
        break;
    }
  }, [pathname]);
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Nav className="flex-column" pills style={{ position: 'sticky', top: 15 }}>
            <NavLink tag={Link} to="/equipe/fanny" active={pathname === "/equipe/fanny"}>Fanny</NavLink>
            <NavLink tag={Link} to="/equipe/joel" active={pathname === "/equipe/joel"}>Joël</NavLink>
            <NavLink tag={Link} to="/equipe/aurelie" active={pathname === "/equipe/aurelie"}>Aurelie</NavLink>
            <NavLink tag={Link} to="/equipe/robin" active={pathname === "/equipe/robin"}>Robin</NavLink>
            <NavLink tag={Link} to="/equipe/jennifer" active={pathname === "/equipe/jennifer"}>Jennifer</NavLink>
          </Nav>
        </Col>
        <Col md={8}>
          <Fanny />
          <hr/>
          <Joel />
          <hr/>
          <Aurelie />
          <hr/>
          <Robin />
          <hr/>
          <Jennifer />
        </Col>
      </Row>
    </Container>
  )
}