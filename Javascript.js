document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;

    fetch('https://your-server-url/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});
