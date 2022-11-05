'use strict';

console.log('hello world');

let potato1 = {
    variety: 'sweet',
    color: 'orange',
    expiration: 7,
};

let potato2 = {
    variety: 'russet',
    color: 'brown',
    expiration: 12,
};

let potato3 = {
    variety: 'purple spotted',
    color: 'purple',
    expiration: 36,
}

console.log(potato3);

let test = [];

// Potato constructor! or a "Potato Object Factory"
// a function that create potato objects
function Potato(variety, color, expiration) {
    this.variety = variety;
    this.color = color;
    this.expiration = expiration;
    this.printColor = function() {
        console.log("The color is:", this.color);
    }
}

let potato4 = new Potato('greenback', 'red', 14);
let potato5 = new Potato('old fashioned', 'yellow', 60);
let potato6 = new Potato('new fashioned', 'salmon', 3);

console.log('the test array is:', test);

Potato.prototype.printSelf = function() {
    console.log(this);
}

// render a table row, with potato information
Potato.prototype.render = function() {
    // 4 Steps of DOM manupilation
    // 1. Select the parent element
    // 2. Create a new element with document.createElement('element type')
    // 3. Fill with 'stuff' (text) .innerText 
    // 4. Append child element to parent element

    // 1.
    let tableBody = document.getElementById('tableBody'); // select the tbody element

    // 2.
    let tableRow = document.createElement('tr'); // create a tr element
    let varietyData = document.createElement('td'); // create a td for potato variety
    let colorData = document.createElement('td'); // create a td for potato color
    let expirationData = document.createElement('td'); // create a td for potator expiration

    // 3.
    varietyData.innerText = this.variety;
    colorData.innerText = this.color;
    expirationData.innerText = this.expiration;

    // 4. order matters! 
    tableRow.appendChild(varietyData);
    tableRow.appendChild(colorData);
    tableRow.appendChild(expirationData);
    tableBody.appendChild(tableRow);
}

// potato6.render();
// potato4.render();
// potato5.render();

let potatoes = [potato4, potato5, potato6];

// iterate over pototatoes array, and render the potato during each step
for (let i = 0; i < potatoes.length; i++) {
    // 'i' represents the index inside potatoes array
    potatoes[i].render();
}


