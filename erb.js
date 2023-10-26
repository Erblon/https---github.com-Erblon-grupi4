document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Admin" && password === "Admin") {
        window.location.href = "admin.html"; // ose ndryshoni në faqen e administratorit tuaj
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
    }
});
