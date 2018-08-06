<?php
session_start();
$genres = array('Action', 'Puzzle', 'Adventure', 'Simulation', 'Strategy', 'Role Playing', 'Racing', 'Arcade', 'Trivia', 'Board');

foreach($genres as $genre) {
    $query = "SELECT gac.id , gac.genre, gac.app_name, gac.icon_url, gac.game_id, gac.content_rating, gac.price_value, gac.description, gac.all_rating
                FROM (
                    SELECT MIN(gac.id) AS id
                    FROM (
                        SELECT CEIL(RAND() * (MAX(id) - MIN(id)) + MIN(id)) AS id
                        FROM `combined_game_content` 
                        WHERE genre = '$genre'
                        GROUP BY genre
                    ) AS gac_random
                    JOIN combined_game_content AS gac ON gac_random.id <= gac.id
                    WHERE gac.genre = '$genre'
                    GROUP BY gac.genre
                    LIMIT 1
                ) AS gac_random
                JOIN combined_game_content AS gac ON gac_random.id = gac.id";
    getDB($conn, $query);
}



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