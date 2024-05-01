document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here, you can add your logic for handling the login credentials
    // For example, sending them to a server for authentication
  });
  