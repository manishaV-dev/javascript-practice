"use strict";

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 2,3 ,4

// Array Destucturing

const [x, y, z] = arr;
console.log(x, y, z); // 2,3 ,4
console.log(arr); //(3) [2, 3, 4]

//
//---------------------------------------------------------------------------------------------------------------//
const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
};

// const [first, second] = resturent.catagories; // first 2 element copy
// console.log(first, second); Italian Pizzeria

//if you want copy first and third element then an extra comma

const [first, , second] = resturent.catagories;
console.log(first, second); //Italian Vegetarian

//---------------------------------------------------------------------------------------------------------------//
// Switching Variable
// example: resturant want to switch the primary cat to secondary cat means Vegetarian to Italian and vise-versa

let [main, , secondary] = resturent.catagories;
console.log(main, secondary); // Italian Vegetarian

//without destructing method
// we have to create a temporary variable and assign to that one of them

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

//Destructing

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

//---------------------------------------------------------------------------------------------------------------//
// Receive 2 return values from a function

const [starter, mainCourse] = resturent.order(2, 0);
console.log(`${starter} and ${mainCourse}`); // Garlic Bread and Pizza

//---------------------------------------------------------------------------------------------------------------//
//Nested Desturcting
const nested = [2, 3, [6, 8]];
// const [i, , j] = nested; // this middle comma used to skip array[1]
// console.log(i, j); //2 (2) [6, 8]

//if we want both array so we can use destructing inside destructing
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 6 8

//---------------------------------------------------------------------------------------------------------------//
/*we can also set default values for the variables when we are extracting them. And that's gonna be very useful 
in the case that we don't know the length of the array, */

// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
