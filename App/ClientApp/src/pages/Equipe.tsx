import React from 'react';
import Fanny from '../Equipe/Fanny';
import { Container, Row, Col, Nav, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Joel from '../Equipe/Joel';
import Aurelie from '../Equipe/Aurelie';
import Robin from '../Equipe/Robin';
import Jennifer from '../Equipe/Jennifer';

export default () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Nav className="flex-column" vertical>
            <NavLink tag={Link} to="/equipe/fannyfanny">Fanny</NavLink>
            <NavLink tag={Link} to="/equipe/joel">Joël</NavLink>
            <NavLink tag={Link} to="/equipe/aurelie">Aurelie</NavLink>
            <NavLink tag={Link} to="/equipe/robin">Robin</NavLink>
            <NavLink tag={Link} to="/equipe/jennifer">Jennifer</NavLink>
          </Nav>
        </Col>
        <Col md={8}>
          <Fanny />
          <Joel />
          <Aurelie />
          <Robin />
          <Jennifer />
        </Col>
      </Row>
    </Container>
  )
}