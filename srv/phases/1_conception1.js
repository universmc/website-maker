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

// Fonction étendue pour créer un lien de téléchargement avec des options
function createDownloadLink(cell, content, fileName) {
  const options = [
    { text: 'XML', value: 'xml' },
    { text: 'JSON', value: 'json' },
    { text: 'Markdown', value: 'md' }
  ];

  // Création du lien de téléchargement principal
  const mainLink = document.createElement('a');
  mainLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
  mainLink.download = fileName;
  mainLink.textContent = 'Download Main';
  cell.appendChild(mainLink);

  // Création d'un sélecteur pour les options supplémentaires
  const select = document.createElement('select');
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    select.appendChild(optionElement);
  });
  cell.appendChild(select);

  // Création d'un bouton pour appliquer l'option sélectionnée
  const applyButton = document.createElement('button');
  applyButton.textContent = 'Apply Option';
  applyButton.onclick = function() {
    const selectedOption = select.value;
    const optionLink = document.createElement('a');
    optionLink.href = generateOptionLink(content, selectedOption);
    optionLink.download = `option_${fileName}`;
    optionLink.textContent = 'Download Option';
    cell.appendChild(optionLink);
  };
  cell.appendChild(applyButton);
}

// Fonction pour générer le lien de l'option
function generateOptionLink(content, option) {
  // Modifier le contenu ou le format en fonction de l'option choisie
  // Exemple simple : ajouter un préfixe à l'option choisie
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(option + "_" + content);
}

function generateGanttTable(data) {
  const table = document.createElement('table');
  table.className = "gantt-table";
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headers = [
    "ID Phase", "Phase", "Description Phase", "Prompt Phase",
    "ID Tâche", "Tâche", "Description Tâche", "Prompt Tâche",
    "ID Action", "Action", "Description Action", "Prompt Action", "Meta-donnée",
    "Step 1", "Step 2", "Step 3", "Step 4",
    "État", "URL Output", "Hash-Code"
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
      action.id, action.nom, action.description, action.promptAction, ''
    ];

    steps.forEach(step => {
      rowData.push(step.name + ": " + step.promptStep);
    });

    while (rowData.length < headers.length - 3) {
      rowData.push('');
    }

    rowData.push(action.etat, '', generateHashCode(phase.id, tache.id, action.id));

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

generateGanttTable(projectData);
