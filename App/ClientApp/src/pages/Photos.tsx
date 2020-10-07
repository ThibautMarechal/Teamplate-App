import React from 'react';
import { Container, Row, Col } from 'reactstrap'


export default () => {
  return (
    <Container>
      <Row>
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          <h4 className="text-primary">Les photos vous seront partagées après l'événement.</h4>
          <p>(Parceque avant, c'est un peu con <span role="img" aria-label="laugh">🤣</span>)</p>
        </Col>
      </Row>
    </Container>
  );
}