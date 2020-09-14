import React from 'react';

const tags: string[] = [
  'Amoureuse',
  'Maman extraordinaire',
  'Déterminée',
  'Adore tous les animaux du monde (Mais surtout les chevaux, les chiens, les chats, les biquettes, les daims, …)',
  'Raffole des sushis',
  'Pétille lorsqu’elle entend le mot « mariage »',
  'Un peu fêtarde',
  'Sensible',
  'Toujours à l’affut du dernier bon plan shopping pour la garde-robe de sa fille',
  'Eternelle retardataire',
  'Généreuse'
];


export default () => {
  return (
    <>
      <h3>Jennifer en quelques mots</h3>
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </>
  )
}