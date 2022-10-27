"use strict";

console.log("hello world!");

// A function is a reusable piece of code

console.log("Hello Hannah!");
console.log("Hello Matt!");

// Greet students
function sayHello(name) {
  let message = `Hello ${name}!`;
  console.log(message);
}

// Invoke my function
sayHello("Danner");
sayHello("G20");

// what is the return statement?
function addTwo(x, y) {
  // return exits the function
  return x + y;
}

// console.log(addTwo(10, 3));

// ask the user a question, with a function
function question1() {
  let answer = prompt("Does Adam like sushi?").toLowerCase();
  if (answer === "y" || answer === "yes") {
    alert("Correct! I do like sushi.");
    return;
  }
  alert("Sorry that\ns incorrect.");
}

// question1();

// Write a second question for the user!
function waterIntake(liters) {
  console.log("the value of liters is:", liters);
  let answer = prompt("How many liters of water have you drank today?");
  // answer starts as a string, and turns into a number with Number()
  answer = Number(answer);
  if (answer < 0) {
    alert("that doesn't make sense");
    return;
  }
  if (answer < liters) {
    alert("Drink more high quality H2O");
  } else if (answer >= liters) {
    alert("That's a great amount of water you're drinking!");
    if (liters > 12) {
      alert("please stop");
    }
  } else {
    alert("Please input a number");
    // this is called recursion
    waterIntake(12);
  }
}

console.log(waterIntake(12));
