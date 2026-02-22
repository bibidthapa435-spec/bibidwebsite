// script.js
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
        alert('Your message has been sent!');
    } else {
        alert('Something went wrong!');
    }
});