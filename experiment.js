let counter = 0;
let log = document.getElementById("log-input");
let element = document.getElementById("button");

element.addEventListener("click", addScore);

function addScore() {
  counter = counter + 1;
  document.getElementById('score').innerText = counter;
}

function welcomeUser() {
  // Replace alert with notification
  showNotification("Welcome to Save the Earth. Start by tapping the Earth. Upgrades will be automatic. Good luck!");
  
  // Get the text element
  var textElement = document.getElementById("notification");

  // Save the text to local storage
  localStorage.setItem("savedText", textElement.innerText);
}

// Function to show notification
function showNotification(message, logMessage) {
  // Get the notification element
  var notification = document.getElementById('notification');

  // Set the text content of the notification
  notification.textContent = message;
  
  // Set the log message if provided
  if (logMessage) {
    log.innerText = logMessage;
  }

  // Show the notification
  notification.style.display = 'block';

  // Hide the notification after 5 seconds
  setTimeout(function() {
    notification.style.display = 'none';
  }, 10000);
}
