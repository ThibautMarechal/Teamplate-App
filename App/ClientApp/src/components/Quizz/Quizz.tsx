import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Input, FormGroup, Label, Row, Col, Button } from 'reactstrap';

import { Question } from '../../data/quizz';

type Props = {
  questions: Question[];
}

export default ({ questions }: Props) => {
  const [play, { stop }] = useSound('./assets/sound/qpuc.mp3');
  const [activeQuestion, setActiveQuestion] = useState(-1);
  const [responses, setResponses] = useState<string[]>([]);
  const [activeResponse, setActiveResponse] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const goodResponse = responses.map((response, index) => questions[index].truth === response).filter(Boolean).length

  const handleNext = () => {
    if (activeResponse) {
      setResponses(r => [...r, activeResponse]);
      setActiveResponse(null);
      setActiveQuestion(q => q + 1);
    }
  }

  const handleChecked = (checked: boolean, response: string) => {
    if (checked) setActiveResponse(response);
  }

  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  return (
    <Row>
      {!submitted ? (
        <Col md={{ offset: 2, size: 8 }} xs={12}>
          {activeQuestion === -1 && (
            <Button  color="primary" onClick={() => setActiveQuestion(0)}>Commencer</Button>
          )}
          {activeQuestion >= 0 && (
            <>
              <h4>{questions[activeQuestion].question}</h4>
              <hr />
              {questions[activeQuestion].responses?.map(response => (
                <FormGroup>
                  <Input
                    type="radio"
                    name={questions[activeQuestion].question}
                    id={response}
                    onChange={({ target: { checked } }) => handleChecked(checked, response)}
                    checked={activeResponse === response}
                  />
                  <Label for={response}>{response}</Label>
                </FormGroup>
              ))}
              {activeQuestion < questions.length - 1 ? (
                <Button onClick={handleNext} color="primary" disabled={!activeResponse}>Question suivante</Button>
              ) : (
                <Button onClick={() => setSubmitted(true)} color="primary" disabled={!activeResponse}>Soumettre le Quizz</Button>
              )}
            </>
          )}
        </Col>
      ) : (
          <Col md={{ offset: 2, size: 8 }} xs={12}>
            {goodResponse === 10 ? (
              <h4>10/10 Parfait! Tu nous connais aussi bien que Thibaut qui avait les réponses debuit le début !</h4>
            ) : goodResponse > 8 ? (
              <h4>{goodResponse}/10 Presque parfait!</h4>
            ) : goodResponse > 3 ? (
              <h4>{goodResponse}/10 ! Je suis sur que tu peux mieux faire <span role="img" aria-label="smiley">😊</span></h4>
            ): (
              <h4>{goodResponse}/10 ! Il faut cliquer sur les bonnes réponses <span role="img" aria-label="smiley">😜</span></h4>
            )}
          </Col>
        )
      }
    </Row >
  )
}