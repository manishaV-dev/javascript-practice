"use strict";

/* We can use spread operator(...) to basically exapand an array into all its elements.*/

//1st situation: whenever we would otherwise write multiple values separated by commas and this situation happens whenevr we write an array literal like this example
const arr = [4, 5, 6];
const badArrEx = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badArrEx); // [1, 2, 3, 4, 5, 6]

const goodArrEx = [1, 2, 3, ...arr];
console.log(goodArrEx); // [1, 2, 3, 4, 5, 6]
console.log(...goodArrEx); //1 2 3 4 5 6
/* 
so if we wrote it without these three dots,then we would have this all array,So just like this.
So one, two, and then an array of seven, eight, nine.And that's because here, we are including this entire array.

const goodArrEx = [1, 2, 3, arr]; // (4) [1, 2, 3, Array(3)]


But with the spread operator, again, it's like taking all the elements out of the array and writing them here manually.
const goodArrEx = [1, 2, 3, arr]; // [1, 2, 3, 4, 5, 6]

*/

//2nd situation: when we pass arguments into functions

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  oderpasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const newItem = [...resturent.mainMenu, "Gnocci"];
console.log(newItem); //['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//here it create new array newItem but it did not affect mainMenu array.

/*we are indeed creating a completely new array, all right?
We are, of course, not manipulating the restaurant.mainMenu array.
So we are building a new array from scratch,and you can see that here by the square brackets.
So this brackets syntax here is simply the way in which we have always been writing new arrays.*/

console.log(resturent.mainMenu); //['Pizza', 'Pasta', 'Risotto']

//-----------------------------------------------------------------------------------------
//1. Create shallow copies of arrays

const newMainMenu = [...resturent.mainMenu];
console.log(newMainMenu); //['Pizza', 'Pasta', 'Risotto']
console.log(...newMainMenu); // Pizza Pasta Risotto

// 2. join/merge two or more arrays togheter

const menu = [...resturent.starterMenu, ...resturent.mainMenu];
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
console.log(...menu); // Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

// Iterables

// ... in string

const str = "Manisha";
const letters = [...str, "", "s."];
console.log(letters); // (9) ['M', 'a', 'n', 'i', 's', 'h', 'a', '', 's.']

//-----------------------------------------------------------------------------------------

const ingredient = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt(" Ingredient 2?"),
  //   prompt("Ingredient 1?"),
];

resturent.oderpasta(...ingredient);

//object

const newResturent = {
  foundedIn: "1870",
  ...resturent,
  founder: "zjyojhi Jhi",
};

console.log(newResturent);

const resturantCopy = { ...resturent };
resturantCopy.name = "Rasitian Roma";
console.log(resturantCopy.name); // Rasitian Roma
console.log(resturent.name); // Classico Italiano
