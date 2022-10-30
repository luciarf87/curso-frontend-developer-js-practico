const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMenuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
navMenuLogo.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleshoppingCartContainer);

function toggleDesktopMenu () {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleshoppingCartContainer () {
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive'); 
   if(!ismobileMenuClose) {
            mobileMenu.classList.add('inactive');
        }
    else if(!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
        }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?cs=srgb&dl=pexels-karol-d-400678.jpg&fm=jpg'
});
productList.push({
    name: 'Notebook',
    price: 500,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
function renderProducts(arr){
    for(product of arr) {
       const productCard = document.createElement('div');
       productCard.classList.add('product-card');
    
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);
    
       const productInfo = document.createElement('div');
       productInfo.classList.add('product-info');
    
       const productInfoDiv = document.createElement('div');
    
       const productPrice = document.createElement('p');
       productPrice.innerText = '$' + product.price;
      
       const productName = document.createElement('p');
       productName.innerText = product.name;
    
       productInfoDiv.appendChild(productPrice);
       productInfoDiv.appendChild(productName);
    
       const productInfoFigure = document.createElement('figure');
       const productImgCart = document.createElement('img');
       productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
       productInfoFigure.appendChild(productImgCart);
    
       productInfo.appendChild(productInfoDiv);
       productInfo.appendChild(productInfoFigure);
    
       productCard.appendChild(productImg);
       productCard.appendChild(productInfo);
    
       cardsContainer.appendChild(productCard);
    };

}
renderProducts(productList);
 