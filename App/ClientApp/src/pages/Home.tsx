import React from 'react';
import cn from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import style from './Home.module.scss';
import useSound from 'use-sound';

export default () => {
  const [play, { stop }] = useSound('./assets/sound/oui-devos.mp3', { volume: 0.2 });

  return (
    <Container className={style.main}>
      <Row>
        <Col xs={12} md={{ size: 4, offset: 4}}>
          <img
            src="./assets/main.jpg" 
            alt="Sylvie-et-Laurent"
            className={style.mainImg}
          />
        </Col>
      </Row>
      <Row>
        <br/>
      </Row>
      <Row>
        <Col xs={12} md={{ size: 6, offset: 3}}>
          <img src="./assets/voute.png" alt="voute" className={style.vouteImg}/>
            <h2 className={cn(style.title, "text-primary")}>On se marie!</h2>
            Après onze années d'amour<br/>
            Des aventures que vous avez pu suivre de près ou de loin<br/>
            La construction de notre nid douillet<br/>
            Il était temps de se dire<br/>
            <h2 className={cn("text-primary", style.highlightRight)} onMouseEnter={() => play()} onMouseLeave={() => stop()}>Oui</h2>
            C'est avec emotion que nous vous invitons à venir partager une journée de bonheur.<br/>
            Nous nous marions<br/><br />
            <h2 className={cn("text-primary", style.highlightRight)}>le 23 janvier 2021</h2>
        </Col>
      </Row>
    </Container>
  )
}