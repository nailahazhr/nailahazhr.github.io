var statement = document.querySelector(".statement");
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil data dari formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    clearErrorMessages();
    let isValid = true;

    if (!name) {
        isValid = false;
        displayErrorMessage("name-error", "Nama wajib diisi.");
    }

    if (!email) {
        isValid = false;
        displayErrorMessage("email-error", "Email wajib diisi.");
    }

    if (!subject) {
        isValid = false;
        displayErrorMessage("subject-error", "Email Subject wajib diisi.");
    }

    if (!message) {
        isValid = false;
        displayErrorMessage("message-error", "Pesan wajib diisi.");
    }

    if (!isValid) {
        event.preventDefault(); // Mencegah pengiriman formulir jika tidak valid
    } else {
        statement.innerHTML = "Pesan telah terkirim.";
    }

    function displayErrorMessage(id, message) {
        const errorSpan = document.getElementById(id);
        errorSpan.innerHTML = message;
        errorSpan.style.color = "red";
    }

    function clearErrorMessages() {
        const errorSpans = document.querySelectorAll(".error");
        errorSpans.forEach(function (errorSpan) {
            errorSpan.innerHTML = "";
        });
    }
});
