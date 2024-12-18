// Function to calculate the budget plan based on the 50/30/20 rule
function generateBudgetPlan(income) {
    const needs = (0.50 * income).toFixed(2);
    const wants = (0.30 * income).toFixed(2);
    const savings = (0.20 * income).toFixed(2);

    return `
        <h3>Your Budget Plan:</h3>
        <ul>
            <li><strong>50% Needs:</strong> $${needs}</li>
            <li><strong>30% Wants:</strong> $${wants}</li>
            <li><strong>20% Savings:</strong> $${savings}</li>
        </ul>
    `;
}

// Function to generate dynamic savings suggestions based on the user's inputs
function generateSavingSuggestions(income, expenses) {
    const suggestions = [];

    if (income <= expenses) {
        suggestions.push("Your expenses exceed your income. Consider cutting back on unnecessary costs.");
    }

    if (income > expenses) {
        suggestions.push("You have some room to save! Try to allocate at least 20% of your income to savings.");
    }

    if (expenses > (0.50 * income)) {
        suggestions.push("Your needs category is above 50%. Review your living situation to see where you can reduce costs.");
    }

    if (expenses > (0.30 * income)) {
        suggestions.push("Consider cutting back on discretionary spending like dining out, shopping, and entertainment.");
    }

    return suggestions;
}

// Function to generate spending advice based on financial goals
function generateSpendingAdvice(goal) {
    let advice = [];

    switch (goal) {
        case "saving-for-house":
            advice.push("Consider cutting back on non-essential purchases to save for your down payment.");
            advice.push("Look for ways to increase your income, like side gigs or freelance work.");
            break;
        case "emergency-fund":
            advice.push("Focus on building an emergency fund before making any large purchases.");
            advice.push("Keep your expenses low to ensure you're saving consistently.");
            break;
        case "debt-reduction":
            advice.push("Pay off high-interest debt first, like credit cards, before saving for other goals.");
            advice.push("If possible, refinance loans to lower interest rates.");
            break;
        case "retirement-savings":
            advice.push("Start saving for retirement early to take advantage of compound interest.");
            advice.push("Maximize contributions to retirement accounts, like a 401(k) or IRA.");
            break;
        default:
            advice.push("Set clear goals for your finances and stick to a budget.");
            break;
    }

    return advice;
}

// Form submission handler
document.getElementById("financial-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const goal = document.getElementById("goal").value;

    if (isNaN(income) || isNaN(expenses) || !goal) {
        alert("Please fill in all fields.");
        return;
    }

    // Generate and display the budget plan
    const budgetPlan = generateBudgetPlan(income);
    document.getElementById("budget-plan-result").innerHTML = budgetPlan;

    // Generate and display saving suggestions
    const savingSuggestions = generateSavingSuggestions(income, expenses);
    document.getElementById("suggestions-list").innerHTML = savingSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('');

    // Generate and display spending advice
    const spendingAdvice = generateSpendingAdvice(goal);
    document.getElementById("spending-advice-list").innerHTML = spendingAdvice.map(advice => `<li>${advice}</li>`).join('');
});

document.getElementById("sub-form").onclick = function() {
    alert("FORM SUBMITTED SUCCESSFULLY!!!");
};
