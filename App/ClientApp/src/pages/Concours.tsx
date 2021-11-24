import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import questions from '../data/quizz'
import Quizz from '../components/Quizz'

export default () => {
  const [isParticipating, setIsParticipating] = useState(false);
  return (
    <Container>
      {!isParticipating ? (
        <Row>
          <Col md={{ offset: 2, size: 8 }} xs={12}>
            <h2 className="text-primary">Nous connaissez-vous vraiment ?</h2>
            <p>Participez à notre quizz! Aurélie a déjà remporté la surpise qui était le bouquet de la mariée. Il n'y a malheureusement plus rien à gagner...</p>
            <Button onClick={() => setIsParticipating(true)} color="primary">Je veux Participer quand même !</Button>
          </Col>
        </Row>
      ) : (
        <Quizz questions={questions} />
      )}
    </Container>
  );
}