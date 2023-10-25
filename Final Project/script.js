const funnyButton = document.getElementById("funnyButton");
const inspirationalButton = document.getElementById("inspirationalButton");
const contentDiv = document.getElementById("content");

function fetchMeme() {
    return fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            return memes[randomIndex].url;
        });
}

function fetchInspirationalQuote() {
    return fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            return data.content + " - " + data.author;
        });
}

function displayContent(content) {
    contentDiv.innerHTML = "";
    if (content.includes(".jpg") || content.includes(".png") || content.includes(".gif")) {
        const img = document.createElement("img");
        img.src = content;
        img.alt = "Meme";
        contentDiv.appendChild(img);
    } else {
        const p = document.createElement("p");
        p.textContent = content;
        contentDiv.appendChild(p);
    }

    const newContentButton = document.createElement("button");
    newContentButton.textContent = "Generate Another";
    newContentButton.addEventListener("click", () => {
        displayRandomQuoteOrImage();
    });

    contentDiv.appendChild(newContentButton);
}

function fetchAndDisplayContent(fetchFunction) {
    fetchFunction()
        .then(content => {
            displayContent(content);
        })
        .catch(error => console.error(error));
}

function displayRandomQuoteOrImage() {
    const random = Math.random();
    if (random < 0.5) {
        fetchAndDisplayContent(fetchMeme);
    } else {
        fetchAndDisplayContent(fetchInspirationalQuote);
    }
}

funnyButton.addEventListener("click", () => {
    fetchAndDisplayContent(fetchMeme);
});

inspirationalButton.addEventListener("click", () => {
    fetchAndDisplayContent(fetchInspirationalQuote);
});

displayRandomQuoteOrImage();