import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import weddingEvents from '../data/weddingEvents';
import WeddingEvent from '../components/WeddingEvent';
import style from './Programme.module.scss';
import { useUsername } from '../Authorization';

export default () => {
  const username = useUsername();
  return (
    <Container>
      <Row>
        <Col>
          <img src="./assets/girlande-3.png" alt="girlande" className={style.girlandeImg}/>
          <h2 className="text-primary">Programme</h2>
        </Col>
      </Row>
      {weddingEvents.map(we => (
        <Row key={we.hour}>
          <Col sm="12" md={{ size: 8, offset: 2 }} style={{ opacity: we.invited.includes(username!) ? 1 : 0.48 }}>
            {we.invitationPhrases[username!]?.map(p => (<p>{p}</p>))}
            <WeddingEvent weddingEvent={we}/>
          </Col>
        </Row>
      ))}
    </Container>
  );
}