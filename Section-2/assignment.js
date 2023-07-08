//===============================================================================================
// Assignment One

let country = "India";
let continent = "Asia";
let population = 1418644583;
console.log("My Country Name is " + ' ' + country + ' ' + "which is in the " + ' ' + continent + ' ' + "continent. The current population of India is " + ' ' + population);

//===============================================================================================

console.log(`My Country Name is ${country} which is in the ${continent} continent. The current population of ${country} is ${population}`);





//===============================================================================================
//Assignment Second

let isIsland = true;
console.log(isIsland);
console.log(typeof isIsland);


let language;
console.log(language);
console.log(typeof language);

console.log(typeof population);
console.log(typeof country);

//===============================================================================================






//===============================================================================================
//Assignment Third

let languageSpoken = "Hindi";
console.log(languageSpoken);

//===============================================================================================






//===============================================================================================
//Assignment four

const halfPop = population / 2;
console.log(halfPop / 2);

let mySalary = 13000;
mySalary++;
console.log(mySalary)

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let avgPopulation = 330000000;
console.log(population > avgPopulation);


const description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////
// Assignment Five

// population = 1300000;

if (population > 33000000) {
    console.log("We are huge 🙄");
} else {
    console.log("We are good.")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////
// Assignment Six

console.log('9' - '5'); //4 
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('237' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////
// Assignment Seven

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log("There is only 1 Neighbour conutry");
} else if (numNeighbours > 1) {
    console.log("There is more than 1 Neighbour conutry")
} else {
    console.log("No Border Country");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////
// Assignment Eight

if (population <= 5000000 && language === "English" && !isIsland) {
    console.log("You can live in Portugal");
} else {
    console.log("Portugal does not meet your criteria :('");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////
// Assignment Nine

const spokenLanguage = prompt("Guess the language position in worldwide?");

switch (spokenLanguage) {

    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;

    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;

    case "English":
        console.log("3rd place");
        break;

    case "Hindi":
        console.log("Number 4");
        break;

    case "arabic":
        console.log("5th most spoken language");
        break;

    default:
        console.log("Great language too :D")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
// Assignment Ten

population >= 3000000 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");

// OR

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);