const fonctionsData = [
{
  "id": "phase-5",
  "nom": "Intégration et Fonctionnalités Spécifiques",
  "prompt": "Finalisez l'intégration entre les composants du site et assurez la performance et l'accessibilité optimales.",
  "taches": [
    {
      "id": "tache-41",
      "nom": "Intégration Frontend-Backend",
      "actions": [
        { "id": "action-84", "description": "Connecter les API backend aux composants frontend", "etat": "Planifié" },
        { "id": "action-85", "description": "Valider le flux de données entre le frontend et le backend", "etat": "Planifié" }
      ],
      "prompt": "Comment l'intégration frontend-backend peut-elle être optimisée pour la fluidité et l'efficacité ?",
      "dateDebut": "2023-05-05T00:00:00Z",
      "dateFin": "2023-05-07T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/frontend-backend-integration"
    },
    {
      "id": "tache-42",
      "nom": "Fonctionnalités Dynamiques",
      "actions": [
        { "id": "action-86", "description": "Implémenter AJAX/Fetch pour des mises à jour asynchrones", "etat": "Planifié" },
        { "id": "action-87", "description": "Utiliser WebSocket pour une communication en temps réel", "etat": "Planifié" }
      ],
      "prompt": "Quelles fonctionnalités dynamiques améliorent l'interaction utilisateur sans compromettre les performances ?",
      "dateDebut": "2023-05-08T00:00:00Z",
      "dateFin": "2023-05-10T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/dynamic-features"
    },
    {
      "id": "tache-43",
      "nom": "Responsive et Adaptatif",
      "actions": [
        { "id": "action-88", "description": "Tester la réactivité sur différents appareils", "etat": "Planifié" },
        { "id": "action-89", "description": "Ajuster le CSS pour résoudre les problèmes de réactivité", "etat": "Planifié" }
      ],
      "prompt": "Comment garantir une expérience utilisateur cohérente sur tous les types d'appareils ?",
      "dateDebut": "2023-05-11T00:00:00Z",
      "dateFin": "2023-05-13T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/responsive-adaptive"
    },
    {
      "id": "tache-44",
      "nom": "UI/UX Finale",
      "actions": [
        { "id": "action-90", "description": "Peaufiner les éléments visuels et les interactions", "etat": "Planifié" },
        { "id": "action-91", "description": "Effectuer des tests d'utilisabilité pour recueillir des feedbacks", "etat": "Planifié" }
      ],
      "prompt": "Quels ajustements finaux peuvent être apportés pour améliorer l'expérience utilisateur ?",
      "dateDebut": "2023-05-14T00:00:00Z",
      "dateFin": "2023-05-16T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/ui-ux-final"
    },
        {
      "id": "tache-45",
      "nom": "Optimisation des Médias",
      "actions": [
        { "id": "action-92", "description": "Compresser et optimiser les images et vidéos", "etat": "Planifié" },
        { "id": "action-93", "description": "Utiliser des formats adaptés pour le web", "etat": "Planifié" }
      ],
      "prompt": "Comment optimiser les médias pour réduire les temps de chargement tout en conservant une haute qualité ?",
      "dateDebut": "2023-05-17T00:00:00Z",
      "dateFin": "2023-05-19T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/media-optimization"
    },
    {
      "id": "tache-46",
      "nom": "Compatibilité Cross-Browser",
      "actions": [
        { "id": "action-94", "description": "Tester l'application sur différents navigateurs", "etat": "Planifié" },
        { "id": "action-95", "description": "Corriger les problèmes de compatibilité", "etat": "Planifié" }
      ],
      "prompt": "Quelles approches garantissent que l'application fonctionne uniformément sur tous les navigateurs ?",
      "dateDebut": "2023-05-20T00:00:00Z",
      "dateFin": "2023-05-22T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/cross-browser-compatibility"
    },
    {
      "id": "tache-47",
      "nom": "Accessibilité",
      "actions": [
        { "id": "action-96", "description": "Vérifier la conformité aux normes WCAG", "etat": "Planifié" },
        { "id": "action-97", "description": "Apporter des ajustements pour améliorer l'accessibilité", "etat": "Planifié" }
      ],
      "prompt": "Comment rendre le site accessible à tous les utilisateurs, y compris ceux ayant des besoins particuliers ?",
      "dateDebut": "2023-05-23T00:00:00Z",
      "dateFin": "2023-05-25T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/accessibility"
    },
    {
      "id": "tache-48",
      "nom": "Localisation et Internationalisation",
      "actions": [
        { "id": "action-98", "description": "Préparer le site pour la prise en charge de plusieurs langues", "etat": "Planifié" },
        { "id": "action-99", "description": "Intégrer les outils de localisation", "etat": "Planifié" }
      ],
      "prompt": "Quels sont les éléments à considérer pour préparer le site à une audience globale ?",
      "dateDebut": "2023-05-26T00:00:00Z",
      "dateFin": "2023-05-28T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/localization-internationalization"
    },
    {
      "id": "tache-49",
      "nom": "SEO",
      "actions": [
        { "id": "action-100", "description": "Optimiser le contenu et les balises meta pour le SEO", "etat": "Planifié" },
        { "id": "action-101", "description": "Améliorer la structure du site pour les moteurs de recherche", "etat": "Planifié" }
      ],
      "prompt": "Comment optimiser efficacement le site pour un meilleur classement dans les résultats de recherche ?",
      "dateDebut": "2023-05-29T00:00:00Z",
      "dateFin": "2023-05-31T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/seo"
    },
    {
      "id": "tache-50",
      "nom": "Analyses et Suivi",
      "actions": [
        { "id": "action-102", "description": "Intégrer des outils d'analyse web", "etat": "Planifié" },
        { "id": "action-103", "description": "Configurer le suivi des conversions et des interactions utilisateurs", "etat": "Planifié" }
      ],
      "prompt": "Quels outils et métriques sont essentiels pour comprendre et améliorer l'engagement utilisateur ?",
      "dateDebut": "2023-06-01T00:00:00Z",
      "dateFin": "2023-06-03T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/analytics-tracking"
    }
  ]
}
];
export default fonctionsData