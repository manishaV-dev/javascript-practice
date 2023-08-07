// Primitive Types vs Reference Type(Object)

// Primitive Types

let firstName = "Jones";
let oldname = firstName;
firstName = "Danny";
console.log(firstName, oldname); //Danny Jones

//Reference Type

const jessica = {
  firstName: "Jessics",
  lastName: "Laal",
  age: 24,
};

const afterMarriedJessica = jessica;
afterMarriedJessica.lastName = "Davis";

console.log("Before Marriage : ", jessica); //Before Marriage :  {firstName: 'Jessics', lastName: 'Davis', age: 24}
console.log("After Marriage : ", afterMarriedJessica); //Before Marriage :  {firstName: 'Jessics', lastName: 'Davis', age: 24}

// Copying Object

const jessica2 = {
  firstName: "Jessics",
  lastName: "Laal",
  age: 24,
  family: ["Jons", "Dia"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "William";

// console.log("Before Marriage : ", jessica2); //Before Marriage :  {firstName: 'Jessics', lastName: 'Laal', age: 24}
// console.log("After Marriage : ", jessicaCopy); //After Marriage :  {firstName: 'Jessics', lastName: 'William', age: 24}

jessicaCopy.family.push("Harry");

console.log("Before Marriage : ", jessica2); //Before Marriage :  {firstName: 'Jessics', lastName: 'Laal', age: 24, family: Array(3)}
console.log("After Marriage : ", jessicaCopy); //Before Marriage :  {firstName: 'Jessics', lastName: 'Laal', age: 24, family: Array(3)}
