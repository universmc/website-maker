// Supposons que vous ayez des fichiers JSON exportés en tant que modules ES6
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
    const headers = ["id","Phase", "prompt", "id", "Tâche", "prompt", "Début", "Fin", "État", "urlOutput"];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Création des lignes du tableau pour chaque tâche
    data.forEach(phase => {
        phase.taches.forEach(tache => {
            const row = document.createElement('tr');
            const rowData = [
                phase.id,
                phase.nom,
                phase.prompt,
                tache.id,
                tache.nom,
                tache.prompt,
                tache.dateDebut.split('T')[0],
                tache.dateFin.split('T')[0],
                tache.etat,
                tache.urlOutput
            ];
            rowData.forEach(text => {
                const td = document.createElement('td');
                td.textContent = text;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('gantt-container').appendChild(table);
}



