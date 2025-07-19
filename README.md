# Medium Article Website

This project is a simple website that fetches and displays your recent articles from Medium. It's a clean and simple way to showcase your writing on your own personal site.

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/medium-article-website.git
    ```
2.  **Customize with your Medium feed:**
    Open `script.js` and replace `jarethmccardell` in the `rssFeedUrl` variable with your Medium username:
    ```javascript
    const rssFeedUrl = 'https://medium.com/feed/@your-username';
    ```
3.  **Open in your browser:**
    Simply open the `index.html` file in your web browser to see your articles.

## How It Works

This project uses the `rss2json` API to convert a Medium RSS feed into a more manageable JSON format. The JavaScript code then fetches this JSON data, parses it, and dynamically creates the HTML to display the articles on the page.

## Technologies Used

*   HTML
*   CSS
*   JavaScript
*   [rss2json](https://rss2json.com/)

## Contributing

Feel free to fork this repository and make it your own. If you have any suggestions or improvements, please open an issue or submit a pull request.
