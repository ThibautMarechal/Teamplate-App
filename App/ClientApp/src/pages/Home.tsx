import React from 'react';
import cn from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import style from './Home.module.scss';
import useSound from 'use-sound';

export default () => {
  const [play, { stop }] = useSound('./assets/sound/ring.mp3', { volume: 0.1 });

  return (
    <Container className={style.main}>
      <Row>
        <Col xs={12} md={6}>
          <img src="./assets/laurier-2.png" alt="laurier" className={style.laurierImg}/>
          <img src="./assets/voute.png" alt="voute" className={style.vouteImg}/>
          <h2 className={cn(style.title, "text-primary")}>On se marie!</h2>
          Après onze années d'amour<br/>
          Des aventures que vous avez pu suivre de près ou de loin<br/>
          La construction de notre nid douillet<br/>
          Il était temps de se dire<br/>
          <h4 className="text-primary" onMouseEnter={() => play()} onMouseLeave={() => stop()} style={{ textAlign: 'end'}}>OUI</h4>
          C'est avec emotion que nous vous invitons à venir partager une journée de bonheur.<br/>
          Nous nous marions<br/>
          <h4 className="text-primary" style={{ textAlign: 'end'}}>le 23 janvier 2021</h4>
        </Col>
        <Col xs={12} md={{ size: 5, offset: 1}}>
          <img
            src="./assets/main.jpg" 
            alt="Sylvie-et-Laurent"
            className={style.mainImg}
          />
        </Col>
      </Row>
    </Container>
  )
}