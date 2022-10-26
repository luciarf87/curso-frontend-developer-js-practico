const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMenuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
navMenuLogo.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu () {
    const iscartMenuClose = cartMenu.classList.contains('inactive');
    if(!iscartMenuClose) {
        cartMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const iscartMenuClose = cartMenu.classList.contains('inactive');
    if(!iscartMenuClose) {
        cartMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCartMenu () {
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive'); 
   if(!ismobileMenuClose) {
            mobileMenu.classList.add('inactive');
        }
    else if(!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
        }
    cartMenu.classList.toggle('inactive');
}