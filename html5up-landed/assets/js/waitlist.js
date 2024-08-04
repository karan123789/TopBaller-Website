document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlist-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;

        // Here, you would typically send the email to your server
        // For this example, we'll just simulate a server response
        simulateServerResponse(email);
    });

    function simulateServerResponse(email) {
        // Simulate server processing time
        responseMessage.textContent = 'Processing...';

        setTimeout(() => {
            // Simulate a successful response
            responseMessage.textContent = `Thank you! ${email} has been added to our waitlist.`;
            form.reset();
        }, 1500);

        // In a real implementation, you would send the email to your server here
        // using fetch() or XMLHttpRequest
        // Example:
        /*
        fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = data.message;
            form.reset();
        })
        .catch(error => {
            responseMessage.textContent = 'An error occurred. Please try again.';
            console.error('Error:', error);
        });
        */
    }
});