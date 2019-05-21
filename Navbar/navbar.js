const toggleMenu = event => {
    if(mobileNavMenu.style.opacity === '1'){
        TweenMax.to(mobileNavMenu, 1, {opacity:0, width:0})
    }
    else {
        TweenMax.to(mobileNavMenu, 1, {opacity:0.7, width:150})
    }
}








const mobileNavMenu = document.querySelector('.responsive-menu');
const menuButton = document.querySelector('.menu-btn')
menuButton.addEventListener('click', toggleMenu)