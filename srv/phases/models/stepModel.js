// models/stepModel.js
export const stepModel = {
    configuration: {
      id: "config",
      name: "Configuration",
      description: "Configurer l'environnement de développement.",
      promptStep: "Configurer l'environnement de développement."
    },
    development: {
      id: "dev",
      name: "Développement/Training",
      description: "Développer les fonctionnalités et former l'équipe.",
      promptStep: "Développer les fonctionnalités et former l'équipe."
    },
    testing: {
      id: "test",
      name: "Test/Déploiement",
      description: "Tester et déployer l'application.",
      promptStep: "Tester et déployer l'application."
    },
    maintenance: {
      id: "maint",
      name: "Maintenance/Update",
      description: "Maintenir et mettre à jour l'application.",
      promptStep: "Maintenir et mettre à jour l'application."
    }
  };
  