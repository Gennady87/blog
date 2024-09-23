var menuToggle = document.getElementById("menu-toggle");
var sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
}