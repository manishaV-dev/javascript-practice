"use strict";

console.log([1, 2, 3, 4, 5, 6]); // (6) [1, 2, 3, 4, 5, 6]
console.log(new Array(1, 2, 3, 4, 5, 6)); // (6) [1, 2, 3, 4, 5, 6]

// Empty Arrays + Fill Method

const x = new Array(7);
console.log(x); // (7) [empty × 7]
// console.log(x.map(() => 5)); // // (7) [empty × 7]

// x.fill(1);
// console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]

// x.fill(1, 3);
// console.log(x); // [empty × 3, 1, 1, 1, 1]

x.fill(1, 3, 5);
console.log(x); // [empty × 3, 1, 1, empty × 2]

//

const arr = [1, 2, 3, 4, 5, 6];
arr.fill(23, 3, 5);
console.log(arr); // (6) [1, 2, 3, 23, 23, 6]

//===========================================================================

// Array.from

const y = Array.from({ length: 5 }, () => 1);
console.log(y); //(5) [1, 1, 1, 1, 1]

const z = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(z); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
