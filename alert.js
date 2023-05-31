function welcomeUser() {
  
// Get the notification element
		var notification = document.getElementById('notification');

		// Set the text content of the notification
		var message = "Welcome to Save the Earth. Start by tapping the Earth. Upgrades will be automatic. Good luck!";
		notification.textContent = message;

		// Show the notification
		notification.style.display = 'block';

		// Hide the notification after 5 seconds
		setTimeout(function() {
			notification.style.display = 'none';
		}, 10000);
  
// Get the text element
var textElement = document.getElementById("notification");

// Save the text to local storage
localStorage.setItem("savedText", textElement.innerText);
}
