

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); //false
console.log(hasDriverLicense || hasGoodVision); //true
console.log(!hasDriverLicense); //false
console.log(!hasGoodVision); //true


if (hasDriverLicense && hasGoodVision) {
    console.log("You can drive...");
} else {
    console.log("Someone else need to drive...");
}

const isTired = true;

console.log(hasDriverLicense && hasGoodVision && isTired); //false
console.log(hasDriverLicense || hasGoodVision || isTired); //true

console.log(hasDriverLicense && !hasGoodVision && isTired);



// Switch Case Statement


const day = "Sunday";

// switch (day) {
//     case 'Monday':
//         console.log("Go for the webinar!");
//         break;

//     case 'Tuesday':
//         console.log("Start coding class");
//         break;

//     case 'Wednesday':
//     case 'Thursday':
//         console.log("Writing Code Example");
//         break;

//     case 'Friday':
//         console.log("Practise");
//         break;

//     case "Saturday":
//     case "Sunday":
//         console.log("Enjoy the weekend");
//         break;

//     default:
//         console.log("Not a Good Day!")

// }


if (day === "Monday") {
    console.log("Go for the webinar!");
} else if (day === "Tuesday") {
    console.log("Start coding class");
} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Writing Code Example");
} else if (day === "Friday") {
    console.log("Practise");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a Good Day!")
}


// The Conditional (Ternary) Operator

const age = 20;

// age >= 18 ? console.log('I would like to drink Wine 🍷') : console.log("No! water is good for now 🙁");

const drink =  age >= 18 ? "Wine 🍷" : "Water 🙁";
console.log(drink);



let drink2;
if(age>=23){
    drink2 = ("Wine 🍷");
}else{
    drink2 = ("Water 🙁");
}

console.log(drink2);


console.log(`I'd like to drink ${age >= 18 ? "Wine 🍷" : "Water 🙁"}`);