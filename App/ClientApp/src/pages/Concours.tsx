import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { Container, Row, Col, Button } from 'reactstrap'
import questions from '../data/quizz'
import Quizz from '../components/Quizz'
import ContactProblem from '../components/ContactProblem'
import Api from '../Api';
import { AxiosError } from 'axios';

export default () => {
  const canParticipate = useQuery<boolean, AxiosError>(
    'can-participate', 
    () => Api.get('/api/play/can-participate').then(({ data }) => data),
    { retry: 0, refetchOnWindowFocus: false }
  );
  const [isParticipating, setIsParticipating] = useState(false);
  const handleParticipate = () => {
    setIsParticipating(true)
  }
  return (
    <Container>
      {!isParticipating ? (
        <Row>
          <Col md={{ offset: 2, size: 8 }} xs={12}>
            {canParticipate.isLoading ?
              null
              : canParticipate.data === true ?
                <Button onClick={handleParticipate} color="primary">Je veux Participer !</Button>
                : canParticipate.data === false ?
                  <h4>Vous avez déjà participé au concours ! Les résultats seront annoncés le jour-J.</h4>
                  : canParticipate.error?.response?.status !== undefined ?
                    <ContactProblem subject={`Error ${canParticipate.error?.response?.status} /api/play/can-participate`} />
                    :
                    <ContactProblem subject="Unknown Error /api/play/can-participate" />
            }
          </Col>
        </Row>
      ) : (
          <Quizz questions={questions} />
        )}
    </Container>
  );
}