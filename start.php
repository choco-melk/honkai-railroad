<?php
    session_start();
    include('DBConnector.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Session</title>
    <link rel='stylesheet' href='start.css'>
</head>
<form id='submit' action='home_worlds.php' method='POST'>
    <body> 

        <img id='bg-img' width='100%' height='auto'  src="assets/background/hsr-opening-bg.gif">
        <section id='start-container'>
            <h4>Start Game</h4>
            <div id='account-container'>
                <img src='assets/navigation/check-mark.png'>
                <p id='account-name'><?php echo $_SESSION['username'];?>
                </p>
            </div>
        </section>
        <div id='logout-container'>
            <img src='assets/navigation/hoyo-logo.png.png'>
            <p id='account-name'>Log Out</p>
        </div>

        <?php
            echo "<input type='text' style='display:none;' name='Username' id='username' value=".$_SESSION['username'].">".
                "<input type='number' style='display:none;' name='Experience' id='experience' value=".$_SESSION['experience'].">".
                "<input type='text' style='display:none;' name='OwnedChars' id='ownedChars' value='".$_SESSION['ownedChars']."'>".
                "<input type='text' style='display:none;' name='CurrTeam' id='currTeam' value='".$_SESSION['currTeam']."'>".
                "<input type='number' style='display:none;' name='FivePity' id='fivePity' value=".$_SESSION['fiveStarPity'].">".
                "<input type='number' style='display:none;' name='FourPity' id='fourPity' value=".$_SESSION['fourStarPity'].">".
                "<input type='number' style='display:none;' name='StellarJades' id='stellarJades' value=".$_SESSION['stellarJades'].">".
                "<input type='number' style='display:none;' name='UserIcon' id='userIcon' value=".$_SESSION['usericon'].">";
        ?>
    </body>
</form>
<script src='start.js'></script>
</html>