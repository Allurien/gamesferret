<?php
session_start();

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$username = trim($_POST['username']);
$email = trim($_POST['email']);
$password = trim($_POST['password']);

$output['error'] = [
    'username'=> '',
    'email'=>'',
    'password'=>''
];


// if(strlen($username) < 4) {
//     $output['error']['username'] = 'username needs to longer';
// }
if($username == '') {
    $output['error']['username'] = 'username can not be empty';
}
if(username_exist($username)) {
    $output['error']['username'] = 'username already exist, pick another';
}

function username_exist($username){
    global $conn;
    $query = "SELECT `username` FROM `users` WHERE `username` = '$username'";
    $result = mysqli_query($conn, $query);
    confirmQuery($result);
    if(mysqli_num_rows($result) > 0) {
        return true;
    } else {
        return false;
    }
}

function confirmQuery($result) {
    global $conn;
    if(!$result ) {      
          die("QUERY FAILED ." . mysqli_error($conn));
      }
}

if($email ==''){
    $output['error']['email'] = 'Email cannot be empty';
}
 if(email_exists($email)){
    $output['error']['email'] = 'Email already exists';
}

function email_exists($email){
    global $conn;
    $query = "SELECT `email` FROM `users` WHERE `email` = '$email'";
    $result = mysqli_query($conn, $query);
    confirmQuery($result);
    if(mysqli_num_rows($result) > 0) {
        return true;
    } else {
        return false;
    }
}


if($password == '') {
    $output['error']['password'] = 'Password cannot be empty';
}

foreach ($output['error'] as $key => $value) {    
    if(empty($value)){
        unset($output['error'][$key]);
    }
} // foreach

if(empty($output['error'])){
    signup_user($username, $email, $password);
} else {
    $output['error'][] = 'please input valid information to sign up';
}

function signup_user($username, $email, $password) {
    global $conn;
    $username = mysqli_real_escape_string($conn, $username);
    $email = mysqli_real_escape_string($conn, $email);

    $password = mysqli_real_escape_string($conn, $password);
    $hashFormat = "$2y$10$";
    $salt = "whyyoulookatmypassword";
    $hash_and_salt = $hashFormat . $salt;
    $password = crypt($password, $hash_and_salt);
    $query = "INSERT INTO 
                    `users`(`username`, `email`, `password`) 
            VALUES 
                    ('$username', '$email', '$password')";
    checkInsert($conn, $query);

    getuserDB($username, $email, $conn);
}
function checkInsert($conn, $query) {
    $result = mysqli_query($conn, $query);
    global $output;
    if ($result) {
        $output['success'] = true;
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}

function getuserDB($username, $email, $conn) {
    global $output;

    $query = "SELECT `email`, `id`, `username`
                FROM `users` 
                WHERE `email`='{$email}' AND `username`='{$username}'";
    $result = null;
    $output = [
            'success'=> false
            ];
    $result = mysqli_query($conn, $query);

    if($result) {
    if(mysqli_num_rows($result) > 0) {
        $userData = mysqli_fetch_assoc($result);

    //print_r($userData);
        $output['user'] = $userData;
        $_SESSION['userID'] = $userData['id'];
    // $_SESSION['username'] = $userData['username'];

        $output['success'] = true;
        $_SESSION['sessionValidUser'] = true;
    //print_r($_SESSION);  

    } else {
    
        $output['error'] = 'invalide username or password';
        }
    } 

}



?>