import React from 'react';
import styles from './Aurelie.module.scss';

const charade: Array<[string, string | undefined]> = [
  ['Mon premier est un liquide que nous buvons', 'Mais je préfère quand même le vin blanc avec un bon apéro !'],
  ['Mon second est la deuxième note de la gamme en musique', 'Ouii, j’adore chanter'],
  ['Mon troisième est ce dans quoi nous passons nos nuits pour dormir', 'Surtout après une longue randonnée avec ma Maya chérie, mon chien alias : l’antilope des Ardennes !'],
  ['Mon quatrième est la dénomination des cadeaux que l’on peut gagner à une tombola', 'Haha, moi ça me fait plutôt penser au lot de conneries du marié qu’on doit supporter à chaque repèt !'],
  ['Mon cinquième est la note juste avant mon deuxième', 'Ben oui quoi, je vous ai déjà dit que j’adorais chanter. D’ailleurs, vous ai-je parlé de mon plus grand rêve qui était de chanter du Disney dans une comédie musicale ?'],
  ['Mon sixième est la première syllabe du mot meringue', 'Quelqu’un a parlé de dessert ?!'],
  ['Mon tout est une témoin d’enfer !', undefined],
]

export default () => {
  return (
    <>
      <h3 className="text-primary">Aurélie Lodomez (Moi en une charade)</h3>
      <hr />
      {charade.map(phrase => (
        <>
          <p>
            {phrase[0]}
          </p>
          <p className={styles.thinking}>
            {phrase[1] ? `* ${phrase[1]}` : null}
          </p>
        </>
      ))}
    </>
  )
}