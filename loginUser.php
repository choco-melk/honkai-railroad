<?php
@include('DBConnector.php');
$username = $_POST['username/email'];
$email = $_POST['username/email'];
$password = $_POST['password'];

$checkUser = "SELECT * FROM account WHERE username='$username' OR email='$email' AND password='$password';";
$user = $conn->query($checkUser);
if ($user->num_rows > 0) {
    session_start();
    $row = $user->fetch_assoc();
    $_SESSION['username'] = $row['username'];
    $_SESSION['experience'] = $row['experience'];
    $_SESSION['ownedChars'] = $row['ownedChars'];
    $_SESSION['currTeam'] = $row['currTeam'];
    $_SESSION['fiveStarPity'] = $row['fiveStarPity'];
    $_SESSION['fourStarPity'] = $row['fourStarPity'];
    $_SESSION['stellarJades'] = $row['stellarJades'];
    $_SESSION['usericon'] = $row['usericon'];

    header('location: start.php');
} else {
    echo "User Doesn't Exist!";
}

?>