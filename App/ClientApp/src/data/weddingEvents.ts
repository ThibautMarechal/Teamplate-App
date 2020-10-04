export type WeddingEvent = {
  hour: string;
  comment?: boolean;
  description: string;
  icon: string;
  iconAlt: string;
  sound: string;
  volume: number;
  invited: string[];
  invitationPhrases: {[i: string]: string[]};
}

export const USERS = {
  AllIN: 'all-in',
  Vine: 'vine',
  NoCeremony: 'no-ceremony',
  Party: 'party'
}

export const InvitationPhrases: {[i: string]: string[]} = {
  [USERS.AllIN]: ['Nous vous invitons à venir célébrer notre union'],
  [USERS.Vine]: ['Les cérémonies civile et laïque se dérouleront dans l’intimité familiale.', 'Nous vous attendons à partir du vin d’honneur… et jusqu’au bout de la nuit !'],
  [USERS.NoCeremony]: ['Les cérémonies civile et laïque se dérouleront dans l’intimité familiale.', 'Nous vous invitons à notre vin d’honneur'],
  [USERS.Party]: ['Les cérémonies civile et laïque se dérouleront dans l’intimité familiale.','Nous vous invitons à venir danser avec nous… jusqu’au bout de la nuit !']
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
    invited: [USERS.AllIN],
    invitationPhrases: { 
      [USERS.AllIN]: InvitationPhrases[USERS.AllIN] 
    }
  },
  {
    hour: '13h15',
    comment: true,
    description: 'Suivez-nous',
    icon: './assets/icon-car.png',
    iconAlt: './assets/icon-car-alt.png',
    sound: './assets/sound/car.mp3',
    volume: 0.1,
    invited: [USERS.AllIN],
    invitationPhrases: {}
  },
  {
    hour: '14h00',
    comment: true,
    description: 'Cérémonie laïque à l\'Abbaye de Stavelot',
    icon: './assets/icon-ring.png',
    iconAlt: './assets/icon-ring-2.png',
    sound: './assets/sound/ring.mp3',
    volume: 0.2,
    invited: [USERS.AllIN],
    invitationPhrases: {}
  },
  {
    hour: '14h45',
    description: 'Souriez !',
    icon: './assets/icon-picture.png',
    iconAlt: './assets/icon-picture-alt.png',
    sound: './assets/sound/picture.mp3',
    volume: 0.1,
    invited: [USERS.AllIN],
    invitationPhrases: {}
  },
  {
    hour: '15h00',
    description: 'Vin d\'honneur',
    icon: './assets/icon-drink.png',
    iconAlt: './assets/icon-drink-alt.png',
    sound: './assets/sound/drink.mp3',
    volume: 1,
    invited: [USERS.AllIN, USERS.Vine, USERS.NoCeremony],
    invitationPhrases: { 
      [USERS.Vine]: InvitationPhrases[USERS.Vine],
      [USERS.NoCeremony]: InvitationPhrases[USERS.NoCeremony]
    }
  },
  {
    hour: '17h30',
    description: 'Repas',
    icon: './assets/icon-dinner.png',
    iconAlt: './assets/icon-dinner-alt.png',
    sound: './assets/sound/dinner.mp3',
    volume: 0.1,
    invited: [USERS.AllIN, USERS.NoCeremony],
    invitationPhrases: {}
  },
  {
    hour: '21h00',
    description: 'Soirée',
    icon: './assets/icon-music.png',
    iconAlt: './assets/icon-music-alt.png',
    sound: './assets/sound/music.mp3',
    volume: 0.2,
    invited: [USERS.AllIN, USERS.NoCeremony, USERS.Party],
    invitationPhrases: {
      [USERS.Party]: InvitationPhrases[USERS.Party]
    }
  }
];

export default weddingEvents