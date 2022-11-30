'use strict';

// Global Variables
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('sales-table');
const formElement = document.getElementById('add-location');

// clearing the footer becomes necessary with form, global variable created; used by multiple functions
const tableFooter = document.createElement('tfoot');

// Array class method to total all numbers in an array. not hoisted for this.render() call in constructor
Array.prototype.sumTotal = function(){
  let total = 0;
  for (let i = 0; i < this.length; i++){
    total += this[i];
  }
  return total;
}

//Constructor
function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  CookieStand.all.push(this);
  // Refactored render call to ensure a single call and correct data for totalOfTotals
  this.render();
}

// Constructor Prototype Methods
CookieStand.prototype.calcCustomersEachHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

CookieStand.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
  }
};

CookieStand.prototype.render = function() {
  this.calcCookiesEachHour();
  const tableRow = document.createElement('tr');
  let tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.locationName;
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }
  const tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = this.cookiesEachHour.sumTotal();
  tableRow.appendChild(tableHeaderElement);
  tableElement.appendChild(tableRow);
};

CookieStand.all = [];
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);

// Get random number, Inclusive of Max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderHeaderRow() {
  const tableHeader = document.createElement('thead');
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Locations';
  tableRow.appendChild(tableHeaderElement);
  for (let i = 0; i < hours.length; i++) {
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hours[i];
    tableRow.appendChild(tableHeaderElement);
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Location Totals';
  tableRow.appendChild(tableHeaderElement);
  tableHeader.appendChild(tableRow)
  tableElement.appendChild(tableHeader);
}

// append html content to the global tableFooter variable and append it to the DOM
function renderFooterRow() {
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Hourly Totals for All Locations';
  tableRow.appendChild(tableHeaderElement);
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < CookieStand.all.length; j++){
      hourlyTotal += CookieStand.all[j].cookiesEachHour[i];
      totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
    }
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hourlyTotal;
    tableRow.appendChild(tableHeaderElement);
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = totalOfTotals;
  tableRow.appendChild(tableHeaderElement);
  tableFooter.appendChild(tableRow)
  tableElement.appendChild(tableFooter);
}

// Event Handler, triggered when event listener hears the submit event
function handleForm(e) {
  e.preventDefault();
  // console.log('event object', e);

  // form values assigned to local variables upon submit
  const loc = e.target.location.value;
  // strings must be converted to numbers
  const min = parseInt(e.target.min.value);
  const max = parseInt(e.target.max.value);
  const avg = parseFloat(e.target.avg.value);

  // instatiate new CookieStand, populate data and store render row to table 
  const newStore = new CookieStand(loc, min, max, avg);

  // clear form once values have been persisted
  e.target.location.value = null;
  e.target.min.value = null;
  e.target.max.value = null;
  e.target.avg.value = null;

  // clear existing table footer
  tableFooter.innerHTML = '';
  // rerender table footer with update totals
  renderFooterRow();
}

// initial render of table header and footer
renderHeaderRow();
renderFooterRow();

// event listener
formElement.addEventListener('submit', handleForm);

// make some waves:  Not required for lab
const ocean = document.getElementById('ocean'),
  waveWidth = 10,
  waveCount = Math.floor(window.innerWidth/waveWidth),
  docFrag = document.createDocumentFragment();

for(let i = 0; i < waveCount; i++){
  const wave = document.createElement('div');
  wave.className += ' wave';
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + 'px';
  wave.style.animationDelay = (i/100) + 's';
}

ocean.appendChild(docFrag);
