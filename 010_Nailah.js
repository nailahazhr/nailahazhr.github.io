var statement = document.querySelector(".statement");
var validate = document.querySelector(".validate");
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil data dari formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name !== "" && email !== "" && subject !== "" && message !== "") {
        statement.innerHTML = "Pesan telah terkirim.";
    } else {
        validate.innerHTML = "Semua kolom harus terisi.";
    }
});
