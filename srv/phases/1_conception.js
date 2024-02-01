const conceptionData = [
  {
    id: "phase-1",
    nom: "Planification et Conception",
    description: "Cette phase couvre la définition des objectifs du site et la planification initiale.",
    promptPhase: "Définissez clairement les objectifs et la charte graphique du site.",
    taches: [
      {
        id: "tache-1",
        nom: "Définition des Objectifs",
        description: "Identifier et définir les buts principaux du site.",
        promptTache: "Quels sont les principaux objectifs du site web ?",
        actions: [
          {
            id: "action-1",
            nom: "Identifier les Objectifs Principaux",
            description: "Déterminer les buts principaux du site pour orienter son développement.",
            promptAction: "Définissez les objectifs clés que le site doit atteindre.",
            etat: "Terminé",
            etapes: [
              {
                id: "step-1",
                nom: "Définir la Mission",
                description: "Établir la raison d'être du site.",
                promptStep: "Quelle mission le site doit-il accomplir ?",
                etat: "Terminé"
              },
              {
                id: "step-2",
                nom: "Analyse du Marché",
                description: "Examiner le marché cible et les concurrents.",
                promptStep: "Comment se positionne le site par rapport à ses concurrents ?",
                etat: "Planifié"
              },
              // Ajoutez d'autres étapes selon les besoins...
            ],
            dateDebut: "2023-01-01T00:00:00Z",
            dateFin: "2023-01-03T00:00:00Z",
            duration: 2, // Durée en jours
            urlOutput: `/output/objectifs_${new Date().toISOString()}.txt`, // Génération dynamique du nom de fichier basé sur la date
            hashCode: btoa(`phase-1_tache-1_action-1`).substring(0, 12) // Génération simplifiée d'un hash-code
          },
          // Autres actions...
        ]
      },
      // Autres tâches...
    ]
  },
  // Autres phases...
];

export default conceptionData;
