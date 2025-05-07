/* | FIELDS */
/* || HTML Elements */
const body = document.querySelector('body');  
const bgImg = document.getElementById('bg-img');
const loginForm = document.getElementById('login-form');

/* || Links */
const startButton = document.getElementById('start-game-button');


/* | FUNCTIONS */
/* || Event Listeners */
startButton.addEventListener('click', e => {
    e.preventDefault();   
    window.location.replace('start.html');
});







