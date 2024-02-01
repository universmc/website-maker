const conceptionData = [
    {
      id: "phase-1",
      nom: "Planification et Conception",
      promptPhase: "Définissez clairement les objectifs et la charte graphique du site.",
      taches: [
        {
          id: "tache-1",
          nom: "Définition des Objectifs",
          promptTache: "Quels sont les principaux objectifs du site web ?",
          actions: [
            { 
              id: "action-1", 
              description: "Identifier les buts principaux", 
              etat: "Terminé",
              promptAction: "Déterminez les objectifs principaux du site pour orienter le développement."
            },
            // Ajoutez d'autres actions ici...
          ],
          dateDebut: new Date("2023-01-01").toISOString(),
          dateFin: new Date(new Date("2023-01-01").getTime() + (2 * 24 * 60 * 60 * 1000)).toISOString(),
          duration: 2, // Durée en jours
          etat: "Terminé",
          urlOutput: "/path/to/output/objectifs",
          hashCode: "unique_hash_code_1" // Exemple de hash-code unique
        },
        // Ajoutez d'autres tâches ici...
      ]
    },
    // Ajoutez d'autres phases ici...
  ];
  
  export default conceptionData;
  