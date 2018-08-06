<?php
session_start();
print_r($_POST);


$user_id = $_POST['user_id'];
$game_id = $_POST['game_id'];

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$query = "DELETE FROM `user_game` 
            WHERE `user_id`='$user_id'
            AND `game_id`='$game_id'";

checkDelete($conn, $query);

function checkDelete($conn, $query) {
    $result = mysqli_query($conn, $query);
    global $output;
    if(empty($result)) {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    } else {
        $output['success'] = true;
        //echo " a new record insert successfully"; do not output this line. poo on icecream
    } 
}


?>