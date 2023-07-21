// Get all input elements
const incomeAmountInput = document.getElementById("incomeAmount");
const savingsPercentageInput = document.getElementById("savingsPercentage");
const emergencyPercentageInput = document.getElementById("emergencyPercentage");
const housingAmountInput = document.getElementById("housingAmount");
const dailyUseInput = document.getElementById("dailyUse");
const utilitiesInput = document.getElementById("utilities");
const transportationInput = document.getElementById("transportation");
const othersInput = document.getElementById("others");

// Get all summary elements
const incomeTotalElement = document.getElementById("incomeTotal");
const expenditureTotalElement = document.getElementById("expenditureTotal");
const savingsTotalElement = document.getElementById("savingsTotal");
const emergencyTotalElement = document.getElementById("emergencyTotal");
const remainingIncomeElement = document.getElementById("remainingIncome");

// Function to calculate and update the summary
function updateSummary() {
  const incomeAmount = parseFloat(incomeAmountInput.value) || 0;
  const savingsPercentage = (parseFloat(savingsPercentageInput.value) || 0) / 100;
  const emergencyPercentage = (parseFloat(emergencyPercentageInput.value) || 0) / 100;
  const housingAmount = parseFloat(housingAmountInput.value) || 0;
  const dailyUse = parseFloat(dailyUseInput.value) || 0;
  const utilities = parseFloat(utilitiesInput.value) || 0;
  const transportation = parseFloat(transportationInput.value) || 0;
  const others = parseFloat(othersInput.value) || 0;

  const monthlyIncome = incomeAmount;
  const monthlySavings = monthlyIncome * savingsPercentage;
  const monthlyEmergency = monthlyIncome * emergencyPercentage;
  const monthlyExpenditure = housingAmount + dailyUse + utilities + transportation + others;
  const remainingIncome = monthlyIncome - monthlySavings - monthlyEmergency - monthlyExpenditure;

  incomeTotalElement.textContent = monthlyIncome.toFixed(2);
  expenditureTotalElement.textContent = monthlyExpenditure.toFixed(2);
  savingsTotalElement.textContent = monthlySavings.toFixed(2);
  emergencyTotalElement.textContent = monthlyEmergency.toFixed(2);
  remainingIncomeElement.textContent = remainingIncome.toFixed(2);
}

// Add event listeners to inputs to update the summary on change
incomeAmountInput.addEventListener("change", updateSummary);
savingsPercentageInput.addEventListener("change", updateSummary);
emergencyPercentageInput.addEventListener("change", updateSummary);
housingAmountInput.addEventListener("change", updateSummary);
dailyUseInput.addEventListener("change", updateSummary);
utilitiesInput.addEventListener("change", updateSummary);
transportationInput.addEventListener("change", updateSummary);
othersInput.addEventListener("change", updateSummary);

// Initial update of the summary
updateSummary();
