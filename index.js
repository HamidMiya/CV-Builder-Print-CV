// scripts.js

// Add an event listener to the form submission
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    displayResume();
});

function displayResume() {
    // Get the form input values
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var qualifications = document.getElementById('qualifications').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var experiences = document.getElementById('experiences').value;
    var languages = document.getElementById('languages').value;

    // Fill in the blanks
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputFatherName').textContent = fatherName;
    document.getElementById('outputQualifications').textContent = qualifications;
    document.getElementById('outputPhone').textContent = phone;
    document.getElementById('outputAddress').textContent = address;
    document.getElementById('outputExperiences').textContent = experiences;
    document.getElementById('outputLanguages').textContent = languages;

    // Show the resume output section
    document.getElementById('resumeOutput').style.display = 'block';
}

// Print resume function
function printResume() {
    window.print();
}
