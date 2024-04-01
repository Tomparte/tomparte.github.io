document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users/tomparte/repos')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('repo-container');
        data.forEach(repo => {
            const div = document.createElement('div');
            div.className = 'repo';
            div.innerHTML = `<h2>${repo.name}</h2><p>${repo.description || ''}</p><a href="${repo.html_url}" target="_blank">View Repo</a>`;
            container.appendChild(div);
        });
    })
    .catch(error => console.log('Error:', error));
});
