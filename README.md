# bank-management-system

Welcome to the Bank Account Management website, a user-friendly platform designed to help you manage your bank account. This project combines HTML, CSS, and JavaScript to create an interactive experience for users, featuring classes, switch statements, and try-catch-finally statements for enhanced functionality and error handling.

## Instructions

1. **Account Information:** The homepage displays your account information, including the account holder's name, type (fixed as "Savings"), and current balance.

2. **Actions:** The "Actions" section allows you to perform two primary actions: deposit and withdraw.

    - **Deposit:** To deposit money into your account, enter the amount in the "Amount" field and click "Submit." The updated balance will be displayed along with a success message.
    
    - **Withdraw:** To withdraw funds, select "Withdraw" from the dropdown menu, enter the amount, and click "Submit." Ensure you have sufficient funds to withdraw, and a success message will confirm your transaction.

## Incorporation of Classes

In the JavaScript code, classes are used for better organization and maintainability. Although the example doesn't explicitly create custom classes, classes could be implemented to encapsulate related methods and attributes for more complex projects.

## Switch Statements

Switch statements are employed within the JavaScript code to differentiate between deposit and withdrawal actions selected from the dropdown menu. The switch statement directs the code flow based on the selected action, enabling specific actions to be taken for each case.

```javascript
switch (selectedAction) {
    case "deposit":
        // Deposit logic
        break;
    case "withdraw":
        // Withdrawal logic
        break;
    default:
        // Default case
        break;
}
Try-Catch-Finally Statements:
Error handling is crucial in any application. The try-catch-finally statements in the JavaScript code provide robust error management. If users input invalid or inappropriate data, these statements catch and handle errors gracefully, ensuring a smooth user experience.
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error and provide user feedback
} finally {
    // Code that runs regardless of whether an error occurred
}
This Bank Account Management website offers a straightforward way to manage your finances while showcasing best practices in web development through the use of classes, switch statements, and try-catch-finally statements. Enjoy the convenience and stability this platform provides for your banking needs.
