// Récupération des données des projets depuis le fichier JSON
fetch('assets/projects.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Sélection de l'élément container où les projets seront affichés
    const projectcontainer = document.querySelector('.portfolio-container')

    // Création et affichage des projets
    data.forEach(project => {
      // Création des "cartes" de projet
      const projectElement = document.createElement('div');
      projectElement.classList.add('portfolio-box');

      // Création des éléments enfants
      const imageElement = document.createElement('img');
      imageElement.src = project.image
      imageElement.alt = project.altText

      const contentElement = document.createElement('div');
      contentElement.classList.add('portfolio-layer');

      const titleElement = document.createElement('h4');
      titleElement.textContent = project.title;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = project.description;

      const linksElement = document.createElement('div');
      linksElement.classList.add('link-project');

      const codeElement = document.createElement('a');
      codeElement.href = project.codeUrl;
      
      const linkGitHub = document.createElement('i');
      linkGitHub.classList.add('fa-solid');
      linkGitHub.classList.add('fa-up-right-from-square');

      const linkGitHubContent = document.createElement('p');
      linkGitHubContent.textContent = 'lien github'

      // Création de la div pour les technologies
      const technologiesElement = document.createElement('div');
      technologiesElement.classList.add('technologies');

      const technologiesTitle = document.createElement('h5');
      technologiesTitle.textContent = 'Technologies utilisées :';
      technologiesElement.appendChild(technologiesTitle);

      // Création des éléments pour chaque technologie
      project.technologies.forEach(tech => {
        const techElement = document.createElement('span');
        techElement.textContent = tech;
        techElement.classList.add('tech-item')
        technologiesElement.appendChild(techElement);
      });


      // Ajout des éléments enfants
      linksElement.appendChild(codeElement);
      contentElement.appendChild(titleElement);
      contentElement.appendChild(descriptionElement);
      contentElement.appendChild(technologiesElement);
      contentElement.appendChild(linksElement);
      projectElement.appendChild(imageElement);
      projectElement.appendChild(contentElement);
      codeElement.appendChild(linkGitHub);
      codeElement.appendChild(linkGitHubContent);

      // Ajout du projet à la section
      projectcontainer.appendChild(projectElement);
    });

     // Appliquer ScrollReveal aux éléments .portfolio-box après leur génération
     const portfolioBoxes = document.querySelectorAll('.portfolio-box');
     if (portfolioBoxes.length > 0) {
       ScrollReveal().reveal(portfolioBoxes, { origin: 'right' });
     }
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données des projets :', error);
  });

  // scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
});