// Importation des dépendances nécessaires, si applicable
// import { stepModel } from './stepModel.js';

// Fonction pour générer l'en-tête Markdown avec des métadonnées RDF/XML
function generateHeader(date) {
    return `
  # Session - ${date}
  
  \`\`\`xml
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:dc="http://purl.org/dc/elements/1.1/">
    <rdf:Description rdf:about="http://exemple.com/session-${date}">
      <dc:title>Session du ${date}</dc:title>
      <dc:date>${date}</dc:date>
    </rdf:Description>
  </rdf:RDF>
  \`\`\`
    `;
  }
  
  // Fonction pour générer la section d'une phase
  function generatePhaseSection(phase) {
    return `
  ## Phase: ${phase.nom}
  
  ${phase.description}
    `;
  }
  
  // Fonction pour générer la section d'une tâche
  function generateTaskSection(task) {
    return `
  ### Tâche: ${task.nom}
  
  ${task.description}
    `;
  }
  
  // Fonction pour générer la section d'une action
  function generateActionSection(action) {
    return `
  #### Action: ${action.nom}
  
  ${action.description}
  
  - État: ${action.etat}
  - URL Output: ${action.urlOutput}
    `;
  }
  
  // Fonction principale pour générer le contenu du fichier Markdown
  function generateMarkdownContent(projectData, date) {
    let content = generateHeader(date);
  
    projectData.forEach(phase => {
      content += generatePhaseSection(phase);
  
      phase.taches.forEach(task => {
        content += generateTaskSection(task);
  
        task.actions.forEach(action => {
          content += generateActionSection(action);
        });
      });
    });
  
    return content;
  }
  
  // Exportation des fonctions pour utilisation dans d'autres fichiers
  export { generateMarkdownContent };
  