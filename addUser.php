<?php
@include('DBConnector.php');    
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

if (!str_ends_with($usernameOrEmail, '@gmail.com')) {
    echo "Only Gmail addresses are allowed!";
    exit();
}

$checkUser = "SELECT * FROM account WHERE username='$username' or email='$email'";
if ($conn->query($checkUser)->num_rows > 0) {
    echo 'Account Already Exists!';
} else {    
    $addUserQuery = "INSERT INTO account(email, password, username, experience, OwnedChars, currTeam, fiveStarPity, fourStarPity, stellarJades, usericon) 
            VALUES ('$email', '$password', '$username', 0, '1, -1', '0, 0, 0, 0', 0, 0, 16000, 1);";
    if ($conn->query($addUserQuery) == TRUE) {
        session_start();
        echo 'Successful Registered';
        $_SESSION['username'] = $username;
        $_SESSION['experience'] = 0;
        $_SESSION['ownedChars'] = '0, -1';
        $_SESSION['currTeam'] = '0, 0, 0, 0';
        $_SESSION['fiveStarPity'] = 0;
        $_SESSION['fourStarPity'] = 0;
        $_SESSION['stellarJades'] = 16000;
        $_SESSION['usericon'] = 1;

        header('location: start.php');
    } else {
        echo 'Error: '.$conn->error;
    }
}

?>