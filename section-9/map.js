"use strict";

const weekdays = ["Mon", "Tue", "wed", "Thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    //thu
    open: 12,
    close: 22,
  },

  [weekdays[2]]: {
    //wed
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    //sat
    open: 0, // open 24 hours
    close: 24,
  },
};
const newResurent = new Map();
newResurent.set("name", "My Big Fat Belly");
newResurent.set("1", "Bhawanipur");
console.log(newResurent); // Map(2) {'name' => 'My Big Fat Belly', '1' => 'Bhawanipur'}

newResurent
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(")
  .set(2, "New Town");
console.log(newResurent); // Map(7) {'name' => 'My Big Fat Belly', '1' => 'Bhawanipur', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}

// to get any value

console.log(newResurent.get("name")); //My Big Fat Belly
console.log(newResurent.get(true)); // We are open :D

const time = 21;

console.log(
  newResurent.get(
    time > newResurent.get("open") && time < newResurent.get("close")
  )
); //We are open :D

//here we ask if time is between 11 to 23 , if true then give true value otherwise false value

//newResurent.get(true) =  We are open :D

//===============================================================================================

//Find if keys is there or not

console.log(newResurent.has("categories")); //true

// DELETE

newResurent.delete(2);
console.log(newResurent);

//===============================================================================================

const question = new Map([
  ["Question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Yes Correct 🎉"],
  [false, "Try Again 🙁"],
]);

console.log(question); // Map(7)

//===============================================================================================

//Convert object to map

console.log(Object.entries(openingHours)); // (3) [Array(2), Array(2), Array(2)]

const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap); // Map(3) {'Thu' => {…}, 'wed' => {…}, 'sat' => {…}}

// Quiz App

console.log(question.get("Question")); // What is the best programming language in the world

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);

    //Answer 1: C
    //Answer 2: Java
    //Answer 3: JavaScript
  }
}

// const answer = Number(prompt("Your Answer"));
// console.log(answer);
// console.log(question.get(question.get("Correct") === answer));
//If enter 3 you get correct otherwise try again

// Convert Map to array

console.log([...question]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

console.log([...question.keys()]); // (7) ['Question', 1, 2, 3, 'Correct', true, false]
console.log([...question.values()]); // (7) ['What is the best programming language in the world', 'C', 'Java', 'JavaScript', 3, 'Yes Correct 🎉', 'Try Again 🙁']
