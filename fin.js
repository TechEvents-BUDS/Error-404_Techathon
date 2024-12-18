// Adding event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Modal elements for feedback
    const feedbackBox = document.getElementById("feedback");
    const feedbackText = document.getElementById("feedback-text");

    // Check if all fields are filled
    if (name && email && message) {
        // Show feedback box and display feedback
        feedbackBox.style.display = "block";
        feedbackText.textContent = "Thank you for your feedback, " + name + "! We will get back to you shortly."; 
        
        // Show success message pop-up
        alert("Form submitted successfully!");
        
        // Displaying a personalized budget plan (you can customize the logic as per your requirement)
        displayBudgetPlan(name);
    } else {
        // Hide feedback box if fields are missing
        feedbackBox.style.display = "none"; 
        alert("Please fill in all the fields before submitting.");
    }

    // Reset form after submission
    document.getElementById("contact-form").reset();
});

// Function to display a personalized budget plan based on user input
function displayBudgetPlan(name) {
    const planContainer = document.getElementById("budget-plan-result");

    // Example content of the budget plan (you can make it dynamic as per your logic)
    const planContent = `
        <h3>Personalized Budget Plan for ${name}</h3>
        <p>Based on your inputs, here’s a suggested budget:</p>
        <ul>
            <li>50% for Needs</li>
            <li>30% for Wants</li>
            <li>20% for Savings</li>
        </ul>
        <p>This plan will help you save and spend wisely to achieve your financial goals!</p>
    `;

    // Display the budget plan in the appropriate section
    planContainer.innerHTML = planContent;
}
