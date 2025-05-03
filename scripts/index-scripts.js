/* | FIELDS */
/* || Sections */
const loginForm = document.getElementById('login-form');
const startContainer = document.getElementById('start-container');
/* || Links */
const startButton = document.getElementById('start-game-button');
const logOutButton = document.getElementById('logout-container');


/* | Functions */
/* || EVENTLISTENERS */
startButton.addEventListener('click', e => {
    e.preventDefault();     
    loginForm.style.display = 'none';
    startContainer.style.display = 'block';
    logOutButton.style.display = 'block';
});
logOutButton.addEventListener('click', e => {
    e.preventDefault();     
    loginForm.style.display = 'block';
    logOutButton.style.display = 'none';
    startContainer.style.display = 'none';
});


