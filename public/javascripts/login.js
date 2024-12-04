// Email validation
document.querySelector('form').addEventListener('submit', function (e) {
    const emailField = document.querySelector('input[type="email"]');
    const errorMessage = emailField.nextElementSibling;

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        e.preventDefault(); // Prevent form submission
        errorMessage.style.display = 'block'; // Show error message
        emailField.style.borderColor = 'red'; // Highlight field
    } else {
        errorMessage.style.display = 'none'; // Hide error message
        emailField.style.borderColor = '#004d00'; // Reset border color
    }
});
