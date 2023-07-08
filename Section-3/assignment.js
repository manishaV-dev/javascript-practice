// Assignment 1

function describeCountry (country, population, capitalCity) {
    // console.log(country, population, capitalCity);

    const aboutCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return aboutCountry;
}

const aboutIndia = describeCountry("India", 120, "Delhi");
console.log(aboutIndia);

const aboutUS = describeCountry("America", 60, "Washington D.C");
console.log(aboutUS);

const aboutChina = describeCountry("China", 118, "Beijing");
console.log(aboutChina);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Assignment 2


//function declaration
const chinaPopulation = populationOfWorld1("China" , 1448);
console.log(chinaPopulation);

const IndiaPopulation = populationOfWorld1("India" , 1800);
console.log(IndiaPopulation);

const africaPopulation = populationOfWorld1("Africa" , 987);
console.log(africaPopulation);


function populationOfWorld1 (country, population){
    const worldPopulation = 7900;
    const someCountryPopulation = `${country} has ${population} million population and it is about ${population/worldPopulation*100} % of world population.`;
    return someCountryPopulation;
     
}




//function Expression
const worldWidePopulation = function (findCountry, findPopulation){
    const worldPopulationNew = 8000;
    const someCountryPopulationNew = `${findCountry} has ${findPopulation} million population and it is about ${findPopulation/worldPopulationNew*100} % of world population.`;
    return someCountryPopulationNew;
}

const chinaPopulationNew = worldWidePopulation("China" , 1448);
console.log(chinaPopulationNew);

const IndiaPopulationNew = populationOfWorld1("India" , 1800);
console.log(IndiaPopulationNew);

const africaPopulationNew = populationOfWorld1("Africa" , 987);
console.log(africaPopulationNew);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment 3

const worldWidePopulation3 = (findCountry, findPopulation) => {
    const worldPopulationNew2 = 8000;
    const someCountryPopulationNew2 = `${findCountry} has ${findPopulation} million population and it is about ${findPopulation/worldPopulationNew2*100} % of world population.`;
    return someCountryPopulationNew2;
}

const chinaPopulationNew2 = worldWidePopulation3("China" , 1500);
console.log(chinaPopulationNew2);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment 4

const describePopulation = function(country, population){
    return `${country} has ${population} million of people and it is about ${population/7900*100} % of world population.`;
}

const koreaPopulation = describePopulation("Korea" , 650);
console.log(koreaPopulation);