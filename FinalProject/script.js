// dataFetcher.js
export async function fetchMemes() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    const memes = data.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex].url;
}

export async function fetchInspirationalQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return `${data.content} - ${data.author}`;
}

// main.js
import { fetchMemes, fetchInspirationalQuote } from './dataFetcher.js';

const funnyButton = document.getElementById("funnyButton");
const inspirationalButton = document.getElementById("inspirationalButton");
const contentDiv = document.getElementById("content");

function displayContent(content) {
    contentDiv.innerHTML = "";
    if (Array.isArray(content)) {
        content.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            contentDiv.appendChild(p);
        });
    } else {
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
    }

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
        fetchAndDisplayContent(fetchMemes);
    } else {
        fetchAndDisplayContent(fetchInspirationalQuote);
    }
}

funnyButton.addEventListener("click", () => {
    fetchAndDisplayContent(fetchMemes);
});

inspirationalButton.addEventListener("click", () => {
    fetchAndDisplayContent(fetchInspirationalQuote);
});

displayRandomQuoteOrImage();