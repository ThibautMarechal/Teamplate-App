import React from 'react';
import cn from 'classnames'
import styles from './Fanny.module.scss';

type Response = {
  from: string;
  emotion?: string;
  message: string;
}
const LEON = 'Léon';
const TITI = 'Titi';

const fromClassName: { [i:string]: string } = {
  [LEON]: 'leon',
  [TITI]: 'titi'
}

const Avatars : { [i:string]: string } = {
  [LEON]: './assets/leon.jpg',
  [TITI]: './assets/titi.jpg'
}

const conversation: Response[] = [
  {
    from: LEON,
    message: 'Hé, pssst !'
  },
  {
    from: TITI,
    message: 'Rrr ?'
  },
  {
    from: LEON,
    emotion: 'interrogateur',
    message: 'Tu penses que c’est parce que notre humaine n’arrive jamais à vider son énorme tasse de thé à temps qu’elle est toujours en retard partout ? 🧐'
  },
  {
    from: TITI,
    emotion: 'riant',
    message: 'Peut-être ! N’empêche que c’est souvent ta faute aussi. Tu papotes tellement : tu passes ton temps à lui raconter ta vie. 😅'
  },
  {
    from: LEON,
    emotion: 'boudeur',
    message: 'Notre humaine comprend ce que je dis. Elle écoute mes histoires et est toujours là pour me faire un câlin quand j’en ai besoin. C’est ma meilleure amie. Tu peux pas comprendre. 🙄'
  },
  {
    from: TITI,
    emotion: 'fier',
    message: 'Moi au moins, je lui offre un cadeau tous les jours 😎. Je suis un chasseur exemplaire, contrairement à toi ! La preuve : elle me fait confiance pour dératiser tout le jardin. Toi, elle te lance sur les araignées quand elle en trouve dans la maison, et tu n’arrives même pas à les attraper : 😂🤣 ridicule !'
  },
  {
    from: LEON,
    message: 'En parlant de jardin, je me demande quand elle trouvera enfin ce qu’elle y cherche… Elle y passe ses journées à gratter partout. 🤪'
  },
  {
    from: TITI,
    emotion: 'curieux',
    message: 'Elle veut peut-être m’aider à créer un monde sans rongeurs ? Faudrait que je lui apprenne.'
  },
  {
    from: LEON,
    emotion: 's’esclaffant',
    message: 'Point de vue création, je pense qu’elle est plus douée pour sculpter dans des blocs ou du bois ! On a droit à une véritable exposition à la maison'
  },
  {
    from: TITI,
    message: 'Oh ! Il me semble qu’elle doit justement partir : Je vais m’installer sur ses genoux. Il ne faudrait quand même pas qu’elle soit à l’heure… 😈 😋'
  },
]

export default () => {
  return (
    <>
      <h3 className="text-primary">Fanny vue par ses chats</h3>
      {conversation.map(response => (
        <div className={cn(styles.response, styles[fromClassName[response.from]])}>
          <h4>
            <img className={styles.avatar} src={Avatars[response.from]} alt="avatar" />
            {response.from}
            {response.emotion ? <span className={styles.emotion}>({response.emotion})</span> : null}
          </h4>
          <div className={styles.message}><span>{response.message}</span></div>
        </div>
      ))}
      <hr />
    </>
  )
}