
// const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1992, 'Teacher', ['Michael', 'Peter', 'Jim']];
// console.log(jonasArray);

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1992,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Jim']
};
console.log(jonasObject);

console.log(jonasObject.job); // Dot Notation

console.log(jonasObject['firstName']); // Bracket Notation

const keyName = 'Name';

console.log(jonasObject['first' + keyName]); //jonas
console.log(jonasObject['last' + keyName]); //Schmedtmann

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');
//console.log(jonasObject.interestedIn); //Undefined

// console.log(jonasObject[interestedIn]); // give value that you put

// if(jonasObject[interestedIn]){
//     console.log(jonasObject[interestedIn]);
// }else{
//     console.log("Wrong Input!! Please Choose between firstName, lastName, age, job, friends")
// }


jonasObject.location = "Canada";
jonasObject['Twitter'] = '@jonastwitter';

console.log(jonasObject);

//challange

// Jonas has 3 friends and his best friend is Jim.
console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends and his best friend is ${jonasObject.friends[0]}`);
console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends and his best friend is ${jonasObject.friends[jonasObject.friends.length - 1]}`);




//Object Methods

const khushi = {
    firstName: 'Khushi',
    lastName: 'Verma',
    birthYear: 1998,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Jim'],
    hasDriverLicence: true,

    // calcAge : function(birthYear){
    //     return 2023 - birthYear
    // }

    // calcAge : function(){
    //     console.log(this);
    //     return 2023 - this.birthYear
    // }

    calcAge : function(){
        this.age = 2037 - this.birthYear; //to add a property to the khushi object
        return this.age;
    },

    getSummery : function(){
        return `${khushi.firstName} is a ${khushi.calcAge()} old ${khushi.job}, and she has ${khushi.hasDriverLicence ? "a" : "no"} driver's licence `;
    }
};

// console.log(khushi.calcAge(1998));
// console.log(khushi['calcAge'](1995));


// console.log(khushi.calcAge());

console.log(khushi.calcAge());
console.log(khushi.age);

//challange

//Khushi is a 25 years old Developer, and she has a driver's licence. 
//create getSummery property in khushi object

console.log(khushi.getSummery());