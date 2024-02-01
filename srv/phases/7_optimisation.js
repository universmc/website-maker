const optimisationData = [
{
  "id": "phase-7",
  "nom": "Optimisation et Sécurité",
  "prompt": "Renforcez la performance et la sécurité du site pour assurer une expérience utilisateur optimale et une protection contre les menaces.",
  "taches": [
    {
      "id": "tache-61",
      "nom": "Minification des Ressources",
      "actions": [
        { "id": "action-124", "description": "Minifier le CSS et le JavaScript", "etat": "Planifié" },
        { "id": "action-125", "description": "Combiner les fichiers pour réduire les requêtes HTTP", "etat": "Planifié" }
      ],
      "prompt": "Comment la minification et la combinaison des ressources peuvent-elles réduire le temps de chargement ?",
      "dateDebut": "2023-07-04T00:00:00Z",
      "dateFin": "2023-07-06T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/resource-minification"
    },
    {
      "id": "tache-62",
      "nom": "Compression des Images",
      "actions": [
        { "id": "action-126", "description": "Compresser les images en conservant la qualité", "etat": "Planifié" },
        { "id": "action-127", "description": "Utiliser des formats d'image efficaces comme WebP", "etat": "Planifié" }
      ],
      "prompt": "Quelles techniques de compression d'images garantissent un équilibre entre qualité et performance ?",
      "dateDebut": "2023-07-07T00:00:00Z",
      "dateFin": "2023-07-09T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/image-compression"
    },
    {
      "id": "tache-63",
      "nom": "Utilisation de CDN",
      "actions": [
        { "id": "action-128", "description": "Sélectionner un CDN adapté aux besoins du site", "etat": "Planifié" },
        { "id": "action-129", "description": "Configurer le CDN pour servir les ressources statiques", "etat": "Planifié" }
      ],
      "prompt": "Comment l'utilisation d'un CDN peut-elle améliorer la disponibilité et la vitesse du site à l'échelle mondiale ?",
      "dateDebut": "2023-07-10T00:00:00Z",
      "dateFin": "2023-07-12T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/cdn-usage"
    },
        {
      "id": "tache-64",
      "nom": "Caching",
      "actions": [
        { "id": "action-130", "description": "Implémenter des stratégies de caching côté serveur et client", "etat": "Planifié" },
        { "id": "action-131", "description": "Configurer le cache des navigateurs pour les ressources statiques", "etat": "Planifié" }
      ],
      "prompt": "Comment le caching peut-il être utilisé pour améliorer significativement les performances du site ?",
      "dateDebut": "2023-07-13T00:00:00Z",
      "dateFin": "2023-07-15T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/caching"
    },
    {
      "id": "tache-65",
      "nom": "HTTPS et SSL",
      "actions": [
        { "id": "action-132", "description": "Mettre en place un certificat SSL pour sécuriser les connexions", "etat": "Planifié" },
        { "id": "action-133", "description": "Forcer la redirection vers HTTPS pour toutes les requêtes", "etat": "Planifié" }
      ],
      "prompt": "Quelle importance le passage à HTTPS a-t-il pour la sécurité et la confiance des utilisateurs ?",
      "dateDebut": "2023-07-16T00:00:00Z",
      "dateFin": "2023-07-18T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/https-ssl"
    },
    {
      "id": "tache-66",
      "nom": "Mesures Anti-DDoS",
      "actions": [
        { "id": "action-134", "description": "Implémenter des solutions pour détecter et atténuer les attaques DDoS", "etat": "Planifié" },
        { "id": "action-135", "description": "Configurer des règles de filtrage du trafic réseau", "etat": "Planifié" }
      ],
      "prompt": "Comment le site peut-il être protégé contre les attaques DDoS potentielles ?",
      "dateDebut": "2023-07-19T00:00:00Z",
      "dateFin": "2023-07-21T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/ddos-protection"
    },
    {
      "id": "tache-67",
      "nom": "Sécurisation de la Base de Données",
      "actions": [
        { "id": "action-136", "description": "Renforcer la sécurité de la base de données contre les injections SQL", "etat": "Planifié" },
        { "id": "action-137", "description": "Chiffrer les données sensibles stockées", "etat": "Planifié" }
      ],
      "prompt": "Quelles mesures peuvent être prises pour sécuriser la base de données contre les menaces externes ?",
      "dateDebut": "2023-07-22T00:00:00Z",
      "dateFin": "2023-07-24T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/database-security"
    },
    {
      "id": "tache-68",
      "nom": "Mises à Jour Régulières",
      "actions": [
        { "id": "action-138", "description": "Planifier des mises à jour régulières des logiciels et dépendances", "etat": "Planifié" },
        { "id": "action-139", "description": "Tester les mises à jour dans un environnement de staging avant déploiement", "etat": "Planifié" }
      ],
      "prompt": "Pourquoi est-il crucial de maintenir les systèmes à jour et comment cela peut-il être géré efficacement ?",
      "dateDebut": "2023-07-25T00:00:00Z",
      "dateFin": "2023-07-27T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/regular-updates"
    },
    {
      "id": "tache-69",
      "nom": "Sauvegardes Automatisées",
      "actions": [
        { "id": "action-140", "description": "Mettre en place des sauvegardes automatiques et régulières des données", "etat": "Planifié" },
        { "id": "action-141", "description": "Tester régulièrement la récupération à partir des sauvegardes", "etat": "Planifié" }
      ],
      "prompt": "Comment les sauvegardes automatiques contribuent-elles à la résilience et à la récupération des données ?",
      "dateDebut": "2023-07-28T00:00:00Z",
      "dateFin": "2023-07-30T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/automated-backups"
    },
    {
      "id": "tache-70",
      "nom": "Formation à la Sécurité",
      "actions": [
        { "id": "action-142", "description": "Organiser des sessions de formation sur la sécurité pour l'équipe de développement", "etat": "Planifié" },
        { "id": "action-143", "description": "Incorporer les meilleures pratiques de sécurité dans le workflow de développement", "etat": "Planifié" }
      ],
      "prompt": "Comment la sensibilisation et la formation à la sécurité peuvent-elles renforcer la sécurité globale du site ?",
      "dateDebut": "2023-07-31T00:00:00Z",
      "dateFin": "2023-08-02T00:00:00Z",
      "etat": "Planifié",
      "urlOutput": "/path/to/output/security-training"
    }
  ]
}
];
export default optimisationData
