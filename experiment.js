let counter = 0;
let onex = 1;
let onexactive = 0;
let onexactivated = 0;
let twox = 4;
let log = document.getElementById("log-input");
let element = document.getElementById("button");
let myInterval;

element.addEventListener("click", addScore);

function addScore() {
  counter = counter + 1;
  document.getElementById('score').innerText = counter;
  checkUpgrades();
}

function checkUpgrades() {
  switch (counter) {
    case 10:
      tenUpgrades();
      break;
    case 50:
      fiftyUpgrades();
      break;
    case 250:
      twofiftyUpgrades();
      break;
    default:
      checkAlerts();
  }
}

function checkAlerts() {
  switch (counter) {
    case 10:
      tenAlerts();
      break;
    case 50:
      fiftyAlerts();
      break;
    case 250:
      twofiftyAlerts();
      break;
    default:
      console.log("Waiting for alerts...");
  }
}

function tenUpgrades() {
  if (onexactive == 0) {
    clearInterval(myInterval);
    myInterval = setInterval(autoClicker, 2000);
    onexactive += 1;
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

function fiftyUpgrades() {
  if (onexactive == 1) {
    clearInterval(myInterval);
    onex += 1;
    myInterval = setInterval(autoClicker, 1000);
    onexactive += 1;
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

function twofiftyUpgrades() {
  if (onexactive == 2) {
    clearInterval(myInterval);
    let newInterval = setInterval(secondClicker, 1000);
    onexactive += 1;
  }
  else {
    console.log("Waiting for upgrades...");
  }
}

function tenAlerts() {
  if (onexactivated == 0) {
    // Replace alert with notification
    showNotification("You've unlocked something...", "Rank increased to Rank 2 \n Achievement Unlocked! \n Energy Earner, Rank 1 (Earn 10 energy) \n \n");
    showNotification("You used your energy to restore an old power plant, and now it's producing you 1 energy per 2 seconds.");
    counter -= 10;
    onexactivated += 1;
  }
  else {
    console.log("Waiting for alerts");
  }
}

function fiftyAlerts() {
  if (onexactivated == 1) {
    // Replace alert with notification
    showNotification("You've unlocked something...", "2 achievements unlocked! \n Energy Earner, Rank 2 (Earn 50 energy), \n Upgrader, Rank 1 (Upgrade any power plant) \n \n");
    showNotification("You used your energy to upgrade the power plant.");
    counter -= 50;
    showNotification("Your friends and family support you helping the Earth. They fund you with 100 energy.");
    counter += 100;
    onexactivated += 1;
  }
  else {
    console.log("Waiting for alerts...");
  }
}

function twofiftyAlerts() {
  if (onexactivated == 2) {
    // Replace alert with notification
    showNotification("You've unlocked something...", "Rank increased! \n Rank 2 --> Rank 3 \n Achievement Unlocked! \n Energy Earner, Rank 3 (Earn 250 energy) \n Achievement Unlocked! \n Restorer, Rank 1 (Restore 2 power plants) \n \n");
    showNotification("You restored another power plant!");
    counter -= 250;
    showNotification("The new power plant produces you 4 energy per second!");
    onexactivated += 1;
  }
  else {
    console.log("Waiting for alerts...");
  }
}

function secondClicker() {
  counter += twox;
  document.getElementById('score').innerText = counter;
}

function autoClicker() {
  counter += onex;
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
