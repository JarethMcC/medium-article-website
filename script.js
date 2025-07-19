document.addEventListener("DOMContentLoaded", function() {
    const rssFeedUrl = 'https://medium.com/feed/@jarethmccardell';

    // Using a free third-party service to convert the RSS XML to JSON
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`;

    const articlesContainer = document.getElementById('articles-container');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                articlesContainer.innerHTML = '';
                const articles = data.items;
                articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('article');

                    const pubDate = new Date(article.pubDate);
                    const formattedDate = pubDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    let publicationHTML = '';
                    const content = article.content;
                    if (content) {
                        const pubMatch = content.match(/was originally published in <a href="([^"]+)">([^<]+)<\/a>/);
                        if (pubMatch && pubMatch[1] && pubMatch[2]) {
                            const pubURL = pubMatch[1];
                            const publication = pubMatch[2];
                            publicationHTML = `<p class="article-publication">Published in: <a href="${pubURL}" target="_blank">${publication}</a></p>`;
                        }
                    }

                    articleElement.innerHTML = `
                        <h2 class="article-title">
                            <a href="${article.link}" target="_blank">${article.title}</a>
                        </h2>
                        <p class="article-date">Published on ${formattedDate}</p>
                        ${publicationHTML}
                    `;
                    articlesContainer.appendChild(articleElement);
                });
            } else {
                articlesContainer.innerHTML = '<p>Failed to load articles. Please check the RSS feed URL.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching Medium feed:', error);
            articlesContainer.innerHTML = '<p>An error occurred while fetching the articles.</p>';
        });

    const profileLink = document.getElementById('medium-profile-link');
    if (profileLink && rssFeedUrl.includes('@')) {
        const username = rssFeedUrl.split('@')[1];
        profileLink.href = `https://medium.com/@${username}`;
    }
});