"use strict";

const airline = "Air INDIA";
const plane = "A870G";

//Get index value

console.log(plane[0]); // A
console.log(plane[4]); // G
console.log("BG78"[0]); // B

// Find Length

console.log(airline.length); // 9
console.log("UH8765".length); // 6

//Method

//1 indexOf = to get position {Case Senstive}

console.log(plane.indexOf(8)); // 1
console.log(airline.indexOf("A")); // 0
console.log(airline.lastIndexOf("A")); // 8

// 2. SLICE - Extract/Del from starts
console.log(airline.slice(4)); // INDIA == this is called substring because its is a part of string

//Extacting 1st word
console.log(airline.slice(0, airline.indexOf(" "))); // Air

//Extacting Last word
console.log(airline.slice(airline.lastIndexOf(" "))); // INDIA , here space is include , to remove that space just + 1

console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // INDIA (No Space)

console.log(plane.slice(-2)); // 0G

//EXAMPLE

const checkMiddleSeat = function (seat) {
  // B and E is middle sear
  //slice(-1) = to get last index
  const s = seat.slice(-1);

  if (s == "B" || s == "E") {
    console.log("You got Middle Seat 😖");
  } else {
    console.log("You got lucky 😎");
  }
};

checkMiddleSeat("23A"); // You got lucky 😎
checkMiddleSeat("43B"); // You got Middle Seat 😖
checkMiddleSeat("6E"); // You got Middle Seat 😖
checkMiddleSeat("12C"); // You got lucky 😎

// toLowerCase / toUpperCase

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//=================================================================================================

//Example = Fix capitalization in Passanger Name
//1- convert all string to lower case
//2 - Then convert 1st letter (Index) to uppercase and rest to the lowecase

const passanger = "mAniShA";
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1).toLowerCase();
console.log(passangerCorrect); // Manisha

// const passanger = prompt("Enter Your Name");
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1).toLowerCase();
// console.log(passangerCorrect); // Manisha

//=================================================================================================

//Example = Comparing Email

const email = "manisha67@gmail.com";
const login = "    ManISha67@gmail.com  \n";

//many step
// const lowerEmail = login.toLowerCase();
// const trimEmail = lowerEmail.trim();
// console.log(trimEmail); // manisha67@gmail.com

//so do it in one go
//login.toLowerCase() this give a string and we can use string method then

const normalizeEmail = login.toLowerCase().trim();
console.log(normalizeEmail); // manisha67@gmail.com

//=================================================================================================

// Replacing

const priceGB = "€298,78";

const priceINR = priceGB.replace("€", "₹").replace(",", ".");
console.log(priceINR); // ₹298.78

const announcement =
  "All Passangers come to boaring door 23, boarding door 23!";
//just replace first one text
console.log(announcement.replace("door", "gate")); // All Passangers come to boaring gate 23, boarding door 23!

//just replace all door text
console.log(announcement.replaceAll("door", "gate")); // All Passangers come to boaring gate 23, boarding gate 23!

//=================================================================================================

//BOOLEAN

const planeNumber = "Airindia A3S008";

console.log(planeNumber.includes("A3S")); // true
console.log(planeNumber.includes("A3G")); // False

console.log(planeNumber.startsWith("Air")); // true

if (planeNumber.startsWith("Air") && planeNumber.endsWith("008")) {
  console.log("Welcome"); // Welcome
}

// Practise Exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT ALLOWED on Board");
  } else {
    console.log("You are WELCOMED to Board");
  }
};

checkBaggage("I have a laptop, Knife and a pocket Knife"); // You are NOT ALLOWED on Board
checkBaggage("I have a pair of socks and a camera"); // You are WELCOMED to Board
checkBaggage("I have some Foods and a GUN"); // You are NOT ALLOWED on Board

//=================================================================================================

// SPILT and JOIN

console.log("Air+Water+Fire+Earth+Soil+String".split("+")); // (6) ['Air', 'Water', 'Fire', 'Earth', 'Soil', 'String']

console.log("Manisha Varma".split(" ")); // (2) ['Manisha', 'Varma']

const [firstName, lastName] = "Manisha Varma".split(" ");

// const newName = ["Mrs.", firstName, lastName].join(" ");
// console.log(newName); // Mrs. Manisha Varma

const newName = ["Mrs.", firstName, lastName.toUpperCase()].join("----");
console.log(newName); // Mrs.----Manisha----VARMA

// Practise Exercise

const capitalizationName = function (name) {
  const names = name.split(" ");
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(" "));
};

capitalizationName("ann de moreh lrewsd"); // Ann De Moreh Lrewsd
capitalizationName("manisha kumari varma"); // Manisha Kumari Varma

//PADDING

//=================================================================================================

console.log("Hello World".padStart(20, "*")); // *********Hello World
console.log("javascript Mastery".padStart(30, "+").padEnd(40, "="));

// Practise Exercise

const atmCard = function (number) {
  // const numToStr = String(Number);
  //OR
  const numToStr = number + "";
  const atmNum = numToStr.slice(-4);
  return atmNum.padStart(numToStr.length, "*");
};

console.log(atmCard(8798675)); // ***8675
console.log(atmCard(879867534512)); // ********4512
console.log(atmCard("67543890291")); // *******0291

//REPEAT - repeat same string multiple time

const message = "Bad Weather... All Departures Delayed  ";
console.log(message.repeat(4));

const planeLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};

planeLine(3); // There are 3 planes in line ✈✈✈
planeLine(6); // There are 6 planes in line ✈✈✈✈✈✈
