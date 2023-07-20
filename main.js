const emailMenu = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".inactive");

emailMenu.addEventListener("click", toggledesktopmenu);
function toggledesktopmenu (){
  desktopMenu.classList.toggle("inactive");
}