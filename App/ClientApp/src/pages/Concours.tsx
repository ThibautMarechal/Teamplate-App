import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Api from '../Api';

export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <button onClick={() => {
            Api.post('/api/play/submit')
          }}>Submit</button>
        </Col>
      </Row>
    </Container>
  );
}