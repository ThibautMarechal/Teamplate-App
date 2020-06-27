import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <h4>Accès à la Cérémonie</h4>
          <iframe
            title="Accès Journée"
            width="100%"
            height="350"
            scrolling="no"
            style={{ border: '1px solid black' }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.1025404930114755%2C50.41116360355812%2C6.116702556610107%2C50.41719363606948&amp;layer=mapnik&amp;marker=50.414178715753245%2C6.109621524810791"
          />
          <br />
          <small>
            <a 
              href="https://www.openstreetmap.org/?mlat=50.39317&amp;mlon=5.93172#map=18/50.39317/5.93172"
              target="_blank"
              rel="noopener noreferrer"
            >
              Afficher une carte plus grande
            </a>
          </small>
        </Col>
        <Col lg={6} md={12}>
          <h4>Accès à la journée</h4>
          <iframe
            title="Accès Journée"
            width="100%"
            height="350"
            scrolling="no"
            style={{ border: '1px solid black' }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=5.928180813789369%2C50.39165987737961%2C5.935261845588685%2C50.394676230571775&amp;layer=mapnik&amp;marker=50.3931680779639%2C5.931721329689026"
          />
          <br />
          <small>
            <a 
              href="https://www.openstreetmap.org/?mlat=50.39317&amp;mlon=5.93172#map=18/50.39317/5.93172"
              target="_blank"
              rel="noopener noreferrer"
            >
              Afficher une carte plus grande
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  );
}