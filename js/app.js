const hamburger = document.querySelector('.hamburger');
const hamburgerCloseButton = document.querySelector('.navBar__closeButton');
const navBar = document.querySelector('.navBar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

hamburgerCloseButton.addEventListener('click', () => {
    navBar.classList.toggle('open');
});