<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='character_database.css'>
    <link rel="icon" type="image/x-icon" href="assets/logo.ico">
    <title>Honkai: Characters</title>
</head>
<body>
    <div id='opening-animation'></div>
    <div id='body-overlay'></div>
    <header>
        <div id="header-overlay"></div>
            <div id="top-header">
            <div id="logo-container">
                <img src='assets/navigation/inarchive.png'>
                <div>
                    <h4>Archive</h4>
                    <h3 id='catalog'>Character Catalog</h3>
                </div>
            </div>
            <form>
                <input id='search-bar' type='text' placeholder='Search Character'>
            </form>   
        </div>   
    </header>
    <div id='choose-char-section'>
        <aside id='filter-overlay'></aside>
        <aside id='filter-navigation'>
            <div class="filters">
                <div id='filter-paths'>
                    <div class='filter-option'>
                        <img src='assets/path/destruction.webp'>
                        <h3>Destruction</h3>
                        <input type="checkbox" class='pathCheckbox' name="destruction" value="destruction">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/preservation.webp'>
                        <h3>Preservation</h3>
                        <input type="checkbox" class='pathCheckbox' name="preservation" value="preservation">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/hunt.webp'>
                        <h3>Hunt</h3>
                        <input type="checkbox" class='pathCheckbox' name="hunt" value="hunt">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/abundance.webp'>
                        <h3>Abundance</h3>
                        <input type="checkbox" class='pathCheckbox' name="abundance" value="abundance">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/harmony.webp'>
                        <h3>Harmony</h3>
                        <input type="checkbox" class='pathCheckbox' name="harmony" value="harmony">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/erudition.webp'>
                        <h3>Erudition</h3>
                        <input type="checkbox" class='pathCheckbox' name="erudition" value="erudition">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/nihility.webp'>
                        <h3>Nihility</h3>
                        <input type="checkbox" class='pathCheckbox' name="nihility" value="nihility">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/path/remembrance.webp'>
                        <h3>Remembrance</h3>
                        <input type="checkbox" class='pathCheckbox' name="remembrance" value="remembrance">
                    </div>
                </div>
                <div id='filter-types'>
                    <div class='filter-option'>
                        <img src='assets/type/physical.webp'>
                        <h3>Physical</h3>
                        <input type="checkbox" class='typeCheckbox' name="physical" value="physical">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/type/fire.webp'>
                        <h3>Fire</h3>
                        <input type="checkbox" class='typeCheckbox' name="fire" value="fire">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/type/ice.webp'>
                        <h3>Ice</h3>
                        <input type="checkbox" class='typeCheckbox' name="ice" value="ice">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/type/lightning.webp'>
                        <h3>Lightning</h3>
                        <input type="checkbox" class='typeCheckbox' name="lightning" value="lightning">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/type/wind.webp'>
                        <h3>Wind</h3>
                        <input type="checkbox" class='typeCheckbox' name="wind" value="wind">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/type/quantum.webp'>
                        <h3>Quantum</h3>
                        <input type="checkbox" class='typeCheckbox' name="quantum" value="quantum">
                    </div>
                    <div class='filter-option'>
                        <img src='assets/type/imaginary.webp'>
                        <h3>Imaginary</h3>
                        <input type="checkbox" class='typeCheckbox' name="imaginary" value="imaginary">
                    </div>
                </div>
            </div>
                <div class='filter-buttons'>
                    <div id='clear'><h3>Clear</h3></div>
                    <div id='apply'><h3>Apply</h3></div>
                </div>
        </aside>

        <audio src="assets/sound/select.mp3" class="enter"  preload="metadata" allow="autoplay"></audio>
        <section id="char-selection-container">
            <div id='char-overlay'></div>
            <section id='char-gallery'>
            </section>
        </section>
        <footer>   
            <div id="footer-overlay"></div>
                <div id="filter-container">
                    <img src='assets/filter.png' id="filter">
                </div>
            </div>
        </footer>   
        <div class="dropdown">
            <button id="dropbtn">Owned</button>
            <div id="dropdown-content">
                <h4 id='filter-owned' class="selected">Owned</h4>
                <h4 id='filter-unowned'>Unowned</h4>
            </div>
        </div>
        <aside id="char-selected">
            <div id="char-image">
                <h2 id='char-name'></h2>
                <h4 id='char-faction'></h4>
                <h4 id='path-text'>Path</h4>
                <div id='primary-path'>
                    <img id="primary-path-image">
                    <h4 id='char-primary-path'></h4>
                </div>
                <br>
                <h4 id='attack-type-text'>Type</h4>
                <div id='attack-type'>
                    <img id="attack-type-image">
                    <h4 id='char-attack-type'></h4>
                </div>
            </div>
        </aside>
    </div>
    <form action="home_worlds.php" id='home' method='post'>
        <div id='navigation'>
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
                <img src='assets/navigation/outmap.png'>
                <figcaption>Home Screen</figcaption>
            </figure>
        </div>
    </form>

</body>
<script src='character_database.js'></script>
</html>
