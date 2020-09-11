import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InteractiveMap from '../components/InteractiveMap';

export default () => {
  return (
    <Container>
      <Row>
        <Col lg={{ size:8, offset: 2 }} md={12}>
          <InteractiveMap 
            src='/assets/map-world.png'
            subMaps={[
              {
                x: 0.49,
                y: 0.325,
                map: {
                  src: '/assets/map-europe.png',
                  subMaps: [
                    {
                      x: 0.57,
                      y: 0.34,
                      map: {
                        src: '/assets/map-presque.png',
                        subMaps: [
                          {
                            x: 0.015,
                            y: 0.73,
                            map: {
                              src: '/assets/map-stavelot.png'
                            }
                          },
                          {
                            x: 0.975,
                            y: 0.495,
                            map: {
                              src: '/assets/map-waimes.png'
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}