document.getElementById("add-member-btn").addEventListener("click", function() {
    var teamMembersDiv = document.getElementById("team-members");
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter Team Member Name";
    inputField.name = "team-member";
    teamMembersDiv.appendChild(inputField);
  });
  
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Form validation logic goes here
  
    // Simulate form submission for demonstration
    console.log("Form submitted successfully!");
  });
  