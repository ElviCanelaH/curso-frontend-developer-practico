const emailMenu = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".inactive");
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const hamMenuIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const aside = document.querySelector('.product-detail');

emailMenu.addEventListener("click", toggledesktopmenu);
hamMenuIcon.addEventListener("click", togglemobilmenu);
CartMenuIcon.addEventListener ("click", toggleCartAside);

function toggledesktopmenu (){
  desktopMenu.classList.toggle("inactive");
}

function togglemobilmenu (){
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');
}
