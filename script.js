document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(event) {
        // Prevent the form from actually submitting to a server
        event.preventDefault();

        // Get values from the inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const serviceInput = document.getElementById('service');
        const dateInput = document.getElementById('date');
        
        // Clear previous alerts
        let isValid = true;
        let errorMessage = "";

        // Validate Name (Cannot be empty)
        if (nameInput.value.trim() === "") {
            errorMessage += "- Please enter your full name.\n";
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            errorMessage += "- Please enter a valid email address.\n";
            isValid = false;
        }

        // Validate Phone
        const phonePattern = /^[0-9\s\-\+\(\)]{8,}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            errorMessage += "- Please enter a valid phone number.\n";
            isValid = false;
        }

        // Validate Service Selection
        if (serviceInput.value === "") {
            errorMessage += "- Please select a service.\n";
            isValid = false;
        }

        // Validate Date
        if (dateInput.value === "") {
            errorMessage += "- Please select a preferred date.\n";
            isValid = false;
        }

        if (isValid) {
            alert("Thank you, " + nameInput.value + "! Your appointment for " + serviceInput.value + " has been requested. We will contact you shortly to confirm.");
            form.reset();
        } else {
            alert("Please correct the following errors:\n\n" + errorMessage);
        }
    });
});