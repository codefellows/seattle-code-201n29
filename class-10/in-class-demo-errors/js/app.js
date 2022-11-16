"use strict";

console.log("proof of life");

// Say I have a for loop
// for (let i = 0; i < 10; i++) {
//     // asdfsde();
//     console.log('i is:', i);
// }

let counter = 0;

// countr = 1;

let potato1 = {
  variety: "yukon",
  color: "yellow",
  expiration: 14,
  flavors: ["earthy", "potato-y"],
};

// console.log(potato1.flavors.length);

// let userNumber = prompt("please enter your age");

// This is a logic error
// if (Number(userNumber) > 16) {
//   // place holder for code that depends on userNumber being less than 10
//   console.log("You can definitely drive");
// } else {
//   console.log("you can't drive yet!");
// }

function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log(variableDoesntExist);
}

// first();
