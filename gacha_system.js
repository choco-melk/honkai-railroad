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

async function fetchBannerData() {
    try {
        const response = await fetch("databases/Banner_Database.json");
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

    const ownedCharsData = document.getElementById('ownedChars');
    const fivePity = document.getElementById('fivePity');
    const fourPity = document.getElementById('fourPity');

    const currFivePity = document.getElementById('five-star-pity');
    const currFourPity = document.getElementById('four-star-pity');

    const stellarJades = document.getElementById('stellarJades');
    let currentJades = stellarJades.value;
    const stellars = document.getElementById('stellar-jade-count');   
    stellars.innerText = currentJades;

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

    let five_pity = fivePity.value;
    let four_pity = fourPity.value;

    currFivePity.innerText = five_pity;
    currFourPity.innerText = four_pity;

    /* | FIELDS */

    const allChar = await fetchCharStats();

    const toHome = document.getElementById('home');
    const homeButton = document.getElementById('navigation');

    const allBanners = await fetchBannerData() ;

    const astralBanner = document.getElementById('astral_express'); 
    const stellaronBanner = document.getElementById('stellaron_hunters'); 
    const stationBanner = document.getElementById('herta_space_station'); 
    const overworldBanner = document.getElementById('belobog_overworld'); 
    const underworldBanner = document.getElementById('belobog_underworld'); 
    const peaceBanner = document.getElementById('interastral_peace_corporation'); 
    const localBanner = document.getElementById('local_xianzhou'); 
    const cloudBanner = document.getElementById('high_cloud_quintet'); 
    const ghostBanner = document.getElementById('ghost_hunting_squad'); 
    const foreignBanner = document.getElementById('foreign_xianzhou'); 
    const wardanceBanner = document.getElementById('xianzhou_wardance'); 
    const penaconyBanner = document.getElementById('penacony'); 
    const amphoreusBanner = document.getElementById('amphoreus'); 
    const outsideBanner = document.getElementById('outside_forces'); 

    const bannerImgIn = document.getElementById('warp-selected-in');
    const bannerImgOut = document.getElementById('warp-selected-out');
    const bannerName = document.getElementById('banner-name');
    const warpPageTop = document.getElementById('body-overlay');
    const warpPageBottom = document.getElementById('header-overlay');

    const bannerPullsResults = document.getElementById("pulls-gallery");
    const onePullButton = document.getElementById("one-pull-button");
    const tenPullButton = document.getElementById("ten-pull-button");
    const pullAnimation = document.getElementById("pulling-animation");
    const pullGif = document.getElementById("pulling-gif");
    const skipGif = document.getElementById("skip-gif");
    const obtainableChars = document.getElementById("chars");

    // let currentName = "Astral Express"
    let currentActive = astralBanner;
    let currentName = "Astral Express";
    let currentBanner = 'astral_express';
    let currentData = allBanners.filter(warp => warp.title == currentBanner)
    let currentTimeOut = null;
    let pullResults = null;

    const fadingEffect = document.getElementById('opening-animation');

    homeButton.addEventListener("click", e => {
        for(let i = 0; i < ownedChars.length; i++){
            if(Array.isArray(ownedChars[i])){
                ownedChars[i][1] = (ownedChars[i][1] + 1 ) * -1
            }
        }
        const newOwnedCharsData = document.getElementById('newOwnedChars');
        const newFivePity = document.getElementById('newFivePity');
        const newFourPity = document.getElementById('newFourPity');
        const newStellarJades = document.getElementById('newStellarJades');
        newOwnedCharsData.value = ownedChars.toString();
        newFivePity.value = five_pity;
        newFourPity.value = four_pity;
        newStellarJades.value = currentJades;
        fadingEffect.style.animation = 'fade-out 0.5s';
        setTimeout(() => {
            toHome.submit();
        }, 450);
    }); 

    // let buffer;

    function setActiveFilter(banner) {
        // if (!buffer) {
        //     buffer = setTimeout(function() {

        //         buffer = null ;
        //     }, 300);
        // }
        currentActive.classList.remove("selected");
        currentActive = banner;
        currentActive.classList.add("selected");
        currentData = allBanners.filter(warp => warp.title == currentBanner)
        displayBanner(currentBanner);
        bannerName.textContent = currentName ;

    }
    astralBanner.addEventListener("click", e => {
        currentBanner = 'astral_express';
        currentName = "Astral Express";
        setActiveFilter(astralBanner);    
    }); 
    stellaronBanner.addEventListener("click", e => {
        currentBanner = 'stellaron_hunters';
        currentName = "Stellaron Hunters";
        setActiveFilter(stellaronBanner);    
    }); 
    stationBanner.addEventListener("click", e => {
        currentBanner = 'herta_space_station';
        currentName = "Herta Space Station";
        setActiveFilter(stationBanner);    
    }); 
    overworldBanner.addEventListener("click", e => {
        currentBanner = 'belobog_overworld';
        currentName = "Belobog: Overworld";
        setActiveFilter(overworldBanner);    
    }); 
    underworldBanner.addEventListener("click", e => {
        currentBanner = 'belobog_underworld';
        currentName = "Belobog: Underworld";
        setActiveFilter(underworldBanner);    
    }); 
    peaceBanner.addEventListener("click", e => {
        currentBanner = 'interastral_peace_corporation';
        currentName = "Interastral Peace Corporation";
        setActiveFilter(peaceBanner);    
    }); 
    localBanner.addEventListener("click", e => {
        currentBanner = 'local_xianzhou';
        currentName = "Local Xianzhou";
        setActiveFilter(localBanner);    
    }); 
    cloudBanner.addEventListener("click", e => {
        currentBanner = 'high_cloud_quintet';
        currentName = "High Cloud Quintet";
        setActiveFilter(cloudBanner);    
    }); 
    ghostBanner.addEventListener("click", e => {
        currentBanner = 'ghost_hunting_squad';
        currentName = "Ghost Hunting Squad";
        setActiveFilter(ghostBanner);    
    }); 
    foreignBanner.addEventListener("click", e => {
        currentBanner = 'foreign_xianzhou';
        currentName = "Foreign Xianzhou";
        setActiveFilter(foreignBanner);    
    }); 
    wardanceBanner.addEventListener("click", e => {
        currentBanner = 'xianzhou_wardance';
        currentName = "Xianzhou Wardance";    
        setActiveFilter(wardanceBanner);    
    }); 
    penaconyBanner.addEventListener("click", e => {
        currentBanner = 'penacony';
        currentName = "Penacony";
        setActiveFilter(penaconyBanner);    
    }); 
    amphoreusBanner.addEventListener("click", e => {
        currentBanner = 'amphoreus';
        currentName = "Amphoreus";
        setActiveFilter(amphoreusBanner);    
    }); 
    outsideBanner.addEventListener("click", e => {
        currentBanner = 'outside_forces';
        currentName = "Outside Forces";
        setActiveFilter(outsideBanner);    
    }); 

    onePullButton.addEventListener("click", e => {
        if(currentJades >= 160){
            currentJades-=160;
            stellars.innerText = currentJades;
            warpCharacters(1);

        } else {
            alert("Not Enough Jades.");
        }
        
    }); 
    tenPullButton.addEventListener("click", e => {
        if(currentJades >= 1600){
            currentJades-=1600;
            stellars.innerText = currentJades;
            warpCharacters(10);

        } else {
            alert("Not Enough Jades.");
        }  
    }); 

    function displayBanner(tag) {
        if(bannerImgIn.style.display == 'none'){
            bannerImgOut.style.animation = 'change-out linear 0.5s';
            bannerImgOut.style.zIndex = '0';
            setTimeout(() => {  
                displayChars();
                bannerImgIn.setAttribute('style', `background-image: url("assets/banner/${tag}.png"); background-size: cover; display: block; z-index: 1;`);
                bannerImgIn.style.animation = 'change-in linear 0.5s';
                warpPageTop.setAttribute('style', `background-image: url("assets/banner/${tag}.png"); background-size: cover; filter: blur(0%);`);
                warpPageBottom.setAttribute('style', `background-image: url("assets/banner/${tag}.png"); background-size: cover; filter: blur(0%);`);
            }, 300);
            setTimeout(() => {  
                bannerImgOut.setAttribute('style', `display: none;`);
            }, 500);
        } else {
            bannerImgIn.style.animation = 'change-out linear 0.5s';
            bannerImgIn.style.zIndex = '0';
            setTimeout(() => {  
                displayChars();
                bannerImgOut.setAttribute('style', `background-image: url("assets/banner/${tag}.png"); background-size: cover; display: block; z-index: 1;`);
                bannerImgOut.style.animation = 'change-in linear 0.5s';
                warpPageTop.setAttribute('style', `background-image: url("assets/banner/${tag}.png"); background-size: cover; filter: blur(0%);`);
                warpPageBottom.setAttribute('style', `background-image: url("assets/banner/${tag}.png"); background-size: cover; filter: blur(0%);`);
            }, 300);
            setTimeout(() => {  
                bannerImgIn.setAttribute('style', `display: none;`);
            }, 500);
        }
        
    }

    bannerPullsResults.addEventListener("click", e => {
        bannerPullsResults.innerText = "";
        bannerPullsResults.setAttribute('style', `z-index: -1;`) ; 
    }); 

    function dissplayPulls(pullResults){
        currFivePity.innerText = five_pity;
        currFourPity.innerText = four_pity;

        for(let element of pullResults){
            const newTab = document.createElement('figure');
            if(element == -1) {
                newTab.setAttribute('style', `background-image: url("assets/gacha/trash.webp"); 
                        border: 10px solid #86b4db ;
                        border-top: 70px solid #86b4db ;
                        border-bottom: 70px solid #86b4db ;
                    `);
            } else if(element == 0) {
                newTab.setAttribute('style', `background-image: url("assets/gacha/goodtrash.webp"); 
                        border: 10px solid #bea7f5 ;
                        border-top: 70px solid #bea7f5 ;
                        border-bottom: 70px solid #bea7f5 ;
                    `);
            } else if(Array.isArray(element)) {
                for (char of allChar) {
                    if (char.id === element[0]) {
                        newTab.setAttribute('style', `background-image: url("${char.icon[element[1]]}"); 
                                border: 10px solid #fed66f ;
                                border-top: 70px solid #fed66f ;
                                border-bottom: 70px solid #fed66f ;
                            `);
                        break;
                    }
                }
            } else {
                for (char of allChar) {
                    if (char.id === element) {
                        newTab.setAttribute('style', `background-image: url("${char.icon}"); 
                                border: 10px solid #fed66f ;
                                border-top: 70px solid #fed66f ;
                                border-bottom: 70px  solid #fed66f ;
                            `);
                        break;
                    }
                }
            }
            bannerPullsResults.append(newTab);
        }
    }

    function displayChars() {
        let bannerData = currentData[0];
        const bannerChar = allChar.filter(char => bannerData.five_star.some(e => Array.isArray(e)? e.includes(char.id) : e == char.id));
        obtainableChars.innerText = "";
        for (char of bannerData.five_star){
            for (charAgain of bannerChar){
                if(Array.isArray(char) && char[0] == charAgain.id){
                    console.log(charAgain.name, "Array");
                    const newTab = document.createElement('figure');
                    newTab.innerHTML = `\
                        <img src='${charAgain.icon[char[1]]}' class='icon'>
                        <h4>${charAgain.name}</h4>
                    `; 
                    obtainableChars.append(newTab);
                    break;
                } else if (char == charAgain.id){
                    console.log(charAgain.name, "Single");
                    const newTab = document.createElement('figure');
                    newTab.innerHTML = `\
                        <img src='${charAgain.icon}' class='icon'>
                        <h4>${charAgain.name}</h4>
                    `; 
                    obtainableChars.append(newTab);
                    break;
                }
            }
        }
    }

    function warpCharacters(pulls) {
        let bannerData = currentData[0];
        const pullData = [];
        pullResults = [];
        for (var i=0; i < pulls; i++) {

            five_pity += 1;
            four_pity += 1;

            let warp = getRndInteger(0, 100);
            if (warp == 0 || (five_pity>=40? warp <= ((five_pity-40)*10) : false)) {
                let char = getRndInteger(0, bannerData.five_star.length);
                // Array.isArray(bannerData.five_star[char])? displayContent.apply(this, bannerData.five_star[char]) : displayContent(bannerData.five_star[char]) ;
                five_pity = 0;
                pullData.push(5);
                pullResults.push(bannerData.five_star[char]);
                console.log(!ownedChars.includes(bannerData.five_star[char]));
                console.log(!Array.isArray(bannerData.five_star[char])? ownedChars.some(e => Array.isArray(e)? e[0] == bannerData.five_star[char][0] && e[1] == bannerData.five_star[char][1] : false) : false);
                if(!ownedChars.includes(bannerData.five_star[char]) && 
                    !(Array.isArray(bannerData.five_star[char])? ownedChars.some(e => Array.isArray(e)? e[0] == bannerData.five_star[char][0] && e[1] == bannerData.five_star[char][1] : false) : false)
                ){
                    ownedChars.push(bannerData.five_star[char]);
                    console.log(ownedChars);
                }
            }
            else if (warp <= 10 + (four_pity * 10) && warp > 0) {
                // console.log(bannerData.four_star[0]);
                // warpGiven.setAttribute('style', `background-image: url("assets/goodtrash.webp"); background-size: cover;`);
                four_pity = 0;  
                pullData.push(4);
                pullResults.push(0);
            }
            else {
                // console.log(bannerData.three_star[0]);
                // warpGiven.setAttribute('style', `background-image: url("assets/trash.webp"); background-size: cover;`);
                pullData.push(3);
                pullResults.push(-1);
            }

            // warpGiven.textContent = "5-star pity: " + five_pity + " " + "4-star pity: " + four_pity;
        }   
        pullAnimation.classList.toggle('fade-in');
        if(pullData.includes(5)){
            pullAnimation.setAttribute('style', `z-index: 4;`);
            pullGif.src = "assets/banner/special.gif" + "?a=" + Math.random();
            currentTimeOut = setTimeout(function() { 
                pullAnimation.setAttribute('style', `z-index: -1;`) ; 
                pullGif.src = '';
                pullAnimation.className ='fade-out';
                bannerPullsResults.setAttribute('style', `z-index: 3;`) ; 
                skipGif.removeEventListener("click", skippingGif);
                dissplayPulls(pullResults);
            ;}, 10000);
        }
        else if(pullData.includes(4)){
            pullAnimation.setAttribute('style', `z-index: 4;`);
            pullGif.src = "assets/banner/elite.gif" + "?a=" + Math.random();
            currentTimeOut =  setTimeout(function() { 
                pullAnimation.setAttribute('style', `z-index: -1;`) ; 
                pullGif.src = '';
                pullAnimation.className ='fade-out';
                bannerPullsResults.setAttribute('style', `z-index: 3;`) ; 
                skipGif.removeEventListener("click", skippingGif);
                dissplayPulls(pullResults);
            ;}, 9000);
        } else {
            pullAnimation.setAttribute('style', `z-index: 4;`);
            pullGif.src = "assets/banner/common.gif" + "?a=" + Math.random();
            currentTimeOut = setTimeout(function() { 
                pullAnimation.setAttribute('style', `z-index: -1;`) ; 
                pullGif.src = '';
                pullAnimation.className ='fade-out';
                bannerPullsResults.setAttribute('style', `z-index: 3;`) ; 
                skipGif.removeEventListener("click", skippingGif);
                dissplayPulls(pullResults);
            ;}, 9000);
            
        }
        skipGif.addEventListener("click", skippingGif);

        // console.log("5-star pity: " + five_pity + " " + "4-star pity: " + four_pity);
    }

    function skippingGif(){
        clearTimeout(currentTimeOut);
        pullAnimation.setAttribute('style', `z-index: -1;`) ; 
        pullGif.src = '';
        pullAnimation.className ='fade-out';
        bannerPullsResults.setAttribute('style', `z-index: 3;`) ; 
        skipGif.removeEventListener("click", skippingGif);
        dissplayPulls(pullResults);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;skipGif
    }
    
    displayBanner('astral_express');
}

main();
