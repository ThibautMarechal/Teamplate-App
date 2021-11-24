export type WeddingEvent = {
  hour: string;
  comment?: boolean;
  description: string;
  icon: string;
  iconAlt: string;
  sound: string;
  volume: number;
}

const weddingEvents: WeddingEvent[] = [
  {
    hour: '12h30',
    comment: true,
    description: 'Cérémonie civile à la commune de Waimes',
    icon: './assets/icon-commune.png',
    iconAlt: './assets/icon-commune-alt.png',
    sound: './assets/sound/bell.mp3',
    volume: 0.1,

  },
  {
    hour: '13h15',
    comment: true,
    description: 'Suivez-nous',
    icon: './assets/icon-car.png',
    iconAlt: './assets/icon-car-alt.png',
    sound: './assets/sound/car.mp3',
    volume: 0.1,
  },
  {
    hour: '14h00',
    comment: true,
    description: 'Cérémonie laïque à l\'Abbaye de Stavelot',
    icon: './assets/icon-ring.png',
    iconAlt: './assets/icon-ring-2.png',
    sound: './assets/sound/oui-devos.mp3',
    volume: 0.2,
  },
  {
    hour: '14h45',
    description: 'Souriez !',
    icon: './assets/icon-picture.png',
    iconAlt: './assets/icon-picture-alt.png',
    sound: './assets/sound/picture.mp3',
    volume: 0.1,
  },
  {
    hour: '15h00',
    description: 'Vin d\'honneur',
    icon: './assets/icon-drink.png',
    iconAlt: './assets/icon-drink-alt.png',
    sound: './assets/sound/drink.mp3',
    volume: 1,
  },
  {
    hour: '17h30',
    description: 'Repas',
    icon: './assets/icon-dinner.png',
    iconAlt: './assets/icon-dinner-alt.png',
    sound: './assets/sound/dinner.mp3',
    volume: 0.1,
  },
  {
    hour: '21h00',
    description: 'Soirée',
    icon: './assets/icon-music.png',
    iconAlt: './assets/icon-music-alt.png',
    sound: './assets/sound/music.mp3',
    volume: 0.2,
  }
];

export default weddingEvents