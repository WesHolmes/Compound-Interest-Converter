document.addEventListener("DOMContentLoaded", () => {
  const aprSlider = document.querySelector("#apr");
  const aprValueDisplay = document.querySelector("#apr-value");
  const interestOutput = document.querySelector("#accumulated");
  const totalOutput = document.querySelector("#total");
  const principalInput = document.querySelector("#principal");
  const periodSelect = document.querySelector("#period");
  const yearsInput = document.querySelector("#years");
  const calculateButton = document.querySelector("#calculate");

  // Function to update APR value display
  function updateAprDisplay() {
    aprValueDisplay.textContent = `${aprSlider.value}`;
  }

  // Function to perform the compound interest calculation
  function calculateInterest() {
    const principal = parseFloat(principalInput.value);
    const apr = parseFloat(aprSlider.value) / 100;
    const years = parseFloat(yearsInput.value);
    const period = periodSelect.value;

    if (isNaN(principal) || isNaN(apr) || isNaN(years)) {
      alert("Please enter valid values.");
      return;
    }

    let n;
    switch (period) {
      case "yearly":
        n = 1;
        break;
      case "quarterly":
        n = 4;
        break;
      case "monthly":
        n = 12;
        break;
      case "daily":
        n = 365;
        break;
    }

    const totalAmount = principal * Math.pow(1 + apr / n, n * years);
    const accumulatedInterest = totalAmount - principal;

    interestOutput.textContent = accumulatedInterest.toFixed(2);
    totalOutput.textContent = totalAmount.toFixed(2);
  }

  // Event listeners
  aprSlider.addEventListener("input", updateAprDisplay);
  calculateButton.addEventListener("click", calculateInterest);
});
