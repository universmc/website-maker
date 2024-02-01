const testsData = [
{
  "id": "phase-6",
  "nom": "Tests et Assurance Qualité",
  "prompt": "Assurez la qualité et la fiabilité du site à travers une série de tests rigoureux.",
  "taches": [
    {
      "id": "tache-51",
      "nom": "Tests Fonctionnels",
      "actions": [
        { "id": "action-104", "description": "Vérifier la conformité des fonctionnalités avec les spécifications", "etat": "Planifié" },
        { "id": "action-105", "description": "Effectuer des tests manuels et automatisés sur toutes les fonctionnalités", "etat": "Planifié" }
      ],
      "prompt": "Comment chaque fonctionnalité peut-elle être testée pour garantir son bon fonctionnement ?",
      "dateDebut": "2023-06-04T00:00:00Z",
      "dateFin": "2023-06-06T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/functional-tests"
    },
    {
      "id": "tache-52",
      "nom": "Tests d'Utilisabilité",
      "actions": [
        { "id": "action-106", "description": "Organiser des sessions de tests avec des utilisateurs réels", "etat": "Planifié" },
        { "id": "action-107", "description": "Analyser les feedbacks pour identifier les problèmes d'UX/UI", "etat": "Planifié" }
      ],
      "prompt": "Quels aspects de l'UX/UI nécessitent des améliorations pour une meilleure expérience utilisateur ?",
      "dateDebut": "2023-06-07T00:00:00Z",
      "dateFin": "2023-06-09T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/usability-tests"
    },
    {
      "id": "tache-53",
      "nom": "Tests de Performance",
      "actions": [
        { "id": "action-108", "description": "Utiliser des outils comme Lighthouse pour évaluer les performances", "etat": "Planifié" },
        { "id": "action-109", "description": "Optimiser les éléments impactant négativement les performances", "etat": "Planifié" }
      ],
      "prompt": "Comment le site peut-il être optimisé pour charger rapidement et fonctionner de manière fluide ?",
      "dateDebut": "2023-06-10T00:00:00Z",
      "dateFin": "2023-06-12T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/performance-tests"
    },
    {
      "id": "tache-54",
      "nom": "Tests de Sécurité",
      "actions": [
        { "id": "action-110", "description": "Effectuer des audits de sécurité pour identifier les vulnérabilités", "etat": "Planifié" },
        { "id": "action-111", "description": "Mettre en œuvre des corrections pour les failles de sécurité découvertes", "etat": "Planifié" }
      ],
      "prompt": "Quelles mesures sont prises pour garantir la sécurité du site contre les attaques potentielles ?",
      "dateDebut": "2023-06-13T00:00:00Z",
      "dateFin": "2023-06-15T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/security-tests"
    },
    {
      "id": "tache-55",
      "nom": "Tests de Charge",
      "actions": [
        { "id": "action-112", "description": "Simuler des charges élevées pour tester la robustesse du site", "etat": "Planifié" },
        { "id": "action-113", "description": "Analyser les performances sous charge et ajuster la configuration si nécessaire", "etat": "Planifié" }
      ],
      "prompt": "Comment le site réagit-il sous des charges élevées et quelles optimisations sont nécessaires pour maintenir les performances ?",
      "dateDebut": "2023-06-16T00:00:00Z",
      "dateFin": "2023-06-18T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/load-tests"
    },
    {
      "id": "tache-56",
      "nom": "Tests A/B",
      "actions": [
        { "id": "action-114", "description": "Concevoir et exécuter des tests A/B pour optimiser les conversions", "etat": "Planifié" },
        { "id": "action-115", "description": "Analyser les résultats et implémenter les améliorations", "etat": "Planifié" }
      ],
      "prompt": "Quels éléments du site bénéficieraient le plus des tests A/B pour améliorer l'engagement utilisateur ?",
      "dateDebut": "2023-06-19T00:00:00Z",
      "dateFin": "2023-06-21T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/ab-tests"
    },
    {
      "id": "tache-57",
      "nom": "Révision du Code",
      "actions": [
        { "id": "action-116", "description": "Effectuer des revues de code régulières pour maintenir la qualité", "etat": "Planifié" },
        { "id": "action-117", "description": "Encourager les meilleures pratiques de développement parmi l'équipe", "etat": "Planifié" }
      ],
      "prompt": "Comment les revues de code contribuent-elles à améliorer la maintenabilité et la qualité globale du projet ?",
      "dateDebut": "2023-06-22T00:00:00Z",
      "dateFin": "2023-06-24T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/code-review"
    },
    {
      "id": "tache-58",
      "nom": "Correction des Bugs",
      "actions": [
        { "id": "action-118", "description": "Identifier les bugs à travers les tests et les retours utilisateurs", "etat": "Planifié" },
        { "id": "action-119", "description": "Prioriser et corriger les bugs pour améliorer la stabilité", "etat": "Planifié" }
      ],
      "prompt": "Quelle stratégie est mise en place pour identifier et corriger efficacement les bugs ?",
      "dateDebut": "2023-06-25T00:00:00Z",
      "dateFin": "2023-06-27T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/bug-fixing"
    },
    {
      "id": "tache-59",
      "nom": "Validation W3C",
      "actions": [
        { "id": "action-120", "description": "Valider le HTML et le CSS du site avec les validateurs W3C", "etat": "Planifié" },
        { "id": "action-121", "description": "Corriger les erreurs de validation pour assurer la conformité aux standards", "etat": "Planifié" }
      ],
      "prompt": "Comment la conformité aux standards W3C améliore-t-elle la compatibilité et l'accessibilité du site ?",
      "dateDebut": "2023-06-28T00:00:00Z",
      "dateFin": "2023-06-30T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/w3c-validation"
    },
    {
      "id": "tache-60",
      "nom": "Documentation",
      "actions": [
        { "id": "action-122", "description": "Documenter le développement et les fonctionnalités du site", "etat": "Planifié" },
        { "id": "action-123", "description": "Créer des guides d'utilisation pour les utilisateurs et l'équipe de maintenance", "etat": "Planifié" }
      ],
      "prompt": "Quelle documentation est essentielle pour assurer une compréhension claire et une maintenance efficace du site ?",
      "dateDebut": "2023-07-01T00:00:00Z",
      "dateFin": "2023-07-03T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/documentation"
    }
  ]
}
];
export default testsData