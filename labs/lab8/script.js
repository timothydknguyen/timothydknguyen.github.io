function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

toggleButton = document.getElementById("toggleButton");
toggleButton.onclick = toggleTheme;