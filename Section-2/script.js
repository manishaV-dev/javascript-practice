/*
let js = "Amazing";

if (js === "Amazing") alert("Js is wow");
*/

let number = 45 + 60 + 3 - 40;
console.log(number);





// boolean data type

let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true); //boolean
console.log(typeof jsIsFun); //boolean
console.log(typeof 67); //number
console.log(typeof "John"); //string


//changeing the data type of a variable

jsIsFun = "YES!!";
console.log(jsIsFun);
console.log(typeof jsIsFun); //string

//Undefined data type

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 2023;
console.log(year);
console.log(typeof year); //number


console.log(typeof null); //object




//let const var

let age = 30;
age = 31;
console.log(age);

const PI = 3.14;
console.log(PI);

var firstJob = "Teacher";
firstJob = "Receptionist"
console.log(firstJob);




// Basic Operators

const myAge = 2023 - 1995;
console.log(myAge);

const now = 2037;
const johnAge = now - 1991;
const sarahAge = now - 2015;

console.log(johnAge, sarahAge);
console.log(johnAge * 2, johnAge / 10, 2 ** 3);



//Assignment Operators
let x = 10 + 5;  // x = 15
x += 10; // x = x+10 = 15+10 = 25
x *= 4; // x = x*4 = 25*4 = 100
x++; // x = x+1 = 100+1 = 101
x--; // x= x-1 = 101-1 = 100
console.log(x);


//Comparision Operatiors

console.log(johnAge > sarahAge); // true

console.log(sarahAge <= 20); //False

const findAge = johnAge >= 40;
console.log(findAge); //true

console.log(now - 1991 > now - 2017);









//===============================================================================================


//Right to Left Operators

let i, j;
i = j = 25 - 15 + 5;
console.log(i, j);


//parenthesis ()
const avgAge = johnAge + sarahAge / 2;
console.log(johnAge, sarahAge, avgAge); //46 22 57 it gives wrong value beacause in this operation it divide first then add it with john age thats why we should use here parenthesis

const avgAge1 = (johnAge + sarahAge) / 2;
console.log(johnAge, sarahAge, avgAge1); // 46 22 34




// Template Literals

const firstName = "Moana";
const job = "Queen";
const birthYear = 2016;
const currentYear = 2040;

const detailsDes = " I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job;
console.log(detailsDes);

const detailsDesNew = ` I'm ${firstName}, a ${(currentYear - birthYear)} years old ${job} `;
console.log(detailsDesNew);

console.log('String with \n\ multiple \n\ lines');

console.log(`string
with
multiple
lines
with
template literals.`)



// If else statement

const newAge = 17;
const isOldEnough = newAge >= 18;

if (isOldEnough) {
    console.log("Yes! Sam can drive a car 🚗");
} else {
    const yearLeft = 18 - newAge;
    console.log(`No! Just Go and Study 😅, After ${yearLeft} year you can drive.`);
}


const birthdayYear = 1992;
let century;

if (birthdayYear <= 2000) {
    century = "20's";
} else {
    century = "21's";
}

console.log(century);





////////////////////////////////////////////////////////////////////////////

// Type Conversion and Type Coercion

/*
Type conversion - when we manually canvert from one type to another.

Type Coercion - when JS automatically convert types.
*/


//type convertion

const inputYear = '1998';
console.log(typeof inputYear); //string
console.log(inputYear + 10); // 199810
console.log(Number(inputYear) + 10); // 2008
console.log(Number("Siya")); // NaN = Invalid Number
console.log(String(23)); //23 String


//type coercion

console.log("I'm " + 23 + ' years old');

console.log('23' - '10' - 3); //10, because - operatoe converted string to a number

console.log('23' + '10' + 3); // 20103

console.log("10" * "10"); //100, because * operatoe converted string to a number

console.log("10" / "10"); //1, because / operatoe converted string to a number

let n = '1' + 1; //11
n = n - 1; //10
console.log(n); //10


// Truthy and falsy Value (Boolean)

console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('Jonas')); //True
console.log(Boolean({})); //True


const money = 0;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You need a job"); // this is going to print in console.
}


let Height;
if (Height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINITE!");
}

////////////////////////////////////////////////////////////////////////////


//Equality Operators ('==' and '===')

let checkAge = 18;

if (checkAge === 18) {
    console.log("You just become an adult :D (Strictly Equality Operators)");
}

if (checkAge == 18) {
    console.log("You just become an adult :D Loosely Equality Operators");
}


// const favNumber = prompt("What is your favorite Number?");

// console.log(favNumber);
// console.log(typeof favNumber); // string

// if(favNumber == 20){
//     console.log("Cool!!"); // true
// }

// if(favNumber === 20){
//     console.log("Cool!!"); // false
// }



// const favNumber = Number(prompt("What is your favorite Number?"));

// console.log(favNumber);
// console.log(typeof favNumber); // Number

// if(favNumber === 20){
//     console.log("Cool!!"); // true
// }else if(favNumber === 10){
//     console.log("Nice!!"); // true
// }else{
//     console.log("Nice try!!"); // true
// }









