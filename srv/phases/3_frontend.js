const frontendData = [
{
    "id": "phase-3",
    "nom": "Développement Frontend",
    "prompt": "Réalisez le design interactif et responsive du site en suivant les meilleures pratiques.",
    "taches": [
      {
        "id": "tache-21",
        "nom": "Configuration de l'Environnement de Développement",
        "actions": [
          { "id": "action-44", "description": "Installer l'IDE et les plugins nécessaires", "etat": "Planifié" },
          { "id": "action-45", "description": "Configurer les outils de build et de compilation", "etat": "Planifié" }
        ],
        "prompt": "Quels outils et environnements sont nécessaires pour un développement efficace ?",
        "dateDebut": "2023-03-03T00:00:00Z",
        "dateFin": "2023-03-04T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/env-setup"
      },
      {
        "id": "tache-22",
        "nom": "Codage HTML",
        "actions": [
          { "id": "action-46", "description": "Créer la structure HTML des pages", "etat": "Planifié" },
          { "id": "action-47", "description": "Utiliser des balises sémantiques pour améliorer le SEO", "etat": "Planifié" }
        ],
        "prompt": "Comment structurer le contenu pour une meilleure sémantique et accessibilité ?",
        "dateDebut": "2023-03-05T00:00:00Z",
        "dateFin": "2023-03-07T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/html-coding"
      },
      {
        "id": "tache-23",
        "nom": "Stylisation avec CSS/SCSS",
        "actions": [
          { "id": "action-48", "description": "Définir les styles globaux et les variables", "etat": "Planifié" },
          { "id": "action-49", "description": "Appliquer les styles en respectant la charte graphique", "etat": "Planifié" }
        ],
        "prompt": "Quelles techniques de stylisation assureront une cohérence visuelle à travers le site ?",
        "dateDebut": "2023-03-08T00:00:00Z",
        "dateFin": "2023-03-10T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/css-styling"
      },
      {
        "id": "tache-24",
        "nom": "Responsive Design",
        "actions": [
          { "id": "action-50", "description": "Utiliser Flexbox et Grid pour des layouts flexibles", "etat": "Planifié" },
          { "id": "action-51", "description": "Tester et ajuster les designs sur différents appareils", "etat": "Planifié" }
        ],
        "prompt": "Comment assurer une expérience utilisateur optimale sur tous les appareils ?",
        "dateDebut": "2023-03-11T00:00:00Z",
        "dateFin": "2023-03-13T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/responsive-design"
      },
      {
        "id": "tache-25",
        "nom": "Animation et Interactivité",
        "actions": [
          { "id": "action-52", "description": "Concevoir des animations subtiles pour améliorer l'UX", "etat": "Planifié" },
          { "id": "action-53", "description": "Intégrer des éléments interactifs avec JavaScript", "etat": "Planifié" }
        ],
        "prompt": "Quelles animations et interactions peuvent enrichir l'expérience utilisateur sans nuire à la performance ?",
        "dateDebut": "2023-03-14T00:00:00Z",
        "dateFin": "2023-03-16T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/animations-interactivity"
      },
      {
        "id": "tache-26",
        "nom": "Optimisation des Images",
        "actions": [
          { "id": "action-54", "description": "Compresser les images pour réduire le temps de chargement", "etat": "Planifié" },
          { "id": "action-55", "description": "Utiliser des formats d'image modernes comme WebP", "etat": "Planifié" }
        ],
        "prompt": "Comment optimiser les images pour améliorer les performances sans sacrifier la qualité ?",
        "dateDebut": "2023-03-17T00:00:00Z",
        "dateFin": "2023-03-19T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/image-optimization"
      },
      {
        "id": "tache-27",
        "nom": "Intégration des Polices Web",
        "actions": [
          { "id": "action-56", "description": "Sélectionner des polices web adaptées au design", "etat": "Planifié" },
          { "id": "action-57", "description": "Intégrer les polices via des services comme Google Fonts", "etat": "Planifié" }
        ],
        "prompt": "Quelles polices et méthodes d'intégration favorisent à la fois l'esthétique et la performance ?",
        "dateDebut": "2023-03-20T00:00:00Z",
        "dateFin": "2023-03-22T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/web-fonts"
      },
      {
        "id": "tache-28",
        "nom": "Validation du Code",
        "actions": [
          { "id": "action-58", "description": "Utiliser des validateurs HTML et CSS pour vérifier le code", "etat": "Planifié" },
          { "id": "action-59", "description": "Corriger les erreurs et avertissements signalés", "etat": "Planifié" }
        ],
        "prompt": "Comment assurer que le code respecte les standards actuels du web ?",
        "dateDebut": "2023-03-23T00:00:00Z",
        "dateFin": "2023-03-25T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/code-validation"
      },
      {
        "id": "tache-29",
        "nom": "Tests Cross-Browser",
        "actions": [
          { "id": "action-60", "description": "Tester le site sur différents navigateurs et appareils", "etat": "Planifié" },
          { "id": "action-61", "description": "Ajuster le CSS et le JavaScript pour corriger les incompatibilités", "etat": "Planifié" }
        ],
        "prompt": "Quelles stratégies garantissent la compatibilité du site sur toutes les plateformes ?",
        "dateDebut": "2023-03-26T00:00:00Z",
        "dateFin": "2023-03-28T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/cross-browser-testing"
      },
      {
        "id": "tache-30",
        "nom": "Accessibilité",
        "actions": [
          { "id": "action-62", "description": "Vérifier la conformité aux standards WCAG", "etat": "Planifié" },
          { "id": "action-63", "description": "Apporter les modifications nécessaires pour améliorer l'accessibilité", "etat": "Planifié" }
        ],
        "prompt": "Comment rendre le site accessible à tous les utilisateurs, y compris ceux ayant des besoins spécifiques ?",
        "dateDebut": "2023-03-29T00:00:00Z",
        "dateFin": "2023-03-31T00:00:00Z",
        "etat": "Planifié",
        "urlOutput": "/path/to/output/accessibility"
      }
    ]
}
];
export default frontendData