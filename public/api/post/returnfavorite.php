<?php
session_start();
$userID = $_POST['user_id'];

$query = "SELECT `app_name`, `icon_url`, cgc.`game_id`, `content_rating`, `price_value`, `description`, `all_rating` 
    FROM `user_game` AS `ug` 
    JOIN `combined_game_content` AS `cgc` 
    JOIN `users` AS `u`
    ON ug.game_id = cgc.game_id
    WHERE u.id = ug.user_id
AND u.id = '{$userID}'";

getDB($conn, $query);

function getDB($conn, $query) {
    $result = mysqli_query($conn, $query);
    global $output;
    if(empty($result)) {
        $output['error'][] = mysqli_error($conn);
    } else {
        if(mysqli_num_rows($result) > 0) {
            $output['success'] = true;
            while($row = mysqli_fetch_assoc($result)) {
                $output['data'][] = $row;
             }
        } else {
            $output['error'][] = 'no result';
        }
    }
} //end getDB() 

?>