// Import des données du projet et du modèle d'étapes
import { stepModel } from './models/stepModel.js';
import conceptionData from './1_conception.js';

const projectData = [...conceptionData];

function generateHashCode(phaseId, taskId, actionId) {
  return btoa(`${phaseId}-${taskId}-${actionId}`).substring(0, 12);
}

function generateStepsForAction(action) {
  return [
    stepModel.configuration,
    stepModel.development,
    stepModel.testing,
    stepModel.maintenance
  ];
}

function generateGanttTable(data) {
  const table = document.createElement('table');
  table.className = "gantt-table";
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headers = [
    "ID Phase", "Phase", "Description Phase", "Prompt Phase",
    "ID Tâche", "Tâche", "Description Tâche", "Prompt Tâche",
    "ID Action", "Action", "Description Action", "Prompt Action",
    "Current Steps", "État", "URL Output", "Hash-Code"
  ];

  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  data.forEach(phase => phase.taches.forEach(tache => tache.actions.forEach(action => {
    const row = document.createElement('tr');
    const steps = generateStepsForAction(action);

    const rowData = [
      phase.id, phase.nom, phase.description, phase.promptPhase,
      tache.id, tache.nom, tache.description, tache.promptTache,
      action.id, action.nom, action.description, action.promptAction,
      steps.map(step => `${step.name}: ${step.promptStep}`).join(', '), // Current Steps content
      action.etat, '', generateHashCode(phase.id, tache.id, action.id)
    ];

    rowData.forEach((data, index) => {
      const cell = document.createElement('td');
      if (index === headers.indexOf("URL Output")) {
        createDownloadLink(cell, generateFileContent(rowData), `rawData_${phase.id}_${tache.id}_${action.id}.txt`);
      } else {
        cell.textContent = data;
      }
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  })));

  table.appendChild(thead);
  table.appendChild(tbody);
  document.getElementById('gantt-container').appendChild(table);
}

function generateFileContent(rowData) {
  return JSON.stringify(rowData, null, 2);
}

function createDownloadLink(cell, content, fileName) {
  const link = document.createElement('a');
  link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
  link.download = fileName;
  link.textContent = 'Download';
  cell.appendChild(link);

  // Ajoutez ici la logique pour les options supplémentaires (XML, Markdown, etc.)
}

generateGanttTable(projectData);
