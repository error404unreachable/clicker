let counter = 0;
  let onex = 0.5;
  document.getElementById('button').onclick = () => {
    counter = counter + 1;
    document.getElementById('score').innerText = counter;
    checkUpgrades();
    checkAlerts();
  };
  
function welcomeUser() {
  alert("Welcome to Save the Earth... \n Start by tapping the Earth \n Upgrades will be automatic. \n Good luck!");
}
  function checkUpgrades() {
    if (counter == 10) {
      myInterval = setInterval(autoClicker, 2000);
    }
    else {
      console.log("Waiting for upgrades...");
    }
  }
  
  function checkAlerts() {
    if (counter == 10) {
      alert("You've unlocked something...");
      document.getElementById("log-input").innerText = "Rank increased to Rank 2 \n Achievement Unlocked! \n Energy Earner, Rank 1 (Earn 10 energy) \n \n";
      alert("You used your energy to restore an old power plant, and now it is producing you 1 energy per 2 seconds.");
      let counter = counter -= 10;
    }
    else {
      /*if (counter == 50) {
        alert("You've unlocked something...");
        document.getElementById("log-input").innerText = "Achievement Unlocked! \n Energy Earner, Rank 2 (Earn 50 energy) \n \n Achievement Unlocked! \n Upgrader, Rank 1 (Upgrade a power plant) \n \n";
        alert("You used your energy to upgrade the power plant. It now produces 2 energy per second.");
        let counter = counter -= 50;
        alert("Your friends and family support you in helping the planet, and fund you with 100 energy...");
        let counter = counter += 100;
      }*/
      console.log("Waiting for upgrade...");
      }
    }
  }
  
  function autoClicker() {
    counter += onex;
    document.getElementById('score').innerText = counter;
  }
