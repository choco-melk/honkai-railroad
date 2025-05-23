<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Session</title>
    <link rel='stylesheet' href='stylesheets/login-register-start-stylesheet.css'>
</head>
<body> 
    <img id='bg-img' class='darken' width='100%' height='auto'  src="images/bg-images/hsr-opening-bg.gif">
    <form id='login-form' action='loginUser.php' method='POST'>
        <h4>ANGELVERSE</h4>
        <br><br>
        <input name='username' type='text' placeholder='Enter username' required><br>
        <input name='password' type='password' placeholder='Enter password' required><br>
        <label id='register'><a href = 'register.php'>Register now</a></label><br><br><br>
        <input name='login' id='start-game-button' type='submit' value="Start game">
    </form>
</body>
<script src='scripts/index-scripts.js'>

</script>
</html>