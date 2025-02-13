document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    let btnEl = document.getElementById("SubmitEvent");
    // Get the form element by its class name
    let formEl = document.querySelector(".contact-form");

    // Check if both the button and form elements exist
    if (btnEl && formEl) {
        // Add a click event listener to the button
        btnEl.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Define the service ID and template ID for emailjs
            const serviceID = 'x';
            const templateID = 'x';

            // Send the form using emailjs
            emailjs.sendForm(serviceID, templateID, formEl)
                .then(function() {
                    alert('Email sent successfully!');
                }, function(error) {
                    console.error('Failed to send email. Error: ', error);
                });
        });
    } else {
        // Log an error message if the button or form element is not found
        console.error("Element not found!");
    }
});
