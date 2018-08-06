<?php
session_start();

//print_r($_POST);

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    
    $email = $_POST['email'];
    //print($email);
   // $password = sha1($_POST['password']);
   $password = $_POST['password'];

   $email = mysqli_real_escape_string($conn, $email);   
   $password = mysqli_real_escape_string($conn, $password);
   $hashFormat = "$2y$10$";
   $salt = "whyyoulookatmypassword";
   $hash_and_salt = $hashFormat . $salt;
   $password = crypt($password, $hash_and_salt);

    $query = "SELECT `email`, `id`, `username`
              FROM `users` 
              WHERE `email`='{$email}' AND `password`='{$password}'";
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
            //print_r($_SESSION);  //[userID] => 1  [valid] => 1
     
        } else {
           
            $output['error'] = 'Invalid username and/or password';
        }
    } else {
        $output['error'] = 'you are not regeistered';
    }

//will send back as json string obj as 
//{  "success": true,
//   "user": {"email":"bb",
        //   "password":"$2y$10$whyyoulookatmypassworOe89WBzFc6cXgwC1ZnpaKlAmY8j0LYjK",
        //    "id":"1",
        //    "username":"bb"}
        // }



?>