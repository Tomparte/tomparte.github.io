// Récupérer les dépôts publics de l'utilisateur
fetch('https://api.github.com/users/tomparte/repos')
  .then(response => response.json())
  .then(repos => {
    const repoContainer = document.querySelector('.repo-container');

    repos.forEach(repo => {
      const repoCard = document.createElement('div');
      repoCard.classList.add('repo-card');

      const repoName = document.createElement('h2');
      repoName.textContent = repo.name;

      const repoDescription = document.createElement('p');
      repoDescription.textContent = repo.description || 'Pas de description disponible.';

      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.textContent = 'Voir le dépôt';

      repoCard.appendChild(repoName);
      repoCard.appendChild(repoDescription);
      repoCard.appendChild(repoLink);

      repoContainer.appendChild(repoCard);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des dépôts :', error);
  });
