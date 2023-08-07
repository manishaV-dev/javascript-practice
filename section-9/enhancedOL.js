"use strict";

//---------------------------------------------------ENHANCED OBJECT LITERALS---------------------------------------------------

/* We have an object called openingHours that is outside of the resturent object and want to add openingHours object in resurent*/

// const weekdays = ["Mon", "Tue", "wed", "Thu", "fri", "sat", "sun"];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },

  fri: {
    open: 11,
    close: 23,
  },

  sat: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //OLD
  //   openingHours: openingHours,

  //1. new

  openingHours,

  //2. No need to write Function keyword when create a method

  //Old
  //   order: function (starterIndex, mainMenuIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  //   },

  //NEW
  order(starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery({
    time = "20.00",
    address,
    starterIndex = 1,
    mainMenuIndex = 0,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be deliver to ${address} at ${time} ` //Oder Received! Caprese Salad and Pizza will be deliver to Via 21 lite at 20.00
    );
  },
};

console.log(resturent.openingHours);
resturent.orderDelivery({
  time: "20.30",
  address: "Via 21 lite",
  mainMenuIndex: 2,
  starterIndex: 2,
});

// 3. Enhanced property name

const weekdays = ["Mon", "Tue", "wed", "Thu", "fri", "sat", "sun"];

const openingHours2 = {
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

console.log(openingHours2);
