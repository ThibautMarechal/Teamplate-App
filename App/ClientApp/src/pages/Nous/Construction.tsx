import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const constructionPhotosInCarrousel = [
  '/assets/article-construction/image9.jpeg',
  '/assets/article-construction/image10.jpeg',
  '/assets/article-construction/image11.jpeg',
  '/assets/article-construction/image12.jpeg',
  '/assets/article-construction/image13.jpeg',
  '/assets/article-construction/image14.jpeg',
  '/assets/article-construction/image15.jpeg',
  '/assets/article-construction/image16.jpeg',
  '/assets/article-construction/image17.jpeg',
  '/assets/article-construction/image18.jpg',
  '/assets/article-construction/image19.jpg',
  '/assets/article-construction/image20.jpg',
  '/assets/article-construction/image21.jpg',
  '/assets/article-construction/image22.jpg',
  '/assets/article-construction/image23.jpg',
  '/assets/article-construction/image24.jpg'
]

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === constructionPhotosInCarrousel.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? constructionPhotosInCarrousel.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = constructionPhotosInCarrousel.map(src => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={src}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={src} alt="construction" style={{ maxHeight: '70vh', margin: 'auto' }} />
        </div>
      </CarouselItem>
    )
  });
  return (
    <>
      <p>Il était une fois un terrain vide, sur les hauteurs de Waimes.<br />
      Ici:
      </p>
      <img src="/assets/article-construction/image1.png" alt="1" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <p>Un jeune couple, enfin, plutôt un vieux couple de jeunes, eu le coup de cœur et décida d’y construire son nid. Car oui, Sylvie et Laurent sont jeunes mais leur couple dure depuis 10 ans.</p>
      <p>Quel endroit idéal, à 2 minutes à pied pour Laurent et proche d’une excellente pâtisserie pour Sylvie, sans parler des nombreux restos pour ce couple épicurien.</p>
      <p>Il y a des chats dans le quartier dont Sylvie a vite fait la connaissance. Certains n’hésiteront pas à marquer leur passage dans la chape toute fraiche.</p>
      <img src="/assets/article-construction/image2.jpeg" alt="2" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <img src="/assets/article-construction/image3.jpeg" alt="3" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <p>Après quelques (nombreux) dessins et plans de Laurent, il n’y avait plus qu’à commencer à construire. Avec un bureau pour Laurent, un atelier de peinture pour Sylvie, 3 chambres, un séjour lumineux avec une mezzanine, une magnifique cuisine ouverte, une grande buanderie, un beau garage, … tout ce qu’il faut pour accueillir Laurent, Sylvie et leur chat Cookie. </p>
      <p>Cookie participe aussi aux plans, devis, travaux sur l’ordinateur, mais à sa manière !</p>
      <img src="/assets/article-construction/image4.jpeg" alt="4" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <p>On vous a déjà dit que Laurent a construit 3 maisons ? Il n’était plus à une maison près et ils décidèrent de construire eux-mêmes la maison de leur rêve. Quel projet ! </p>
      <p>À la force de leur bras, Laurent, Sylvie, et leur famille suivirent les directives minutieuses de Laurent. Quelle équipe !</p>
      <img src="/assets/article-construction/image5.jpeg" alt="5" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <p>Heureusement qu’il y a quelques pauses bien méritées durant le chantier. On dit merci aux mamans pour les bons dîners, gouters et soupers.</p>
      <img src="/assets/article-construction/image6.jpeg" alt="6" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <img src="/assets/article-construction/image7.jpeg" alt="7" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <p>Ça, c’était la partie fun de la construction <span role="img" aria-label="smiley">😁</span></p>
      <p>N’oublions pas les semaines de « congés » en juillet et en août pour les premières étapes du chantier, sous la canicule, où ils travaillèrent de 5h à 13h pour éviter les grosses chaleurs.</p>
      <p>Les journées sous la drache aussi… Rien ne les arrête !</p>
      <img src="/assets/article-construction/image8.jpeg" alt="8" style={{ maxWidth: '100%', maxHeight: '70vh', margin: 5 }} />
      <p>Vous les attendiez, voici les photos de A à T car il manque encore de T à Z</p>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={constructionPhotosInCarrousel.map(src => ({ src }))} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </>
  )
}