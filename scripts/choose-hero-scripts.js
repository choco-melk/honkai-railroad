/* | FIELDS */
/* || HTML Elements */
const title = document.getElementById('title-content');
const button = document.getElementById('confirm-button');
const stelle = document.getElementById('character-stelle');
const caelus = document.getElementById('character-caelus');
/* || States */
let starterChar = '';

/* | FUNCTIONS */
/* || Event Listeners */
stelle.addEventListener('click', e => {
    e.preventDefault();
    title.innerText = "Selecting Trailblazer Stelle";
    stelle.style.transform = 'scale(1.1)';
    stelle.style.filter = 'brightness(100%)';
    caelus.style.transform = 'scale(1.0)';
    caelus.style.filter = 'brightness(75%)';
    button.style.display = 'block'; 
});
caelus.addEventListener('click', e => {
    e.preventDefault();    
    title.innerText = "Selecting Trailblazer Caelus";
    caelus.style.transform = 'scale(1.1)';
    caelus.style.filter = 'brightness(100%)';
    stelle.style.transform = 'scale(1.0)';
    stelle.style.filter = 'brightness(75%)';
    button.style.display = 'block'; 
});


