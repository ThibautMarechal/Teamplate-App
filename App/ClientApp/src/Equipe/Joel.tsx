import React from 'react';
import styles from './Joel.module.scss'

const fable: string[] = [
  'Maître Joël sur un chémel perché',
  'Tenait en ses mains un breuvage',
  'Maître traquenard, par l’odeur alléché',
  'Lui tint à peu près ce langage :',
  'Eh ! Bonjour Monsieur Gazon',
  'Que vous êtes investi dans toutes vos passions !',
  'Sans mentir, si votre sournoiserie',
  'Se rapporte à votre musicologie',
  'Vous êtes la malice incarnée de ce comptoir',
  'Le grand Jo se senti plus rusé qu’un renard',
  'Et pour montrer sa fourberie',
  'Il sourit, … mais recommanda une autre demi',
  'Le traquenard triompha et dit : Mon bon Monsieur,',
  'Apprenez que tout flatteur',
  'Vit aux dépends de celui qui l’écoute',
  'Cette leçon vaut bien une bière en plus, sans doute',
  'Cheers !'
]

export default () => {
  return (
    <>
      <h3 className="text-primary">Joël en une fable</h3>
      <div className={styles.fable}>
        {fable.map(vers => (
          <p>{vers}</p>
        ))}
      </div>
    </>
  )
}