<?php
@include('DBConnector.php');
$_GET['mode'] = isset($_GET['mode']) ? $_GET['mode']: 'login'; 

$username = isset($_POST['username']) ? $_POST['username']: '';
$email = isset($_POST['email']) ? $_POST['email']: '';

if ($_GET['mode'] == 'register' && isset($_POST['register'])) {
    $password = isset($_POST['password']) ? $_POST['password']: '';
    $confirm_password = isset($_POST['confirm_password']) ? $_POST['confirm_password']: '';

    $checkUser = "SELECT * FROM account WHERE email='$email'";
    if ($conn->query($checkUser)->num_rows > 0) {
        header("location: ".htmlspecialchars($_SERVER["PHP_SELF"])."?mode=register&error_code=2");
    } else if (!str_ends_with($email, '@gmail.com')) {
        header("location: ".htmlspecialchars($_SERVER["PHP_SELF"])."?mode=register&error_code=1");
    } else if ($password != $confirm_password) {
        header("location: ".htmlspecialchars($_SERVER["PHP_SELF"])."?mode=register&error_code=3");
    }else {    
        $password = password_hash($password, PASSWORD_DEFAULT);
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
        }
    }
} else if ($_GET['mode'] == 'login' && isset($_POST['login'])) {        
    $password =  isset($_POST['password']) ? $_POST['password'] : '';
    $checkUser = "SELECT * FROM account WHERE (email='$email')";
    
    $user = $conn->query($checkUser);
    if ($user->num_rows > 0) {
        $row = $user->fetch_assoc();
        if (!password_verify($password, $row['password'])) {
            header("location: ".htmlspecialchars($_SERVER["PHP_SELF"])."?mode=login&error_code=1");
            exit();
        }
  
    
        session_start();
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
        header("location: ".htmlspecialchars($_SERVER["PHP_SELF"])."?mode=login&error_code=1");
    } 
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angelverse</title>
    <link rel='stylesheet' href='accounts.css'>
</head>
<body style='background-color: white;'> 
    <img id='bg-img' class='darken' width='100%' height='auto' src="assets/background/hsr-opening-bg.gif">
    <?php if ($_GET['mode'] == 'login'): ?>
    <div id='login'>
        <form id='login-form' method='POST' action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>?mode=login">
            <h4>ANGELVERSE</h4>
            <br><br>
            <input name='email' type='text' placeholder='Enter Email' value="<?php echo $email?>" required><br>
            <input name='password' type='password' placeholder='Enter password' required><br>
            <?php if(isset($_GET['error_code']) && $_GET['error_code'] == 1): ?>
                <label style='color: red; font-size: 0.8em'>Username or Password is incorrect</label><br>
            <?php endif; ?>
            <label id='register-button'><a href="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>?mode=register">Register now</a></label><br><br><br>
            <input name='login' id='start-game-button' type='submit' value="Start game">
        </form>
    </div>
    <?php elseif ($_GET['mode'] == 'register'):?>
    <div id='register'>
        <form id='register-form' action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>?mode=register" method='POST'>
            <h4>ANGELVERSE</h4>
            <br><br>
            <input name='username' type='text' placeholder='Enter username'  value="<?php echo $username?>" required><br>
            <input name='email' type='text' placeholder='Enter email'  value="<?php echo $email?>" required><br>
            <?php if(isset($_GET['error_code']) && $_GET['error_code'] == 1): ?>
                <label style='color: red; font-size: 0.8em'>Email must be in Gmail (ends with @gmail.con)</label><br>
            <?php endif; ?>
            <?php if(isset($_GET['error_code']) && $_GET['error_code'] == 2): ?>
                <label style='color: red; font-size: 0.8em'>Account is already taken.</label><br>
            <?php endif; ?>
            <input name='password' type='password' placeholder='Enter password' required><br>
            <input name='confirm_password' type='password' placeholder='Confirm password' required><br>
            <?php if(isset($_GET['error_code']) && $_GET['error_code'] == 3): ?>
                <label style='color: red; font-size: 0.8em'>Password doesn't match</label><br>
            <?php endif; ?>
            <label id='register-button'><a href="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>?mode=login">Login</a></label><br><br><br>
            <input name='register' type='submit' value="Register">
        </form>
    </div>
    <?php endif;?>
</body>
</html>