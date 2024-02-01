const lancementData = [
{
  "id": "phase-8",
  "nom": "Déploiement et Lancement",
  "prompt": "Préparez et exécutez le lancement du site en vous assurant que tout est prêt pour un fonctionnement optimal.",
  "taches": [
    {
      "id": "tache-71",
      "nom": "Configuration de l'Environnement de Production",
      "actions": [
        { "id": "action-144", "description": "Configurer les serveurs, bases de données et services nécessaires", "etat": "Planifié" },
        { "id": "action-145", "description": "Vérifier les paramètres de sécurité et de performance", "etat": "Planifié" }
      ],
      "prompt": "Comment assurer que l'environnement de production est sécurisé et optimisé pour le déploiement ?",
      "dateDebut": "2023-08-03T00:00:00Z",
      "dateFin": "2023-08-05T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/production-environment-setup"
    },
    {
      "id": "tache-72",
      "nom": "Tests Pré-Déploiement",
      "actions": [
        { "id": "action-146", "description": "Exécuter des tests complets dans l'environnement de production", "etat": "Planifié" },
        { "id": "action-147", "description": "Corriger les derniers problèmes avant le déploiement final", "etat": "Planifié" }
      ],
      "prompt": "Quels tests sont cruciaux pour s'assurer que le site est prêt pour le déploiement public ?",
      "dateDebut": "2023-08-06T00:00:00Z",
      "dateFin": "2023-08-08T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/pre-deployment-testing"
    },
    {
      "id": "tache-73",
      "nom": "Déploiement Automatisé",
      "actions": [
        { "id": "action-148", "description": "Mettre en place des pipelines CI/CD pour l'automatisation du déploiement", "etat": "Planifié" },
        { "id": "action-149", "description": "Tester le processus de déploiement automatisé pour garantir la fiabilité", "etat": "Planifié" }
      ],
      "prompt": "Comment l'automatisation du déploiement contribue-t-elle à un processus de lancement plus fluide et fiable ?",
      "dateDebut": "2023-08-09T00:00:00Z",
      "dateFin": "2023-08-11T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/automated-deployment"
    },
    {
      "id": "tache-74",
      "nom": "Surveillance Post-Déploiement",
      "actions": [
        { "id": "action-150", "description": "Installer des outils de surveillance pour détecter et alerter les problèmes", "etat": "Planifié" },
        { "id": "action-151", "description": "Analyser les logs et métriques pour identifier les problèmes post-déploiement", "etat": "Planifié" }
      ],
      "prompt": "Quelle stratégie de surveillance garantit une intervention rapide en cas de problèmes après le déploiement ?",
      "dateDebut": "2023-08-12T00:00:00Z",
      "dateFin": "2023-08-14T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/post-deployment-monitoring"
    },
    {
      "id": "tache-75",
      "nom": "Plan de Bascul",
      "actions": [
        { "id": "action-152", "description": "Établir un plan de rollback en cas de défaillance critique après le déploiement", "etat": "Planifié" },
        { "id": "action-153", "description": "Tester le plan de rollback pour s'assurer de son efficacité", "etat": "Planifié" }
      ],
      "prompt": "Comment le plan de basculement assure-t-il la continuité du service en cas d'urgence ?",
      "dateDebut": "2023-08-15T00:00:00Z",
      "dateFin": "2023-08-17T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/rollback-plan"
    },
    {
      "id": "tache-76",
      "nom": "Annonce et Marketing",
      "actions": [
        { "id": "action-154", "description": "Développer une stratégie de marketing pour le lancement", "etat": "Planifié" },
        { "id": "action-155", "description": "Préparer et diffuser le matériel promotionnel", "etat": "Planifié" }
      ],
      "prompt": "Quelles stratégies de marketing et de communication maximisent la visibilité lors du lancement ?",
      "dateDebut": "2023-08-18T00:00:00Z",
      "dateFin": "2023-08-20T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/marketing-announcement"
    },
    {
      "id": "tache-77",
      "nom": "Collecte de Feedbacks",
      "actions": [
        { "id": "action-156", "description": "Mettre en place des canaux pour recueillir les retours des utilisateurs", "etat": "Planifié" },
        { "id": "action-157", "description": "Analyser les feedbacks pour identifier les améliorations potentielles", "etat": "Planifié" }
      ],
      "prompt": "Comment les retours des premiers utilisateurs peuvent-ils être utilisés pour améliorer continuellement le site ?",
      "dateDebut": "2023-08-21T00:00:00Z",
      "dateFin": "2023-08-23T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/feedback-collection"
    },
    {
      "id": "tache-78",
      "nom": "Optimisation SEO",
      "actions": [
        { "id": "action-158", "description": "Vérifier et optimiser le contenu et la structure du site pour le SEO", "etat": "Planifié" },
        { "id": "action-159", "description": "S'assurer de l'indexation correcte du site par les moteurs de recherche", "etat": "Planifié" }
      ],
      "prompt": "Quelles actions SEO sont cruciales pour améliorer le classement et la visibilité du site ?",
      "dateDebut": "2023-08-24T00:00:00Z",
      "dateFin": "2023-08-26T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/seo-optimization"
    },
    {
      "id": "tache-79",
      "nom": "Engagement sur les Réseaux Sociaux",
      "actions": [
        { "id": "action-160", "description": "Utiliser les réseaux sociaux pour promouvoir le site et engager la communauté", "etat": "Planifié" },
        { "id": "action-161", "description": "Analyser l'engagement et ajuster les stratégies en conséquence", "etat": "Planifié" }
      ],
      "prompt": "Comment les réseaux sociaux peuvent-ils être utilisés efficacement pour augmenter le trafic et l'engagement des utilisateurs ?",
      "dateDebut": "2023-08-27T00:00:00Z",
      "dateFin": "2023-08-29T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/social-media-engagement"
    },
    {
      "id": "tache-80",
      "nom": "Analyse des Données",
      "actions": [
        { "id": "action-162", "description": "Intégrer des outils d'analyse pour suivre l'engagement et les conversions", "etat": "Planifié" },
        { "id": "action-163", "description": "Utiliser les données recueillies pour améliorer continuellement le site", "etat": "Planifié" }
      ],
      "prompt": "Comment l'analyse des données utilisateur peut-elle aider à optimiser l'expérience et à guider les futures décisions ?",
      "dateDebut": "2023-08-30T00:00:00Z",
      "dateFin": "2023-09-01T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/data-analysis"
    }
  ]
}
];
export default lancementData