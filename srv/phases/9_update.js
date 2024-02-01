const updateData = [
{
  "id": "phase-9",
  "nom": "Maintenance et Mises à Jour",
  "prompt": "Assurez la pérennité et l'évolution du site en mettant en œuvre une stratégie de maintenance proactive.",
  "taches": [
    {
      "id": "tache-81",
      "nom": "Surveillance Continue",
      "actions": [
        { "id": "action-164", "description": "Mettre en place des outils de monitoring pour surveiller l'état du site", "etat": "Planifié" },
        { "id": "action-165", "description": "Analyser les alertes et résoudre rapidement les incidents", "etat": "Planifié" }
      ],
      "prompt": "Quelles méthodes de surveillance assurent une détection et une résolution rapides des problèmes ?",
      "dateDebut": "2023-09-02T00:00:00Z",
      "dateFin": "2023-09-04T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/continuous-monitoring"
    },
    {
      "id": "tache-82",
      "nom": "Mises à Jour de Sécurité",
      "actions": [
        { "id": "action-166", "description": "Vérifier et appliquer les mises à jour de sécurité pour tous les composants", "etat": "Planifié" },
        { "id": "action-167", "description": "Effectuer des audits de sécurité réguliers pour identifier les vulnérabilités", "etat": "Planifié" }
      ],
      "prompt": "Comment maintenir une posture de sécurité forte à travers des mises à jour régulières ?",
      "dateDebut": "2023-09-05T00:00:00Z",
      "dateFin": "2023-09-07T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/security-updates"
    },
    {
      "id": "tache-83",
      "nom": "Optimisation Continue",
      "actions": [
        { "id": "action-168", "description": "Identifier les opportunités d'amélioration des performances", "etat": "Planifié" },
        { "id": "action-169", "description": "Appliquer les améliorations pour augmenter la vitesse et l'efficacité", "etat": "Planifié" }
      ],
      "prompt": "Quelles stratégies d'optimisation continue peuvent améliorer l'expérience utilisateur et les performances du site ?",
      "dateDebut": "2023-09-08T00:00:00Z",
      "dateFin": "2023-09-10T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/continuous-optimization"
    },
    {
      "id": "tache-84",
      "nom": "Ajout de Fonctionnalités",
      "actions": [
        { "id": "action-170", "description": "Recueillir les besoins des utilisateurs pour de nouvelles fonctionnalités", "etat": "Planifié" },
        { "id": "action-171", "description": "Développer et intégrer de nouvelles fonctionnalités au site", "etat": "Planifié" }
      ],
      "prompt": "Comment l'ajout de nouvelles fonctionnalités peut-il être aligné avec les attentes des utilisateurs et les objectifs du site ?",
      "dateDebut": "2023-09-11T00:00:00Z",
      "dateFin": "2023-09-13T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/feature-additions"
    },
    {
      "id": "tache-85",
      "nom": "Tests de Régression",
      "actions": [
        { "id": "action-172", "description": "Effectuer des tests de régression pour s'assurer que les nouvelles mises à jour n'affectent pas les fonctionnalités existantes", "etat": "Planifié" },
        { "id": "action-173", "description": "Identifier et corriger les éventuels problèmes introduits par les mises à jour", "etat": "Planifié" }
      ],
      "prompt": "Comment les tests de régression contribuent-ils à maintenir la stabilité du site après les mises à jour ?",
      "dateDebut": "2023-09-14T00:00:00Z",
      "dateFin": "2023-09-16T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/regression-testing"
    },
    {
      "id": "tache-86",
      "nom": "Sauvegardes Régulières",
      "actions": [
        { "id": "action-174", "description": "Configurer des sauvegardes automatiques pour les données et les fichiers critiques du site", "etat": "Planifié" },
        { "id": "action-175", "description": "Vérifier périodiquement l'intégrité des sauvegardes et la possibilité de restauration", "etat": "Planifié" }
      ],
      "prompt": "Quelle importance les sauvegardes régulières jouent-elles dans la stratégie de continuité d'activité du site ?",
      "dateDebut": "2023-09-17T00:00:00Z",
      "dateFin": "2023-09-19T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/regular-backups"
    },
    {
      "id": "tache-87",
      "nom": "Révision du Contenu",
      "actions": [
        { "id": "action-176", "description": "Examiner et mettre à jour le contenu pour assurer son actualité et sa pertinence", "etat": "Planifié" },
        { "id": "action-177", "description": "Optimiser le contenu existant pour améliorer le SEO et l'engagement utilisateur", "etat": "Planifié" }
      ],
      "prompt": "Comment la révision régulière du contenu contribue-t-elle à garder le site attractif et pertinent pour les utilisateurs ?",
      "dateDebut": "2023-09-20T00:00:00Z",
      "dateFin": "2023-09-22T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/content-revision"
    },
    {
      "id": "tache-88",
      "nom": "Formation Continue",
      "actions": [
        { "id": "action-178", "description": "Organiser des sessions de formation pour que l'équipe reste à jour avec les dernières technologies et pratiques", "etat": "Planifié" },
        { "id": "action-179", "description": "Encourager l'apprentissage continu et le partage de connaissances au sein de l'équipe", "etat": "Planifié" }
      ],
      "prompt": "En quoi la formation continue de l'équipe de développement joue-t-elle un rôle crucial dans l'évolution du site ?",
      "dateDebut": "2023-09-23T00:00:00Z",
      "dateFin": "2023-09-25T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/continuous-education"
    },
    {
      "id": "tache-89",
      "nom": "Support Utilisateur",
      "actions": [
        { "id": "action-180", "description": "Mettre en place un système de support efficace pour aider les utilisateurs et répondre à leurs questions", "etat": "Planifié" },
        { "id": "action-181", "description": "Analyser les demandes de support pour identifier les améliorations potentielles du site", "etat": "Planifié" }
      ],
      "prompt": "Comment le support utilisateur contribue-t-il à l'amélioration continue du site et à la satisfaction des utilisateurs ?",
      "dateDebut": "2023-09-26T00:00:00Z",
      "dateFin": "2023-09-28T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/user-support"
    },
    {
      "id": "tache-90",
      "nom": "Analyse et Reporting",
      "actions": [
        { "id": "action-182", "description": "Analyser les données d'utilisation pour comprendre le comportement des utilisateurs", "etat": "Planifié" },
        { "id": "action-183", "description": "Générer des rapports périodiques pour les parties prenantes sur les performances et l'utilisation du site", "etat": "Planifié" }
      ],
      "prompt": "Quel rôle l'analyse des données et le reporting jouent-ils dans la prise de décision stratégique pour le site ?",
      "dateDebut": "2023-09-29T00:00:00Z",
      "dateFin": "2023-10-01T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/analysis-reporting"
    }
  ]
}
];
export default updateData
