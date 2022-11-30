'use strict';

let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "Totals:",
];

let locations = [];

function Location(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = randomSales(min, max, avg);
    this.hourlySales.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
  this.hourlySales[hours.length - 1] = this.dailyTotal;
  locations.push(this);
}

function randomSales(min, max, avg) {
  return Math.round(avg * Math.floor(min + Math.random() * (max - min + 1)));
}

function render(parent, element, content) {
  element = document.createElement(element);
  element.innerText = content;
  return parent.appendChild(element);
}

function renderTableRow(parent, first, content, contentEl) {
  let tr = render(document.getElementById(parent), "tr", null);
  render(tr, "th", first);
  for (let i = 0; i < content.length; i++) {
    render(tr, contentEl, content[i]);
  }
}

function renderTableHead() {
  renderTableRow("tableHead", null, hours, "th");
}

function renderTableBody() {
  for (let i = 0; i < locations.length; i++) {
    renderTableRow(
      "tableBody",
      locations[i].name,
      locations[i].hourlySales,
      "td"
    );
  }
}

function renderTableFoot() {
  let totals = [];
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < locations.length; j++) {
      sum += locations[j].hourlySales[i];
    }
    totals.push(sum);
  }
  renderTableRow("tableFoot", "Totals:", totals, "td");
}

function renderTable() {
  document.getElementById("tableHead").innerHTML = null;
  document.getElementById("tableBody").innerHTML = null;
  document.getElementById("tableFoot").innerHTML = null;
  renderTableHead();
  renderTableBody();
  renderTableFoot();
}

function addForm() {
  let locationForm = document.getElementById("locationForm");
  locationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let form = e.target;
    if (Number(form.min.value) > Number(form.max.value)) {
      alert("Min must be less than max");
      return;
    }
    new Location(
      form.name.value,
      Number(form.min.value),
      Number(form.max.value),
      Number(form.avg.value)
    );
    renderTable();
  });
}

new Location("Seattle", 23, 65, 6.3);
new Location("Tokyo", 3, 24, 1.2);
new Location("Dubai", 11, 38, 3.7);
new Location("Paris", 20, 38, 2.3);
new Location("Lima", 2, 16, 4.6);

renderTable();
addForm();
