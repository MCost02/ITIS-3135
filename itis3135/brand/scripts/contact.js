function displayContactInfo() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const phoneNum = document.getElementById("phone").value;
    const emailAddress = document.getElementById("email").value;

    if (!firstName || !lastName || !emailAddress) {
        alert("Please fill out all required fields.");
        return;
    }

    document.getElementById("contact-info").innerHTML = "Thank you, " + firstName + " " + lastName + "!\nWe will contact you at the following: " + emailAddress + ", " + phoneNum + " within 2 business days.";
}