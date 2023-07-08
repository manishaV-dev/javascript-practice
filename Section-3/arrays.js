
const friends = ['Michael', 'Jim', 'Dwight'];
console.log(friends);

const year = new Array (1991, 1998, 1995, 2020, 2022);
console.log(year);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 2]);

friends[2] = "Creed";
console.log(friends);

const firstName = "Manisha";
const aboutMe = [firstName, 'Verma' , 2023-1995, 'Web Developer', friends];
console.log(aboutMe);


const calculateAge = function(birthYear){
    return 2023 - birthYear;
}

const yearName = [1990, 1987, 1996, 2003, 1998];


const age1 = calculateAge(yearName[0]);
const age2 = calculateAge(yearName[yearName.length - 3]);
const age3 = calculateAge(yearName[yearName.length - 1]);

console.log(age1, age2, age3);

const ages = [calculateAge(yearName[1]), calculateAge(yearName[yearName.length - 2]), calculateAge(yearName[yearName.length - 3])];
console.log(ages);


//Basic array method


//add element at the end of array
friends.push('Jay');
console.log(friends);

const addFriend = friends.push('Peter');
console.log(addFriend); //return the length

//add element at the begining of array
friends.unshift('Kevin');
console.log(friends);


//Remove the element

friends.pop(); // from last
console.log(friends);

const popped = friends.pop();
console.log(popped); // return the popped value means peter


friends.shift('Kevin'); // from fisrt
console.log(friends);

console.log(friends.indexOf('Jim')); //1
console.log(friends.indexOf('Bob')); // -1 , because bob is not present in array

//In ES6, we use include, so if the element is there it return True otherwise false

console.log(friends.includes('Jim')); //true
console.log(friends.includes('Pam')); //false

friends.push(23);
console.log(friends.includes(23)); //true

if(friends.includes('Peter')){
    console.log("You have a friend called Peter")
}else{
    console.log("There is no friend whose name is Peter");
}

