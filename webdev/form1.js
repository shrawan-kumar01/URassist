document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Form validation logic goes here
    // Example:
    var name = document.getElementById("name").value;
    var institution = document.getElementById("institution").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var projectType = document.getElementById("project-type").value;
    var description = document.getElementById("description").value;
  
    // Perform validation checks and handle form submission
    // For demonstration purposes, I'm just logging the form data
    console.log("Name:", name);
    console.log("Institution Name:", institution);
    console.log("Mobile Number:", mobile);
    console.log("Email ID:", email);
    console.log("Project Type:", projectType);
    console.log("Project Description:", description);
  });
  