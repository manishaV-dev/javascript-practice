"use strict";

const weekdays = ["Mon", "Tue", "wed", "Thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    //thu
    open: 12,
    close: 22,
  },

  [weekdays[2]]: {
    //wed
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    //sat
    open: 0, // open 24 hours
    close: 24,
  },
};

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
};

//Property Name/key
const properties = Object.keys(openingHours);
console.log(openingHours); // {Thu: {…}, wed: {…}, sat: {…}}

// for (const day of Object.keys(openingHours)) {
//   console.log(day); // Thu fri sat
// }

let openStr = `We are open on ${properties.length} days : `;

for (const day of properties) {
  //   console.log(day); // Thu fri sat

  openStr += `${day}, `;
}

console.log(openStr); // We are open on 3 days : Thu, wed, sat,

//==================================================================================================================

//Property Value

const values = Object.values(openingHours);
console.log(values);
// (3) [{…}, {…}, {…}]
// 0
// :
// {open: 12, close: 22}
// 1
// :
// {open: 11, close: 23}
// 2
// :
// {open: 0, close: 24}

//==================================================================================================================

//Property Entries

const entries = Object.entries(openingHours);
// console.log(entries); // (3) [Array(2), Array(2), Array(2)]

// for (const x of entries) {
//   console.log(x); // ['Thu', {…}] ['wed', {…}] ['sat', {…}]
// }

//key, value here key = day and value = open and close because we have 2 property in that value so here we have to desturcture

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);

  //On Thu we open at 12 and close at 22
  //On wed we open at 11 and close at 23
  //On sat we open at 0 and close at 24
}
