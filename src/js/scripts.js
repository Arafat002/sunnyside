let menu = document.getElementById("menu-btn");
let navBar = document.getElementById("mainMenu");

// Cambia el icono al hacer click
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

// Remueve el icono al hacer scroll
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
}