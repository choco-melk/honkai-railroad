/* || Links */
const startButton = document.getElementById('start-game-button');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const loginPage = document.getElementById('login');
const registerPage = document.getElementById('register');

loginButton.addEventListener('click', e => {
    loginPage.style.display = 'none';
    registerPage.style.display = 'block';
});
registerButton.addEventListener('click', e => {
    registerPage.style.display = 'none';
    loginPage.style.display = 'block';
});
/* | FUNCTIONS */
/* || Event Listeners */
// startButton.addEventListener('click', e => {
//     e.preventDefault();   
//     window.location.replace('start.php');
// });







