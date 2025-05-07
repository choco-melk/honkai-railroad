/* | FIELDS */
/* || HTML Elements */
/* || Links */
const homeButton = document.getElementById('home-navigation')
console.log(homeButton);

/* | FUNCTIONS */
/* || Event Listeners */
homeButton.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('home.html')
})
