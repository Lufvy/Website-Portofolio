function SendMail() {
    let params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_363w3m8', 'template_yid0r3n', params)
        .then(function () {
            alert('Your message has been sent successfully!');
            document.querySelector("form").reset();
        }, function (error) {
            alert('Failed to send your message. Please try again later.');
        });
}

// Add event listener to form submission
document.querySelector("#MailForm").addEventListener("submit", function (event) {
    event.preventDefault();
    SendMail();
});
