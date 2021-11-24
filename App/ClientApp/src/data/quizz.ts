export type Question = {
  question: string;
  responses: string[];
  truth: string;
}

const quizz: Question[] = [
    {
        question: "Combien de façades possède la maison de Sylvie et Laurent",
        responses: [
            "8",
            "12",
            "14"
        ],
        truth: "14",
    },
    {
        question: "Où habitait Laurent avant d’emménager avec Sylvie ?",
        responses: [
            "Sourbrodt",
            "Faymonville",
            "Waimes "
        ],
        truth: "Faymonville",
    },
    {
        question: "Quelle est la date d’anniversaire de couple de Sylvie et Laurent ?",
        responses: [
            "7 Août",
            "14 Août",
            "15 Août"
        ],
        truth: "14 Août",
    },
    {
        question: "A quel endroit Sylvie et Laurent ont-ils décidé de passer leur lune de miel ?",
        responses: [
            "En France, dans un hôtel qu’ils ont réservé dans les Vosges",
            "En Ardenne, dans un gîte Ardennes étape",
            "En Ecosse, ils ont organisé un circuit de randonnées"
        ],
        truth: "En Ardenne, dans un gîte Ardennes étape",
    },
    {
        question: "Laurent agrandit sa collection de saxophones. Quelle fut sa dernière acquisition ?",
        responses: [
            "Un soprano",
            "Un baryton",
            "Un alto "
        ],
        truth: "Un soprano",
    },
    {
        question: "A quelle date la construction de leur maison a-t-elle officiellement commencé (terrassement) ?",
        responses: [
            "21/03/2019",
            "8/04/2019",
            "18/04/2019"
        ],
        truth: "8/04/2019",
    },
    {
        question: "Lors de leur stage à Libramont, Sylvie a réussi à emmener Laurent et Joel à la conférence d'un peintre. Quel était le sujet de cette conférence ?",
        responses: [
            "La représentation d'un nu masculin",
            "Etude de l'évolution d'une goutte de peinture soumise à la gravité sur une toile",
            "Les chats au fusain"
        ],
        truth: "Etude de l'évolution d'une goutte de peinture soumise à la gravité sur une toile",
    },
    {
        question: "Quelle est la pointure de Laurent ?",
        responses: [
            "37",
            "38",
            "39"
        ],
        truth: "38",
    },
    {
        question: "Quel est le plat préféré de Sylvie ?",
        responses: [
            "Des sushis",
            "Une raclette",
            "Du couscous"
        ],
        truth: "Des sushis",
    },
    {
        question: "Quand Laurent fait-il le plus de blagues comme il sait si bien les faire ?",
        responses: [
            "Quand il a bu",
            "Quand il a faim",
            "Quand il est fatigué (soi-disant)"
        ],
        truth: "Quand il est fatigué (soi-disant)",
    }
];

export default quizz;