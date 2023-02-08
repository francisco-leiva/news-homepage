const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.navBar__close');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerClose.classList.toggle('active');
})