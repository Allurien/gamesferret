<?php
session_start();
$request = ($_POST['searchrequest']);

$output = [
    'success' => false
];

$query = "SELECT *
    FROM `combined_game_content` 
    WHERE `game_id` = '$request'";

$result = mysqli_query($conn, $query);

if(empty($result)) {
    $output['error'][] = mysqli_error($conn);
} else {
    if(mysqli_num_rows($result) > 0) {
        $output['success'] = true;
        $stringRelatedGames="";
        while($row = mysqli_fetch_assoc($result)) {
            $output['data'][] = $row;
        }
        
                $output['data'][0]['related_apps']=explode(",",$output['data'][0]['related_apps']);
                $counter=0;
                for($relatedGames=0;$relatedGames<count($output['data'][0]['related_apps']);$relatedGames++){
                  
                $queryGames = "SELECT *
                FROM `combined_game_content` 
                WHERE `game_id` = '{$output['data'][0]['related_apps'][$relatedGames]}'";
                $resultGames = mysqli_query($conn, $queryGames);

                if(empty($resultGames)) {
                $output['error'][] = mysqli_error($conn);
                } else {
                 
                if(mysqli_num_rows($resultGames) > 0) {
                    $output['success'] = true;
                    while($rowGames = mysqli_fetch_assoc($resultGames)) {
                        $counter++;
                        $output['data'][0]['related_game_apps'][]= $rowGames;
                      
                    } 
                } else {
                    $output['error'][] = 'no result';
                }
                }
                if($counter>=3){
                    break;
                }
                
            }
            
        
    } else {
        $output['error'][] = 'no result';
    }
}




?>