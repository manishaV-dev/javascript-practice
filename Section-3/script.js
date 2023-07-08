'use strict';




// let useDriversLicence = false;
// const passTest = true;
// if(passTest) useDriversLicences = true; //this variable is not defined but there is no error is console 
// if(useDriversLicence) console.log('I can drive');



// let useDriversLicence = false;
// const passTest = true;
// if(passTest) useDriversLicences = true; //this variable is not defined and after using strict it is showing the error
// if(useDriversLicence) console.log('I can drive');


let useDriversLicence = false;
const passTest = true;

if(passTest) useDriversLicence = true;
if(useDriversLicence) console.log('I can drive 🚗');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION

function logger () {
    console.log("Hii! I'm a function.");
}

logger(); // calling / Invoking / Running the function
logger();
logger();


function fruitProcessor (apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 2)); //same output

const appleJuice = fruitProcessor(5, 2); //same output
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 6);
console.log(orangeJuice);


//function Declaration

function findAge(birthYear) {
    return 2030 - birthYear;
}
const age1 = findAge(1998);
console.log(age1);


// function Expression

const findAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = findAge2(1992);
console.log(age2);


// ARROW FUNCTION

const findAge3 = birthYear => 2037 - birthYear;

const age3 = findAge3(1993);
console.log(age3);

// const yearsUntilRetirment = birthYear => {
//     const currentAge = 2023 - birthYear;
//     console.log(`My current age is ${currentAge}`);
//     const retirment = 65 - currentAge;
//     return retirment;
// }

// const yearsLeft = yearsUntilRetirment(1995);
// console.log(`I've ${yearsLeft} years left to work.`);


const yearsUntilRetirment = (birthYear, firstName) => {
    const currentAge = 2023 - birthYear;
    console.log(`My current age is ${currentAge}`);
    const retirment = 65 - currentAge;
    return `${firstName} retires in ${retirment} years.`;
}

const yearsLeft = yearsUntilRetirment(1995, "Manisha");
console.log(yearsLeft);


//FUNCTIONS CALLING OTHER FUNCTIONS:

const fruitPieces = function(fruit){
    return fruit * 5;
}

const juiceMaking = function(beetRoot, carrot){
    const beetJuicePieces = fruitPieces(beetRoot);
    const carrotJuicepieces = fruitPieces(carrot);
    
    const mixingFruit = `Juices with ${beetJuicePieces} pieces of beetroot and ${carrotJuicepieces} pieces of carrot.`;
    return mixingFruit;
}

console.log(juiceMaking(3, 2));



const calcAge = function(year){
    return 2023 - year;
}

const findRetirementAge = function (birthYear, firstName){
    const ageCurrent = calcAge(birthYear);
    const retiremnetAge = 65 - calcAge(birthYear);
    if(retiremnetAge > 0) {
        return `${firstName} retires in ${retiremnetAge} years and current age is ${ageCurrent}.`;
    }else{
        return `${firstName} has already retired 🎊 and current age is ${ageCurrent}.`;
    }
}

console.log(findRetirementAge (1995, 'Khushi'));
console.log(findRetirementAge(1970, "Suresh"));