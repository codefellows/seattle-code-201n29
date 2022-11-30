"use strict";

// settings to use with local storage
let settings = {
  darkMode: false,
  open: null,
  comment: "",
};

let mode = document.getElementsByClassName("mode");
let details = document.getElementsByTagName("details");
let commentBox = document.getElementById("commentBox");
let openDetail = null;

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");
  settings.darkMode = true;
  saveSettings();
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");
  settings.darkMode = false;
  saveSettings();
}

function saveSettings() {
  // Step 1. stringify:
  let stringify = JSON.stringify(settings);
  // Step 2. localStorage.setItem():
  localStorage.setItem('settings', stringify);
}

function loadSettings() {
  // Step 3. localStorage.getItem():
  let getSettings = localStorage.getItem('settings');
  // Conditionally do step 4. JSON.parse():
  if (getSettings) {
    settings = JSON.parse(getSettings);
    console.log('settings is:', settings);
    return settings;
  }
}

// load from LS, apply any settings
function pageLoad() {
  if (!loadSettings()) {
    return;
  }
  // apply settings:
  if (settings.darkMode) {
    enterDarkMode();
  } else {
    enterLightMode();
  }
  if (settings.open !== null) {
    details[settings.open].setAttribute('open', 'open');
  }
  commentBox.value = settings.comment;
}

// add event listener to dark mode form
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", function () {
    // change styling of background and text color
    if (this.value === "dark") {
      enterDarkMode();
    }
    if (this.value === "light") {
      enterLightMode();
    }
  });
}

// add event listener to all details
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function () {
    // store the open detail into local storage
    if (settings.open === i) {
      settings.open = null;
      saveSettings();
      return;
    }
    openDetail = i;
    settings.open = i;
    saveSettings();
    for (let j = 0; j < details.length; j++) {
      if (j !== openDetail) {
        details[j].removeAttribute("open");
      }
    }
  });
}

commentBox.addEventListener("input", function () {
  settings.comment = commentBox.value;
  saveSettings();
});

// load page with saved settings:
pageLoad();
