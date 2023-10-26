document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var position = document.getElementById("position").value;

    // Këtu mund të kryeni veprimet e regjistrimit të punëtorit, për shembull, dërgimin e të dhënave në një server ose mbajtjen e tyre në një bazë të të dhënave.

    // Pasi të përfundojë regjistrimi, mund të ktheheni në faqen e administratorit.
    window.location.href = "admin.html";
});
