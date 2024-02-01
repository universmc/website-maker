const wireFramingData = [
{
  "id": "phase-2",
  "nom": "Architecture du Site et Wireframing",
  "prompt": "Organisez la structure et le design préliminaire du site.",
  "taches": [
    {
      "id": "tache-11",
      "nom": "Création du Sitemap",
      "actions": [
        { "id": "action-24", "description": "Identifier les principales sections du site", "etat": "Planifié" },
        { "id": "action-25", "description": "Développer la structure hiérarchique", "etat": "Planifié" }
      ],
      "prompt": "Quelle structure de site facilitera la navigation pour l'utilisateur ?",
      "dateDebut": "2023-02-01T00:00:00Z",
      "dateFin": "2023-02-03T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/sitemap"
    },
    {
      "id": "tache-12",
      "nom": "Définition des Parcours Utilisateurs",
      "actions": [
        { "id": "action-26", "description": "Définir les objectifs des utilisateurs", "etat": "Planifié" },
        { "id": "action-27", "description": "Cartographier les étapes des parcours", "etat": "Planifié" }
      ],
      "prompt": "Comment les utilisateurs vont-ils interagir avec le site ?",
      "dateDebut": "2023-02-04T00:00:00Z",
      "dateFin": "2023-02-06T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/parcours-utilisateurs"
    },
    {
      "id": "tache-13",
      "nom": "Esquisses à la Main",
      "actions": [
        { "id": "action-28", "description": "Réaliser des esquisses des pages clés", "etat": "Planifié" },
        { "id": "action-29", "description": "Valider l'agencement avec l'équipe", "etat": "Planifié" }
      ],
      "prompt": "Quel design préliminaire reflète le mieux la vision du projet ?",
      "dateDebut": "2023-02-07T00:00:00Z",
      "dateFin": "2023-02-09T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/esquisses"
    },
    {
      "id": "tache-14",
      "nom": "Outils de Wireframing",
      "actions": [
        { "id": "action-30", "description": "Sélectionner l'outil de wireframing approprié", "etat": "Planifié" },
        { "id": "action-31", "description": "Créer des wireframes détaillés pour chaque page", "etat": "Planifié" }
      ],
      "prompt": "Quels outils fourniront les wireframes les plus précis et utiles ?",
      "dateDebut": "2023-02-10T00:00:00Z",
      "dateFin": "2023-02-12T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/wireframes"
    },
    {
      "id": "tache-15",
      "nom": "Validation des Wireframes",
      "actions": [
        { "id": "action-32", "description": "Organiser des sessions de test avec les utilisateurs", "etat": "Planifié" },
        { "id": "action-33", "description": "Recueillir et analyser les retours", "etat": "Planifié" }
      ],
      "prompt": "Comment les wireframes sont-ils perçus par les utilisateurs potentiels ?",
      "dateDebut": "2023-02-13T00:00:00Z",
      "dateFin": "2023-02-15T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/validation-wireframes"
    },
        {
      "id": "tache-16",
      "nom": "Révisions Basées sur les Feedbacks",
      "actions": [
        { "id": "action-34", "description": "Analyser les retours des tests des wireframes", "etat": "Planifié" },
        { "id": "action-35", "description": "Appliquer les modifications nécessaires", "etat": "Planifié" }
      ],
      "prompt": "Quelles améliorations peuvent être apportées aux wireframes pour mieux répondre aux besoins des utilisateurs ?",
      "dateDebut": "2023-02-16T00:00:00Z",
      "dateFin": "2023-02-18T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/revisions-feedback"
    },
    {
      "id": "tache-17",
      "nom": "Hiérarchisation du Contenu",
      "actions": [
        { "id": "action-36", "description": "Déterminer l'importance relative du contenu", "etat": "Planifié" },
        { "id": "action-37", "description": "Organiser le contenu pour guider l'attention de l'utilisateur", "etat": "Planifié" }
      ],
      "prompt": "Comment le contenu doit-il être structuré pour faciliter la compréhension et l'engagement ?",
      "dateDebut": "2023-02-19T00:00:00Z",
      "dateFin": "2023-02-21T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/hierarchisation-contenu"
    },
    {
      "id": "tache-18",
      "nom": "Mise en Place des CTA",
      "actions": [
        { "id": "action-38", "description": "Identifier les actions souhaitées pour les utilisateurs", "etat": "Planifié" },
        { "id": "action-39", "description": "Intégrer les CTA de manière stratégique dans les wireframes", "etat": "Planifié" }
      ],
      "prompt": "Où et comment les appels à l'action doivent-ils être positionnés pour maximiser la conversion ?",
      "dateDebut": "2023-02-22T00:00:00Z",
      "dateFin": "2023-02-24T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/cta"
    },
    {
      "id": "tache-19",
      "nom": "Intégration des Éléments de SEO",
      "actions": [
        { "id": "action-40", "description": "Planifier l'optimisation SEO dès la conception des wireframes", "etat": "Planifié" },
        { "id": "action-41", "description": "Inclure des balises meta et des titres SEO-friendly", "etat": "Planifié" }
      ],
      "prompt": "Comment les éléments de SEO peuvent-ils être intégrés dès le début pour améliorer la visibilité du site ?",
      "dateDebut": "2023-02-25T00:00:00Z",
      "dateFin": "2023-02-27T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/seo-elements"
    },
    {
      "id": "tache-20",
      "nom": "Préparation pour la Transition vers les Maquettes",
      "actions": [
        { "id": "action-42", "description": "Finaliser les wireframes pour la transition", "etat": "Planifié" },
        { "id": "action-43", "description": "Préparer les assets et les éléments pour les designers", "etat": "Planifié" }
      ],
      "prompt": "Quels sont les éléments clés à finaliser dans les wireframes pour assurer une transition fluide vers les maquettes ?",
      "dateDebut": "2023-02-28T00:00:00Z",
      "dateFin": "2023-03-02T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/transition-maquettes"
    }
  ]
}
];
export default wireFramingData