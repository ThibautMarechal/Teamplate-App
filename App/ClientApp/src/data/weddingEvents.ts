export type WeddingEvent = {
  hour: string;
  description: string;
  icon: string;
  sound: string;
  volume: number;
}

const weddingEvents: WeddingEvent[] = [
  {
    hour: '12h30',
    description: 'Cérémonie civile à la commune de Waimes',
    icon: './assets/icon-commune.png',
    sound: './assets/sound/bell.mp3',
    volume: 0.1
  },
  {
    hour: '13h15',
    description: 'Suivez-nous',
    icon: './assets/icon-car.png',
    sound: './assets/sound/car.mp3',
    volume: 0.1
  },
  {
    hour: '14h00',
    description: 'Cérémonie laïque à l\'Abbaye de Stavelot',
    icon: './assets/icon-ring.png',
    sound: './assets/sound/ring.mp3',
    volume: 0.2
  },
  {
    hour: '14h45',
    description: 'Souriez !',
    icon: './assets/icon-picture.png',
    sound: './assets/sound/picture.mp3',
    volume: 0.1
  },
  {
    hour: '15h00',
    description: 'Vin d\'honneur',
    icon: './assets/icon-drink.png',
    sound: './assets/sound/drink.mp3',
    volume: 1
  },
  {
    hour: '17h00',
    description: 'Repas',
    icon: './assets/icon-dinner.png',
    sound: './assets/sound/dinner.mp3',
    volume: 0.1
  },
  {
    hour: '20h30',
    description: 'Soirée',
    icon: './assets/icon-music.png',
    sound: './assets/sound/music.mp3',
    volume: 0.2
  }
];

export default weddingEvents