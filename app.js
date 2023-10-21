document.addEventListener("DOMContentLoaded", function () {
    const accountHolderNameDisplay = document.getElementById("displayed-account-holder-name");
    const accountType = document.getElementById("account-type");
    const balance = document.getElementById("balance");
    const action = document.getElementById("action");
    const amount = document.getElementById("amount");
    const message = document.getElementById("message");
    const accountForm = document.getElementById("account-form");

    let currentBalance = 0;
    let accountHolderName = ""; // Initialize the accountHolderName variable

    // Function to update account information
    function updateAccountInfo() {
        accountHolderNameDisplay.textContent = accountHolderName;
        accountType.textContent = "Savings"; // You can change this if needed
        balance.textContent = "$" + currentBalance.toFixed(2);
    }

    // Function to handle form submission
    accountForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedAction = action.value;
        const amountValue = parseFloat(amount.value);

        if (selectedAction === "deposit") {
            if (isNaN(amountValue) || amountValue <= 0) {
                message.textContent = "Invalid deposit amount.";
            } else {
                currentBalance += amountValue;
                message.textContent = `Deposited $${amountValue.toFixed(2)}.`;
                updateAccountInfo();
            }
        } else if (selectedAction === "withdraw") {
            if (isNaN(amountValue) || amountValue <= 0 || amountValue > currentBalance) {
                message.textContent = "Invalid withdrawal amount.";
            } else {
                currentBalance -= amountValue;
                message.textContent = `Withdrawn $${amountValue.toFixed(2)}.`;
                updateAccountInfo();
            }

            // Clear form fields
            action.selectedIndex = 0;
            amount.value = "";
        }
    });

    // Function to handle name input
    accountHolderNameDisplay.addEventListener("input", function () {
        accountHolderName = accountHolderNameDisplay.textContent;
    });

    // Initialize account information
    updateAccountInfo();
});
