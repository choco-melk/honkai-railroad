/* || Links */
const logOutButton = document.getElementById('logout-navigation'); 
const hertaSpaceStation = document.getElementById('herta-space-station');
/* || States */

const array1 = [1, 2, 1, -2];
const array2 = array1.toString().split(",");
const array3 = [];
for(let i = 0; i < array2.length; i++){
    if(i == array2.length-1? false : Math.sign(parseInt(array2[i+1])) == -1){
        const array = [parseInt(array2[i]), (parseInt(array2[i+1])*-1)-1];
        array3.push(array);
    } else if (Math.sign(parseInt(array2[i])) == -1){
        continue;
    } else {
        array3.push(parseInt(array2[i]));
    }
    
}
// console.log(array3);

/* | FUNCTIONS */
/* || Event Listeners */
logOutButton.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('start.php');
});
hertaSpaceStation.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('battle.html');
});



const toCharacters = document.getElementById('characters');
const CharactersButton = document.getElementById('characters-button');
const toTeam = document.getElementById('team-lineup');
const TeamButton = document.getElementById('team-lineup-button');
const toGacha = document.getElementById('gacha');
const GachaButton = document.getElementById('gacha-button');
const fadingEffect = document.getElementById('opening-animation');

CharactersButton.addEventListener("click", e => {
    fadingEffect.style.animation = 'fade-out 0.5s';
    setTimeout(() => {
        toCharacters.submit();
    }, 450);
    // 
}); 

TeamButton.addEventListener("click", e => {
    fadingEffect.style.animation = 'fade-out 0.5s';
    setTimeout(() => {
        toTeam.submit();
    }, 450);
}); 

GachaButton.addEventListener("click", e => {
    fadingEffect.style.animation = 'fade-out 0.5s';
    setTimeout(() => {
        toGacha.submit();
    }, 450);
}); 

const userName = document.getElementById('username');
const experience = document.getElementById('experience');
const ownedChars = document.getElementById('ownedChars');
const currTeam = document.getElementById('currTeam');
const fivePity = document.getElementById('fivePity');
const fourPity = document.getElementById('fourPity');
const stellarJades = document.getElementById('stellarJades');
const userIcon = document.getElementById('userIcon');

console.log(userName.value,"\n",
    experience.value,"\n",
    ownedChars.value,"\n",
    currTeam.value  ,"\n",
    fivePity.value,"\n",
    fourPity.value,"\n");
    // stellarJades.value,"\n",
    // userIcon.value,"\n",);

const nameuser = document.getElementById('user-name');
const level = document.getElementById('user-lv');
const exp = document.getElementById('user-exp');
const stellars = document.getElementById('stellar-jade-count');   

nameuser.innerText = userName.value;
level.innerText = Math.floor(experience.value/10) ;
exp.innerText = experience.value%10 + "/10";
stellars.innerText = stellarJades.value;