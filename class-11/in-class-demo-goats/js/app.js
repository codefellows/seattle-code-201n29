'use strict';

// document.querySelector is just like a CSS selector
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let index1 = 0;
let index2 = 0;

// we can use a goat constructor
// clicks
// views
// src/goat picture details
// name
function Goat(name, src){
    this.name = name;
    this.src = src;
    this.clicks = 0;
    this.views = 0;
}

let goat1 = new Goat('Timmy', './images/cruisin-goat.jpg');
let goat2 = new Goat('Tonya', './images/goat-out-of-hand.jpg');
let goat3 = new Goat('Erica', './images/sassy-goat.jpg');

let goats = [goat1, goat2, goat3];

// get random index for our goats array
function getRandomIndex() {
    // possible return values: 0, 1, or 2
    return Math.floor(Math.random() * goats.length) // Math.random() * goats.length returns a number between 0 - 2.9999. Math.floor() will then equal 0, 1, 2
}


// render function: invoke function on page load, I want to render 2 random goats
function renderGoats() {
    index1 = getRandomIndex();
    index2 = getRandomIndex();
    
    // we only move on, once firstGoat and secondGoat are DIFFERENT
    while (index1 === index2) {
        index2 = getRandomIndex();
    }

    let firstGoat = goats[index1];
    let secondGoat = goats[index2];
    
    // dom manipulation, we're basically making our own img element with these attributes
    // we display our 2 random (and unique goats)
    image1.src = firstGoat.src;
    image1.alt = firstGoat.name;
    image1.title = firstGoat.name;
    image2.src = secondGoat.src;
    image2.alt = secondGoat.name;
    image2.title = secondGoat.name;
 
    // increment views
    firstGoat.views++;
    secondGoat.views++;
}


// event handler
// What happens when a user clicks a goat?
    // increment goat's .clicks
    // render 2 new goats
function handleGoatClick(event) {
    // the event object knows about the event, and the element targeted
    console.log(event.target);

    // how do I increment the correct goat's .clicks?
    // One method:
    // 1. iterate over goats array
    // 2. if goats[i].alt == event.taget.alt, then increment .clicks
    // Another method:
    // use global index variables!
    if (goats[index1].name === event.target.alt) {
        goats[index1].clicks++
    }
    if (goats[index2].name === event.target.alt) {
        goats[index2].clicks++
    }

    console.log(goats);
    renderGoats();
}



// on page load:
image1.addEventListener('click', handleGoatClick)
image2.addEventListener('click', handleGoatClick)
renderGoats();