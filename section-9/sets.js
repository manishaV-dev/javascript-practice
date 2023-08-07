"use strict";

// A set is a basically a collection of unique value, that means it can never have any duplicate values

const odersSet = new Set([
  "Pizza",
  "Pasta",
  "Juice",
  "Pizza",
  "Pasta",
  "Salad",
]);

console.log(odersSet); // Set(4) {'Pizza', 'Pasta', 'Juice', 'Salad'} here all the duplicate values are gone

//find the size of set
console.log(odersSet.size); // 4

//find if element or value is there or not in set just like we use "include" in array
console.log(odersSet.has("Pizza")); // true
console.log(odersSet.has("Bread")); // False

//add new element in sets
odersSet.add("Garlic Bread");
odersSet.add("Garlic Bread");
console.log(odersSet); // Set(5) {'Pizza', 'Pasta', 'Juice', 'Salad', 'Garlic Bread'}

//Delete an element from set
odersSet.delete("Salad");
console.log(odersSet); // Set(4) {'Pizza', 'Pasta', 'Juice', 'Garlic Bread'}

//Delete all element from set
// odersSet.clear();
// console.log(odersSet); // Set(0) {size: 0}

//Looping

for (const loop of odersSet) {
  console.log(loop);
  /*
    Pizza
    Pasta
    Juice
    Garlic Bread
*/
}

//Example

const staff = ["Manager", "Waiter", "Peon", "Manager", "Waiter", "Waiter"];

// const uniqueStaff = new Set(staff);
// console.log(uniqueStaff); // Set(3) {'Manager', 'Waiter', 'Peon'}

//But want to create new array (set to array), so in that case use spread operator to unpack the element

const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff); //(3) ['Manager', 'Waiter', 'Peon']

console.log(new Set(staff).size); // 3

console.log(new Set("Manishavarrma").size); // 9
