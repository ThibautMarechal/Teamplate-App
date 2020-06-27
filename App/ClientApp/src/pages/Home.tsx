import React, { useState } from 'react';
import { Container, Row, Col, Jumbotron, Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';
import style from './Home.module.scss';
import temoins from '../data/temoins'

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === temoins.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? temoins.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  return (
    <Container className={style.main}>
      <Row>
        <Col xs={12} md={6}>
          <Jumbotron style={{ borderColor: '#550A21', borderWidth: 1, borderStyle: 'solid'}}>
            <h1>On se marie !</h1>
            <p>bla bla bla bli bla blou ect..</p>
          </Jumbotron>
        </Col>
        <Col xs={12} md={6}>
          <img
            src="./assets/main.jpg" 
            alt="Sylvie-et-Laurent"
            className={style.mainImg}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Témoins</h2>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            enableTouch
          >
            <CarouselIndicators items={temoins} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {temoins.map(t => (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={t.name}
              >
                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                  <div style={{ backgroundImage: `url(https://picsum.photos/seed/${t.name}/640/640)`, filter: 'blur(10px)', backgroundSize: '110% 110%', position: 'absolute', top: -10, left: -10, right: -10, bottom: -10, zIndex: -1}}/>
                  <img src={`https://picsum.photos/seed/${t.name}/640/640`} alt={t.name} style={{ width: '50%', marginLeft: '25%'}}/>
                </div>
                <CarouselCaption captionText="bal bal bli blou bla" captionHeader={t.name} />
              </CarouselItem>
            ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}