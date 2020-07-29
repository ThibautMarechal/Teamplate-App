import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import weddingEvents from '../data/weddingEvents';
import WeddingEvent from '../components/WeddingEvent';
import style from './Programme.module.scss';

export default () => {
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
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <WeddingEvent weddingEvent={we}/>
          </Col>
        </Row>
      ))}
      <Row>
        <Col>
        <p style={{color: 'whitesmoke'}}>
          * : Seulement pour ceux qu'on aime
        </p>
        </Col>
      </Row>
    </Container>
  );
}