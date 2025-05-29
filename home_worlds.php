<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='home-stylesheets.css'>
    <title>Home Page</title>
</head>
<body>
    <div id='opening-animation'></div>
    <img id='bg-img' class='darken' width='100%' height='auto' src='assets/background/space.png'>
    <section id='user-status'>
        <figure>
            <img id='user-pp-image' src='assets/icon/2/1.webp'>
        </figure>
        <section>
            <h3 id='user-name'></h3>
            <div id='user-exp-container'>
                <h6>Lv: <span id='user-lv'></span></h6>
                <h6>Exp: <span id='user-exp'></span></h6>
            </div>
        </section>
    </section>
    <section id='user-resources'>
        <figure>
            <img src='assets/stellar-jade.webp'>
        </figure>
        <p id='stellar-jade-count'></p>
    </section>
    <section id='planets'>
        <station></station>
        <figure id='herta-space-station' >
            <img src='assets/worlds/station.png'>
            <div class='fancy-golden-border'></div>
            <figcaption>Herta Space Station</figcaption>
            <div class='fancy-golden-border'></div>
        </figure>
        <jarilo></jarilo>
        <figure id='jarilo-vi'>
            <img src='assets/worlds/jarilo.png'>
            <div class='fancy-golden-border'></div>
            <figcaption>Jarilo VI</figcaption>
            <div class='fancy-golden-border'></div>
        </figure>
        <xianzhou></xianzhou>
        <figure id='xianzhou-luofu'>
            <img src='assets/worlds/xianzhou.png'>
            <div class='fancy-golden-border'></div>
            <figcaption>Xianzhou Luofu</figcaption>
            <div class='fancy-golden-border'></div>
        </figure>
        <penacony></penacony>
        <figure id='penacony'>
            <img src='assets/worlds/penacony.png'>
            <div class='fancy-golden-border'></div>
            <figcaption>Penacony</figcaption>
            <div class='fancy-golden-border'></div>
        </figure>
        <amphoreus></amphoreus>
        <figure id='amphoreus'>
            <img src='assets/worlds/amphoreus.png'>
            <div class='fancy-golden-border'></div>
            <figcaption>Amphoreus</figcaption>
            <div class='fancy-golden-border'></div>
        </figure>
    </section>
    <section id='home-navigation'>
        <div class='navigation' id='save-button'>
            <figure class='navigation-container'>
                <img src='assets/navigation/save.png'>
                <figcaption>Save Data</figcaption>
            </figure>
        </div>
        <div class='navigation' id='tutorial-button'>
            <figure class='navigation-container'>
                <img src='assets/navigation/tutorial.png'>
                <figcaption>Tutorial</figcaption>
            </figure>
        </div>
        <form action="character_database.php" id='characters' method='post'>
            <div class='navigation' id='characters-button'>
                <data>
                    <?php
                        echo "<input type='text' style='display:none;' name='Username' id='username' value=".$_POST['Username'].">".
                            "<input type='number' style='display:none;' name='Experience' id='experience' value=".$_POST['Experience'].">".
                            "<input type='text' style='display:none;' name='OwnedChars' id='ownedChars' value='".$_POST["OwnedChars"]."'>".
                            "<input type='text' style='display:none;' name='CurrTeam' id='currTeam' value='".$_POST["CurrTeam"]."'>".
                            "<input type='number' style='display:none;' name='FivePity' id='fivePity' value=".$_POST["FivePity"].">".
                            "<input type='number' style='display:none;' name='FourPity' id='fourPity' value=".$_POST["FourPity"].">".
                            "<input type='number' style='display:none;' name='StellarJades' id='stellarJades' value=".$_POST['StellarJades'].">".
                            "<input type='number' style='display:none;' name='UserIcon' id='userIcon' value=".$_POST['UserIcon'].">";
                    ?>
                </data>
                <figure class='navigation-container'>
                    <img src='assets/navigation/outarchive.png'>
                    <figcaption>Characters</figcaption>
                </figure>
            </div>
        </form>
        <form action="team_handling.php" id='team-lineup' method='post'>
            <div class='navigation' id='team-lineup-button'>
                <data>
                    <?php
                        echo "<input type='text' style='display:none;' name='Username' id='username' value=".$_POST['Username'].">".
                            "<input type='number' style='display:none;' name='Experience' id='experience' value=".$_POST['Experience'].">".
                            "<input type='text' style='display:none;' name='OwnedChars' id='ownedChars' value='".$_POST["OwnedChars"]."'>".
                            "<input type='text' style='display:none;' name='CurrTeam' id='currTeam' value='".$_POST["CurrTeam"]."'>".
                            "<input type='number' style='display:none;' name='FivePity' id='fivePity' value=".$_POST["FivePity"].">".
                            "<input type='number' style='display:none;' name='FourPity' id='fourPity' value=".$_POST["FourPity"].">".
                            "<input type='number' style='display:none;' name='StellarJades' id='stellarJades' value=".$_POST['StellarJades'].">".
                            "<input type='number' style='display:none;' name='UserIcon' id='userIcon' value=".$_POST['UserIcon'].">";
                    ?>
                </data>
                <figure class='navigation-container'>
                    <img src='assets/navigation/outteam.png'>
                    <figcaption>Lineup</figcaption>
                </figure>
            </div>
        </form>
        <form action="gacha_system.php" id='gacha' method='post'>
            <div class='navigation' id='gacha-button'>
                <data>
                    <?php
                        echo "<input type='text' style='display:none;' name='Username' id='username' value=".$_POST['Username'].">".
                            "<input type='number' style='display:none;' name='Experience' id='experience' value=".$_POST['Experience'].">".
                            "<input type='text' style='display:none;' name='OwnedChars' id='ownedChars' value='".$_POST["OwnedChars"]."'>".
                            "<input type='text' style='display:none;' name='CurrTeam' id='currTeam' value='".$_POST["CurrTeam"]."'>".
                            "<input type='number' style='display:none;' name='FivePity' id='fivePity' value=".$_POST["FivePity"].">".
                            "<input type='number' style='display:none;' name='FourPity' id='fourPity' value=".$_POST["FourPity"].">".
                            "<input type='number' style='display:none;' name='StellarJades' id='stellarJades' value=".$_POST['StellarJades'].">".
                            "<input type='number' style='display:none;' name='UserIcon' id='userIcon' value=".$_POST['UserIcon'].">";
                    ?>
                </data>
                <figure class='navigation-container'>
                    <img src='assets/navigation/outwarp.png'>
                    <figcaption>Warp</figcaption>
                </figure>
            </div>
        </form>
        <div class='navigation' id='logout-navigation'>
            <figure class='navigation-container'>
                <img src='assets/navigation/logout.png'>
                <figcaption>Log out</figcaption>
            </figure>
        </div>
    </section>
</body>
<script src='home-scripts.js'></script>
</html>