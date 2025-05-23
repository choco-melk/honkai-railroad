<?php
    session_start();
    @include('DBConnector.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width", initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='stylesheets/battle-stylesheet.css'>
</head>
<body> 
    <img id="bg-img" class='darken' width='100%' height='auto' src='images/bg-images/herta-space-station-bg.webp'>
    
    <section id='battle-navigation'>
        <div class='navigation' id='home-navigation'>
            <figure class='navigation-container'>
                <img src='images/icon-images/navigation-icon.png'>
                <figcaption>Battle Page</figcaption>
            </figure>
        </div>
    </section>

    <section id='user-exp-container'>
        <h6>Lv: <span id='user-lv'>1</span></h6>
        <h6>Exp: <span id='user-exp'>0/10</span></h6>
    </section>

    <section id='user-resources'>
        <div id='normal-warp-container'>
            <figure>
                <img src='images/resource-images/normal-warp.webp'>
            </figure>
            <p id='normal-warp-count'>0</p>
        </div>
        <div id='special-warp-container'>
            <figure>
                <img src='images/resource-images/special-warp.webp'>
            </figure>
            <p id='special-warp-count'>0</p>
        </div>
        <div id='stellar-jade-container'>
            <figure>
                <img src='images/resource-images/stellar-jade.webp'>
            </figure>
            <p id='stellar-jade-count'>3200</p>
        </div>
    </section>

    <section id = 'enemy-area-container'>
        <figure class='enemy-container'></figure>
    </section>
        
    <section id='character-area-container'>
        <figure class='character-container' id='character-container-1'></figure>
        <figure class='character-container' id='character-container-2'></figure>
        <figure class='character-container' id='character-container-3'></figure>
        <figure class='character-container' id='character-container-4'></figure>
    </section>
</body>
<script src='scripts/batte-scripts.js'></script>
</html>