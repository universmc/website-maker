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