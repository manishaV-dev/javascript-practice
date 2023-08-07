"use strict";

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  //   orderDelivery: function ({ time, address, starterIndex, mainMenuIndex }) {
  //     console.log(
  //       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be deliver to ${address} at ${time} ` //Oder Received! Garlic Bread and Risotto will be deliver to Via 21 lite at 20.30
  //     );
  //   },

  //set default value
  orderDelivery: function ({
    time = "20.00",
    address,
    starterIndex = 1,
    mainMenuIndex = 0,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be deliver to ${address} at ${time} ` //Oder Received! Caprese Salad and Pizza will be deliver to Via 21 lite at 20.00
    );
  },
};

/* Destructure objects we use the curly braces. Then all we have to do is to provide the variable names that exactly match the
 property names that we want to retrieve from the object.*/

const { name, catagories, openingHours } = resturent;
console.log(name, catagories, openingHours); // Classico Italiano (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] {thu: {…}, fri: {…}, sat: {…}}

// IF we want to change variable name as we want

const {
  name: resturantName,
  catagories: tags,
  openingHours: hours,
} = resturent;

console.log(resturantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//---------------------------------------------------------------------------------------------------------------//

//set Default Value

const { menu = [], starterMenu: starters = [] } = resturent;
// set menu default value to empty array, and change starterMenu to starters and set default value to empty array
console.log(menu, starters); // [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// in console, there is no property name is menu so is show empty array, if we don't defined that default value it show "UNDEFINED" and starters is equal to starterMenu so is show that value

//---------------------------------------------------------------------------------------------------------------//

//Mutating variables
let a = 111;
let b = 222;
const mutt = { a: 2, b: 6, c: 80 };

// { a, b } = mutt; //error

/*we get a syntax error.And the reason for that is that when we start a line with a curly brace like this,
then JavaScript expects a code block, all right? And since we cannot assign anything to a code block,like we did here with the equal sign,
then we get this error,unexpected token with the equal there. */

/*So to solve this here, we had to wrap this destructuring assignment into parenthesis.*/

({ a, b } = mutt);
console.log(a, b); // 2 6

//---------------------------------------------------------------------------------------------------------------//

// Nested Object Destructuring

const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}

//But actually we want that two variable

/*
opening hours is an object. And then in that object, we have another object. So this Friday is an object inside an object, which itself is inside the restaurant object.

Now the opening hours is already an object here that we have already stored in a variable. So that's the object that we're gonna destructure.

And so indeed Friday is this object that we get here. But remember that we actually want two variables,
-------------one called open and the other one called close.------------

So we know that this is an object,and now we can further destructure that objectusing this syntax.

So the colon, and then again,the exact property name of that inner object.


*/

const {
  sat: { open, close },
} = openingHours;
console.log(open, close); // 0 24

//set property name to other name
const {
  thu: { open: o, close: c },
} = openingHours;
console.log(o, c); // 12 22

//---------------------------------------------------------------------------------------------------------------//

/* we can just pass an object into the function as an argument, and the function will then immediately destructure that object.*/

resturent.orderDelivery({
  time: "20.30",
  address: "Via 21 lite",
  mainMenuIndex: 2,
  starterIndex: 2,
});

// see top in the object

resturent.orderDelivery({
  address: "Via 21 lite",
  starterIndex: 3,
});
