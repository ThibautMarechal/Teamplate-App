import React from 'react';
import { Container, Row, Col } from 'reactstrap'


export default () => {
  return (
    <Container>
      <Row>
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          <h4 className="text-primary">Un peu de patience !</h4>
          <p>Laissons un peu de temps à nos photographes de trier les nombreuses photos de cette journée magnifique</p>
        </Col>
      </Row>
    </Container>
  );
}