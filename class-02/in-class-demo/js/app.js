'use strict';

// Ask what sized pizza the user wants
let size = prompt('What sized pizza do you want?');
console.log('the size variable is:', size);

let answer1 = prompt('Do you want pepperoni on your pizza?');
console.log('pepperoni answer is:', answer1);

let answer2 = prompt('Do you want anchovies?');
console.log('anchovies answer is:', answer2);

// String concatenation
alert('You answered ' + answer1 + ' to the pepperoni question');


// If statement
if (answer2 === 'yes') {
  alert('Why do you like anchovies?!?');
}

// Give different alerts based on the size of pizza ordered
if (size === 'large') {
  alert('1 massive pizza coming up!');
} else if (size === 'medium') {
  alert('a very normal sized pizza coming up!');
} else if (size === 'small') {
  alert('small pizza on the way!');
} else {
  alert('you typed something other than large or medium');
}

// logical OR example
if (size === 'large' || size === 'medium') {
  alert('you ordered a large or medium pizza');
}


let order = '';

if (size === 'large' || size === 'medim' || size === 'small') {
  order = 'You want a ' + size + ' sized pizza.';
} else {
  order = 'You want a ??? sized pizza.';
}

if (answer1 === 'yes') {
  order = order + ' With pepperoni.';
}

if (answer2 === 'yes') {
  order = order + ' With anchovies (gross)';
}

alert(order);
