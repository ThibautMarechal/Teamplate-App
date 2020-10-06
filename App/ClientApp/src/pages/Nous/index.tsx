import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavLink, Row, Col, Container } from 'reactstrap'
import PersonRound from '../../components/PersonRound';
import Retour from '../../components/Retour';
import Construction from './Construction';
import LaurentDansLaPeauDeSylvie from './LaurentDansLaPeauDeSylvie';
import LesPapas from './LesPapas';
import OrganisationMariage from './OrganisationMariage';
import SylvieLaurentChat from './SylvieLaurentChat';
import styles from './Nous.module.scss'

const AURELIE = <PersonRound name="Aurélie" imgUrl="./assets/equipe/aurelie.jpg" hideDescription style={{ width: 60, marginRight: 10 }} />
const ROBIN = <PersonRound name="Robin" imgUrl="./assets/equipe/robin.jpg" hideDescription style={{ width: 60, marginRight: 10 }} />
const JENNIFER = <PersonRound name="Jennifer" imgUrl="./assets/equipe/jennifer.jpg" hideDescription style={{ width: 60, marginRight: 10 }} />
const FANNY = <PersonRound name="Fanny" imgUrl="./assets/equipe/fanny.jpg" hideDescription style={{ width: 60, marginRight: 10 }} />
const JOEL = (
  <div className={styles.aneContainer}>
    <PersonRound name="Joel" imgUrl="./assets/equipe/joel.png" hideDescription style={{ width: 60, marginRight: 10 }} />
    <img src="./assets/ane.png" alt="bonnet d'ane" className={styles.bonnetAne} />
  </div>
)
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
            <NavLink tag={Link} to="/nous/laurent-dans-la-peau-de-sylvie">
              {ROBIN}
              L'histoire passionnante de Laurent dans la peau de Sylvie et vice-versa
            </NavLink>
            <NavLink tag={Link} to="/nous/construction">
              {FANNY}
              Construction
            </NavLink>
            <NavLink tag={Link} to="/nous/organization-mariage">
              {JENNIFER}
              L’organisation du mariage
            </NavLink>
            <NavLink tag={Link} to="/nous/sylvie-laurent-chat">
              {FANNY}
              La demande en mariage
            </NavLink>
            <NavLink tag={Link} to="/nous/les-papas">
              {AURELIE}
              Les papas
            </NavLink>
            <NavLink tag={Link} to="/equipe/joel">
              {JOEL}
            </NavLink>
          </Route>
          <Route path='/nous/laurent-dans-la-peau-de-sylvie'>
            <Retour to="/nous" />
            <h3 className="text-primary">L'histoire passionnante de Laurent dans la peau de Sylvie et vice-versa</h3>
            <LaurentDansLaPeauDeSylvie />
            <Retour to="/nous" />
            Auteur: <Link to="/equipe/robin">{ROBIN} Robin</Link>
            <hr />
          </Route>
          <Route path='/nous/construction'>
            <Retour to="/nous" />
            <h3 className="text-primary">Construction</h3>
            <Construction />
            <Retour to="/nous" hrBefore />
            Auteur: <Link to="/equipe/fanny">{FANNY} Fanny</Link>
            <hr />
          </Route>
          <Route path='/nous/organization-mariage'>
            <Retour to="/nous" />
            <h3 className="text-primary">L’organisation du mariage</h3>
            <OrganisationMariage />
            <Retour to="/nous" hrBefore />
            Auteur: <Link to="/equipe/jennifer">{JENNIFER} Jennifer</Link>
            <hr />
          </Route>
          <Route path='/nous/sylvie-laurent-chat'>
            <Retour to="/nous" />
            <h3 className="text-primary">La demande en mariage</h3>
            <SylvieLaurentChat />
            <hr />
            Auteur: <Link to="/equipe/fanny">{FANNY} Fanny</Link>
            <hr />
          </Route>
          <Route path='/nous/les-papas'>
            <Retour to="/nous" />
            <LesPapas />
            <hr />
            Auteur: <Link to="/equipe/aurelie">{AURELIE} Aurélie</Link>
            <hr />
          </Route>
        </Col>
      </Row>
    </Container>
  );
}