import './styles.css';

document.getElementById("fetch-news-button").addEventListener("click", async () => {
    import('./dataAppender').then(module => {
        module.default();
    });
});
