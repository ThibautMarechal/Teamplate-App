export type Question = {
  question: string;
  responses?: string[];
}

const quizz: Question[] = [
  {
    question: "Quel est le restaurant le plus fréquenté par Laurent et Sylvie ?",
    responses: [
      "Le Sushi time",
      "Le Huggy’s bar",
      "L’Esprit Sain"
    ]
  },
  {
    question: "Où habitait Laurent avant d’emménager avec Sylvie ?",
    responses: [
      "Sourbrodt",
      "Faymonville",
      "Waimes "
    ]
  }, 
  {
    question: "Depuis son arrivée chez Ardennes étape le 14/08/2015, combien de certificats médicaux Sylvie a-t-elle rentré ?",
    responses: [
      "1",
      "3",
      "5"
    ]
  },
  {
    question: "A quel endroit Sylvie et Laurent ont-ils décidé de passer leur lune de miel ?",
    responses: [
      "En France, dans un hôtel qu’ils ont réservé dans les Vosges",
      "En Ardenne, dans un gîte Ardennes étape",
      "En Ecosse, ils ont organisé un circuit de randonnées"
    ]
  },
  {
    question: "Laurent agrandit sa collection de saxophones. Quelle fut sa dernière acquisition ?",
    responses: [
      "Un soprano",
      "Un baryton",
      "Un alto "
    ]
  },
  {
    question: "A quelle date la construction de leur maison a-t-elle officiellement commencé (terrassement) ?",
    responses: [
      "21/03/2019",
      "8/04/2019",
      "18/04/2019"
    ]
  },
  {
    question: "Lors de leur stage à Libramont, Sylvie a réussi à emmener Laurent et Joel à la conférence d'un peintre. Quel était le sujet de cette conférence ?",
    responses: [
      "La représentation d'un nu masculin",
      "Etude de l'évolution d'une goutte de peinture soumise à la gravité sur une toile",
      "Les chats au fusain"
    ]
  },
  {
    question: "Quelle est la pointure de Laurent ?",
    responses: [
      "37",
      "38",
      "39"
    ]
  },
  {
    question: "Quel est le plat préféré de Sylvie ?",
    responses: [
      "Des sushis",
      "Une raclette",
      "Du couscous"
    ]
  },
  {
    question: "Quand Laurent fait-il le plus de blagues comme il sait si bien les faire ?",
    responses: [
      "Quand il a bu",
      "Quand il a faim",
      "Quand il est fatigué (soi-disant)"
    ]
  },
  {
    question: "Question subsidiaire : Combien de bougies auront été nécessaires à la décoration de la salle et de son couloir adjacent ?"
  }
];

export default quizz;