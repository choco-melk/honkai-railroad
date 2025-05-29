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
    const currTeamData = document.getElementById('currTeam');

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
    console.log(ownedChars);

    const currTeamString = currTeamData.value.split(",");
    const currTeam = [];
    for(let i = 0; i < currTeamString.length; i++){
        if(i == currTeamString.length-1? false : Math.sign(parseInt(currTeamString[i+1])) == -1){
            const array = [parseInt(currTeamString[i]), (parseInt(currTeamString[i+1])*-1)-1];
            currTeam.push(array);
        } else if (Math.sign(parseInt(currTeamString[i])) == -1){
            continue;
        } else {
            currTeam.push(parseInt(currTeamString[i]));
        }
        
    }

    /* Hero Lists*/
    const allChar = await fetchCharStats();
    const ownedChar = allChar.filter(char => (ownedChars.some(e => Array.isArray(e)? e.includes(char.id) : e == char.id)));
    let currentTeam = currTeam;



     /* Hero Character Selection */

    const toHome = document.getElementById('home');
    const homeButton = document.getElementById('navigation');

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

    const searchBar = document.getElementById('search-bar')
    const gallery = document.getElementById('char-gallery');

    const filterShow = document.getElementById('filter-container');
    const filterList = document.getElementById('filter-navigation');
    const filterOverlay = document.getElementById('filter-overlay');
    const filterClear = document.getElementById('clear');
    const filterApply = document.getElementById('apply');
    const pathFilters = document.getElementsByClassName('pathCheckbox');
    const typeFilters = document.getElementsByClassName('typeCheckbox');

    let isTeamLayout = false;
    const teamSlots = document.querySelectorAll("#add-character-to-team .character .crosshair");


    const teamSelect = document.querySelectorAll('.character');

    const headerOverlay = document.getElementById('header-overlay');
    const headerTop = document.getElementById('top-header');
    const navText = document.getElementById('nav-text');
    const body = document.getElementById('choose-char-section');
    const footer = document.querySelector('footer');

    const fadingEffect = document.getElementById('opening-animation');
    
    homeButton.addEventListener("click", e => {
        for(let i = 0; i < currTeam.length; i++){
            if(Array.isArray(currTeam[i])){
                currTeam[i][1] = (currTeam[i][1] + 1 ) * -1
            }
        }
        const newTeamData = document.getElementById('newTeam');
        newTeamData.value = currentTeam.toString();
        fadingEffect.style.animation = 'fade-out 0.5s';
        setTimeout(() => {
            toHome.submit();
        }, 450);
    }); 

    teamSelect.forEach(function(element){
        element.addEventListener("click", e => {
            isTeamLayout = !isTeamLayout;
        
            if (isTeamLayout) {
                headerOverlay.style.opacity = "65%";
                headerTop.style.borderBottom = "2px solid rgb(192, 192, 192)";
                searchBar.style.display = "block";
                body.style.display = "block";
                footer.style.display = "block";
                navText.innerText = "Character Catalog";
                
            } else {
                headerOverlay.style.opacity = "50%";
                headerTop.style.borderBottom = "none";
                searchBar.style.display = "none";
                body.style.display = "none";
                footer.style.display = "none";
                navText.innerText = "Current Lineup";
            }
        });
    });


    function applyTeamLayout() {
        isTeamLayout = true;
    }

    function revertToDefaultLayout() {
        isTeamLayout = false;
    }
    
    // function playHoverSound() {
    //     var audioArr = document.getElementsByTagName('audio');
    //     audioArr[0].cloneNode().play()
        
    // }

    let currentChar = null;
    let currentCharId = null;
    let currentCharPath = null;
    let currentCharType = null;

    function setCharFilter(character) {
        if (currentChar !== null) {
            currentChar.classList.remove("selected");
        } 
        currentChar = character;
        currentChar.classList.add("selected");
    }

        filterShow.addEventListener("click", e => {
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
            return ((destructionFilter? char.path == 'destruction' || char.path.includes("destruction"): false) ||
            (preservationFilter? char.path == 'preservation' || char.path.includes("preservation") : false) ||
            (huntFilter? char.path == 'hunt' || char.path.includes("hunt") : false) ||
            (abundanceFilter? char.path == 'abundance' : false) ||
            (harmonyFilter? char.path == 'harmony' || char.path.includes("harmony") : false) ||
            (eruditionFilter? char.path == 'erudition'  : false) ||
            (nihilityFilter? char.path == 'nihility' : false )||
            (remembranceFilter? char.path == 'remembrance' || char.path.includes("remembrance") : false)) &&
            ((physicalFilter? char.type == 'physical' || char.type.includes("physical"): false) ||
            (fireFilter? char.type == 'fire' || char.type.includes("fire") : false) ||
            (iceFilter? char.type == 'ice' || char.type.includes("ice") : false) ||
            (lightningFilter? char.type == 'lightning' : false) ||
            (windFilter? char.type == 'wind' || char.type.includes("wind") : false) ||
            (quantumFilter? char.type == 'quantum'  : false) ||
            (imaginaryFilter? char.type == 'imaginary' || char.type.includes("imaginary") : false));
        }
        else {
            return ((destructionFilter? char.path == 'destruction' || char.path.includes("destruction"): false) ||
            (preservationFilter? char.path == 'preservation' || char.path.includes("preservation") : false) ||
            (huntFilter? char.path == 'hunt' || char.path.includes("hunt") : false) ||
            (abundanceFilter? char.path == 'abundance' : false) ||
            (harmonyFilter? char.path == 'harmony' || char.path.includes("harmony") : false) ||
            (eruditionFilter? char.path == 'erudition'  : false) ||
            (nihilityFilter? char.path == 'nihility' : false )||
            (remembranceFilter? char.path == 'remembrance' || char.path.includes("remembrance") : false)) ||
            ((physicalFilter? char.type == 'physical' || char.type.includes("physical"): false) ||
            (fireFilter? char.type == 'fire' || char.type.includes("fire") : false) ||
            (iceFilter? char.type == 'ice' || char.type.includes("ice") : false) ||
            (lightningFilter? char.type == 'lightning' : false) ||
            (windFilter? char.type == 'wind' || char.type.includes("wind") : false) ||
            (quantumFilter? char.type == 'quantum'  : false) ||
            (imaginaryFilter? char.type == 'imaginary' || char.type.includes("imaginary") : false));
        }
    }

    function display_elements(CharList = ownedChar) {
        filterChecker()? CharList = CharList.filter(filterCharList) : CharList = CharList;
        gallery.innerText = "";   
        for (let char of CharList) {
            if(Array.isArray(char.faction)){
                order = 0;
                for(count of char.faction){

                    if((typeChecker() && pathChecker()?
                    filterArray.includes(char.path[order]) && (filterArray.includes(char.type[order])) : (filterArray.includes(char.path[order]) ^ (filterArray.includes(char.type[order]))) 
                    ) ^ filterArray.length == 0 && ownedChars.some(e => Array.isArray(e)? e[0] == char.id && e[1] == order : false)){
                        
                        const newTab = document.createElement('figure');
                        newTab.innerHTML = `\
                            <div id='char-type' class='icon'>
                                <img src='assets/type/${char.type[order]}.webp'>
                            </div>
                            <img src='${char.icon[order]}'>
                        `; 
                        const order_id = order;
                        if (currentTeam.some(e => Array.isArray(e)? e[0] == char.id && e[1] == order : false)){
                            newTab.classList.add("selected");
                        }
                        //for team custom
                        newTab.addEventListener('click', e => {
                            if (isTeamLayout) {
                                let count = 0;
                               
                                for (const slot of teamSlots) {
                                    if (Array.isArray(currentTeam[count])? currentTeam[count][0] == char.id : false){
                                        slot.src = "assets/crosshair.png";
                                        currentTeam[count] = 0;
                                        newTab.classList.remove("selected");
                                        count+=1;
                                        break;
                                    } if (slot.src.includes("assets/crosshair.png") && 
                                   (Array.isArray(currentTeam[count])? currentTeam[count][0] == 0 : currentTeam[count] == 0) &&
                                    !currentTeam.some(e => Array.isArray(e)? e[0] == char.id : false)) 
                                    {
                                        slot.src = char.eidolon[order_id];
                                        currentTeam[count] = [char.id, order_id];
                                        newTab.classList.add("selected");
                                        count+=1;
                                        break;
                                    }
                                    count+=1;
                                }

                            }                         
                        });
                        // newTab.addEventListener('mouseenter', () => {
                        //     playHoverSound() 
                        // });
                        gallery.append(newTab);
                    }
                    order+=1;
                }
            } else{
                const newTab = document.createElement('figure');

                newTab.innerHTML = `\
                    <div id='char-type' class='icon'>
                        <img src='assets/type/${char.type}.webp'>
                    </div>
                    <img src='${char.icon}'>
                `; 
                if (currentTeam.includes(char.id)){
                    newTab.classList.add("selected");
                }
                newTab.addEventListener('click', e => {
                                                              
                    if (isTeamLayout) {
                        let count = 0;
                        for (const slot of teamSlots) {
                            if (currentTeam[count] == char.id){
                                slot.src = "assets/crosshair.png";
                                currentTeam[count] = 0;
                                newTab.classList.remove("selected");
                                count+=1;
                                break;
                            }
                            if (slot.src.includes("assets/crosshair.png") && currentTeam[count] == 0 && !currentTeam.includes(char.id)) {
                                slot.src = char.eidolon;
                                currentTeam[count] = char.id;
                                newTab.classList.add("selected");
                                count+=1;
                                break;
                            }
                            count+=1;
                        }

                    }                
                });
                // newTab.addEventListener('mouseenter', () => {
                //     playHoverSound() 
                // });
                gallery.append(newTab);
                
            }   
        }
    }

    function display_team(CharList = ownedChar) {
        filterChecker()? CharList = CharList.filter(filterCharList) : CharList = CharList;
        gallery.innerText = "";   
        for (let char of CharList) {
            if(currentTeam.includes(char.id) || currentTeam.some(e => Array.isArray(e)? e.includes(char.id): false)){
                let count = 0;
                OUTER_LOOP: for (const current of currentTeam) {
                    let countTwo = 0; 
                    for (const slot of teamSlots) {
                        if(slot.src.includes("assets/crosshair.png") && 
                        currentTeam[countTwo] != 0 
                        && Array.isArray(currentTeam[countTwo])? currentTeam[countTwo].includes(char.id) : currentTeam[countTwo] == char.id){
                            if(current == char.id){ 
                                slot.src = char.eidolon;
                                break OUTER_LOOP;
                            }
                            else if(Array.isArray(current)? current[0] == char.id : false){
                                slot.src = char.eidolon[current[1]];
                                console.log(char.id, count  );
                                break OUTER_LOOP;
                            }
                        }
                        countTwo+=1; 
                        count+=1;
                    }
                }
            }
        }
        display_elements();
    }



    searchBar.addEventListener("input", e => {
        const query = searchBar.value.toLowerCase();    
        let results = []; 
        results = ownedChar.filter(candidate => candidate.name.toLowerCase().includes(query));
        gallery.innerText = "";
        display_elements(results);
        if (isTeamLayout) applyTeamLayout();
    });
     
    
    /* | START */
    display_team();
}



main();