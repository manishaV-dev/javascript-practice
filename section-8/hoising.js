"use strict";

//Hoisting with variables

console.log(me); //undefined
// console.log(job); // Reference Error = Cannot access before initialization
// console.log(year); // Reference Error = Cannot access before initialization

var me = "Manisha";
let job = "Blah";
const year = 2017;

/////////////////////////////////////////////////////////////////////////

//Hoisting with Function

console.log(addDeclartion(3, 5)); //8
// console.log(addExpression(3, 4)); // Reference Error = Cannot access before initialization , because function is also defined with const which is already in Temporal dead zone
// console.log(addArrow(8, 9)); // Reference Error = Cannot access before initialization

function addDeclartion(a, b) {
  return a + b;
}

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// console.log(addExpression(3, 4)); //Uncaught TypeError: addExpression is not a function because variable defined with Var (before call) is undefined

// console.log(addArrow(8, 9)); //Uncaught TypeError: addArroow is not a function

// var addExpression = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => {
//   return a + b;
// };

//Example. Why we should not use var
console.log(numOfProduct);
if (!numOfProduct) deleteProduct(); //if numOfProduct is 0 means value is false = !numOfProduct

var numOfProduct = 10;

function deleteProduct() {
  console.log("All Product is deleted");
}

// Result is = All Product is deleted, whereas the condition is wrong
// why is run = because when you console log console.log(numOfProduct); it gives you undefined and undifined is also a falsy value

//Window object

var i = 1;
let j = 2;
const k = 3;

console.log(i === window.i); //true
console.log(j === window.j); // false
console.log(k === window.k); // false
