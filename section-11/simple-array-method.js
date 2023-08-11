"use strict";

let arr = ["a", "b", "c", "d", "e"];

// 1. SLICE Method

// arr.slice(startingParameter, endParameter)
console.log(arr.slice(2)); // (3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // (2) ['c', 'd']

// get on last element use -
console.log(arr.slice(-2)); // (2) ['d', 'e']

console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // (2) ['b', 'c']

// To Create a shallow copy of an array by SLICE method
console.log(arr.slice()); // (5) ['a', 'b', 'c', 'd', 'e']

//Or using spread operator
console.log([...arr]); // (5) ['a', 'b', 'c', 'd', 'e']

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// 2. SPLICE Method

// arr.slice(startingParameter, no. of element of that we want to delete)

// console.log(arr.splice(2)); // (3) ['c', 'd', 'e']
// console.log(arr); // (2) ['a', 'b']

// most use case is to delete the last element from the array
arr.splice(-1);
console.log(arr); // (4) ['a', 'b', 'c', 'd']

arr.splice(1, 2);
console.log(arr); // (2) ['a', 'd']

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// 3. REVERSE Method == reverse the array and also mutated

const arr2 = ["m", "l", "k", "j", "i"];
console.log(arr2.reverse()); // (5) ['i', 'j', 'k', 'l', 'm']
console.log(arr2); // (5) ['i', 'j', 'k', 'l', 'm']

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// 4. CONCAT
arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
const letters = arr.concat(arr2);
console.log(letters); // (13) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']

// OR by using Spread Operator
console.log([...arr, ...arr2]); // (13) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// 5. JOIN

console.log(letters.join(" - ")); // a - b - c - d - e - f - g - h - i - j - k - l - m
console.log([letters.join(" - ")]); // ['a - b - c - d - e - f - g - h - i - j - k - l - m']

//================================================================================================================
//.
//.
//.
//.
//.
//.
//================================================================================================================

// 6. AT (ES2020)

const atArr = [1, 6, 10];
console.log(atArr[0]); // 1
console.log(atArr.at(0)); // 1

//Getting Last array element
console.log(atArr[atArr.length - 1]); // 10
console.log(atArr.slice(-1)[0]); // 10

console.log(atArr.at(-1)); // 10
