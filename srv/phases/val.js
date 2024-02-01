const conceptionData = [
  {
    id: "phase-1",
    nom: "Planification et Conception",
    description: "Cette phase couvre la définition des objectifs du site et la planification initiale.",
    promptPhase: "Définissez clairement les objectifs, la charte graphique et les éléments essentiels du site. Considérez les fonctionnalités clés, le public cible et les objectifs commerciaux.",
    taches: [
      {
        id: "tache-1",
        nom: "Définition des Objectifs",
        description: "Identifier et définir les buts principaux du site.",
        promptTache: "Déterminez les principaux objectifs du site. Quels résultats souhaitez-vous atteindre à travers ce site web ?",
        actions: [
          {
            id: "action-1",
            nom: "Identifier les Objectifs Principaux",
            description: "Déterminer les objectifs fondamentaux qui guideront le développement et la stratégie du site.",
            promptAction: "Listez les objectifs principaux du site. Comment ces objectifs soutiennent-ils la mission globale de votre organisation ou entreprise ?",
            etat: "Terminé",
            etapes: [
              {
                id: "step-1",
                name: "Définir la Mission du Site",
                description: "Établir la mission centrale que le site doit accomplir.",
                promptStep: "Quelle mission votre site doit-il accomplir ? Comment cela reflète-t-il la vision de votre entreprise ou organisation ?",
                etat: "Terminé"
              },
              {
                id: "step-2",
                name: "Identifier les Objectifs à Court et à Long Terme",
                description: "Spécifier les objectifs immédiats et futurs du site.",
                promptStep: "Quels sont les objectifs immédiats du site et comment envisagez-vous son évolution à l'avenir ?",
                etat: "Terminé"
              },
              // Ajoutez d'autres étapes selon les besoins...
            ]
          },
          // Ajoutez d'autres actions selon les besoins...
        ],
        dateDebut: new Date("2023-01-01").toISOString(),
        dateFin: new Date(new Date("2023-01-01").getTime() + (2 * 24 * 60 * 60 * 1000)).toISOString(),
        duration: 2, // Durée en jours
        etat: "Terminé",
        urlOutput: "/path/to/output/objectifs",
        hashCode: "unique_hash_code_1"
      },
      // Tâche 2, 3, etc.
    ]
  },
  // Phase 2, 3, etc.
];

export default conceptionData;
