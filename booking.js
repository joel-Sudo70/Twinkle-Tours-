document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("whatsapp-booking-button");

    if (!button) return;

    button.onclick = function () {

        const name = document.getElementById("booking-name").value.trim();
        const email = document.getElementById("booking-email").value.trim();
        const phone = document.getElementById("booking-phone").value.trim();
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("travel-date").value;
        const travelers = document.getElementById("travelers").value;
        const message = document.getElementById("booking-message").value.trim();

        if (!name || !email || !phone || !destination || !message) {
            alert("Please complete the required booking details first.");
            return;
        }

        const text =
            "Hello Twinkle Tours,%0A%0A" +
            "I would like to book a trip.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Phone / WhatsApp: " + encodeURIComponent(phone) + "%0A" +
            "Destination: " + encodeURIComponent(destination) + "%0A" +
            "Preferred Travel Date: " + encodeURIComponent(date || "Not specified") + "%0A" +
            "Number of Travelers: " + encodeURIComponent(travelers || "Not specified") + "%0A" +
            "Additional Information: " + encodeURIComponent(message) +
            "%0A%0AThank you. I look forward to hearing from you.";

        window.location.href =
            "https://wa.me/254713354736?text=" + text;
    };

});
