<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='gacha_system.css'>
    <link rel="icon" type="image/x-icon" href="assets/logo.ico">
    <title>Honkai: Warp</title>
</head>
<body id='warping-area'>
    <div id='opening-animation'></div>
    <section id='user-resources'>
        <figure>
            <img src='assets/stellar-jade.webp'>
        </figure>
        <p id='stellar-jade-count'></p>
    </section>
    <div id='pulling-animation' class="fade-out">
        <img id='skip-gif' src='assets/banner/skip.jpg'> 
        <img id='pulling-gif'>
    </div>
    <!-- <div id='warp-given'>
        <h3>Current Prize</h3>
    </div> -->
    <div id='body-overlay'></div>
    <header>
        <div id="header-overlay"></div>
        <div id="logo-container">
            <img src='assets/navigation/inwarp.png'>
            <div>
                <h4>Warp</h4>
                <h3 id='banner-name'>Astral Express</h3>
            </div>
        </div>
        </a>
    </header>
    <div id='choose-warp-section'>
        <aside id='warp-navigation'>
            <div class='warp-option selected' id='astral_express'>
                <img class='warp-icon' class='warp-icon' src='assets/faction/astral_express.png'>
            </div>
            <div class='warp-option' id='stellaron_hunters'>
                <img class='warp-icon' src='assets/faction/stellaron_hunters.png'>
            </div>
            <div class='warp-option' id='herta_space_station'>
                <img class='warp-icon' src='assets/faction/herta_space_station.png'>
            </div>
            <div class='warp-option' id='belobog_overworld'>
                <img class='warp-icon' src='assets/faction/belobog_overworld.png'>
            </div>
            <div class='warp-option' id='belobog_underworld'>
                <img class='warp-icon' src='assets/faction/belobog_underworld.png'>
            </div>
            <div class='warp-option' id='interastral_peace_corporation'>
                <img class='warp-icon' src='assets/faction/interastral_peace_corporation.png'>
            </div>
            <div class='warp-option' id='local_xianzhou'>
                <img class='warp-icon' src='assets/faction/local_xianzhou.png'>
            </div>
            <div class='warp-option' id='high_cloud_quintet'>
                <img class='warp-icon' src='assets/faction/high_cloud_quintet.png'>
            </div>
            <div class='warp-option' id='ghost_hunting_squad'>
                <img class='warp-icon' src='assets/faction/ghost_hunting_squad.png'>
            </div>
            <div class='warp-option' id='foreign_xianzhou'>
                <img class='warp-icon' src='assets/faction/foreign_xianzhou.png'>
            </div>
            <div class='warp-option' id='xianzhou_wardance'>
                <img class='warp-icon' src='assets/faction/xianzhou_wardance.png'>
            </div>
            <div class='warp-option' id='penacony'>
                <img class='warp-icon' src='assets/faction/penacony.png'>
            </div>
            <div class='warp-option' id='amphoreus'>
                <img class='warp-icon' src='assets/faction/amphoreus.png'>
            </div>
            <div class='warp-option' id='outside_forces'>
                <img class='warp-icon' src='assets/faction/outside_forces.png'>
            </div>
            <br>
        </aside>
        <!-- <audio src="./select.mp3" class="enter"  preload="metadata" allow="autoplay"></audio> -->
        <aside id="warp-selected-in">
        </aside>
        <aside id="warp-selected-out">
        </aside>
        <section id='warp-container'>
            <div class='warp-button-highlight'>
                <div class='warp-button-outer-container' id='one-pull-button'>
                    <div class='warp-button-inner-container'>
                        <figure>
                            <img src='assets/special-warp.webp'>
                            <figcaption>× 1</figcaption>
                        </figure>            
                        <h4>Warp ×1</h4>
                    </div>
                </div>
            </div>
            <div class='warp-button-highlight'>
                <div class='warp-button-outer-container' id='ten-pull-button'>
                    <div class='warp-button-inner-container'>
                        <figure>
                            <img src='assets/special-warp.webp'>
                            <figcaption> × 10</figcaption>
                        </figure>            
                        <h4>Warp ×10</h4>
                    </div>
                </div>
            </div>
        </section>
        <section id='pulls-gallery'></section>
    </div>
    <div id='pity'>
        <div class='pity-border'>
            <div id='pity-value'>
                <h4>5-Star Pity: </h4>
                <h4 id='five-star-pity'></h4>
            </div>
            <div id='pity-value'>
                <h4>4-Star Pity: </h4>
                <h4 id='four-star-pity'></h4>
            </div>
        </div>
    </div>
    <div id='obtainable-chars'>
        <div class='obtainable-chars-border'>
        <h4>Passengers:</h4>
        <div id='chars'>
        </div>
        </div>
    </div>
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
    <form action="home_worlds.php" id='home' method='post'>
        <div id='navigation'>
                <data>
                    <?php
                        echo "<input type='text' style='display:none;' name='Username' id='username' value=".$_POST['Username'].">".
                            "<input type='number' style='display:none;' name='Experience' id='experience' value=".$_POST['Experience'].">".
                            "<input type='text' style='display:none;' name='OwnedChars' id='newOwnedChars' value=''>".
                            "<input type='text' style='display:none;' name='CurrTeam' id='currTeam' value='".$_POST["CurrTeam"]."'>".
                            "<input type='number' style='display:none;' name='FivePity' id='newFivePity'value=0>".
                            "<input type='number' style='display:none;' name='FourPity'id='newFourPity'value=0>".
                            "<input type='number' style='display:none;' name='StellarJades' id='newStellarJades' value=0>".
                            "<input type='number' style='display:none;' name='UserIcon' id='userIcon' value=".$_POST['UserIcon'].">";
                    ?>
                </data>
            <figure class='navigation-container'>
                <img src='assets/navigation/outmap.png'>
                <figcaption>Home Screen</figcaption>
            </figure>
        </div>
    </form>
</body>
<script src='gacha_system.js'></script>
</html>
