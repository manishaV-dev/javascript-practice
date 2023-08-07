"use strict";

// 1. Destructuring

const [a, b, ...others] = [1, 2, 3, 4, 5, 7, 9];
console.log(a, b, others); // 1 2 (5) [3, 4, 5, 7, 9]

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

  orderPizza: function (mainIngrient, ...otherIngredient) {
    console.log(mainIngrient, otherIngredient); // Mashroom (4) ['Cheese', 'Olive', 'Onion', 'Chicken']
  },
};

const [pizza, pasta, ...otherFood] = [
  ...resturent.mainMenu,
  ...resturent.starterMenu,
];

console.log(pizza, pasta, otherFood); // Pizza Pasta (5) ['Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//====================================================================================================================================
// rest arguement should be at last place

//correct
const [Risotto, ...restFood] = [...resturent.mainMenu];
console.log(Risotto, restFood); // Pizza (2) ['Pasta', 'Risotto']
//incorrect
// const [Risotto, ...restFood, pasta] = [...resturent.mainMenu];
// console.log(Risotto, restFood); // rest element must be the last element

//====================================================================================================================================

//Object

const { sat, ...weekDays } = resturent.openingHours;
console.log(sat, weekDays); // {open: 0, close: 24}close: 24open: 0[[Prototype]]: Object {thu: {…}, fri: {…}}

//-----------------------------------------------------------------------------
//=====================================================================================================================================

// 2. Functions

const add = function (...numbers) {
  // console.log(numbers); // (2) [2, 4] , 4) [3, 6, 8, 3] , (6) [9, 6, 8, 3, 6, 2]

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); /* 6  20  34  */
};

add(2, 4);
add(3, 6, 8, 3);
add(9, 6, 8, 3, 6, 2);

const x = [23, 5, 7];
add(...x); //35

/////

resturent.orderPizza("Mashroom", "Cheese", "Olive", "Onion", "Chicken"); // Mashroom (4) ['Cheese', 'Olive', 'Onion', 'Chicken']
resturent.orderPizza("Paproni"); // Paproni []
