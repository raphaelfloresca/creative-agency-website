// DOM assigns a variable to an HTML class
let menuButton = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let navLinks = document.querySelectorAll('.navigation ul li a');


// When menuButton is clicked, the active class is toggled on menuButton and navigation
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navigation.classList.toggle('active');
})

if ("serviceWorker" in navigator) {
    console.log("SW check");
    send()
} else {
    console.log("No SW");
}

function send() {
    navigator.serviceWorker
        .register("sw.js")
        .then(console.log('send'))
        .catch(console.error);
}

// Used to slide the navigation when a new page is loaded
// Adapted from: https://req.co/insights/article/coding-page-transitions-vanilla-javascript
if (navLinks) {
    navLinks.forEach ((navLink) => {
        navLink.onclick = (e) => {
            e.preventDefault();

            setTimeout(() => {
                if (navigation.classList.contains('animated')) {
                    console.log("Navigating...");
                    window.location = e.srcElement.href;
                }
            }, 1000);
            navigation.classList.remove('active');
            navigation.classList.add('animated');
        }
    })
}