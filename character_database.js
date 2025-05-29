
async function fetchCharStats() {
    try {
        const response = await fetch("databases/Railroad_Database.json");
        if (!response.ok) {
            throw new Error("Resource cannot be fetched.");
        } 
        const jsonData = await response.json();
        return jsonData;
    } 
    catch(error) {
        console.error(error);
    } 
}

async function main() {
    /* | FIELDS */

    const ownedCharsData = document.getElementById('ownedChars');

    const ownedCharsString = ownedCharsData.value.split(",");
    const ownedChars = [];
    for(let i = 0; i < ownedCharsString.length; i++){
        if(i == ownedCharsString.length-1? false : Math.sign(parseInt(ownedCharsString[i+1])) == -1){
            const array = [parseInt(ownedCharsString[i]), (parseInt(ownedCharsString[i+1])*-1)-1];
            ownedChars.push(array);
        } else if (Math.sign(parseInt(ownedCharsString[i])) == -1){
            continue;
        } else {
            ownedChars.push(parseInt(ownedCharsString[i]));
        }
        
    }

    /* Hero Lists*/
    const allChar = await fetchCharStats();

    console.log("check");

    const listButton = document.getElementById('dropbtn');
    const ownedButton = document.getElementById('filter-owned');
    const unownedButton = document.getElementById('filter-unowned');
    const listFilter = document.getElementById('dropdown-content');
    let unownedFilter = false;
    
    const toHome = document.getElementById('home');
    const homeButton = document.getElementById('navigation');

    /* Hero Character Selection */
    let destructionFilter = false;
    let preservationFilter = false;
    let huntFilter = false; 
    let abundanceFilter = false;
    let harmonyFilter = false;
    let eruditionFilter  = false;
    let nihilityFilter = false;
    let remembranceFilter = false;

    let physicalFilter = false;
    let fireFilter = false;
    let iceFilter = false;
    let lightningFilter = false;
    let windFilter = false;
    let quantumFilter  = false;
    let imaginaryFilter = false;
    let filterArray = [];

    const searchBar = document.getElementById('search-bar');
    const gallery = document.getElementById('char-gallery');
    const charShow = document.getElementById('char-selected');

    const filterShow = document.getElementById('filter');
    const filterList = document.getElementById('filter-navigation');
    const filterOverlay = document.getElementById('filter-overlay');
    const filterClear = document.getElementById('clear');
    const filterApply = document.getElementById('apply');
    const pathFilters = document.getElementsByClassName('pathCheckbox');
    const typeFilters = document.getElementsByClassName('typeCheckbox');

    /* Hero Content Section*/
    const charImg = document.getElementById('char-image');
    const charName = document.getElementById('char-name');
    const charFact = document.getElementById('char-faction');
    const imgPrimPath = document.getElementById('primary-path-image');
    const charPrimPath = document.getElementById('char-primary-path');
    const imgAtkType = document.getElementById('attack-type-image');
    const charAtkType = document.getElementById('char-attack-type');
      
    function playHoverSound() {
        var audioArr = document.getElementsByTagName('audio');
        audioArr[0].cloneNode().play();
        
    }

    let currentChar = null;
    let currentCharId = null;
    let currentCharPath = null;
    let currentCharType = null;

    const fadingEffect = document.getElementById('opening-animation');

    homeButton.addEventListener("click", e => {
        fadingEffect.style.animation = 'fade-out 0.5s';
        setTimeout(() => {
            toHome.submit();
        }, 450);
    }); 




    listButton.addEventListener("click", e => {
       
        if(listFilter.style.display == "block"){
             
            listFilter.style.display = "none";
        } else{
            listFilter.style.display = "block";
        }
    }); 

    ownedButton.addEventListener("click", e => {
        ownedButton.classList.add("selected");
        unownedButton.classList.remove("selected");
        listButton.innerText = 'Owned';
        unownedFilter = false;
        listFilter.style.display = "none";
        filterClear.click();
        filterApply.click();
        display_elements();
    }); 

    unownedButton.addEventListener("click"  , e => {
        unownedButton.classList.add("selected");
        ownedButton.classList.remove("selected");
        listButton.innerText = 'Unowned';
        unownedFilter = true;
        listFilter.style.display = "none";
        filterClear.click();
        filterApply.click();
        display_elements();
    }); 



    function setCharFilter(character) {
        if (currentChar !== null) {
            currentChar.classList.remove("selected");
        } 
        currentChar = character;
        currentChar.classList.add("selected");
    }

        filterShow.addEventListener("click", e => {
            listFilter.style.display = "none";
            filterList.style.display = 'block' ;
            filterOverlay.style.display = 'block' ;
    }); 

    filterClear.addEventListener("click", e => {
        for(var i=0; pathFilters[i]; ++i){
            if(pathFilters[i].checked){
                pathFilters[i].checked = false;
            }
        }
        for(var i=0; typeFilters[i]; ++i){
            if(typeFilters[i].checked){
                typeFilters[i].checked = false;
            }
        }
    }); 

    [ filterOverlay, filterApply ].forEach(function(element) {
        element.addEventListener("click", e => {
            destructionFilter = false;
            preservationFilter = false;
            huntFilter = false;
            abundanceFilter = false;
            harmonyFilter = false;
            eruditionFilter  = false;
            nihilityFilter = false;
            remembranceFilter = false;

            physicalFilter = false;
            fireFilter = false;
            iceFilter = false;
            lightningFilter = false;
            windFilter = false;
            quantumFilter  = false;
            imaginaryFilter = false;

            filterArray = [];
            for(var i=0; pathFilters[i]; ++i){
                if(pathFilters[i].checked){
                    switch(pathFilters[i].value) {
                        case 'destruction':
                            destructionFilter = true;      
                            filterArray.push(pathFilters[i].value);                  
                            break;
                        case 'preservation':
                            preservationFilter = true;   
                            filterArray.push(pathFilters[i].value);  
                            break;
                        case 'hunt':
                            huntFilter = true;    
                            filterArray.push(pathFilters[i].value); 
                            break;
                        case 'abundance':
                            abundanceFilter = true;   
                            filterArray.push(pathFilters[i].value);                 
                            break;
                        case 'harmony':
                            harmonyFilter = true;    
                            filterArray.push(pathFilters[i].value); 
                            break;
                        case 'erudition':
                            eruditionFilter = true;    
                            filterArray.push(pathFilters[i].value); 
                            break;
                        case 'nihility':
                            nihilityFilter = true;    
                            filterArray.push(pathFilters[i].value); 
                            break;
                        case 'remembrance':
                            remembranceFilter = true;          
                            filterArray.push(pathFilters[i].value);        
                            break;
                    }
                }
            }
            for(var i=0; typeFilters[i]; ++i){
                if(typeFilters[i].checked){
                    switch(typeFilters[i].value) {
                        case 'physical':
                            physicalFilter = true;      
                            filterArray.push(typeFilters[i].value);                  
                            break;
                        case 'fire':
                            fireFilter = true;   
                            filterArray.push(typeFilters[i].value);  
                            break;
                        case 'ice':
                            iceFilter = true;    
                            filterArray.push(typeFilters[i].value); 
                            break;
                        case 'lightning':
                            lightningFilter = true;   
                            filterArray.push(typeFilters[i].value);                 
                            break;
                        case 'wind':
                            windFilter = true;    
                            filterArray.push(typeFilters[i].value); 
                            break;
                        case 'quantum':
                            quantumFilter = true;    
                            filterArray.push(typeFilters[i].value); 
                            break;
                        case 'imaginary':
                            imaginaryFilter = true;    
                            filterArray.push(typeFilters[i].value); 
                            break;
                    }
                }
            }
            filterList.style.display = 'none' ;
            filterOverlay.style.display = 'none' ;
            display_elements();
        }); 
    }); 

    function filterChecker(){
        return destructionFilter || preservationFilter || huntFilter || abundanceFilter || harmonyFilter ||
            eruditionFilter || nihilityFilter || remembranceFilter || physicalFilter || fireFilter ||
            iceFilter || lightningFilter || windFilter || quantumFilter || imaginaryFilter;
    }
    function typeChecker(){
        return physicalFilter || fireFilter ||
            iceFilter || lightningFilter || windFilter || quantumFilter || imaginaryFilter;
    }
    function pathChecker(){
        return destructionFilter || preservationFilter || huntFilter || abundanceFilter || harmonyFilter ||
            eruditionFilter || nihilityFilter || remembranceFilter;
    }

    function filterCharList(char){
        if (typeChecker() && pathChecker()){
            return ((destructionFilter? char.path == 'destruction' || char.path.includes('destruction'): false) ||
            (preservationFilter? char.path == 'preservation' || char.path.includes('preservation') : false) ||
            (huntFilter? char.path == 'hunt' || char.path.includes('hunt') : false) ||
            (abundanceFilter? char.path == 'abundance' : false) ||
            (harmonyFilter? char.path == 'harmony' || char.path.includes('harmony') : false) ||
            (eruditionFilter? char.path == 'erudition'  : false) ||
            (nihilityFilter? char.path == 'nihility' : false )||
            (remembranceFilter? char.path == 'remembrance' || char.path.includes('remembrance') : false)) &&
            ((physicalFilter? char.type == 'physical' || char.type.includes('physical'): false) ||
            (fireFilter? char.type == 'fire' || char.type.includes("fire") : false) ||
            (iceFilter? char.type == 'ice' || char.type.includes("ice") : false) ||
            (lightningFilter? char.type == 'lightning' : false) ||
            (windFilter? char.type == 'wind' || char.type.includes("wind") : false) ||
            (quantumFilter? char.type == 'quantum'  : false) ||
            (imaginaryFilter? char.type == 'imaginary' || char.type.includes("imaginary") : false));
        }
        else {
            return ((destructionFilter? char.path == 'destruction' || char.path.includes('destruction'): false) ||
            (preservationFilter? char.path == 'preservation' || char.path.includes('preservation') : false) ||
            (huntFilter? char.path == 'hunt' || char.path.includes('hunt') : false) ||
            (abundanceFilter? char.path == 'abundance' : false) ||
            (harmonyFilter? char.path == 'harmony' || char.path.includes('harmony') : false) ||
            (eruditionFilter? char.path == 'erudition'  : false) ||
            (nihilityFilter? char.path == 'nihility' : false )||
            (remembranceFilter? char.path == 'remembrance' || char.path.includes('remembrance') : false)) ||
            ((physicalFilter? char.type == 'physical' || char.type.includes('physical'): false) ||
            (fireFilter? char.type == 'fire' || char.type.includes("fire") : false) ||
            (iceFilter? char.type == 'ice' || char.type.includes("ice") : false) ||
            (lightningFilter? char.type == 'lightning' : false) ||
            (windFilter? char.type == 'wind' || char.type.includes("wind") : false) ||
            (quantumFilter? char.type == 'quantum'  : false) ||
            (imaginaryFilter? char.type == 'imaginary' || char.type.includes("imaginary") : false));
        }
    }

    function display_elements(CharList = allChar) {
        unownedFilter? CharList = CharList.filter(char => !(ownedChars.some(e => e == char.id))) : CharList = CharList.filter(char => (ownedChars.some(e => Array.isArray(e)? e.includes(char.id) : e == char.id)));
        filterChecker()? CharList = CharList.filter(filterCharList) : CharList = CharList;
        gallery.innerText = "";   
        for (let char of CharList) {
            if(Array.isArray(char.faction)){
                order = 0;
                for(count of char.faction){
                    if((typeChecker() && pathChecker()?
                    filterArray.includes(char.path[order]) && (filterArray.includes(char.type[order])) : (filterArray.includes(char.path[order]) ^ (filterArray.includes(char.type[order]))) 
                    ) ^ filterArray.length == 0 && unownedFilter? !ownedChars.some(e => Array.isArray(e)? e[0] == char.id && e[1] == order : false) : ownedChars.some(e => Array.isArray(e)? e[0] == char.id && e[1] == order : false)){
                        const newTab = document.createElement('figure');
                        newTab.innerHTML = `\
                            <img src='${char.icon[order]}' class='icon'>
                            <div id='char-list'>
                                <h3>${char.name}</h3>\
                                <img src='assets/type/${char.type[order]}.webp'>
                            </div>
                        `; 
                        const order_id = order;
                        unownedFilter? newTab.classList.add("filtered") : false ;
                        newTab.addEventListener('click', e => {
                            displayContent(char.id, order_id);
                            setCharFilter(newTab);
                            currentCharId = char.id;
                            currentCharPath = char.path[order_id];
                            currentCharType = char.type[order_id];
                        });
                        if(char.id == currentCharId && (char.path[order] == currentCharPath || char.type[order] == currentCharType)){
                            setCharFilter(newTab);
                        }
                        newTab.addEventListener('mouseenter', () => {
                            playHoverSound() 
                        });
                        gallery.append(newTab);
                    }
                    order+=1;

                }
            } else{
                const newTab = document.createElement('figure');

                newTab.innerHTML = `\
                    <img src='${char.icon}' class='icon'>
                    <div id='char-list'>
                        <h3>${char.name}</h3>\
                        <img src='assets/type/${char.type}.webp'>
                    </div>
                `; 
                unownedFilter? newTab.classList.add("filtered") : false ;
                newTab.addEventListener('click', e => {
                    displayContent(char.id);
                    setCharFilter(newTab);
                    currentCharId = char.id;
                });
                if(char.id == currentCharId){
                    setCharFilter(newTab);
                }
                newTab.addEventListener('mouseenter', () => {
                    playHoverSound() 
                });
                gallery.append(newTab);
                
            }   
        }
    }

    searchBar.addEventListener("input", e => {
        const query = searchBar.value.toLowerCase();    
        let results = []; 
        results = allChar.filter(candidate => candidate.name.toLowerCase().includes(query));
        gallery.innerText = "";
        display_elements(results);
    });
    
    function displayContent(id){
        displayContent(id, null);
    }
    function displayContent(id, sub_id) {
        let displayedChar = null;
        charShow.style.display = 'block';

        for (char of allChar) {
            if (char.id === id) {
                displayedChar = char;
                break;
            }
        }
        charName.innerText = displayedChar.name.toUpperCase();
        sub_id == null? charFact.innerText = displayedChar.faction.toUpperCase() : charFact.innerText = displayedChar.faction[sub_id].toUpperCase();

        switch (sub_id == null? displayedChar.path : displayedChar.path[sub_id]) {
            case 'destruction':
                imgPrimPath.setAttribute('src', 'assets/path/destruction.webp');
                break;
            case 'preservation': 
                imgPrimPath.setAttribute('src', 'assets/path/preservation.webp');
                break;
            case 'hunt':
                imgPrimPath.setAttribute('src', 'assets/path/hunt.webp');
                break;
            case 'abundance':
                imgPrimPath.setAttribute('src', 'assets/path/abundance.webp');
                break; 
            case 'harmony':
                imgPrimPath.setAttribute('src', 'assets/path/harmony.webp');
                break;
            case "erudition": 
                imgPrimPath.setAttribute('src', 'assets/path/erudition.webp');
                break;
            case 'nihility':
                imgPrimPath.setAttribute('src', 'assets/path/nihility.webp');
                break;
            case 'remembrance':
                imgPrimPath.setAttribute('src', 'assets/path/remembrance.webp');
                break;       

        }
        sub_id == null? charPrimPath.innerText = displayedChar.path.toUpperCase() : charPrimPath.innerText = displayedChar.path[sub_id].toUpperCase();

        switch (sub_id == null? displayedChar.type : displayedChar.type[sub_id]) {
            case "imaginary":
                imgAtkType.setAttribute('src', 'assets/type/imaginary.webp');
                charAtkType.style.color ='#d0c565';
                break;
            case "quantum":
                imgAtkType.setAttribute('src', 'assets/type/quantum.webp');
                charAtkType.style.color ='#786dda';
                break; 
            case "wind":
                imgAtkType.setAttribute('src', 'assets/type/wind.webp');
                charAtkType.style.color ='#4eb68b';
                break;
            case "lightning": 
                imgAtkType.setAttribute('src', 'assets/type/lightning.webp');
                charAtkType.style.color ='#a354bf';
                break; 
            case "ice":
                imgAtkType.setAttribute('src', 'assets/type/ice.webp');
                charAtkType.style.color ='#2bb6d6';
                break;
            case "fire":
                imgAtkType.setAttribute('src', 'assets/type/fire.webp');
                charAtkType.style.color ='#d44853';
                break; 
            case 'physical':
                imgAtkType.setAttribute('src', 'assets/type/physical.webp');
                charAtkType.style.color ='#908fa0';
                break;
            default:
                break;
        }
        sub_id == null? charAtkType.innerText = displayedChar.type.toUpperCase() : charAtkType.innerText = displayedChar.type[sub_id].toUpperCase()


        sub_id == null? image = displayedChar.img : image = displayedChar.img[sub_id] ;
        
        unownedFilter? 
        charImg.setAttribute('style', `background-image: url("${image}"); filter: grayscale(100%)`) : 
        charImg.setAttribute('style', `background-image: url("${image}");`) ;
    }

    /* | START */
    display_elements();
}

main();