//For loop is running while condition is true.

// for(let rep = 1; rep<=10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
// }

const jonasArray = [
    'Jonas',
    'Doe',
    2037 - 1998,
    'Teacher',
    ['Michael', 'Jim', 'Andy']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {

    //reading an array
    console.log(jonasArray[i], typeof jonasArray[i]);


    //filling an array
    types[i] = jonasArray[i];
    types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i])
}

console.log(types);

//store in another array
const years = [1991, 2003, 1992, 2000];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);



//Example of continue 

for (let j = 0; j < jonasArray.length; j++) {

    //that means it only show string, it continue till it get all that data type
    // if(typeof jonasArray[j] !== 'string') continue;

    //that means it all data type except String
    if (typeof jonasArray[j] == 'string') continue;


    console.log(jonasArray[j], typeof jonasArray[j]);


}


//Example of Break

for (let k = 0; k < jonasArray.length; k++) {

    //that means it data type except number, when it get number loop will stop.
    if (typeof jonasArray[k] === Number) break;


    console.log(jonasArray[k], typeof jonasArray[k]);


}



//LOOPING BACKWARDS AND LOOPS IN LOOPS

const newArray = [
    'John',
    'Cina',
    2037 - 1998,
    'Fighter',
    ['Ken', 'Joe', 'Ross']
];


//normal loop == 0, 1,2...4,5

//Backward loop == 5,4 ... ,2,1, 0

for (let i = newArray.length - 1; i >= 0; i--) {
    console.log(i, newArray[i]);
}

//Loop in Loop

//ex- we have 3 yogas and we want it to repreat 5 times each

for (let yoga = 1; yoga <= 3; yoga++) {
    console.log(`----------- Starting Yoga ${yoga} -----------`); //we have 3 yoga

    //now have to repeat it for 5 times

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Kapalbhati repitation for ${rep} 🧎🏻‍♀️`);
    }

}


let rep = 1;
while (rep <= 10) {
    console.log(`WHILE:::::: Kapalbhati repitation for ${rep} 🧎🏻‍♀️`);
    rep++;
}

//get random number

// let dice = Math.random() * 6;
// console.log(dice);


//get random number between 1 -6

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


//when dice === 6, loop will stop

while (dice !== 6) {
    console.log(`You rolled a dice ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("Loop is about to end...")
    }
}