import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InteractiveMap from '../components/InteractiveMap';
import { SubMaps } from '../components/InteractiveMap/InteractiveMap';
import styles from './Access.module.scss';
import { AutoSizer } from 'react-virtualized';

export default () => {
  return (
    <Container>
      <Row>
        <Col lg={{ size: 8, offset: 2 }} md={12}>
          <AutoSizer disableHeight>
            {({ width }) => {
              const fontSize = width / 40;
              const maps: SubMaps[] = [
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
                          pointOfInterests: [
                            {
                              x: 0.4,
                              y: 0.18,
                              element: <div className={styles.highway} style={{ fontSize }}>E42</div>
                            },
                            {
                              x: 0.21,
                              y: 0.835,
                              element: <div className={styles.highway} style={{ fontSize }}>E42</div>
                            },
                            {
                              x: 0.05,
                              y: 0.81,
                              element: <div className={styles.village} style={{ fontSize }}>Abbaye<br />de Stavelot</div>
                            },
                            {
                              x: 0.39,
                              y: 0.45,
                              element: <div className={styles.village} style={{ fontSize }}>Malmedy</div>
                            },
                            {
                              x: 0.95,
                              y: 0.6,
                              element: <div className={styles.village} style={{ fontSize }}>Maison<br />communale<br />de Waimes</div>
                            },
                          ],
                          subMaps: [
                            {
                              x: 0.015,
                              y: 0.73,
                              map: {
                                src: '/assets/map-stavelot.png',
                                pointOfInterests: [
                                  {
                                    x: 0.78,
                                    y: 0.14,
                                    element: (
                                      <div className={styles.direction}>
                                        <div className={styles.directionRight} style={{ transform: 'rotate(-34deg)', fontSize }}>Malmedy</div>
                                      </div>
                                    )
                                  },
                                  {
                                    x: 0.085,
                                    y: 0.32,
                                    element: (
                                      <div className={styles.direction}>
                                        <div className={styles.directionLeft} style={{ transform: 'rotate(6deg)', fontSize }}>Trois-Ponts</div>
                                      </div>
                                    )
                                  },
                                  {
                                    x: 0.77,
                                    y: 0.77,
                                    element: <div className={styles.destination} style={{ fontSize }}>Abbaye de Stavelot</div>
                                  },
                                  {
                                    x: 0.4,
                                    y: 0.1,
                                    element: (
                                      <div className={styles.direction}>
                                        <div className={styles.directionUp} style={{ fontSize }}>Place St Remacle</div>
                                      </div>
                                    )
                                  },
                                  {
                                    x: 0.42,
                                    y: 0.6,
                                    element: <div className={styles.parking}>P</div>
                                  }
                                ]
                              },
                            },
                            {
                              x: 0.975,
                              y: 0.495,
                              map: {
                                src: '/assets/map-waimes.png',
                                pointOfInterests: [
                                  {
                                    x: 0.1,
                                    y: 0.40,
                                    element: (
                                      <div className={styles.direction}>
                                        <div className={styles.directionLeft} style={{ fontSize }}>Malmedy</div>
                                      </div>
                                    )
                                  },
                                  {
                                    x: 0.875,
                                    y: 0.295,
                                    element: (
                                      <div className={styles.direction}>
                                        <div className={styles.directionRight} style={{ transform: 'rotate(-36deg)', fontSize }}>Bütgenbach</div>
                                      </div>
                                    )
                                  },
                                  {
                                    x: 0.57,
                                    y: 0.8,
                                    element: <div className={styles.destination} style={{ fontSize }}>Maison communale de Waimes</div>
                                  },
                                  {
                                    x: 0.3,
                                    y: 0.69,
                                    element: <div className={styles.parking}>P</div>
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ];
              return (
                <div style={{ width, position: 'relative' }}>
                  <InteractiveMap
                    src='/assets/map-world.png'
                    subMaps={maps}
                  />
                </div>
              );
            }}
          </AutoSizer>
        </Col>
      </Row>
    </Container>
  );
}