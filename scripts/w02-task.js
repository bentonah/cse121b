/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Benton Hanson';

let currentYear = '2023';

let profilePicture = 'w02-task\images\profile.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let favFoods = [' Watermelon', ' Cheesecake', ' Pizza', ' Pasta', ' Honey', ' Jerky'];

foodElement.innerHTML = `${favFoods}`;

let singleFood = [' Ice-Cream'];

foods.push(singleFood[0]);
foodElement.innerHTML += `<br>${favFoods}`;

foods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

foods.pop();
foodElement.innerHTML += `<br>${favFoods}`;


