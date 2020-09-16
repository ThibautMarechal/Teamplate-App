import React from 'react';

const passport: { [i: string]: string } = {
  'Nom': 'Di Marzio',
  'Prénom': 'Robin',
  'Nationalité': 'Belgo-italiano-fandechocochô',
  'Date de naissance': '2/09/1995',
  'Taille': 'Plus grand que Laurent (facile)',
  'Sexe': 'Rose',
  'Yeux': 'Séducteurs',
  'Métier': 'Personne ne sait (prof ; mais toujours étudiant ?)',
  'Hobby': 'Musicien passionné',
  'Situation amoureuse': 'En quatuor avec : Géraldine, le saxophone et un piano',
  'Caractéristique': 'Investi et fier de tout ce qu’il entreprend',
  'Activité': 'Guindailleur aguerri',
  'Résidence': 'secondaire : Le canapé des futurs mariés',
  'Dress code': 'Belles chemises à fleurs',
  'Misson': 'Témoin de l’autre pingouin'
}

export default () => {
  return (
    <>
      <h3 className="text-primary">Le passport de Robin</h3>
      {Object.entries(passport).map(([key, value]) => (
        <p>{key} : {value}</p>
      ))}
    </>
  )
}