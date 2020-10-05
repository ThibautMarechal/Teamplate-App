import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavLink, Row, Col, Container } from 'reactstrap'
import Retour from '../../components/Retour';

import LaurentDansLaPeauDeSylvie from './LaurentDansLaPeauDeSylvie';
import NosPapas from './NosPapas';
import SylvieLaurentChat from './SylvieLaurentChat';

export default () => {
  return (
    <Container>
      <Row>
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          <Route exact path='/nous'>
            <NavLink tag={Link} to="/nous/laurent-dans-la-peau-de-sylvie">L'histoire passionnante de Laurent dans la peau de Sylvie et vice-versa</NavLink>
            <NavLink tag={Link} to="/nous/construction">Notre construction</NavLink>
            <NavLink tag={Link} to="/nous/organization-mariage">Présentation de l’organisation du mariage</NavLink>
            <NavLink tag={Link} to="/nous/sylvie-laurent-chat">Sylive et laurent en chat</NavLink>
            <NavLink tag={Link} to="/nous/nos-papas">Nos papas</NavLink>
          </Route>
          <Route path='/nous/laurent-dans-la-peau-de-sylvie'>
            <Retour to="/nous" />
            <LaurentDansLaPeauDeSylvie />
            Ecrit par <Link to="/equipe/robin">Robin</Link>
          </Route>
          <Route path='/nous/construction'>
            <Retour to="/nous" />
          </Route>
          <Route path='/nous/organization-mariage'>
            <Retour to="/nous" />
          </Route>
          <Route path='/nous/sylvie-laurent-chat'>
            <Retour to="/nous" />
            <SylvieLaurentChat />
            Dessiné par <Link to="/equipe/jenny">Jenny</Link>
          </Route>
          <Route path='/nous/nos-papas'>
            <Retour to="/nous" />
            <NosPapas />
            Ecrit par <Link to="/equipe/aurelie">Aurélie</Link>
          </Route>
        </Col>
      </Row>
    </Container>
  );
}