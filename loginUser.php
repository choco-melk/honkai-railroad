<?php
@include('DBConnector.php');
$username = $_POST['username'];
$password = $_POST['password'];

$checkUser = "SELECT * FROM account WHERE username='$username' AND password='$password';";
$user = $conn->query($checkUser);
if ($user->num_rows > 0) {
    session_start();
    $row = $user->fetch_assoc();
    header("location: start.html");
    $_SESSION['username'] = $row['username'];
    header('location: start.php');
} else {
    echo "User Doesn't Exist!";
}

?>