function ActiveCharacter(name, atk) {
    this.name = name;
    this.atk = atk;
}
function Enemy(name, hp) {
    this.name = name;
    this.hp = hp;
}

let enemy = new Enemy("Void Ranger", 100);
let activeCharacters = [
    new ActiveCharacter('Trailblazer', 20),
    new ActiveCharacter('March 7th', 10),
    new ActiveCharacter('Dan Heng', 40)
];

let currentActiveCharacter = null;
let currentActiveButton = null;

document.querySelector('#char-1').addEventListener('click', e => {
    currentActiveCharacter = activeCharacters[0];
    console.log(currentActiveCharacter);
    if (currentActiveButton) {                                                      // detects null values. resets the prev button to grey 
        currentActiveButton.style.backgroundColor = 'grey';
    }
    currentActiveButton = document.querySelector('#char-1');
    currentActiveButton.style.backgroundColor = 'yellow';        
});
document.querySelector('#char-2').addEventListener('click', e => { 
    currentActiveCharacter = activeCharacters[1];
    console.log(currentActiveCharacter);
    if (currentActiveButton) {
        currentActiveButton.style.backgroundColor = 'grey';
    }
    currentActiveButton = document.querySelector('#char-2');
    currentActiveButton.style.backgroundColor = 'yellow';           
});
document.querySelector('#char-3').addEventListener('click', e => {
    currentActiveCharacter = activeCharacters[2];
    console.log(currentActiveCharacter);
    if (currentActiveButton) {
        currentActiveButton.style.backgroundColor = 'grey';
    }
    currentActiveButton = document.querySelector('#char-3');
    currentActiveButton.style.backgroundColor = 'yellow';            
});

document.querySelector('#enemy-container').addEventListener('click', e => {
    if (currentActiveCharacter) {
        enemy.hp -= currentActiveCharacter.atk;
        console.log(enemy.hp);
        if (enemy.hp <= 0) {
            document.querySelector('#enemy-container').style.backgroundColor = 'red'; 
        }
    } 
});







