import { AxiosError } from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { Container, Row, Col, Button } from 'reactstrap'
import questions from '../data/quizz'
import Quizz from '../components/Quizz'
import Api from '../Api';

const ContactProblem = ({ subject }: { subject: string }) => <p>Une erreur est survenue. Si cela persiste, veuillez contacter <a href={`mailto:contact@thibautmarechal.be?subject=${subject}`}>Thibaut (contact@thibautmarechal.be)</a> 🤔</p>

export default () => {
  const canParticipate = useQuery<void, AxiosError>('can-particiapte', () => Api.get('/api/play/can-participate'), { retry: 0, refetchOnWindowFocus: false });
  const [isParticipating, setIsParticipating] = useState(false);
  const handleParticipate = () => {
    setIsParticipating(true)
  }
  return (
    <Container>
      {!isParticipating ? (
        <Row>
          <Col>
            {canParticipate.isLoading ?
              null
            : canParticipate.isSuccess ?
              <Button onClick={handleParticipate} color="primary">Je veux Participer !</Button>
            : canParticipate.error?.response?.status === 401 ?
              <h4>Vous avez déjà participé au concour ! Les réultats seront annoncé le jour-J.</h4>
            : canParticipate.error?.response?.status === 500 ?
              <ContactProblem subject="Error 500 /api/play/can-participate" />
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