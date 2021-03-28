// DOM assigns a variable to an HTML class
const menuButton = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation ul li a')

for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
        window.onload = () => {
            navigation.style.animation = "navigationTransition 1s";
        }
    })
}


// When menuButton is clicked, the active class is toggled on menuButton and navigation
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navigation.classList.toggle('active');
})