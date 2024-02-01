// Importation des modules nécessaires
import { stepModel } from './models/stepModel.js';
import conceptionData from './1_conception.js';
import { generateMarkdownContent } from './models/output.js';

const projectData = [...conceptionData];
const date = new Date().toISOString().slice(0, 10); // Format YYYY-MM-DD pour la date actuelle

function generateHashCode(phaseId, taskId, actionId) {
    return btoa(`${phaseId}-${taskId}-${actionId}`).substring(0, 12);
}

function generateStepsForAction(action) {
    return [stepModel.configuration, stepModel.development, stepModel.testing, stepModel.maintenance];
}

function createDownloadLinks(cell, rowData, actionId) {
    const jsonData = toJson(rowData);
    const xmlData = toXml(jsonData); // Assurez-vous que jsonData est converti en format correct pour toXml
    const markdownData = toMarkdown(rowData); // Vous devrez peut-être adapter rowData pour toMarkdown
    const htmlData = toHtml(markdownData);

    // Création de liens pour chaque format
    const formats = { 'json': jsonData, 'xml': xmlData, 'md': markdownData, 'html': htmlData };
    Object.entries(formats).forEach(([format, data]) => {
        const link = document.createElement('a');
        link.href = `data:text/${format};charset=utf-8,` + encodeURIComponent(data);
        link.download = `${actionId}.${format}`;
        link.textContent = `Download ${format.toUpperCase()}`;
        link.style.marginRight = '10px';
        cell.appendChild(link);
    });
}

function generateGanttTable(data) {
    const table = document.createElement('table');
    table.className = "gantt-table";
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = [
        "ID Phase", "Phase", "Description Phase", "Prompt Phase", "ID Tâche", "Tâche", "Description Tâche",
        "Prompt Tâche", "ID Action", "Action", "Description Action", "Prompt Action", "Current Steps", "État",
        "URL Output", "Hash-Code"
    ];

    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    data.forEach(phase => {
        phase.taches.forEach(tache => {
            tache.actions.forEach(action => {
                const row = document.createElement('tr');
                const steps = generateStepsForAction(action);

                const rowData = [
                    phase.id, phase.nom, phase.description, phase.promptPhase, tache.id, tache.nom, tache.description,
                    tache.promptTache, action.id, action.nom, action.description, action.promptAction,
                    steps.map(step => `${step.name}: ${step.promptStep}`).join(', '), action.etat, '', generateHashCode(phase.id, tache.id, action.id)
                ];

                rowData.forEach((data, index) => {
                    const cell = document.createElement('td');
                    if (index === headers.indexOf("URL Output")) {
                        createDownloadLinks(cell, rowData, action.id);
                    } else {
                        cell.textContent = data;
                    }
                    row.appendChild(cell);
                });

                tbody.appendChild(row);
            });
        });
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('gantt-container').appendChild(table);
}

// Générer le contenu Markdown pour le projet
const markdownContent = generateMarkdownContent(projectData, date);

// Vous pouvez maintenant utiliser `markdownContent` pour d'autres opérations, comme le téléchargement ou l'affichage

generateGanttTable(projectData);