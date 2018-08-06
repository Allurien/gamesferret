<?php
session_start();
//browse rating: will send back `all_rating`=5 & 27pc
if(isset($_POST['all_rating'])) {
    $query = "SELECT `all_rating`, `genre`, `app_name`, `icon_url`, `game_id`, `price_value`, `description`, `platform`
                FROM `combined_game_content` 
                WHERE `all_rating`=5 
                ORDER BY RAND()
                LIMIT 27";
} //end if($all_rating)

//==============================  genre  =========================================
else if(isset($_POST['genre'])) {
    $query = "SELECT `genre`, `app_name`, `icon_url`, `game_id`, `all_rating`, `price_value`, `description`, `platform`
                FROM `combined_game_content`
                WHERE `genre` = '{$_POST['genre']}'
                ORDER BY RAND()
                LIMIT 27";
}//end if($genre)
//==============================  platform  =========================================
else if(isset($_POST['platform'])) {
    $query = "SELECT `genre`, `app_name`, `icon_url`, `game_id`, `all_rating`, `price_value`, `description`, `platform`
                FROM `combined_game_content`
                WHERE `platform` = '{$_POST['platform']}'
                ORDER BY RAND()
                LIMIT 27";
}//end if($platform)
//==============================  price_value  ==================================
else if(isset($_POST['price_value'])) {
    if($_POST['price_value']=='paid') {
        $query = "SELECT `price_value`, `genre`, `app_name`, `icon_url`, `game_id`, `all_rating`, `description`, `platform`
                FROM `combined_game_content`
                WHERE `price_value` <> 'free'
                ORDER BY RAND()
                LIMIT 27";
    } else {
        $query = "SELECT `price_value`, `genre`, `app_name`, `icon_url`, `game_id`, `all_rating`, `description` , `platform`
                FROM `combined_game_content`
                WHERE `price_value` = 'free'
                ORDER BY RAND()
                LIMIT 27";
    }
}//end if(price_value)


    $result = mysqli_query($conn, $query);


    if(empty($result)) {
        $output['error'][] = 'There was an error'; //mysqli_error($conn);
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
// } //end getBrowseData() 
