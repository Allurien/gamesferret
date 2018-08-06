<?php
session_start();

print_r($_SESSION);  //---> [userID] => 3  [username] => sa  [valid] => 1
unset($_SESSION['userID']);
unset($_SESSION['username']);
unset($_SESSION['sessionValidUser']);
session_destroy();
session_commit();

$output = [
    'success' => true
];
?>