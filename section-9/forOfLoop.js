"use strict";

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...resturent.starterMenu, ...resturent.mainMenu];

//For-of loop
// find current element in each iteration
for (const items of menu) {
  console.log(items);
  /*Focaccia
                            Bruschetta
                            Garlic Bread
                            Caprese Salad
                            Pizza
                            Pasta
                            Risotto*/
}

// find current index in each iteration

for (const item of menu.entries()) {
  console.log(item); // [0, 'Focaccia']  [1, 'Bruschetta'] and so on
}

// OLD Methaod

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
  /*
  1 : Focaccia
  2 : Bruschetta
  .
  .
  .
  7 : Risotto

  */
}

// New Method : destructing i for numbering and el for element name

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);

  /*
  1 : Focaccia
  2 : Bruschetta
  .
  .
  .
  7 : Risotto

  */
}
