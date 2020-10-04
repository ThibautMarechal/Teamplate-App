import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Input, FormGroup, Label, Row, Col, Button } from 'reactstrap';
import Api from '../../Api'

import { Question } from '../../data/quizz';

type Props = {
  questions: Question[];
}

export default ({ questions }: Props) => {
  const [play, { stop }] = useSound('./assets/sound/qpuc-intro.mp3');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(-1);
  const [responses, setResponses] = useState<string[]>([]);
  const [activeResponse, setActiveResponse] = useState<string | null>(null)
  
  const handleNext = () => {
    if(activeResponse){
      setResponses(r => [...r, activeResponse]);
      setActiveResponse(null);
      setActiveQuestion(q => q + 1);
    }
  }

  const handleSubmit = () => {
    Api.post('/api/play/submit', {
      firstName,
      lastName,
      responses: [...responses, activeResponse]
    })
  }

  const handleChecked = (checked: boolean, response: string) => {
    if(checked) setActiveResponse(response);
  }
  
  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  return (
    <Row>
      <Col md={{ offset: 2, size: 8 }}>
        {activeQuestion === -1 && (
          <>
            <FormGroup>
              <Label for="firstName">Prénom *</Label>
              <Input
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">Nom *</Label>
              <Input
                name="firstName"
                id="firstName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </FormGroup>
            <Button disabled={!firstName || !lastName} color="primary" onClick={() => setActiveQuestion(0)}>Commencer</Button>
          </>
        )}
        {activeQuestion >= 0 && (
          <>
            <h4>{questions[activeQuestion].question}</h4>
            <hr/>
            {questions[activeQuestion].responses?.map(response => (
              <FormGroup>
                <Input
                  type="radio"
                  name={questions[activeQuestion].question}
                  id={response}
                  onChange={({ target: { checked }}) => handleChecked(checked, response)}
                  checked={activeResponse === response}
                />
                <Label for={response}>{response}</Label>
              </FormGroup>
            ))}
            {questions[activeQuestion].responses === undefined && (
              <FormGroup>
                <Input
                  name="question subsidiaire"
                  id="question subsidiaire"
                  onChange={({ target: { value }}) => setActiveResponse(value)}
                />
            </FormGroup>
            )}
            {questions[activeQuestion].responses !== undefined ? (
              <Button onClick={handleNext} color="primary" disabled={!activeResponse}>Question suivante</Button>
            ): (
              <Button onClick={handleSubmit} color="primary" disabled={!activeResponse}>Soumettre le Quizz</Button>
            )}
          </>
        )}
      </Col>
    </Row>
  )
}