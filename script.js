// Fonction pour générer et afficher le tableau de Gantt dans une div avec l'ID "tableau-gantt"
function afficherTableauGantt() {
    const tableauGanttDiv = document.getElementById("tableau-gantt");
    
    // Générer le contenu HTML du tableau de Gantt ici en utilisant les données du tableauGantt
    
    // Exemple : Créer une simple liste à puces
    let contenuHTML = "<h2>Tableau de Gantt</h2><ul>";
    tableauGantt.forEach(phase => {
      contenuHTML += `<li>${phase.nom}</li>`;
    });
    contenuHTML += "</ul>";
    
    // Injectez le contenu dans la div
    tableauGanttDiv.innerHTML = contenuHTML;
  }
  function generateDebugTable(actions) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Création de l'en-tête du tableau
    const headerRow = document.createElement('tr');
    const headers = ["ID Action", "Description", "État"];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Création des lignes du tableau pour chaque action
    actions.forEach(action => {
        const row = document.createElement('tr');
        const rowData = [action.id, action.description, action.etat];
        rowData.forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('debug-container').appendChild(table);
}

  // Appelez la fonction pour afficher le tableau de Gantt
  afficherTableauGantt();
  