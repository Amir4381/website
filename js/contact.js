function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // You would typically send this data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message. We will contact you soon!');
    
    // Clear the form
    event.target.reset();
    return false;
}