'use strict';

// console.log('hello world');

// Generate a random number, use this in lab 6!!:
function randBetween(min, max) {
  return min + Math.random() * (max - min);
}

// Properties in an object are key value pairs
//    What's a key value pair? 
//      a 'key' unlocks a particular value
//      keys have names
//      the anology is like a definition inside a dictionary
//      if I look up the word 'cat' => 'a cat is a feline creature....'
// * When you reference the key, you receive the value
//


// example of an Object Literal. Properties and values ae separated by commas, and colons
// within the object you must use 'this', outside of the object use the object name
let object1 = {
  name: 'Adam', 
  age: 33,
  hasGlasses: true,
  pets: ['Brock', 'Yoshi'],
  sayHello: function() {
    console.log('Hello from object1!!!');
    console.log(this.name);
  },
  getThis: function() {
    console.log(this); // 'this' refers to the object itself
  },
  addPet: function(petName) {
    this.pets.push(petName);
    console.log('pets is: ', this.pets);
  }
};

console.log('this is:', this);

// object name, followed by . , and method name()
object1.sayHello(); // invokes object1's .sayHello() method

object1.addPet('Kona');
object1.addPet('Missy Fishy');

console.log(object1.name);
// console.log(object1);

// General structure
// let myObj = {
//   key1: "value1",
//   key2: "value2"
// }; 


//  logic of our rug shop

// the price of a rug, depends on 1) area 2) if it has fringe, what is the circumference
//

let areaRugPrice = 13.50; // other functions can access the rug price
let fringePrice = 5; // $5 per foot of fringe

function sqaureRugPrice(length, fringe) {
  let area = length * length;
  let circumference = length * 4;
  let price = area * areaRugPrice;
  if (fringe) {
    price += circumference * fringePrice;
  }
  return price;
}


// 3 pieces of information: customer name, length, fringe 
// let gimliOrder = sqaureRugPrice(5, true);
// console.log(order1);
// let gandalfOrder = sqaureRugPrice(8, false);

// What does each object represent? They represent orders!
let orders = [
  {
    name: 'Gimli',
    length: 5,
    fringe: true
  },
  {
    name: 'Gandalf',
    length: 8,
    fringe: false
  },
  {
    name: 'Legolas',
    length: 10,
    fringe: false
  }
];

// User story for a rug shop owner: As an owner of a rug shop, I want to know the total value of all of my orders, so that I can calculate the store's revenue

let revenue = 0;
//   start;     stop;             step
for (let i = 0; i < orders.length; i++) {
  let order = orders[i]; // 'pulling out' the order
  // console.log(order);
  let orderLength = order.length;
  let fringe = order.fringe;
  revenue += sqaureRugPrice(orderLength, fringe);
}

// console.log('the store\'s revenue is: ', revenue);


// How to Create an HTML Element With JS
// 1. Select the parent element - document.getElementById()
// 2. Create a new element - document.createElement()
// 3. Fill created element with 'stuff' - .innerText  <--- this is a PROPERTY!!!
// 4. Append the created element to the parent element - document.appendChild()

let parentElement = document.getElementById('orders'); 
// console.log('the parentElement is:', parentElement);
let orderLi = document.createElement('li');
// console.log(orderLi);
orderLi.innerText = 'cool text goes here!'; // properties do NOT use parentheses
// console.log(orderLi.innerText);
parentElement.appendChild(orderLi); // methods DO use parentheses


// Let's Render Our Rug Shop Orders:

for (let i = 0; i < orders.length; i++) {
  let order = orders[i];
  let newLi = document.createElement('li');
  newLi.innerText = `${order.name} ordered a rug with length ${order.length} and with fringe ${order.fringe}.`;
  parentElement.appendChild(newLi);
}

// 1
let revenueParent = document.body;
// 2
let revenueH1 = document.createElement('h1');
// 3
revenueH1.innerText = `${revenue}`;
// 4
revenueParent.appendChild(revenueH1);

