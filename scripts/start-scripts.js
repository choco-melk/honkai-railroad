/* | FIELDS */
/* || HTML Elements */
const body = document.querySelector('body');  
const bgImg = document.getElementById('bg-img');

/* || Links */
const logOutButton = document.getElementById('logout-container');


/* | FUNCTIONS */
/* || Event Listeners */
body.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('home.html');
});
logOutButton.addEventListener('click', e => {
    e.preventDefault();     
    window.location.replace('index.html');
    e.stopImmediatePropagation();
});






