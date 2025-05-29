/* | FIELDS */
/* || HTML Elements */
const body = document.querySelector('body');  
const submit = document.getElementById('submit');  

/* || Links */
const logOutButton = document.getElementById('logout-container');


/* | FUNCTIONS */
/* || Event Listeners */

body.addEventListener('click', e => {
    // e.preventDefault();
    submit.submit()
});

logOutButton.addEventListener('click', e => {
    e.preventDefault();     
    window.location.replace('accounts.php');
    e.stopImmediatePropagation();
});






