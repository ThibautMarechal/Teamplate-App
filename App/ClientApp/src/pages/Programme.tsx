import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import weddingEvents from '../data/weddingEvents';
import WeddingEvent from '../components/WeddingEvent';
export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Programme</h1>
        </Col>
      </Row>
      {weddingEvents.map(we => (
        <Row key={we.hour}>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <WeddingEvent weddingEvent={we}/>
          </Col>
        </Row>
      ))}
    </Container>
  );
}