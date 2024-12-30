document.getElementById("refreshButton").addEventListener("click", function () {
    // Get user input values
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const annualInterestRate = parseFloat(document.getElementById("interestRate").value);
    const loanDurationYears = parseFloat(document.getElementById("loanDuration").value);

    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanDurationYears)) {
        alert("Please fill in all the fields with valid values.");
        return;
    }

    // Calculate payments
    const result = calculateLoanPayments(loanAmount, annualInterestRate, loanDurationYears);

    // Update results in the HTML
    document.getElementById("monthlyPayment").textContent = `$${result.monthlyPayment}`;
    document.getElementById("biWeeklyPayment").textContent = `$${result.biWeeklyPayment}`;
    document.getElementById("weeklyPayment").textContent = `$${result.weeklyPayment}`;
});

function calculateLoanPayments(loanAmount, annualInterestRate, loanDurationYears) {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(annualInterestRate) / 100; 
    const loanDurationMonths = loanDurationYears * 12;

    let monthlyPayment = 0;

    if (annualRate > 0) {
        const monthlyRate = annualRate / 12;
        monthlyPayment =
            principal *
            (monthlyRate * Math.pow(1 + monthlyRate, loanDurationMonths)) /
            (Math.pow(1 + monthlyRate, loanDurationMonths) - 1);
    } else {
        monthlyPayment = principal / loanDurationMonths;
    }

    const biWeeklyPayment = (monthlyPayment * 12) / 26;
    const weeklyPayment = (monthlyPayment * 12) / 52;

    return {
        monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
        biWeeklyPayment: parseFloat(biWeeklyPayment.toFixed(2)),
        weeklyPayment: parseFloat(weeklyPayment.toFixed(2)),
    };
}
