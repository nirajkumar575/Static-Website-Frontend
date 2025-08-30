const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Prepare data
    const data = { name, email, message };

    try {
        const response = await fetch('https://portfolio-102b.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Thank you for your message, " + name + "!");
            contactForm.reset();
        } else {
            const errorData = await response.json();
            alert("Error: " + (errorData.message || "Something went wrong"));
        }
    } catch (error) {
        console.error("Error sending message:", error);
        alert("Failed to send message. Try again later.");
    }
});
