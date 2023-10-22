document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    clearError();
    let valid = true;

    // Ambil data dari formulir
    var statement = document.querySelector(".statement");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (!name) {
        valid = false;
        displayError("name-error", "Nama wajib diisi.");
    }

    if (!email) {
        valid = false;
        displayError("email-error", "Email wajib diisi.");
    }

    if (!subject) {
        valid = false;
        displayError("subject-error", "Subject wajib diisi.");
    }

    if (!message) {
        valid = false;
        displayError("message-error", "Pesan wajib diisi.");
    }

    if (!valid) {
        event.preventDefault();
    } else {
        statement.innerHTML = "Pesan telah terkirim.";
    }

    function displayError(id, message) {
        const errorMessage = document.getElementById(id);
        errorMessage.innerHTML = message;
    }

    function clearError() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(function (errorMessage) {
            errorMessage.innerHTML = "";
        });
    }
});
