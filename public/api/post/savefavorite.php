<?php
session_start();
print_r($_POST);
// [user_id] => 1
// [favorite_list] => ["com.gameloft.android.ANMP.GloftINHM",           
                    //"techmasterplus.classicsudokupro",//"techmasterplus.sudokumasteradfree"]
//$favorite_list = json_decode($_POST['favorite_list']);
$user_id = $_POST['user_id'];
$game_id = $_POST['game_id'];
// print_r(json_decode($favorite_list));
// ["com.gameloft.android.ANMP.GloftINHM","techmasterplus.classicsudokupro","techmasterplus.sudokumasteradfree"]

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//foreach($favorite_list as $game_id) {
    $query = "INSERT INTO 
                `user_game`(`user_id`, `game_id`) 
             VALUES 
                ('$user_id', '$game_id')   
             ";

    checkInsert($conn, $query);
//}

function checkInsert($conn, $query) {
    $result = mysqli_query($conn, $query);
    global $output;
    if(empty($result)) {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    } else {
        $output['success'] = true;
        //echo " a new record insert successfully";
    } 
}


?>