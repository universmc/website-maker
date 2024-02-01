function generateGanttChart(developmentPhases) {
    const table = document.createElement('table');
    table.className = 'gantt-chart'; // Classe CSS pour le style du tableau
    
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    
    // En-têtes du tableau
    const headers = ["Phase", "Prompt Phase", "Tâche", "Prompt Tâche", "Action", "Début", "Fin", "État"];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
  
    // Génération des lignes du tableau
    developmentPhases.forEach(phase => {
      phase.taches.forEach(tache => {
        tache.actions.forEach(action => {
          const row = document.createElement('tr');
          
          // Création des cellules pour chaque colonne
          const phaseCell = document.createElement('td');
          phaseCell.textContent = phase.title;
          row.appendChild(phaseCell);
  
          const phasePromptCell = document.createElement('td');
          phasePromptCell.textContent = phase.prompt;
          row.appendChild(phasePromptCell);
  
          const taskCell = document.createElement('td');
          taskCell.textContent = tache.title;
          row.appendChild(taskCell);
  
          const taskPromptCell = document.createElement('td');
          taskPromptCell.textContent = tache.prompt;
          row.appendChild(taskPromptCell);
  
          const actionCell = document.createElement('td');
          actionCell.textContent = action.description;
          row.appendChild(actionCell);
  
          const startDateCell = document.createElement('td');
          startDateCell.textContent = action.dateDebut;
          row.appendChild(startDateCell);
  
          const endDateCell = document.createElement('td');
          endDateCell.textContent = action.dateFin;
          row.appendChild(endDateCell);
  
          const statusCell = document.createElement('td');
          statusCell.textContent = action.etat;
          row.appendChild(statusCell);
          
          tbody.appendChild(row);
        });
      });
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('gantt-container').appendChild(table); // Assurez-vous d'avoir un conteneur avec l'ID 'gantt-container' dans votre HTML
  }
  
  // Exécution de la fonction avec vos données
  generateGanttChart(developmentPhases);
  