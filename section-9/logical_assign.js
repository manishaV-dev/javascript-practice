"use strict";

// Logical Assignment Operators (ES 2021)

const resturent1 = {
  name: "Butterfly",
  //   numGuest: 20,
  numGuest: 0,
};

const resturent2 = {
  name: "Big Fat Belly",
  owner: "PC Shyery",
};

//----------------------------------------OR Assignment Operators------------------------------------------------------

// resturent1.numGuest = resturent1.numGuest || 10;
// resturent2.numGuest = resturent2.numGuest || 30;

// -------------- OR ---------------------

/*
resturent1.numGuest ||= 10;
resturent2.numGuest ||= 30;

// both give same answer

console.log(resturent1); // {name: 'Butterfly', numGuest: 20}
console.log(resturent2); // {name: 'Big Fat Belly', owner: 'PC Shyery', numGuest: 30}

// After set resturent1 numGuest = 0

console.log(resturent1); // {name: 'Butterfly', numGuest: 20} but should be 0, to fix this we can use NULLISH ASSIGNMENT OPERATOR
console.log(resturent2); // {name: 'Big Fat Belly', owner: 'PC Shyery', numGuest: 30}

*/

//-------------------------------------NULLISH ASSIGNMENT OPERATOR-----------------------------------------------------

resturent1.numGuest ??= 10;
resturent2.numGuest ??= 30;

console.log(resturent1); // {name: 'Butterfly', numGuest: 0}
console.log(resturent2); // {name: 'Big Fat Belly', owner: 'PC Shyery', numGuest: 30}

//-------------------------------------AND ASSIGNMENT OPERATOR-----------------------------------------------------

// resturent1.owner = resturent1.owner && "<ANONYMOUS>";
// resturent2.owner = resturent2.owner && "<ANONYMOUS>";

// console.log(resturent1); // {name: 'Butterfly', numGuest: 0, owner: undefined}
// console.log(resturent2); // {name: 'Big Fat Belly', owner: '<ANONYMOUS>', numGuest: 30}

//OR

resturent1.owner &&= "<ANONYMOUS>";
resturent2.owner &&= "<ANONYMOUS>";

console.log(resturent1); // {name: 'Butterfly', numGuest: 0}
console.log(resturent2); // {name: 'Big Fat Belly', owner: '<ANONYMOUS>', numGuest: 30}
