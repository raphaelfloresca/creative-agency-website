// DOM assigns a variable to an HTML class
const menuButton = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const navigationLinks = document.querySelectorAll('.navigation ul li a')

// When menuButton is clicked, the active class is toggled on menuButton and navigation
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navigation.classList.toggle('active');
})