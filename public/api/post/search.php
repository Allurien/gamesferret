<?php
session_start();
$request = $_POST['search_term'];
if(!$request ) {
    $output['errors'][] = 'no search information provided';
}

if(empty($output['error'])) {
    $query = ("SELECT * ,
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`,
    `platform`
    ) AGAINST('*$request*')
    FROM
    `combined_game_content`
    WHERE
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`,
    `platform`
    ) AGAINST('*$request*')
    ORDER BY
    MATCH(
    `app_name`,
    `genre`,
    `genres`,
    `publisher_name`,
    `description`,
    `platform`
    ) AGAINST('*$request*') DESC
    LIMIT 27");

    $result = mysqli_query($conn, $query);

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
}

?>
