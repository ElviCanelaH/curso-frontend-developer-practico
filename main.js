const emailMenu = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".inactive");
const hamMenuIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");

emailMenu.addEventListener("click", toggledesktopmenu);
hamMenuIcon.addEventListener("click", togglemobilmenu);

function toggledesktopmenu (){
  desktopMenu.classList.toggle("inactive");
}


function togglemobilmenu (){
  mobileMenu.classList.toggle("inactive");
}






