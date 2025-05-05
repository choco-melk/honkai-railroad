/* | FIELDS */
/* || HTML Elements */
const body = document.getElementById('index');  
const bgVideo = document.getElementById('bg-video');
/* ||| Sections */
const loginForm = document.getElementById('login-form');
const startContainer = document.getElementById('start-container');

/* || Links */
const startButton = document.getElementById('start-game-button');
const logOutButton = document.getElementById('logout-container');

/* || States */
let login_valid = false;

/* | Functions */
/* || EVENTLISTENERS */
body.addEventListener('click', e => {
    if (login_valid) {
        e.preventDefault();
        window.location.replace('choose-hero.html');
    }
});
startButton.addEventListener('click', e => {
    e.preventDefault();     
    loginForm.style.display = 'none';
    startContainer.style.display = 'flex';
    logOutButton.style.display = 'block';
    bgVideo.removeAttribute('class');
    login_valid = true;
    e.stopImmediatePropagation();
});
logOutButton.addEventListener('click', e => {
    e.preventDefault();     
    loginForm.style.display = 'block';
    logOutButton.style.display = 'none';
    startContainer.style.display = 'none';
    bgVideo.setAttribute('class', 'darken');
    login_valid = false;
});






