const articlesCount = 10;

const appendData = async () => {
    const articles = (await getArticles()).articles;
    console.log(articles);
    const newsArticlesContainer = document.getElementById("news-article-container");
    newsArticlesContainer.innerHTML = '';

    for(var index = 0; index < articlesCount; index++) {
        const article = getArticleElement();

        const imageContainer = getImageContainer();
        article.appendChild(imageContainer);

        const image = getImageElement(index + 1, articles[index].urlToImage);
        imageContainer.appendChild(image);

        const newsContentContainer = getNewsContentContainer();
        article.appendChild(newsContentContainer);

        const newsTitle = getNewsTitleElement(index + 1, articles[index].title);
        newsContentContainer.appendChild(newsTitle);

        const publishDate = getDateElement(index + 1, articles[index].publishedAt);
        newsContentContainer.appendChild(publishDate);

        const newsContent = getNewsDescriptionElement(index + 1, articles[index].description);
        newsContentContainer.appendChild(newsContent);

        const readButton = getReadButtonElement(index + 1, articles[index].url);
        newsContentContainer.appendChild(readButton);

        const seperator = getNewsSeperator();

        newsArticlesContainer.appendChild(article);
        newsArticlesContainer.appendChild(seperator);
    }
}

const getArticleElement = () => {
    const article = document.createElement("article");
    article.classList.add("horizantal-flex-container");
    return article;
}

const getImageContainer = () => {
    const imageContainer = document.createElement("figure");
    imageContainer.classList.add("newspaper-image-container");
    return imageContainer;
}

const getImageElement = (index, imageSrc) => {
    const image = document.createElement("img");
    image.classList.add("newspaper-image");
    image.alt = "newspaper-image";
    image.id = "newspaper-image" + index;
    image.src = imageSrc;
    return image;
}

const getNewsContentContainer = () => {
    const newsContentContainer = document.createElement("div");
    newsContentContainer.classList.add("news-content");
    return newsContentContainer;
}

const getNewsTitleElement = (index, title) => {
    const newsTitle = document.createElement("h2");
    newsTitle.classList.add("news-title");
    newsTitle.id = "news-title" + index;
    newsTitle.textContent = title;
    return newsTitle;
}

const getDateElement = (index, publishDate) => {
    const time = document.createElement("time");
    time.id = "published-date" + index;
    time.datetime = publishDate.slice(0, 4);
    time.textContent = publishDate;
    const strongElement = document.createElement("strong");
    strongElement.appendChild(time);
    const smallElement = document.createElement("small");
    smallElement.textContent = "Posted on ";
    smallElement.appendChild(strongElement);
    return smallElement;
}

const getNewsDescriptionElement = (index, description) => {
    const newsDescription = document.createElement("p");
    newsDescription.id = "news-content-preview" + index;
    newsDescription.classList.add("news-content-preview");
    newsDescription.textContent = description;
    return newsDescription;
}

const getReadButtonElement = (index, articleLink) => {
    const button = document.createElement("button");
    button.classList.add("reading-button");
    button.textContent = "Continue Reading";
    const link = document.createElement("a");
    link.href = articleLink;
    link.id = "reading-button" + index;
    link.target = "_blank";
    link.appendChild(button);
    return link;
}

const getNewsSeperator = () => {
    const seperator = document.createElement("hr");
    seperator.classList.add("news-seperator");
    return seperator;
}

const getArticles = async () => {
    const API_KEY = "84c458b55d704a2ea7b3eeb1d4124aad";
    var URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY;
    const articles = await (await fetch(URL)).json();
    console.log(`Articles: ${JSON.stringify(articles)}`);
    return articles;
}

export default appendData;
