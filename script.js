function login() {
    // Merr vlerat e futura nga përdoruesi
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifikoni nëse ky është admin
    if (username === "admin" && password === "adminpassword") {
        // Nëse është admin, shko te faqja e administratorit
        window.location.href = "faqja_administratorit.html";
    } else {
        // Në të kundërt, shko te faqja e përdoruesit
        window.location.href = "faqja_perdoruesit.html";
    }
}
