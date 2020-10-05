import React from 'react';
import Fanny from '../Equipe/Fanny';
import { Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';
import Joel from '../Equipe/Joel';
import Aurelie from '../Equipe/Aurelie';
import Robin from '../Equipe/Robin';
import Jennifer from '../Equipe/Jennifer';
import PersonCard from '../components/PersonCard';
import Retour from '../components/Retour';

export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Sylvie et Laurent se sont amusé à décrire leurs témoins et leur maître de cérémonie de façon origiale.
            Bonne lecture <span role="img" aria-label="smiley">😉</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          <Route exact path='/equipe'>
            <Row>
              <Col md={4} xs={6}>
                <PersonCard name="Fanny" imgUrl="/assets/equipe/fanny.jpg" redirectUrl="/equipe/fanny" />
              </Col>
              <Col md={4} xs={6}>
                <PersonCard name="Joël" imgUrl="/assets/equipe/joel.png" redirectUrl="/equipe/joel" />
              </Col>
              <Col md={4} xs={6}>
                <PersonCard name="Aurélie" imgUrl="/assets/equipe/aurelie.jpg" redirectUrl="/equipe/aurelie" />
              </Col>
              <Col md={{ offset: 2, size: 4 }} xs={6}>
                <PersonCard name="Jennifer" imgUrl="/assets/equipe/jennifer.jpg" redirectUrl="/equipe/jennifer" />
              </Col>
              <Col md={{ offset: 0, size: 4 }} xs={{ offset: 3, size: 6 }}>
                <PersonCard name="Robin" imgUrl="/assets/equipe/robin.jpg" redirectUrl="/equipe/robin" />
              </Col>
            </Row>
          </Route>
          <Route path="/equipe/fanny">
            <Retour to="/equipe" />
            <Fanny />
          </Route>
          <Route path="/equipe/joel">
            <Retour to="/equipe" />
            <Joel />
          </Route>
          <Route path="/equipe/aurelie">
            <Retour to="/equipe" />
            <Aurelie />
          </Route>
          <Route path="/equipe/robin">
            <Retour to="/equipe" />
            <Robin />
          </Route>
          <Route path="/equipe/jennifer">
            <Retour to="/equipe" />
            <Jennifer />
          </Route>
        </Col >
      </Row >
    </Container >
  )
}