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

const resturent = {
  name: "Classico Italiano",
  location: "Via Angelo tavanti 23, Italy",
  catagories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
};

if (resturent.openingHours && resturent.openingHours.mon) {
  console.log(resturent.openingHours.mon.open); // Nothing
}

//Using Optional Chaining (?.)
//If certain property does not exist then undefined return immediately
console.log(resturent.openingHours.mon?.open); // undefined

//-----------------------------------------------------------------------------

const days = ["Mon", "Tue", "wed", "Thu", "fri", "sat", "sun"];

for (const day of days) {
  //   const open = resturent.openingHours[day]?.open;
  //   console.log(`On ${day}, we open at ${open}`);
  /*
  On Mon, we open at undefined
  On Tue, we open at undefined
  On wed, we open at 11
  On Thu, we open at 12
  On fri, we open at undefined
  On sat, we open at 0
  On sun, we open at undefined

  */
  //-----------------------------------------------------------------------------

  // But don't want that undefined, so Lets set the Default value
  //set default value
  //   const open = resturent.openingHours[day]?.open || "Closed";
  //   console.log(`On ${day}, we open at ${open}`);

  /*
  On Mon, we open at Closed
  On Tue, we open at Closed
  On wed, we open at 11
  On Thu, we open at 12
  On fri, we open at Closed
  On sat, we open at Closed
  On sun, we open at Closed

  */
  //-----------------------------------------------------------------------------

  // So here is a problem, "On sat, we open at Closed" but we have the value of sat is 0, so it takes it as a falsy value so
  // to solve this we use Nullish coalescing ??

  const open = resturent.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day}, we open at ${open}`);

  /*
  On Mon, we open at Closed
  On Tue, we open at Closed
  On wed, we open at 11
  On Thu, we open at 12
  On fri, we open at Closed
  On sat, we open at 0
  On sun, we open at Closed

  */
}

// On Method

console.log(resturent.order?.(0, 1) ?? "Method does not exist"); // Method does not exist

// On arrays

const users = [{ name: "Shamesh", Email: "example@gmail.com" }];
console.log(users[0]?.name ?? "User Does Not Exist"); // Shamesh
