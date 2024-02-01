// Import des données du projet
import conceptionData from './1_conception1.js';

const projectData = [
  ...conceptionData,
  // Ajoutez d'autres phases de projet si nécessaire
];
generateGanttTable(projectData);
// Fonction pour générer un hash-code unique
function generateHashCode(phaseId, taskId, actionId) {
  return btoa(`${phaseId}-${taskId}-${actionId}`).substring(0, 12);
}

// Fonction pour générer les étapes minimales pour chaque action
function generateStepsForAction(actionId, promptAction) {
  // Ajoutez ici votre logique personnalisée basée sur promptAction
  // Pour l'exemple, des étapes de base sont générées
  return [
    { id: `${actionId}-config`, name: "Configuration", promptStep: "Configurer l'environnement de développement." },
    { id: `${actionId}-dev`, name: "Développement/Training", promptStep: "Développer les fonctionnalités et former l'équipe." },
    { id: `${actionId}-test`, name: "Test/Déploiement", promptStep: "Tester et déployer l'application." },
    { id: `${actionId}-maint`, name: "Maintenance/Update", promptStep: "Maintenir et mettre à jour l'application." }
  ];
}

// Fonction pour générer le tableau de Gantt
function generateGanttTable(data) {
  const table = document.createElement('table');
  table.className = "gantt-table";
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Trouvez le nombre maximal d'étapes parmi toutes les actions pour déterminer le nombre de colonnes d'étape à ajouter
  let maxSteps = 0;
  data.forEach(phase => phase.taches.forEach(tache => tache.actions.forEach(action => {
    const steps = generateStepsForAction(action.id, action.promptAction);
    maxSteps = Math.max(maxSteps, steps.length);
  })));

  // En-têtes du tableau, avec ajout dynamique des en-têtes d'étape
  const headers = [
    "ID Phase", "Phase", "Description Phase", "Prompt Phase",
    "ID Tâche", "Tâche", "Description Tâche", "Prompt Tâche",
    "ID Action", "Action", "Description Action", "Prompt Action"
  ];

  // Ajouter dynamiquement les en-têtes d'étape
  for (let i = 1; i <= maxSteps; i++) {
    headers.push(`Step ${i} ID`, `Step ${i} Name`, `Step ${i} Description`, `Step ${i} Prompt`);
  }

  // En-têtes finales après les étapes
  headers.push("État", "URL Output", "Hash-Code");

  // Création de l'en-tête du tableau
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Génération des lignes du tableau
  data.forEach(phase => phase.taches.forEach(tache => tache.actions.forEach(action => {
    const row = document.createElement('tr');
    const steps = generateStepsForAction(action.id, action.promptAction);

    // Contenu de base de la ligne
    const rowData = [
      phase.id, phase.nom, phase.description, phase.promptPhase,
      tache.id, tache.nom, tache.description, tache.promptTache,
      action.id, action.nom, action.description, action.promptAction
    ];

    // Ajout des données d'étape, ou cellule vide si pas d'étape
    for (let i = 0; i < maxSteps; i++) {
      if (i < steps.length) {
        const step = steps[i];
        rowData.push(step.id, step.name, step.description, step.promptStep);
      } else {
        // Remplir les cellules vides si moins d'étapes que maxSteps
        rowData.push('', '', '', '');
      }
    }

    // Ajout des données finales
    rowData.push(action.etat, tache.urlOutput, generateHashCode(phase.id, tache.id, action.id));

    // Ajout des cellules à la ligne
    rowData.forEach(data => {
      const cell = document.createElement('td');
      cell.textContent = data;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  })));

  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById('gantt-container').appendChild(table);
}

// Exécution pour générer le tableau
generateGanttTable(projectData);
