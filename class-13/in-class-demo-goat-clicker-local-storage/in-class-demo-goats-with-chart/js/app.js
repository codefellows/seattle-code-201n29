'use strict';

// document.querySelector is just like a CSS selector
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let resultsButton = document.getElementById('results');
let index1 = 0;
let index2 = 0;
let clicks = 0;

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

// Question: Where in the code do I want to load my goats array?
// Load from LS
if (localStorage.getItem('savedGoats')) {
    // Step 3.
    let savedGoats = localStorage.getItem('savedGoats');
    // Step 4.
    goats = JSON.parse(savedGoats);
}


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
    image1.id = index1;
    image2.src = secondGoat.src;
    image2.alt = secondGoat.name;
    image2.title = secondGoat.name;
    image2.id = index2;
 
    // increment views
    firstGoat.views++;
    secondGoat.views++;
}


// event handler
function handleGoatClick(event) {
    clicks++;
    goats[event.target.id].clicks++;

    // Question: Where in the code do I want to save my goats array?
    // every time a goat is clicked, I want to save the goats array to LS
    // Step 1.
    let stringify = JSON.stringify(goats);
    // Step 2.
    localStorage.setItem('savedGoats', stringify);


    if (clicks > 9) {
        image1.removeEventListener('click', handleGoatClick);
        image2.removeEventListener('click', handleGoatClick);
    }
    renderGoats();
}


// allows us to see what info we've gathered from the goats we've clicked on!
function viewResults(event){
    let ul = document.querySelector('ul');
    // make one li for each goat inside goats
    for (let i = 0; i < goats.length; i++) {
        let li = document.createElement('li');
        li.innerText = `${goats[i].name} was viewed ${goats[i].views} times, and was clicked ${goats[i].clicks} times.`;
        ul.appendChild(li);
    }

    // add our chart.js code here!

    // get my goat names into an array with a for loop:
    let goatNames = [];
    for (let i = 0; i < goats.length; i++) {
        goatNames.push(goats[i].name);
    }
    console.log('the goatNames are:', goatNames);

    // get my goat click data into an array with a for loop:
    let goatClicks = [];
    for (let i = 0; i < goats.length; i++) {
        goatClicks.push(goats[i].clicks);
    }
    console.log('the goatClicks are:', goatClicks);

    const ctx = document.getElementById('myChart');
    
    // the starter code for this Chart comes from chartjs.org's "Getting Started"
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: goatNames, // x-axis
        datasets: [{
            label: '# of Clicks Per Goat', // title
            data: goatClicks, // y-axis data
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    resultsButton.removeEventListener('click', viewResults);
}



// on page load:
image1.addEventListener('click', handleGoatClick);
image2.addEventListener('click', handleGoatClick);
resultsButton.addEventListener('click', viewResults);

renderGoats();