/* | FIELDS */
/* || HTML Elements */

/* || Links */
const logOutButton = document.getElementById('logout-navigation'); 
const hertaSpaceStation = document.getElementById('herta-space-station');
/* || States */


/* | FUNCTIONS */
/* || Event Listeners */
logOutButton.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('start.html');
});
hertaSpaceStation.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('battle.html');
});


