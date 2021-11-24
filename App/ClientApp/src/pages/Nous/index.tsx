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
// @ts-ignore
import useCountdown from 'react-use-countdown';

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
  const countdown = useCountdown(() => Date.parse('2020-10-11T12:00:00+01:00'));
  const jours = Math.floor(countdown / 1000 / 60 / 60 / 24);
  const heures = Math.floor(countdown / 1000 / 60 / 60) - (jours * 24);
  const minutes = Math.floor(countdown / 1000 / 60) - (jours * 24 * 60) - (heures * 60);
  const secondes = Math.floor(countdown / 1000) - (jours * 24 * 60 * 60) - (heures * 60 * 60) - (minutes * 60);
  return (
    <Container>
      <Route exact path='/nous'>
        <Row>
          <Col md={{ offset: 2, size: 8 }} xs={12}>
            <p className={styles.description}>
              Nous avons demandé à nos témoins de nous représenter de diverses manières avec des dessins, textes, croquis, chansons,... assaisonnés une dose d'humour.<br />
              Des rires et peut-être des découvertes au rendez-vous <span role="img" aria-label="smiley">😉</span>
            </p>
            <hr />
          </Col>
        </Row>
      </Route>
      <Row>
        <Col md={{ offset: 1, size: 10 }} xs={12}>
          <Route exact path='/nous'>
            <h3>
              <NavLink tag={Link} to="/nous/laurent-dans-la-peau-de-sylvie">
                {ROBIN}
              L'histoire passionnante de Laurent dans la peau de Sylvie et vice-versa
              </NavLink>
            </h3>
            <h3>
              <NavLink tag={Link} to="/nous/construction">
                {FANNY}
              La construction
            </NavLink>
            </h3>
            <h3>
              <NavLink tag={Link} to="/nous/organization-mariage">
                {JENNIFER}
                L’organisation du mariage
              </NavLink>
            </h3>
            <h3>
              <NavLink tag={Link} to="/nous/sylvie-laurent-chat">
                {FANNY}
                La demande en mariage
              </NavLink>
            </h3>
            <h3>
              <NavLink tag={Link} to="/nous/les-papas">
                {AURELIE}
                Les papas
              </NavLink>
            </h3>
          </Route>
          <Route path='/nous/laurent-dans-la-peau-de-sylvie'>
            <Retour to="/nous" />
            <h1 className="text-primary">L'histoire passionnante de Laurent dans la peau de Sylvie et vice-versa</h1>
            <hr />
            <LaurentDansLaPeauDeSylvie />
            <Retour to="/nous" hrBefore />
            Auteur: <Link to="/equipe/robin">{ROBIN} Robin</Link>
            <hr />
          </Route>
          <Route path='/nous/construction'>
            <Retour to="/nous" />
            <h1 className="text-primary">La construction</h1>
            <hr />
            <Construction />
            <Retour to="/nous" hrBefore />
            Auteur: <Link to="/equipe/fanny">{FANNY} Fanny</Link>
            <hr />
          </Route>
          <Route path='/nous/organization-mariage'>
            <Retour to="/nous" />
            <h1 className="text-primary">L’organisation du mariage</h1>
            <hr />
            <OrganisationMariage />
            <Retour to="/nous" hrBefore />
            Auteur: <Link to="/equipe/jennifer">{JENNIFER} Jennifer</Link>
            <hr />
          </Route>
          <Route path='/nous/sylvie-laurent-chat'>
            <Retour to="/nous" />
            <h1 className="text-primary">La demande en mariage</h1>
            <hr />
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