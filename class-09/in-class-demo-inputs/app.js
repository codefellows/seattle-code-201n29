'use strict';



// Step 3: Add event listener - JS
let sampleForm = document.getElementById('sampleForm');
sampleForm.addEventListener('submit', logUserInput);

// Step 4: Code the Event Handler - JS
function logUserInput(event) { // all event handlers have an event parameter
  event.preventDefault(); // don't forget!
  let form = event.target;
  // console.log(event);
  console.log(form.textField.value);
  console.log(form.textPassword.value);
  console.log(form.checkBox.checked);

  // DOM manipulation INSIDE the event handler
  let textContainer = document.getElementById('textContainer');
  let pElement = document.createElement('p');
  pElement.innerText = form.textField.value + form.textPassword.value + form.checkBox.checked;
  textContainer.appendChild(pElement);
}


