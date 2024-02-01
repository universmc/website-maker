// Fonction pour générer le contenu du fichier à enregistrer
function generateFileContent(rowData) {
    const content = `Phase: ${rowData[1]} (${rowData[0]})
  Description de la phase: ${rowData[2]}
  Prompt de la phase: ${rowData[3]}
  
  Tâche: ${rowData[5]} (${rowData[4]})
  Description de la tâche: ${rowData[6]}
  Prompt de la tâche: ${rowData[7]}
  
  Action: ${rowData[9]} (${rowData[8]})
  Description de l'action: ${rowData[10]}
  Prompt de l'action: ${rowData[11]}
  
  État: ${rowData[rowData.length - 3]}
  Date de début: ${rowData[rowData.length - 6]}
  Date de fin: ${rowData[rowData.length - 5]}
  Durée estimée: ${rowData[rowData.length - 4]} jours
  
  Hash-code: ${rowData[rowData.length - 1]}
  `;
  
    return content;
  }
  
  // Fonction pour créer un lien de téléchargement pour chaque ligne
  function addDownloadLink(row, content, fileName) {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
    downloadLink.download = fileName;
  
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
  
    row.cells[row.cells.length - 2].appendChild(downloadLink); // Ajoute le lien à la cellule URL Output
    downloadLink.textContent = 'Télécharger';
    downloadLink.style.display = 'inline';
    downloadLink.style.marginLeft = '10px';
  }
  
  // Intégration dans la fonction generateGanttTable
  function generateGanttTable(data) {
    // ... Code existant pour générer le tableau ...
  
    // Génération des lignes du tableau
    data.forEach(phase => phase.taches.forEach(tache => tache.actions.forEach(action => {
      const row = document.createElement('tr');
      // ... Code existant pour ajouter des données à la ligne ...
  
      const rowData = [/* Données de la ligne */];
      // ... Code existant pour remplir rowData ...
  
      // Génération du contenu du fichier et ajout du lien de téléchargement
      const fileContent = generateFileContent(rowData);
      const fileName = `output_row_${phase.id}_${tache.id}_${action.id}.txt`;
      addDownloadLink(row, fileContent, fileName);
  
      // ... Code existant pour ajouter la ligne au tableau ...
    })));
  
    // ... Code existant pour ajouter le tableau au DOM ...
  }
  