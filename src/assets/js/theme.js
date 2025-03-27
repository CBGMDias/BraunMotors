const themeButton = document.getElementById("theme_button");
const body = document.body;
const themeIcon = document.querySelector("#theme_button img");

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "../assets/images/sun.png";
}

themeButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeIcon.src = "../assets/images/sun.png";
        themeIcon.alt = "Ícone do sol";
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.src = "../assets/images/moon.png";
        themeIcon.alt = "Ícone de meia lua";
        localStorage.setItem("theme", "dark");
    }
});
