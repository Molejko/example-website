const btnHamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu');
const iconHamb = document.querySelector('.hamburger i');

btnHamburger.addEventListener('click', () => {
    // console.log('dziala click');
    menu.classList.toggle('visible');
    iconHamb.classList.toggle('fa-bars');
    iconHamb.classList.toggle('fa-times');

  
})