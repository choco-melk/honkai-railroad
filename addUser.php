<?php
@include('DBConnector.php');
$username = $_POST['username'];
$password = $_POST['password'];

$checkUser = "SELECT * FROM account WHERE username='$username'";
if ($conn->query($checkUser)->num_rows > 0) {
    echo 'Username Already Exists!';
} else {
    $addUserQuery = "INSERT INTO account(username, password) 
            VALUES ('$username', '$password');";
    if ($conn->query($addUserQuery) == TRUE) {
        echo 'Successful Login';
        header('location: register.php');
    } else {
        echo 'Error: '.$conn->error;
    }
}

?>