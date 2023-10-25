// main.js
import { fetchMeme, fetchInspirationalQuote } from './fetcher.js';

const funnyButton = document.getElementById("funnyButton");
const inspirationalButton = document.getElementById("inspirationalButton");
const contentDiv = document.getElementById("content");

function displayContent(content) {
    contentDiv.innerHTML = "";
    content.forEach(item => {
        if (item.includes(".jpg") || item.includes(".png") || item.includes(".gif")) {
            const img = document.createElement("img");
            img.src = item;
            img.alt = "Meme";
            contentDiv.appendChild(img);
        } else {
            const p = document.createElement("p");
            p.textContent = item;
            contentDiv.appendChild(p);
        }
    });

    const newContentButton = document.createElement("button");
    newContentButton.textContent = "Generate Another";
    newContentButton.addEventListener("click", () => {
        displayRandomQuoteOrImage();
    });

    contentDiv.appendChild(newContentButton);
}

async function fetchAndDisplayContent(fetchFunction) {
    try {
        const content = await fetchFunction();
        displayContent(content);
    } catch (error) {
        console.error(error);
    }
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
