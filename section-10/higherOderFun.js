"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "-").toLowerCase();
};

const upperFisrtWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function

const transformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFisrtWord);

/*
    Original String JavaScript is the best!
    Transformed String: JAVASCRIPT is the best!
    Transformed By: upperFisrtWord
*/
transformer("Javascript is Awesome", oneWord);

/*
    Original String Javascript is Awesome
    Transformed String: javascript-is-awesome
    Transformed By: oneWord

*/

//transformer = higher-order-function
//upperFisrtWord = callback Function
//oneWord = callback Function

//======================================================================================================================

// FUNCTIONS RETURNING FUNCTIONS (CLOSURE)

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetCall = greet("Hello");
greetCall("Manisha"); // Hello Manisha
greetCall("Martha"); // Hello Manisha

//OR

greet("Hey")("Sanjana"); // Hey Sanjana

// ARROW Function
const greetArrow = (greetingArrow) => (someName) =>
  console.log(`${greetingArrow} ${someName}`);

greetArrow("HOLA")("BB"); // HOLA BB
