/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Benton Hanson";
myProfile.photo = "images/profile.jpg";
myProfile.favoriteFoods = ['Pizza', 'Pasta', 'Cheesecake'];
myProfile.hobbies = ['Basketball', 'Piano', 'Hiking'];
myProfile.placesLived = [];


/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [];
myProfile.placesLived.push({'place': '', 'length': ''});
myProfile.placesLived.push({'place': 'England', 'length': '15 years'});
myProfile.placesLived.push({'place': 'Ireland', 'length': '2 Years'});
myProfile.placesLived.push({'place': 'Scotland', 'length': '1 Year'});
myProfile.placesLived.push({'place': 'Australia', 'length': '8 months'});
myProfile.placesLived.push({'place': 'Idaho, USA', 'length': '7 Years'});


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.photo);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
   let favFoodElem = document.createElement('li');
   favFoodElem.textContent = food;
   document.querySelector('#favorite-foods').appendChild(favFoodElem);
});


/* Hobbies List */
myProfile.hobbies.forEach((hobby)  => {
let hobbyElem = document.createElement('li');
hobbyElem.textContent = hobby;
document.querySelector('#hobbies').appendChild(hobbyElem);
});


/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
let placesLivedPlace = document.createElement('dt');
placesLivedPlace.textContent = placeLived.place;

let placesLivedLength = document.createElement('dd');
placesLivedLength.textContent = placeLived.length;

document.querySelector('#places-lived').appendChild(placesLivedPlace);
document.querySelector('#places-lived').appendChild(placesLivedLength);
});

