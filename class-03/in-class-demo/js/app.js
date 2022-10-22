"use strict";

console.log("hello world");

let userName = prompt("Hello! What is your name?");
console.log(userName);

// what if i want to keep asking for a name, until a user ACTUALLY gives me a name!
// we can use a while loop!

while (!userName) {
  userName = prompt("Please actually enter a username!");
}

let favoriteFoods = ["pizza", "sushi", "hotdogs"];

// loop over favoriteFoods, and console.log each item
// i will represent the index of favoriteFoods
for (let i = 0; i < favoriteFoods.length; i++) {
  // this will execute many times
  console.log(favoriteFoods[i]);
}

let answer1 = prompt(
  "Hello user! Which of the following are my favorite? (guess one): Pizza, sushi, hotdogs, spinach, onions, mayo"
);

// if (favoriteFoods.includes(answer1)) {
//   alert("Correct! I do like " + answer1);
// } else {
//   alert("Sorry, wrong");
// }

// use a for loop to see if an item exists in an array

let answer2 = false;

for (let i = 0; i < favoriteFoods.length; i++) {
  if (answer1 === favoriteFoods[i]) {
    answer2 = true;
  }
}

if (answer2) {
  alert("Correct!");
} else {
  alert("Incorrect!");
}

// for loop
// for (start; stop; step) {
//   code block
//   repeats a set number of times
// }

for (let i = 0; i < 3; i++) {
  console.log("hello!");
}

console.log(favoriteFoods[2]);
