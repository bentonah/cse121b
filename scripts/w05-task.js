/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create HTML elements
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');

        // Set templeName property to the h3 element
        h3Element.textContent = temple.templeName;

        // Set imageUrl property to src attribute and location property to alt attribute of img element
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append h3 element and img element to article element
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append article element to the global templesElement variable
        templesElement.appendChild(articleElement);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        
        if (response.ok) {
            const data = await response.json();
            templeList = data;
            displayTemples(templeList);
            console.log(templeList);
        } else {
            throw new Error("Failed to fetch temple data");
        }
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};
getTemples();


/* reset Function */
function reset() {
    document.getElementById("temples").innerHTML = "";
  }

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter, just use temples as the argument
            displayTemples(temples);
            break;
    }
};
getTemples();


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
});

getTemples();