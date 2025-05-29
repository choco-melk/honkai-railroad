<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angelverse</title>
    <link rel='stylesheet' href='accounts.css'>
</head>
<body> 
    <div id='login'>
        <img id='bg-img' class='darken' width='100%' height='auto' src="assets/background/hsr-opening-bg.gif">
        <form id='login-form' action='loginUser.php' method='POST'>
            <h4>ANGELVERSE</h4>
            <br><br>
            <input name='username/email' type='text' placeholder='Enter username/email' required><br>
            <input name='password' type='password' placeholder='Enter password' required><br>
            <label id='login-button'>Register now</label><br><br><br>
            <input name='login' id='start-game-button' type='submit' value="Start game">
        </form>
    </div>
    <div id='register'>
        <img id='bg-img' class='darken' width='100%' height='auto' src="assets/background/hsr-opening-bg.gif">
        <form id='register-form' action='addUser.php' method='POST'>
            <h4>ANGELVERSE</h4>
            <br><br>
            <input name='username' type='text' placeholder='Enter username' required><br>
            <input name='email' type='text' placeholder='Enter email' required><br>
            <input name='password' type='password' placeholder='Enter password' required><br>
            <label id='register-button'>Login</label><br><br><br>
            <input name='register' type='submit' value="Register">
        </form>
    </div>
</body>
<script src='accounts.js'></script>
</html>