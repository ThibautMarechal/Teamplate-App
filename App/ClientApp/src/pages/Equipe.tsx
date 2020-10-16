import React from 'react';
import Fanny from '../Equipe/Fanny';
import { Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';
import Joel from '../Equipe/Joel';
import Aurelie from '../Equipe/Aurelie';
import Robin from '../Equipe/Robin';
import Jennifer from '../Equipe/Jennifer';
import Retour from '../components/Retour';
import PersonRound from '../components/PersonRound';

const TEMOIN = <><img src="./assets/icon-sign.png" width={20} alt="Témoin"/>Témoin</>
const ORGANISATRICE = <><img src="./assets/icon-clock.png" width={20} alt="Organisatrice"/>Maître de cérémonie</>

export default () => {
  return (
    <Container>
      <Route exact path='/equipe'>
        <Row>
          <Col md={{ offset: 3, size: 6 }} xs={12}>
            <hr />
            <p>
              Sylvie et Laurent se sont amusés à décrire leurs témoins et leur maître de cérémonie de façon originale.
              Bonne lecture <span role="img" aria-label="smiley">😉</span>
            </p>
            <hr />
          </Col>
        </Row>
      </Route>
      <Row>
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          <Route exact path='/equipe'>
            <Row>
              <Col xs={6}>
                <PersonRound name="Fanny" imgUrl="/assets/equipe/fanny.jpg" redirectUrl="/equipe/fanny" role={TEMOIN} />
              </Col>
              <Col xs={6}>
                <PersonRound name="Joël" imgUrl="/assets/equipe/joel.png" redirectUrl="/equipe/joel" role={TEMOIN}  />
              </Col>
              <Col xs={6}>
                <PersonRound name="Aurélie" imgUrl="/assets/equipe/aurelie.jpg" redirectUrl="/equipe/aurelie" role={TEMOIN}  />
              </Col>
              <Col xs={6}>
                <PersonRound name="Robin" imgUrl="/assets/equipe/robin.jpg" redirectUrl="/equipe/robin" role={TEMOIN}  />
              </Col>
              <Col md={{ offset: 3, size: 6 }} xs={6}>
                <PersonRound name="Jennifer" imgUrl="/assets/equipe/jennifer.jpg" redirectUrl="/equipe/jennifer" role={ORGANISATRICE} />
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