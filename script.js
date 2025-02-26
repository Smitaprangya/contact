document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let date = document.getElementById("date").value;
    let details = document.getElementById("details").value;
    let service = document.getElementById("service").value;

    if (name && email && phone && city && date && service) {
        alert(`🎉 Thank you, ${name}! Your request for a ${service} session has been received.`);
        document.getElementById("contactForm").reset(); // Reset form after submission
    } else {
        alert("⚠️ Please fill in all required fields.");
    }
});
