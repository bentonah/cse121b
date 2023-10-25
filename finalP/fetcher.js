export async function fetchMeme() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    const memes = data.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    return [memes[randomIndex].url]; // Wrap the URL in an array
}

export async function fetchInspirationalQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return [data.content + " - " + data.author];
}
