// fichiers JSON exportés en tant que modules ES6
import conceptionData from './val.js';
import wireFramingData from './2_wireFraming.js';
import frontendData from './3_frontend.js';
import backendData from './4_backend.js';
import fonctionsData from './5_fonctions.js';
import testData from './6_tests.js';
import optimisationData from './7_optimisation.js';
import lancementData from './8_lancement.js';
import updateData from './9_update.js';
// Importez d'autres fichiers de la même manière...

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

    // Création de l'en-tête du tableau
    const headerRow = document.createElement('tr');
    const headers = ["ID Phase", "Phase", "ID Tâche", "Tâche", "ID Action", "Description", "État", "Début", "Fin", "URL Output"];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    table.appendChild(thead);

    // Création des lignes du tableau pour chaque tâche
    data.forEach(phase => {
        phase.taches.forEach(tache => {
            // Ligne principale pour la tâche
            const taskRow = document.createElement('tr');
            const taskData = [
                phase.id,
                phase.nom,
                tache.id,
                tache.nom,
                "",  // ID Action vide pour la ligne de tâche principale
                "",  // Description vide pour la ligne de tâche principale
                "",  // État vide pour la ligne de tâche principale
                tache.dateDebut.split('T')[0],
                tache.dateFin.split('T')[0],
                tache.urlOutput
            ];

            taskData.forEach(text => {
                const td = document.createElement('td');
                td.textContent = text;
                taskRow.appendChild(td);
            });

            tbody.appendChild(taskRow);

            // Lignes supplémentaires pour chaque action de la tâche
            tache.actions.forEach(action => {
                const actionRow = document.createElement('tr');
                const actionData = [
                    "",  // ID Phase vide pour les lignes d'action
                    "",  // Phase vide pour les lignes d'action
                    "",  // ID Tâche vide pour les lignes d'action
                    "",  // Tâche vide pour les lignes d'action
                    action.id,
                    action.description,
                    action.etat,
                    "",  // Début vide pour les lignes d'action
                    "",  // Fin vide pour les lignes d'action
                    ""   // URL Output vide pour les lignes d'action
                ];

                actionData.forEach((text, index) => {
                    const td = document.createElement('td');
                    // Vous pouvez ajouter une classe pour formater spécifiquement les lignes d'action, si nécessaire
                    td.textContent = text;
                    actionRow.appendChild(td);
                });

                tbody.appendChild(actionRow);
            });
        });
    });

    table.appendChild(tbody);
    document.getElementById('gantt-container').appendChild(table);
}