const backendData = [
{
  "id": "phase-4",
  "nom": "Développement Backend",
  "prompt": "Construisez le cœur fonctionnel du site avec une attention particulière à la sécurité, la performance et l'intégrabilité.",
  "taches": [
    {
      "id": "tache-31",
      "nom": "Choix de la Stack Technologique",
      "actions": [
        { "id": "action-64", "description": "Évaluer les besoins du projet", "etat": "Planifié" },
        { "id": "action-65", "description": "Sélectionner la stack technologique appropriée", "etat": "Planifié" }
      ],
      "prompt": "Quelle stack technologique offre le meilleur équilibre entre performance, facilité d'utilisation et support communautaire ?",
      "dateDebut": "2023-04-01T00:00:00Z",
      "dateFin": "2023-04-03T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/tech-stack"
    },
    {
      "id": "tache-32",
      "nom": "Configuration de la Base de Données",
      "actions": [
        { "id": "action-66", "description": "Choisir le système de gestion de base de données", "etat": "Planifié" },
        { "id": "action-67", "description": "Configurer la base de données", "etat": "Planifié" }
      ],
      "prompt": "Comment configurer la base de données pour garantir performance et sécurité ?",
      "dateDebut": "2023-04-04T00:00:00Z",
      "dateFin": "2023-04-06T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/database-setup"
    },
    {
      "id": "tache-33",
      "nom": "Développement des API",
      "actions": [
        { "id": "action-68", "description": "Définir les endpoints nécessaires", "etat": "Planifié" },
        { "id": "action-69", "description": "Développer et documenter les API", "etat": "Planifié" }
      ],
      "prompt": "Quelles API doivent être mises en place pour soutenir la communication entre le frontend et le backend ?",
      "dateDebut": "2023-04-07T00:00:00Z",
      "dateFin": "2023-04-10T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/api-development"
    },
    {
      "id": "tache-34",
      "nom": "Authentification et Sécurité",
      "actions": [
        { "id": "action-70", "description": "Implémenter des systèmes d'authentification", "etat": "Planifié" },
        { "id": "action-71", "description": "Renforcer la sécurité des données et des sessions", "etat": "Planifié" }
      ],
      "prompt": "Quelles stratégies d'authentification et de sécurité doivent être adoptées pour protéger les utilisateurs et les données ?",
      "dateDebut": "2023-04-11T00:00:00Z",
      "dateFin": "2023-04-14T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/auth-security"
    },
        {
      "id": "tache-35",
      "nom": "Logique Métier",
      "actions": [
        { "id": "action-72", "description": "Définir les règles métier du site", "etat": "Planifié" },
        { "id": "action-73", "description": "Programmer les fonctionnalités clés", "etat": "Planifié" }
      ],
      "prompt": "Comment la logique métier supporte-t-elle les objectifs fonctionnels du site ?",
      "dateDebut": "2023-04-15T00:00:00Z",
      "dateFin": "2023-04-18T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/business-logic"
    },
    {
      "id": "tache-36",
      "nom": "Intégration des Services Tiers",
      "actions": [
        { "id": "action-74", "description": "Identifier les services tiers nécessaires", "etat": "Planifié" },
        { "id": "action-75", "description": "Intégrer et configurer les API tiers", "etat": "Planifié" }
      ],
      "prompt": "Quels services tiers améliorent les fonctionnalités du site sans compromettre la performance ?",
      "dateDebut": "2023-04-19T00:00:00Z",
      "dateFin": "2023-04-21T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/third-party-services"
    },
    {
      "id": "tache-37",
      "nom": "Optimisation des Requêtes",
      "actions": [
        { "id": "action-76", "description": "Analyser et optimiser les requêtes de la base de données", "etat": "Planifié" },
        { "id": "action-77", "description": "Mettre en cache les résultats des requêtes fréquentes", "etat": "Planifié" }
      ],
      "prompt": "Comment les requêtes peuvent-elles être optimisées pour une récupération des données rapide et efficace ?",
      "dateDebut": "2023-04-22T00:00:00Z",
      "dateFin": "2023-04-24T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/query-optimization"
    },
    {
      "id": "tache-38",
      "nom": "Tests Unitaires et d'Intégration",
      "actions": [
        { "id": "action-78", "description": "Écrire des tests unitaires pour les composants clés", "etat": "Planifié" },
        { "id": "action-79", "description": "Effectuer des tests d'intégration pour valider le flux complet", "etat": "Planifié" }
      ],
      "prompt": "Comment les tests assurent-ils la fiabilité et la robustesse du backend ?",
      "dateDebut": "2023-04-25T00:00:00Z",
      "dateFin": "2023-04-28T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/unit-integration-tests"
    },
    {
      "id": "tache-39",
      "nom": "Configuration du Serveur",
      "actions": [
        { "id": "action-80", "description": "Sélectionner et configurer l'environnement serveur", "etat": "Planifié" },
        { "id": "action-81", "description": "Configurer les paramètres de sécurité du serveur", "etat": "Planifié" }
      ],
      "prompt": "Quelle configuration serveur garantit les meilleures performances et sécurité pour l'application ?",
      "dateDebut": "2023-04-29T00:00:00Z",
      "dateFin": "2023-05-01T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/server-configuration"
    },
    {
      "id": "tache-40",
      "nom": "Déploiement",
      "actions": [
        { "id": "action-82", "description": "Préparer l'environnement de production pour le déploiement", "etat": "Planifié" },
        { "id": "action-83", "description": "Déployer l'application et effectuer des tests post-déploiement", "etat": "Planifié" }
      ],
      "prompt": "Quelles étapes doivent être suivies pour un déploiement réussi et sécurisé ?",
      "dateDebut": "2023-05-02T00:00:00Z",
      "dateFin": "2023-05-04T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/deployment"
    }
  ]
}
];
export default backendData
