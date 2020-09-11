import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InteractiveMap from '../components/InteractiveMap';

export default () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <InteractiveMap src="/assets/map-world.png">
            <InteractiveMap src="/assets/map-europe.png">
              <InteractiveMap src="/assets/map-presque.png" />
            </InteractiveMap>
          </InteractiveMap>
        </Col>
      </Row>
    </Container>
  );
}