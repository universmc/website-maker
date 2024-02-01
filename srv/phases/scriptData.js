import conceptionData from './val.js';
import wireFramingData from './2_wireFraming.js';
import frontendData from './3_frontend.js';
import backendData from './4_backend.js';
import fonctionsData from './5_fonctions.js';
import testData from './6_tests.js';
import optimisationData from './7_optimisation.js';
import lancementData from './8_lancement.js';
import updateData from './9_update.js';

const projectData = [
  ...conceptionData,
  ...wireFramingData,
  ...frontendData,
  ...backendData,
  ...fonctionsData,
  ...testData,
  ...optimisationData,
  ...lancementData,
  ...updateData,
];


generateGanttTable(projectData);

function generateGanttTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // En-tête du tableau
    const headerRow = document.createElement('tr');
    const headers = ["ID Phase", "Phase", "Prompt Phase", "ID Tâche", "Tâche", "Prompt Tâche", "ID Action", "Action", "État Action", "Début", "Fin", "URL Output"];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Lignes du tableau pour chaque phase, tâche, et action
    data.forEach(phase => {
        phase.taches.forEach(tache => {
            tache.actions.forEach((action, actionIndex) => {
                const row = document.createElement('tr');

                // Afficher les détails de la phase et de la tâche uniquement sur la première ligne d'action
                const phaseAndTaskDetails = actionIndex === 0 ? [
                    phase.id,
                    phase.nom,
                    phase.prompt,
                    tache.id,
                    tache.nom,
                    tache.prompt
                ] : [
                    "", "", "", "", "", ""
                ];

                const actionDetails = [
                    action.id,
                    action.description,
                    action.etat,
                    tache.dateDebut.split('T')[0],
                    tache.dateFin.split('T')[0],
                    tache.urlOutput
                ];

                const rowData = [...phaseAndTaskDetails, ...actionDetails];
                rowData.forEach(text => {
                    const td = document.createElement('td');
                    td.innerHTML = text;  // Utiliser innerHTML pour permettre un formatage HTML dans le futur
                    row.appendChild(td);
                });

                tbody.appendChild(row);
            });

            if (tache.actions.length === 0) {
                // Créer une ligne pour les tâches sans actions
                const row = document.createElement('tr');
                const rowData = [
                    phase.id,
                    phase.nom,
                    phase.prompt,
                    tache.id,
                    tache.nom,
                    tache.prompt,
                    "",  // Pas d'ID Action
                    "Pas d'actions",  // Message pour indiquer l'absence d'actions
                    "",  // Pas d'état d'action
                    tache.dateDebut.split('T')[0],
                    tache.dateFin.split('T')[0],
                    tache.urlOutput
                ];

                rowData.forEach(text => {
                    const td = document.createElement('td');
                    td.innerHTML = text;
                    row.appendChild(td);
                });

                tbody.appendChild(row);
            }
        });
    });

    table.appendChild(tbody);
    document.getElementById('gantt-container').appendChild(table);
}