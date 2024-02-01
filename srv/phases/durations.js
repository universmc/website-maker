// Importation des données des différentes phases du projet
import conceptionData from './val.js';
import wireFramingData from './2_wireFraming.js';
import frontendData from './3_frontend.js';
import backendData from './4_backend.js';
import fonctionsData from './5_fonctions.js';
import testData from './6_tests.js';
import optimisationData from './7_optimisation.js';
import lancementData from './8_lancement.js';
import updateData from './9_update.js';
// Importez d'autres fichiers de données selon le besoin

// Fusion de toutes les données de projet dans un seul tableau
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
  // Ajoutez d'autres données de phases si nécessaire
];

// Fonction pour ajouter la durée à chaque tâche
function addDurationToTasks(data) {
  data.forEach(phase => {
    phase.taches.forEach(tache => {
      const dateDebut = new Date(tache.dateDebut);
      const dateFin = new Date(tache.dateFin);
      // Calcul de la durée en millisecondes et conversion en jours
      tache.duration = (dateFin - dateDebut) / (1000 * 60 * 60 * 24); // Converti en jours
    });
  });
}

// Fonction pour générer le tableau de Gantt
function generateGanttTable(data) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Création de l'en-tête du tableau
  const headerRow = document.createElement('tr');
  const headers = ["ID Phase", "Phase", "Prompt Phase", "ID Tâche", "Tâche", "Prompt Tâche", "Début", "Fin", "Durée (jours)", "État", "URL Output"];
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
              tache.duration, // Ajout de la durée calculée
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

// Appel des fonctions
addDurationToTasks(projectData);
generateGanttTable(projectData);
