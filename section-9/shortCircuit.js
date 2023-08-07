"use strict";

/* If the first value is truthy value in the chain of OR Operatior, it will immediately return the firts Value */

console.log(2 || "Jonas"); //2
console.log("" || 10); // 10
console.log(undefined || null); // null
console.log(0 || true); // true
console.log(undefined || 0 || "" || "Manisha" || null); // Manisha

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPizza: function (mainIngrient, ...otherIngredient) {
    console.log(mainIngrient, otherIngredient); // Onion ['Olive'] // AND Chicken ['Chilly Flakes']
  },
};

//ternary Operator

// const guest1 = resturent.numGuest ? resturent.numGuest : 10;
// console.log(guest1); // 10
//here resturent.numGuest is undifined

//If we defined resturent.numGuest

resturent.numGuest = 23;
const guest1 = resturent.numGuest ? resturent.numGuest : 10;
console.log(guest1); //23

//Short Circuting
resturent.numGuest1 = 50;
const guest2 = resturent.numGuest1 || 20;
// console.log(guest2); // 20
//If we defined resturent.numGuest
console.log(guest2); // 50

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//AND Operators

if (resturent.orderPizza) {
  resturent.orderPizza("Onion", "Olive");
}

//AND

resturent.orderPizza && resturent.orderPizza("Chicken", "Chilly Flakes");

//================================================================================================================================
//================================================================================================================================

//Nullish coalescing Operator (??)

resturent.guestNum = 0;
const guests = resturent.guestNum || 10;
console.log(guests); // 10

//Here in many cases there will be no guest means guestNum = 0
//So solve this error we use ?? operator

//Nullish = Null or Undefined (not 0 or '' string)
const guestCorrect = resturent.guestNum ?? 20;
console.log(guestCorrect); // 0
