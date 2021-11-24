import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const carrousel1 = [
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

const carrousel2 = [
  '/assets/article-construction/image25.jpg',
  '/assets/article-construction/image26.jpg',
  '/assets/article-construction/image27.jpg',
  '/assets/article-construction/image28.jpg',
  '/assets/article-construction/image29.jpg',
  '/assets/article-construction/image30.jpg',
  '/assets/article-construction/image31.jpg',
  '/assets/article-construction/image32.jpg',
  '/assets/article-construction/image33.jpg',
  '/assets/article-construction/image34.jpg'
]

const SimpleCarousel = ({ urls }: { urls: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === urls.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? urls.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={urls.map(src => ({ src }))} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {urls.map(src => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={src}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={src} alt="construction" style={{ maxHeight: '50vh', margin: 'auto' }} />
            </div>
          </CarouselItem>
        )
      })}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  )
}

export default () => {
  return (
    <>
      <p>Il était une fois un terrain vide, sur les hauteurs de Waimes.<br />
      Ici:
      </p>
      <img src="/assets/article-construction/image1.png" alt="1" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>Un jeune couple, enfin, plutôt un vieux couple de jeunes, eu le coup de cœur et décida d’y construire son nid. Car oui, Sylvie et Laurent sont jeunes mais leur couple dure depuis 11 ans.</p>
      <p>Quel endroit idéal, à 2 minutes à pied pour Laurent et proche d’une excellente pâtisserie pour Sylvie, sans parler des nombreux restos pour ce couple épicurien.</p>
      <p>Il y a des chats dans le quartier dont Sylvie a vite fait la connaissance. Certains n’hésiteront pas à marquer leur passage dans la chape toute fraiche.</p>
      <img src="/assets/article-construction/image2.jpeg" alt="2" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <img src="/assets/article-construction/image3.jpeg" alt="3" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>Après quelques (nombreux) dessins et plans de Laurent, il n’y avait plus qu’à commencer à construire. Avec un bureau pour Laurent, un atelier de peinture pour Sylvie, 3 chambres, un séjour lumineux avec une mezzanine, une magnifique cuisine ouverte, une grande buanderie, un beau garage, … tout ce qu’il faut pour accueillir Laurent, Sylvie et leur chat Cookie. </p>
      <p>Cookie participe aussi aux plans, devis, travaux sur l’ordinateur, mais à sa manière !</p>
      <img src="/assets/article-construction/image4.jpeg" alt="4" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>On vous a déjà dit que Laurent a construit 3 maisons ? Il n’était plus à une maison près et ils décidèrent de construire eux-mêmes la maison de leur rêve. Quel projet ! </p>
      <p>À la force de leurs bras, Laurent, Sylvie, et leur famille suivirent les directives minutieuses de Laurent. Quelle équipe !</p>
      <img src="/assets/article-construction/image5.jpeg" alt="5" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>Heureusement qu’il y a quelques pauses bien méritées durant le chantier. On dit merci aux mamans pour les bons dîners, gouters et soupers.</p>
      <img src="/assets/article-construction/image6.jpeg" alt="6" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <img src="/assets/article-construction/image7.jpeg" alt="7" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>Ça, c’était la partie fun de la construction <span role="img" aria-label="smiley">😁</span></p>
      <p>N’oublions pas les semaines de « congés » en juillet et en août pour les premières étapes du chantier, sous la canicule, où ils travaillèrent de 5h à 13h pour éviter les grosses chaleurs.</p>
      <p>Les journées sous la drache aussi… Rien ne les arrête !</p>
      <img src="/assets/article-construction/image8.jpeg" alt="8" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>Vous les attendiez, voici les photos de A à T car il manque encore de T à Z</p>
      <SimpleCarousel urls={carrousel1} />
      <p>Finalement, grâce au report du mariage, merci au Covid, la descente de Sylvie en robe de mariée aura bien lieu chez elle, rue Ol'rou à Waimes😊<br />Et je peux ainsi terminer l'article sur la maison, de A à Z, et pas de A à T, où on n'avait même pas encore commencé l'intérieur.</p>
      <SimpleCarousel urls={carrousel2} />
      <p>Nous voici donc 10 mois plus tard, où l'extérieur est fini, même la terrasse ! important pour le BBQ qui suivra lors du déménagement.<br />
        Sylvie a même un bureau pour télétravailler, ça aurait été pratique pour le confinement.<br />
        Laurent peut désormais aller à pied au bureau, et retourner manger chez lui, avec sa chère future femme lorsqu'elle télétravaille.<br />
        Pour en revenir à l'aménagement intérieur, j'ai même pu aider ! Je ne sais pas comment le prendre, mais Sylvie et Laurent m'ont donné la tâche de placer le plancher du grenier, le truc pour se casser le dos et qui ne se verrait même pas. Il valait peut-être mieux, ils ont certainement pressenti que j'allais inverser le sens de certaines planches d'OSB pour qu'on puisse bien voir le code barre.<br />
        Heureusement, le chef de Chantier, Maître Laurent, ne m'a pas fait recommencer et aura une pensée pour ses ouvriers incompétents lorsqu'il ira dans le grenier.<br />
        Depuis, Sylvie et Laurent ont un toit, une cuisine, une salle de bain, un immense garage pour la cacahuète de Sylvie, et même une immense arrière-cuisine pour les litières.
      </p>
      <p>Eh oui, deux litières pour deux chats maintenant. Au déménagement, Plume est tombée du ciel pour se faire adopter, elle avait tout compris pour ne pas perdre ses voisins ! Pas le choix que de recueillir et d'adopter ce mignon petit chaton. #jesuisfièredetrelamarrainedeplume</p>
      <img src="/assets/article-construction/plume.jpg" alt="plume" style={{ maxWidth: '100%', maxHeight: '50vh', margin: 5 }} />
      <p>Ils vécurent heureux et firent beaucoup d'enfants.<br />
      Fin. </p>
    </>
  )
}