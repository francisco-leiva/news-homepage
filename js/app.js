const hamburger = document.querySelector('.hamburger');
const hamburgerCloseButton = document.querySelector('.navBar__closeButton');
const navBar = document.querySelector('.navBar');
const navBarWindow = document.querySelector('.navBar__window');

const navBarToggleClasses = () => {
    navBar.classList.toggle('open');
    navBarWindow.classList.toggle('open');
}

hamburger.addEventListener('click', navBarToggleClasses);

hamburgerCloseButton.addEventListener('click', navBarToggleClasses);