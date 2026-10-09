document.addEventListener("DOMContentLoaded", function () {

const button = document.getElementById("whatsapp-booking-button");
const serviceSelect = document.getElementById("service-type");

const destinationField = document.getElementById("destination-field");
const travelDateField = document.getElementById("travel-date-field");
const travelersField = document.getElementById("travelers-field");

const destination = document.getElementById("destination");
const travelDate = document.getElementById("travel-date");
const travelers = document.getElementById("travelers");

if (!serviceSelect) return;

function updateBookingFields() {

    const isConsultation =
        serviceSelect.value.trim() === "Travel Consultation – $70 USD";

    [destinationField, travelDateField, travelersField].forEach(function (field) {
        if (field) {
            field.hidden = isConsultation;
        }
    });

    if (destination) {
        destination.required = !isConsultation;
    }

}

serviceSelect.addEventListener("change", updateBookingFields);

updateBookingFields();

if (button) {

    button.onclick = function (event) {

        event.preventDefault();

        const name = document.getElementById("booking-name").value.trim();
        const email = document.getElementById("booking-email").value.trim();
        const phone = document.getElementById("booking-phone").value.trim();
        const service = serviceSelect.value;
        const message = document.getElementById("booking-message").value.trim();

        const isConsultation =
            service === "Travel Consultation – $70 USD";

        if (
            !name ||
            !email ||
            !phone ||
            !service ||
            !message ||
            (!isConsultation && (!destination || !destination.value))
        ) {
            alert("Please complete the required booking details first.");
            return;
        }

        const text =
            "Hello Twinkle Tours,\n\n" +
            "I would like to book: " + service + ".\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone / WhatsApp: " + phone + "\n" +
            "Destination: " + (isConsultation ? "Travel consultation" : destination.value) + "\n" +
            "Preferred Travel Date: " + (isConsultation ? "Not applicable" : (travelDate.value || "Not specified")) + "\n" +
            "Number of Travelers: " + (isConsultation ? "Not applicable" : (travelers.value || "Not specified")) + "\n" +
            "Additional Information: " + message;

        window.location.href =
            "https://wa.me/254713354736?text=" +
            encodeURIComponent(text);
    };

}

});