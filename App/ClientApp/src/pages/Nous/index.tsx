import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavLink, Row, Col, Container } from 'reactstrap'
import Retour from '../../components/Retour';
import Construction from './Construction';

import LaurentDansLaPeauDeSylvie from './LaurentDansLaPeauDeSylvie';
import LesPapas from './LesPapas';
import OrganisationMariage from './OrganisationMariage';
import SylvieLaurentChat from './SylvieLaurentChat';

export default () => {
  return (
    <Container>
      <Route exact path='/nous'>
        <Row>
          <Col md={{ offset: 2, size: 8 }} xs={12}>
            <p>
              Nous avons demandé à nos témoins de nous représenter de diverse manières avec des dessins, textes, croquis, chansons,... avec une dose d'humour.<br />
              Des rires et peut-être des découverte au rendez-vous <span role="img" aria-label="smiley">😉</span>
            </p>
          </Col>
        </Row>
      </Route>
      <Row>
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          <Route exact path='/nous'>
            <NavLink tag={Link} to="/nous/laurent-dans-la-peau-de-sylvie">L'histoire passionnante de Laurent dans la peau de Sylvie et vice-versa</NavLink>
            <NavLink tag={Link} to="/nous/construction">Construction</NavLink>
            <NavLink tag={Link} to="/nous/organization-mariage">L’organisation du mariage</NavLink>
            <NavLink tag={Link} to="/nous/sylvie-laurent-chat">La demande en mariage</NavLink>
            <NavLink tag={Link} to="/nous/les-papas">Les papas</NavLink>
          </Route>
          <Route path='/nous/laurent-dans-la-peau-de-sylvie'>
            <Retour to="/nous" />
            <LaurentDansLaPeauDeSylvie />
            Ecrit par <Link to="/equipe/robin">Robin</Link>
          </Route>
          <Route path='/nous/construction'>
            <Retour to="/nous" />
            <Construction />
            <Retour to="/nous" hrBefore />
          </Route>
          <Route path='/nous/organization-mariage'>
            <Retour to="/nous" />
            <OrganisationMariage />
            <Retour to="/nous" hrBefore />
          </Route>
          <Route path='/nous/sylvie-laurent-chat'>
            <Retour to="/nous" />
            <SylvieLaurentChat />
            Dessiné par <Link to="/equipe/jenny">Fanny</Link>
          </Route>
          <Route path='/nous/les-papas'>
            <Retour to="/nous" />
            <LesPapas />
            Auteur: <Link to="/equipe/aurelie">Aurélie</Link>
          </Route>
        </Col>
      </Row>
    </Container>
  );
}